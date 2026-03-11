import { useState, useEffect, useCallback } from 'react';

const GITHUB_USERNAME = 'shivanshm1726';
const LEETCODE_USERNAME = '9SKnOk4KBP';

type ContributionDay = {
    date: string;
    count: number;
    level: number; // 0-4
};

type Tab = 'github' | 'leetcode';

// ── GitHub ──────────────────────────────────────────────────────
async function fetchGitHubContributions(username: string): Promise<{ days: ContributionDay[]; total: number }> {
    try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        const data = await res.json();

        const days: ContributionDay[] = [];
        let total = 0;

        if (data.contributions) {
            for (const day of data.contributions) {
                const level =
                    day.count === 0 ? 0 :
                    day.count <= 3 ? 1 :
                    day.count <= 6 ? 2 :
                    day.count <= 9 ? 3 : 4;
                days.push({ date: day.date, count: day.count, level });
                total += day.count;
            }
        }

        return { days, total };
    } catch {
        return { days: [], total: 0 };
    }
}

// ── LeetCode ────────────────────────────────────────────────────
async function fetchLeetCodeSubmissions(username: string): Promise<{ days: ContributionDay[]; totalSolved: number }> {
    try {
        // Fetch calendar
        const calendarQuery = `
            query userProfileCalendar($username: String!, $year: Int) {
                matchedUser(username: $username) {
                    userCalendar(year: $year) {
                        submissionCalendar
                    }
                    submitStatsGlobal {
                        acSubmissionNum { count }
                    }
                }
            }
        `;

        const res = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: calendarQuery, variables: { username } }),
        });

        const json = await res.json();
        const calendar = JSON.parse(json.data.matchedUser.userCalendar.submissionCalendar);
        const totalSolved: number = json.data.matchedUser.submitStatsGlobal.acSubmissionNum[0]?.count ?? 0;

        const days: ContributionDay[] = [];
        const now = new Date();
        const oneYearAgo = new Date(now);
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        for (let d = new Date(oneYearAgo); d <= now; d.setDate(d.getDate() + 1)) {
            const ts = Math.floor(new Date(d.toISOString().split('T')[0]).getTime() / 1000).toString();
            const count: number = calendar[ts] || 0;
            const level =
                count === 0 ? 0 :
                count <= 2 ? 1 :
                count <= 5 ? 2 :
                count <= 8 ? 3 : 4;
            days.push({ date: d.toISOString().split('T')[0], count, level });
        }

        return { days, totalSolved };
    } catch {
        return { days: [], totalSolved: -1 };
    }
}

// ── Color helpers ───────────────────────────────────────────────
function getGitHubColor(level: number) {
    switch (level) {
        case 0: return 'bg-[#1b2028]';
        case 1: return 'bg-[#0e4429]';
        case 2: return 'bg-[#006d32]';
        case 3: return 'bg-[#26a641]';
        case 4: return 'bg-[#39d353]';
        default: return 'bg-[#1b2028]';
    }
}

function getLeetCodeColor(level: number) {
    switch (level) {
        case 0: return 'bg-[#1e1e1e]';
        case 1: return 'bg-[#5c3d00]';
        case 2: return 'bg-[#8a5c00]';
        case 3: return 'bg-[#c98b00]';
        case 4: return 'bg-[#ffa116]';
        default: return 'bg-[#1e1e1e]';
    }
}

// ── Month labels ────────────────────────────────────────────────
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function getMonthLabels(days: ContributionDay[]) {
    if (days.length === 0) return [];
    const labels: { label: string; weekIdx: number }[] = [];
    let lastMonth = -1;

    // Walk week-by-week (every 7 days starting from index 0)
    const firstDayOfWeek = new Date(days[0].date).getDay();
    let weekIdx = 0;

    for (let i = 0; i < days.length; i++) {
        const d = new Date(days[i].date);
        const m = d.getMonth();
        // New week starts on Sunday
        if (i > 0 && d.getDay() === 0) weekIdx++;
        if (m !== lastMonth) {
            labels.push({ label: MONTHS[m], weekIdx: weekIdx + (firstDayOfWeek > 0 ? 1 : 0) });
            lastMonth = m;
        }
    }
    return labels;
}

// ── HeatmapGrid ─────────────────────────────────────────────────
function HeatmapGrid({ days, colorFn }: { days: ContributionDay[]; colorFn: (l: number) => string }) {
    const firstDate = new Date(days[0]?.date ?? new Date());
    const padDays = firstDate.getDay(); // 0=Sun
    const padded = [
        ...Array.from({ length: padDays }, () => ({ date: '', count: 0, level: -1 })),
        ...days,
    ];

    const monthLabels = getMonthLabels(days);
    const totalCols = Math.ceil(padded.length / 7);
    const cellSize = 14;
    const gap = 4;
    const step = cellSize + gap;

    return (
        <div className="overflow-x-auto pb-2">
            <div style={{ minWidth: totalCols * step + 20 }}>
                {/* Month labels */}
                <div className="relative h-6 mb-1">
                    {monthLabels.map((m, i) => (
                        <span
                            key={i}
                            className="absolute text-[13px] text-[#555] font-mono"
                            style={{ left: m.weekIdx * step }}
                        >
                            {m.label}
                        </span>
                    ))}
                </div>

                {/* Grid — circles */}
                <div
                    className="grid grid-rows-7 grid-flow-col"
                    style={{ gap: `${gap}px` }}
                >
                    {padded.map((d, i) => (
                        <div
                            key={i}
                            className={`rounded-full ${d.level < 0 ? 'bg-transparent' : colorFn(d.level)} transition-all hover:ring-2 hover:ring-white/30`}
                            style={{ width: cellSize, height: cellSize }}
                            title={d.date ? `${d.date}: ${d.count}` : ''}
                        />
                    ))}
                </div>

                {/* Legend */}
                <div className="flex justify-end items-center gap-2 mt-5 text-[13px] text-[#555] font-mono">
                    <span>Less</span>
                    {[0, 1, 2, 3, 4].map(l => (
                        <div
                            key={l}
                            className={`rounded-full ${colorFn(l)}`}
                            style={{ width: cellSize, height: cellSize }}
                        />
                    ))}
                    <span>More</span>
                </div>
            </div>
        </div>
    );
}

// ── Main Component ──────────────────────────────────────────────
export default function Contributions() {
    const [tab, setTab] = useState<Tab>('github');
    const [ghData, setGhData] = useState<{ days: ContributionDay[]; total: number } | null>(null);
    const [lcData, setLcData] = useState<{ days: ContributionDay[]; totalSolved: number } | null>(null);
    const [loading, setLoading] = useState(true);

    const loadData = useCallback(async () => {
        setLoading(true);
        const [gh, lc] = await Promise.all([
            fetchGitHubContributions(GITHUB_USERNAME),
            fetchLeetCodeSubmissions(LEETCODE_USERNAME),
        ]);
        setGhData(gh);
        setLcData(lc);
        setLoading(false);
    }, []);

    useEffect(() => { loadData(); }, [loadData]);

    // Decide what to render
    const isGithub = tab === 'github';
    const colorFn = isGithub ? getGitHubColor : getLeetCodeColor;
    const days = isGithub ? ghData?.days : lcData?.days;
    const hasDays = days && days.length > 0;
    const lcFallback = (lcData?.totalSolved ?? 0) < 0;

    // Section heading and stat
    const sectionTitle = isGithub ? 'github contributions' : 'leetcode submissions';
    const statNumber = isGithub ? ghData?.total : lcData?.totalSolved;
    const statLabel = isGithub ? 'total commits' : 'total solved';

    return (
        <section className="py-8">
            {/* Section title */}
            <div className="flex items-center gap-4 mb-5">
                <div className="h-px bg-[#222] w-8"></div>
                <h2 className="text-xs font-mono tracking-widest text-[#555] lowercase">{sectionTitle}</h2>
            </div>

            {/* Stats row + tab switcher */}
            <div className="flex items-end justify-between mb-5">
                <div className="flex items-baseline gap-3">
                    {!loading && statNumber != null && statNumber >= 0 ? (
                        <>
                            <span className="text-5xl text-white font-serif tracking-tighter leading-none">{statNumber.toLocaleString()}</span>
                            <span className="text-[#555] text-sm font-mono">{statLabel}</span>
                        </>
                    ) : loading ? (
                        <span className="text-[#555] text-sm font-mono">Loading…</span>
                    ) : null}
                </div>

                <div className="flex items-center gap-0 rounded-lg overflow-hidden border border-[#333]">
                    <button
                        onClick={() => setTab('github')}
                        className={`px-5 py-2 text-xs font-mono tracking-widest uppercase transition-colors ${
                            isGithub
                                ? 'bg-[#1a1a1a] text-[#4f8fff]'
                                : 'bg-transparent text-[#555] hover:text-white'
                        }`}
                    >
                        Github
                    </button>
                    <button
                        onClick={() => setTab('leetcode')}
                        className={`px-5 py-2 text-xs font-mono tracking-widest uppercase transition-colors ${
                            !isGithub
                                ? 'bg-[#1a1a1a] text-[#ffa116]'
                                : 'bg-transparent text-[#555] hover:text-white'
                        }`}
                    >
                        Leetcode
                    </button>
                </div>
            </div>

            {/* Heatmap */}
            {loading ? (
                <div className="h-36 flex items-center justify-center text-[#555] text-sm font-mono">Fetching data…</div>
            ) : !isGithub && lcFallback ? (
                <div className="overflow-x-auto pb-2">
                    <img
                        src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=JetBrains%20Mono&ext=heatmap&border=0&radius=8`}
                        alt="LeetCode Heatmap"
                        className="w-full rounded-xl"
                    />
                </div>
            ) : hasDays ? (
                <HeatmapGrid days={days} colorFn={colorFn} />
            ) : (
                <div className="h-36 flex items-center justify-center text-[#555] text-sm font-mono">No data available</div>
            )}
        </section>
    );
}
