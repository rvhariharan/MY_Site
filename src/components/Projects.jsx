import React from 'react';

export default function Projects() {
    const projects = [
        {
            title: "TextTalk",
            subtitle: "AI · gTTS",
            desc: "PDF to audio converter with multilingual TTS and Desktop + Web site.",
            tags: ["Python", "Flask"],
            github: "https://github.com/rvhariharan/pdf-to-audio",
            live: "https://pdf-to-audio-0kd4.onrender.com",
            liveDisabled: false 
        },
        {
            title: "Naren Swadeshi",
            subtitle: "C# · .NET · SQL",
            desc: "Standalone desktop application for prepaid student transactions with billing and reports.",
            tags: ["C#", ".NET", "SQL"],
            github: "https://github.com/rvhariharan/Student-Management-System",
            live: "#",
            liveDisabled: true // Strikethrough request
        },
        {
            title: "Theni Shops",
            subtitle: "React.js · Tailwind CSS",
            desc: "A local business directory and e-commerce platform for Theni district only for Mobile responsive & Tablet responsive.",
            tags: ["React", "Tailwind"],
            github: "https://github.com/rvhariharan/Theni_Shops-",
            live: "https://rvhariharan.github.io/Theni_Shops-",
            liveDisabled: false
        },
        {
            title: "SK Crane Services, Salem",
            subtitle: "Service Website",
            desc: "A responsive business website for crane rental services with contact integration.",
            tags: ["JS", "CSS"],
            github: "https://github.com/rvhariharan/SK_CRANE_Salem",
            live: "#",
            liveDisabled: true
        }
    ];

    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-20">
            <h2 className="text-2xl font-semibold reveal mb-6">My Projects</h2>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((proj, idx) => (
                    <article key={idx} className="md:col-span-2 odd:md:col-start-1 even:md:col-start-2 rounded-2xl p-6 edge-acrylic border border-white/6 reveal hover:border-edgeOrange/15 shadow-lg transition-transform transform hover:-translate-y-1">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold">{proj.title}</h3>
                            <span className="text-edgeMuted text-sm">{proj.subtitle}</span>
                        </div>
                        <p className="mt-3 text-edgeMuted text-sm">{proj.desc}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {proj.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-white/5 rounded text-xs">{tag}</span>
                            ))}
                        </div>
                        <div className="mt-6 flex justify-center gap-6 text-sm">
                            <a href={proj.github} target="_blank" rel="noreferrer" className="text-orange-500 hover:underline">GitHub</a>
                            {proj.liveDisabled ? (
                                <span className="text-gray-600 line-through cursor-not-allowed">Live Demo</span>
                            ) : (
                                <a href={proj.live} target="_blank" rel="noreferrer" className="text-orange-500 hover:underline">Live Demo</a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
