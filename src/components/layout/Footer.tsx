import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-12 py-12 border-t border-[#222]">
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex items-center gap-8 text-[#888]">
                    <a href="https://x.com/shivahahansh" target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-pointer"><Twitter className="w-5 h-5" /></a>
                    <a href="https://www.linkedin.com/in/shivansh7/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-pointer"><Linkedin className="w-5 h-5" /></a>
                    <a href="https://github.com/shivanshm1726" target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-pointer"><Github className="w-5 h-5" /></a>
                    
                    {/* Placeholder Hashnode/Medium-like Icon */}
                    <a href="#" className="hover:text-white transition-colors cursor-pointer">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <circle cx="5" cy="12" r="3" />
                            <circle cx="12" cy="12" r="3" />
                            <circle cx="19" cy="12" r="3" />
                        </svg>
                    </a>
                    
                    <a href="#" className="hover:text-white transition-colors cursor-pointer"><Instagram className="w-5 h-5" /></a>
                    <a href="mailto:shivanshm665@gmail.com" className="hover:text-white transition-colors cursor-pointer"><Mail className="w-5 h-5" /></a>
                </div>

                <div className="text-center font-sans tracking-tight">
                    <p className="text-[#888] text-sm md:text-base font-medium">Design & Developed by <span className="text-white font-bold">Shivansh Mishra</span></p>
                    <p className="text-[#555] text-xs md:text-sm mt-1">© {currentYear}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
