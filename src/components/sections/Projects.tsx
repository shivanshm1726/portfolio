import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: 'iRetro',
            description: 'A dedicated PWA retro-styled audio player. Fully offline capable with clean architecture.',
            tech: ['Next.js', 'React', 'PWA'],
            github: 'https://github.com/shivanshm1726/iRetro',
            link: 'https://iretropod.netlify.app/',
            icon: 'bg-orange-500/10 text-orange-500 border-orange-500/20'
        },
        {
            title: 'Expense Tracker',
            description: 'A comprehensive Java-based application for tracking and managing personal financial expenditures.',
            tech: ['Java', 'OOP', 'Desktop app'],
            github: 'https://github.com/shivanshm1726/expense-tracker',
            link: 'https://track-thecashflow.vercel.app/dashboard',
            icon: 'bg-green-500/10 text-green-500 border-green-500/20'
        },
        {
            title: 'TheFleetFly',
            description: 'A robust fleet management solution designed to handle and orchestrate vehicle tracking logistics.',
            tech: ['React', 'Node.js', 'Logistics'],
            github: 'https://github.com/shivanshm1726/thefleetfly',
            link: '#',
            icon: 'bg-blue-500/10 text-blue-500 border-blue-500/20'
        }
    ];

    return (
        <section id="projects" className="py-12">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-serif text-white tracking-tight">Projects</h2>
                <span className="text-[#333] font-mono text-xl">#</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {projects.map((project, i) => (
                    <div key={i} className="card-bg p-6 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${project.icon}`}>
                                    <span className="font-mono font-bold text-sm tracking-tighter">
                                        {project.title.substring(0, 2).toUpperCase()}
                                    </span>
                                </div>
                                <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                            <div className="flex gap-3">
                                <a href={project.github} target="_blank" rel="noreferrer" className="text-[#555] hover:text-white transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                {project.link !== '#' && (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="text-[#555] hover:text-white transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="text-[#888] text-sm leading-relaxed mb-6">
                            {project.description}
                        </p>

                        <div className="flex gap-2 flex-wrap mt-auto">
                            {project.tech.map(tech => (
                                <span key={tech} className="px-2 py-1 rounded bg-[#1a1a1a] text-[#555] font-mono text-[10px] tracking-widest uppercase">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
