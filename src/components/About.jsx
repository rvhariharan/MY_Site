import React from 'react';

export default function About() {
    return (
        <section id="about" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-20">
            <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4 reveal">
                    <h2 className="text-2xl font-semibold">About</h2>
                    <p className="text-edgeMuted">I am a Full Stack Developer with practice from online course projects, using modern UI design and some basic desktop application development. I like to build user-friendly web applications. I am always ready to learn new things and explore new technologies as a content creator. I also have basic knowledge of the Figma tool for UI/UX design.</p>

                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                        <div className="p-4 rounded-lg edge-acrylic border border-white/6 reveal hover:border-edgeOrange/15 transactions">
                            <div className="font-semibold">M.Sc. Computer Science</div>
                            <div className="text-orange-500 text-sm mt-2">Periyar University, Salem. </div>
                            <div className="text-white text-sm font-courier flex gap-2">
                                <span className=" py-1 font-courier text-white text-xs">2024 - 2026</span>
                                <span className="px-2 py-1 font-courier text-white text-xs">First Class</span>
                            </div>
                        </div>
                        <div className="p-4 rounded-lg edge-acrylic border border-white/6 reveal hover:border-edgeOrange/15 transactions">
                            <div className="font-semibold">B.Sc. Computer Science</div>
                            <div className="text-orange-500 text-sm mt-2">Vivekananada College, Madurai.</div>
                            <div className="text-white text-sm font-courier flex gap-2">
                                <span className="py-1 font-courier text-white text-xs">2021 - 2024</span>
                                <span className="px-2 py-1 font-courier text-white text-xs">First Class</span>
                            </div>
                        </div>
                    </div>
                </div>

                <aside className="rounded-2xl p-4 edge-acrylic border border-white/6 reveal hover:border-edgeOrange/15 transactions">
                    <div className="font-semibold">Quick info</div>
                    <ul className="mt-3 text-sm text-edgeMuted space-y-2">
                        <li>Location: Trichy, India</li>
                        <li>Focus: Web Design, UI/UX, React Developer</li>
                        <li>Company : <span className='uppercase'>Har! H!gh Tech</span></li>
                    </ul>
                </aside>
            </div>
        </section>
    );
}
