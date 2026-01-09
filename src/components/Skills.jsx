import React, { useEffect, useRef } from 'react';

export default function Skills() {
    const gridRef = useRef(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const prefersReducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const applySway = (on) => {
            grid.querySelectorAll('.skills-col').forEach(c => {
                if (on) c.classList.add('sway');
                else c.classList.remove('sway');
            });
        };

        const shouldSway = () => !prefersReducedQuery.matches && window.innerWidth >= 640;

        const gridObs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && shouldSway()) applySway(true);
                else applySway(false);
            });
        }, { threshold: 0.12 });
        gridObs.observe(grid);

        let rTimer;
        const onResize = () => {
            clearTimeout(rTimer);
            rTimer = setTimeout(() => {
                const rect = grid.getBoundingClientRect();
                const inView = rect.top < window.innerHeight && rect.bottom > 0;
                if (inView && shouldSway()) applySway(true);
                else applySway(false);
            }, 150);
        };
        window.addEventListener('resize', onResize);

        return () => {
            gridObs.disconnect();
            window.removeEventListener('resize', onResize);
        };
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const item = e.currentTarget;
            item.classList.add('press');
            setTimeout(() => item.classList.remove('press'), 150);
        }
    };

    const skills = [
        [
            { name: 'HTML5', icon: '/html5.svg' },
            { name: 'Tailwind CSS', icon: '/tailwind.svg' },
            { name: 'Node js', icon: '/node-js.svg' },
            { name: 'Chat GPT', icon: '/chat_gpt.svg' },
        ],
        [
            { name: 'CSS3', icon: '/css3.svg' },
            { name: 'React.js', icon: '/react.svg' },
            { name: 'GitHub', icon: '/github.svg' },
            { name: 'C#', icon: '/C_Sharp.svg' },
        ],
        [
            { name: 'JavaScript', icon: '/js.svg' },
            { name: 'Visual studio', icon: '/Visual_Studio.svg' },
            { name: 'VS Code', icon: '/vs_code.svg' },
            { name: 'Php', icon: '/php.svg' },
        ],
        [
            { name: 'Bootstrap', icon: '/bootstrap.svg' },
            { name: 'MongoDB', icon: '/mongodb.svg' },
            { name: 'Git', icon: '/git.svg' },
            { name: 'Figma', icon: '/figma.svg' },
        ]
    ];

    return (
        <section id="skills" className="mx-auto px-6 py-12 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-6">Skills</h2>

                <div
                    ref={gridRef}
                    className="skills-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center"
                >
                    {skills.map((col, colIndex) => (
                        <div key={colIndex} className="skills-col flex flex-col items-center gap-4">
                            {col.map((skill) => (
                                <div
                                    key={skill.name}
                                    role="button"
                                    tabIndex="0"
                                    aria-label={skill.name}
                                    className="skill-item w-full max-w-[140px]"
                                    onKeyDown={handleKeyDown}
                                >
                                    <div className="w-20 h-20 sm:w-16 sm:h-16 rounded-lg bg-white/6 flex items-center justify-center shadow-sm">
                                        <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                                    </div>
                                    <div className="skill-label">{skill.name}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
