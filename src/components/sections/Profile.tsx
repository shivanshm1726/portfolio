import { Github, Linkedin, Mail, Twitter, FileText } from 'lucide-react';

export default function Profile() {
    return (
        <section id="home" className="py-6">
            <div className="flex items-end gap-6 mb-8">
                <div className="w-32 h-32 rounded-3xl overflow-hidden bg-[#1a1a1a] subtle-border flex items-center justify-center">
                    {/* Fallback avatar if no image is present */}
                    <span className="text-4xl">🧑‍💻</span>
                </div>

                <div className="pb-2">
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl font-mono text-white font-bold tracking-tight">Shivansh Mishra</h1>
                        <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm-1.81 14.71L6.64 13.2a.996.996 0 111.41-1.41l2.84 2.83 6.64-6.64a.996.996 0 111.41 1.41l-7.35 7.35a.996.996 0 01-1.41 0z" />
                        </svg>
                        <span className="text-xs font-mono text-[#555] ml-2 tracking-widest">• LUCKNOW, IND</span>
                    </div>
                    <p className="text-sm font-mono text-[#888] tracking-widest uppercase">Full Stack Developer</p>
                </div>
            </div>

            <div className="mb-8">
                <p className="text-[#a0a0a0] font-mono text-sm leading-loose max-w-2xl">
                    I build <span className="text-blue-400 bg-blue-500/10 px-2 py-1 rounded">production-ready web applications</span> from scratch, working across frontend and backend, with a strong focus on clean architecture, performance, and user experience.
                </p>
            </div>

            <div className="flex items-center gap-6 mb-10">
                <a href="https://x.com/shivahahansh" target="_blank" rel="noreferrer" className="text-[#888] hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/in/shivansh7/" target="_blank" rel="noreferrer" className="text-[#888] hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="https://github.com/shivanshm1726" target="_blank" rel="noreferrer" className="text-[#888] hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                <a href="mailto:shivanshm665@gmail.com" className="text-[#888] hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>

            <div id="contact" className="flex gap-4">
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#e0e0e0] transition-colors">
                    <FileText className="w-4 h-4" /> View Resume
                </a>
                <a href="mailto:shivanshm665@gmail.com" className="flex items-center gap-2 bg-transparent text-white subtle-border px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/5 transition-colors">
                    <Mail className="w-4 h-4" /> Contact Me
                </a>
            </div>
        </section>
    );
}
