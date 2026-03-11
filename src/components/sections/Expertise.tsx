const skills = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
];

function SkillPill({ name, icon }: { name: string; icon: string }) {
    return (
        <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#1a1a1a] border border-[#222] text-sm font-mono text-[#ccc] whitespace-nowrap flex-shrink-0 hover:border-[#444] hover:bg-[#222] transition-colors">
            <img src={icon} alt={name} className="w-5 h-5" />
            {name}
        </div>
    );
}

export default function Expertise() {
    // Double the array for seamless infinite scroll
    const doubled = [...skills, ...skills];

    return (
        <section className="py-8">
            <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-[#222] w-8"></div>
                <h2 className="text-xs font-mono tracking-widest text-[#555] uppercase">Technical Expertise</h2>
            </div>

            {/* Marquee container */}
            <div className="relative overflow-hidden">
                {/* Gradient fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

                <div className="flex gap-3 animate-marquee hover:[animation-play-state:paused]">
                    {doubled.map((skill, i) => (
                        <SkillPill key={`${skill.name}-${i}`} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
}
