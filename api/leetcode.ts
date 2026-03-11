import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const username = (req.query.username as string) || '9SKnOk4KBP';

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=600');

    try {
        const query = `
            query userProfileCalendar($username: String!, $year: Int) {
                matchedUser(username: $username) {
                    userCalendar(year: $year) {
                        submissionCalendar
                    }
                    submitStatsGlobal {
                        acSubmissionNum {
                            difficulty
                            count
                        }
                    }
                }
            }
        `;

        const response = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Referer': 'https://leetcode.com',
            },
            body: JSON.stringify({
                query,
                variables: { username },
            }),
        });

        const data = await response.json();

        if (!data.data?.matchedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        const user = data.data.matchedUser;
        const submissionCalendar = user.userCalendar.submissionCalendar;
        const totalSolved = user.submitStatsGlobal.acSubmissionNum.find(
            (s: { difficulty: string; count: number }) => s.difficulty === 'All'
        )?.count ?? 0;

        return res.status(200).json({
            submissionCalendar,
            totalSolved,
        });
    } catch (error) {
        console.error('LeetCode API error:', error);
        return res.status(500).json({ error: 'Failed to fetch LeetCode data' });
    }
}
