import { Mail } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-12 mt-8">
            <div className="card-bg p-8 md:p-16 flex flex-col items-center justify-center text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Get In Touch</h2>
                
                <div className="space-y-1 mb-10">
                    <p className="text-[#888] text-sm md:text-base">If you've made it this far, we should talk :)</p>
                    <p className="text-[#888] text-sm md:text-base">I'm open to Work, Collaborations, & Interesting problems.</p>
                    <p className="text-[#888] text-sm md:text-base">Have a question or an idea? My inbox is always open.</p>
                </div>

                <a 
                    href="mailto:shivanshm665@gmail.com" 
                    className="inline-flex flex-row items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium text-sm transition-transform hover:scale-105 duration-300"
                >
                    <Mail className="w-4 h-4" /> Say Hello
                </a>
            </div>
        </section>
    );
}
