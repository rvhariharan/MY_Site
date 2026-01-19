import React from 'react';

export default function Skills() {
    const skills = [
        { name: "HTML5", src: "/html5.svg" },
        { name: "CSS3", src: "/css3.svg" },
        { name: "JavaScript", src: "/js.svg" },
        { name: "React.js", src: "/react.svg" },
        { name: "Tailwind CSS", src: "/tailwind.svg" },
        { name: "Node js", src: "/node-js.svg" },
        { name: "C#", src: "/C_Sharp.svg" },
        { name: "Php", src: "/php.svg" },
        { name: "Bootstrap", src: "/bootstrap.svg" },
        { name: "MongoDB", src: "/mongodb.svg" }
    ];

    const tools = [
        { name: "Git", src: "/git.svg" },
        { name: "GitHub", src: "/github.svg" },
        { name: "VS Code", src: "/vs_code.svg" },
        { name: "Visual studio", src: "/Visual_Studio.svg" },
        { name: "Figma", src: "/figma.svg" },
        { name: "Chat GPT", src: "/chat_gpt.svg" }
    ];

    return (
        <section id="skills" className="mx-auto px-6 py-12 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">My Expertise</h2>

                {/* Skills Section */}
                <div className="mb-16">
                    <h3 className="text-xl font-semibold mb-6 text-gray-200 border-l-4 border-orange-500 pl-3">Technical Skills</h3>
                    <SkillsGrid items={skills} />
                </div>

                {/* Tools Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-gray-200 border-l-4 border-green-500 pl-3">Tools</h3>
                    <SkillsGrid items={tools} />
                </div>
            </div>
        </section>
    );
}

function SkillsGrid({ items }) {
    // Distribute items into 4 columns to match the CSS animation structure
    const columns = [[], [], [], []];
    items.forEach((item, index) => {
        columns[index % 4].push(item);
    });

    return (
        <div className="skills-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
            {columns.map((colItems, colIndex) => (
                <div key={colIndex} className="skills-col flex flex-col items-center gap-4 sway">
                    {colItems.map((item) => (
                        <SkillItem key={item.name} name={item.name} src={item.src} />
                    ))}
                </div>
            ))}
        </div>
    );
}

function SkillItem({ name, src }) {
    return (
        <div role="button" tabIndex={0} aria-label={name} className="skill-item w-full max-w-[140px]">
            <div className="w-20 h-20 sm:w-16 sm:h-16 rounded-lg bg-white/6 flex items-center justify-center shadow-sm">
                <img src={src} alt={name} className="w-10 h-10" />
            </div>
            <div className="skill-label">{name}</div>
        </div>
    );
}
