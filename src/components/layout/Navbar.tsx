import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const navLinks = ['home', 'projects', 'contact'];
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (isDark) {
            document.documentElement.classList.add('light-mode');
        } else {
            document.documentElement.classList.remove('light-mode');
        }
    };

    return (
        <nav className="w-full py-4 relative z-50">
            <div className="flex justify-between items-center">
                <div className="flex gap-6">
                    {navLinks.map((link) => (
                        <a key={link} href={`#${link}`} className="nav-link">
                            {link}
                        </a>
                    ))}
                </div>

                <button 
                    onClick={toggleTheme}
                    className="w-10 h-10 rounded-full bg-[#121212] subtle-border flex items-center justify-center text-[#888888] hover:text-[#f0f0f0] hover:scale-105 transition-all cursor-pointer z-50 hover:shadow-lg"
                >
                    {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </button>
            </div>
        </nav>
    );
}
