import { Moon } from 'lucide-react';

export default function Navbar() {
    const navLinks = ['home', 'projects', 'contact'];

    return (
        <nav className="w-full py-4">
            <div className="flex justify-between items-center">
                <div className="flex gap-6">
                    {navLinks.map((link) => (
                        <a key={link} href={`#${link}`} className="nav-link">
                            {link}
                        </a>
                    ))}
                </div>

                <button className="w-10 h-10 rounded-full bg-[#121212] subtle-border flex items-center justify-center text-[#888888] hover:text-[#f0f0f0] transition-colors">
                    <Moon className="w-4 h-4" />
                </button>
            </div>
        </nav>
    );
}
