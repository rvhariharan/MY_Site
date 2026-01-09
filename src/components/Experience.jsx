import React from 'react';

export default function Experience() {
    const experiences = [
        {
            type: "Internship",
            company: "Viswa Digital Technology - Salem",
            live: "Remote Internship",
            role: "Web Design Intern",
            date: "May 2025",
            desc: "Worked on UI/UX principles and designing responsive web layouts."
        },
        {
            type: "Internship",
            company: "Arttifial Tech - Chennai",
            live: "Remote Internship",
            role: "Game Development",
            date: "May 2025",
            desc: "Explored game mechanics and basic development concepts."
        },
        {
            type: "Internship",
            company: "Navi Promotions, Pariyakulam - Theni",
            live: "Live Internship",
            role: "React Developer",
            date: "Dec 2025 - Jan 2026",
            desc: "Developed dynamic front-end components and managed live deployment."
        }
    ];

    return (
        <section id="Experience" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-20">
            <h2 className="text-2xl font-semibold reveal mb-16">
                Experience
            </h2>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="group relative flex flex-col md:flex-row gap-4 md:gap-12 items-start reveal pl-8 md:pl-0 border-l border-white/10 md:border-l-0 pb-8 md:pb-0 last:border-l-0 last:pb-0">

                        {/* Mobile Dot (Absolute positioned on the left border) */}
                        <div className="absolute left-[-5px] top-0 md:hidden w-2.5 h-2.5 rounded-full bg-edgeBlack border border-white/20 group-hover:border-edgeOrange group-hover:bg-edgeOrange transition-all duration-300"></div>

                        {/* 1. Date/Role Column (Left on Desktop, Top on Mobile) */}
                        <div className="md:w-1/4 md:pt-2 md:text-right">
                            <span className="block text-xl md:text-2xl font-courier font-bold text-white/30 group-hover:text-edgeOrange/80 transition-colors duration-500 leading-tight">
                                {exp.role}
                            </span>
                            <div className="text-xs md:text-sm text-edgeMuted mt-1 font-courier">{exp.date}</div>
                        </div>

                        {/* 2. Connector (Visual Decor - Desktop Only) */}
                        <div className="hidden md:block w-px h-24 bg-white/10 group-hover:bg-edgeOrange/50 transition-colors duration-500 mt-3 relative">
                            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 rounded-full bg-edgeBlack border border-white/20 group-hover:border-edgeOrange group-hover:bg-edgeOrange transition-all duration-300"></div>
                        </div>

                        {/* 3. Content Column (Right on Desktop, Bottom on Mobile) */}
                        <div className="flex-1 pt-1 md:pt-0">
                            <h3 className="text-lg md:text-xl font-heading font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                                {exp.company}
                            </h3>
                            <div className="flex items-center gap-3 mt-1 md:mt-2 mb-2 md:mb-3">
                                <span className="text-edgeOrange text-sm font-medium"> {exp.live}</span>
                            </div>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                                {exp.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
