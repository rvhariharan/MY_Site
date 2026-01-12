import React from 'react';

export default function Skills() {
    return (
        <section id="skills" className="mx-auto px-6 py-12 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-6">Skills</h2>

                <div className="skills-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center">

                    {/* Column 1 */}
                    <div className="skills-col flex flex-col items-center gap-4">
                        <SkillItem name="HTML5" src="/html5.svg" />
                        <SkillItem name="Tailwind CSS" src="/tailwind.svg" />
                        <SkillItem name="Node js" src="/node-js.svg" />
                        <SkillItem name="Chat GPT" src="/chat_gpt.svg" />
                    </div>

                    {/* Column 2 */}
                    <div className="skills-col flex flex-col items-center gap-4">
                        <SkillItem name="CSS3" src="/css3.svg" />
                        <SkillItem name="React.js" src="/react.svg" />
                        <SkillItem name="GitHub" src="/github.svg" />
                        <SkillItem name="C#" src="/C_Sharp.svg" />
                    </div>

                    {/* Column 3 */}
                    <div className="skills-col flex flex-col items-center gap-4">
                        <SkillItem name="JavaScript" src="/js.svg" />
                        <SkillItem name="Visual studio" src="/Visual_Studio.svg" />
                        <SkillItem name="VS Code" src="/vs_code.svg" />
                        <SkillItem name="Php" src="/php.svg" />
                    </div>

                    {/* Column 4 */}
                    <div className="skills-col flex flex-col items-center gap-4">
                        <SkillItem name="Bootstrap" src="/bootstrap.svg" />
                        <SkillItem name="MongoDB" src="/mongodb.svg" />
                        <SkillItem name="Git" src="/git.svg" />
                        <SkillItem name="Figma" src="/figma.svg" />
                    </div>

                </div>
            </div>
        </section>
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
