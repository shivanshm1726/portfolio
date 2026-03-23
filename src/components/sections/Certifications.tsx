import { ExternalLink, Award } from 'lucide-react';

export default function Certifications() {
    const certifications = [
        {
            title: 'Oracle Cloud Infrastructure and Fundamentals',
            issuer: 'ORACLE',
            description: 'Gained comprehensive knowledge of Oracle Cloud Infrastructure core services, architecture, and security, demonstrating proficiency in cloud fundamentals.',
            link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=B102F8AFE162D6C1551C27F229E5237E8A24E7F85BDA0BB74F19F4603053F9AF',
            icon: 'bg-red-500/10 text-red-500 border-red-500/20'
        },
        {
            title: 'DSA in Java',
            issuer: 'Cipher Schools',
            description: 'Mastered fundamental and advanced Data Structures and Algorithms using Java, focusing on problem-solving, optimization, and logic building.',
            link: 'https://www.cipherschools.com/certificate/preview?id=687bf9e606ffe76122762726',
            icon: 'bg-blue-500/10 text-blue-500 border-blue-500/20'
        },
        {
            title: 'Google Cloud Big Data and Machine Learning Fundamentals',
            issuer: 'Google & Coursera',
            description: 'Explored big data processing capabilities and machine learning on GCP, learning to build data pipelines and deploy machine learning models.',
            link: 'https://coursera.org/share/b6087281e7fd3bef6eb20f1a72051440',
            icon: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
        }
    ];

    return (
        <section id="certifications" className="py-12">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-serif text-white tracking-tight">Certifications</h2>
                <span className="text-[#333] font-mono text-xl">#</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, i) => (
                    <div key={i} className="card-bg p-6 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 shrink-0 rounded-lg border flex items-center justify-center ${cert.icon}`}>
                                    <Award className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-[#888] text-sm mt-1">{cert.issuer}</p>
                                </div>
                            </div>
                            <div className="flex gap-3 ml-4 shrink-0 sm:mt-1">
                                <a href={cert.link} target="_blank" rel="noreferrer" className="text-[#555] hover:text-white transition-colors">
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <p className="text-[#888] text-sm leading-relaxed">
                            {cert.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
