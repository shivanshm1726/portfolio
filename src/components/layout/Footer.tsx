
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20 pt-8 border-t border-[#222]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#555] font-mono text-xs">
                <p>© {currentYear} Shivansh Mishra</p>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/shivanshm1726" target="_blank" rel="noreferrer" className="hover:text-white transition-colors uppercase tracking-widest">Github</a>
                    <a href="https://www.linkedin.com/in/shivansh7/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors uppercase tracking-widest">Linkedin</a>
                    <a href="https://x.com/shivahahansh" target="_blank" rel="noreferrer" className="hover:text-white transition-colors uppercase tracking-widest">Twitter</a>
                    <a href="mailto:shivanshm665@gmail.com" className="hover:text-white transition-colors uppercase tracking-widest">Email</a>
                </div>
            </div>
        </footer>
    );
}
