export default function Education() {
    return (
        <section className="py-12">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-serif text-white tracking-tight">Education</h2>
                <span className="text-[#333] font-mono text-xl">#</span>
            </div>

            <div className="space-y-10">
                {/* University */}
                <div className="card-bg p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h3 className="text-white font-semibold text-lg">Lovely Professional University</h3>
                            <p className="text-[#888] font-mono text-sm mt-1">B.Tech in Computer Science and Engineering (AI)</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#333] text-[#888] font-mono text-xs tracking-wider whitespace-nowrap">
                            2023 - 2027
                        </span>
                    </div>
                </div>

                {/* School */}
                <div className="px-6">
                    <h3 className="text-white font-semibold text-lg mb-3">Rani Laxmi Bai Memorial School</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-[#888] font-mono text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#555]"></span>
                            Higher Secondary (12th): 73%
                        </li>
                        <li className="flex items-center gap-2 text-[#888] font-mono text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#555]"></span>
                            Secondary School (10th): 93%
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
