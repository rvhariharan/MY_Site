import React from 'react';

export default function Hero() {
    return (
        <section id="hariharan" className="min-h-[72vh] flex items-center">
            <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 text-sm edge-acrylic px-3 py-1 rounded-full text-edgeMuted">
                        <span className="font-courier"> <span className="font-extrabold">&gt; </span>HELLO, WORLD!_ </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading leading-tight">
                        I'm <span className="text-edgeOrange">Hariharan</span>
                    </h1>
                    <div className="text-edgeMuted md:text-xl font-semibold h-10">
                        <span className="animate-typing pr-2">
                            A Web Developer & Web Designer
                        </span>
                    </div>
                    <p className="text-edgeMuted max-w-xl italic ">
                        A passionate Full stack developer with project experience in Web Development & Desktop Applications Development. I enjoy building simple web apps, learning new tech.
                    </p>

                    <div className="flex gap-4 items-center">
                        <a href="#projects" className="px-4 py-3 text-orange-500 rounded-full border border-white/20 hover:bg-edgeOrange hover:text-white transition">View Projects</a>
                        <a href="#contact" className="px-4 py-3 text-orange-500 rounded-full border border-white/20 hover:bg-edgeOrange hover:text-white transition">Contact</a>
                    </div>
                </div>

                {/* Hero visual & photo area */}
                <div className="relative group">
                    <div className="rounded-2xl edge-acrylic border border-white/20 p-6 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:border-edgeOrange/40 group-hover:shadow-[0_0_60px_rgba(255,106,0,0.25)] overflow-hidden relative">
                        <div className="flex items-center gap-4">

                            {/* Photo Card (Hover Image Change) */}
                            <div className="w-36 h-36 rounded-xl overflow-hidden relative transition-all duration-700 ease-out">
                                {/* Default image */}
                                <img
                                    src="/assets/image/me-photo.jpg"
                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-110"
                                    alt="Me"
                                />

                                {/* Hover image (like dev1/dev2) */}
                                <img
                                    src="/assets/image/me-photo2-copy.jpg"
                                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-110 group-hover:translate-x-2"
                                    alt="Me Hover"
                                />
                            </div>

                            <div>
                                <div className="text-lg font-semibold tracking-wide">HARIHARAN R</div>
                                <div className="text-edgeMuted text-sm">M.Sc. Computer Science.</div>

                                {/* Social icons */}
                                <div className="mt-5 flex gap-4">
                                    <a href="https://www.linkedin.com/in/hariharan-r-5812a02a5">
                                        <img src="/linkedin.svg" className="w-6 h-6 hover:scale-125 transition duration-500" alt="LinkedIn" />
                                    </a>
                                    <a href="https://x.com/rvhariharan2004">
                                        <img src="/x.svg" className="w-6 h-6 hover:scale-125 transition duration-500" alt="X" />
                                    </a>
                                    <a href="https://github.com/rvhariharan">
                                        <img src="/github1.svg" className="w-6 h-6 hover:scale-125 transition duration-500" alt="GitHub" />
                                    </a>
                                    <a href="https://www.threads.net/@r.hariharan_xx7">
                                        <img src="/threads.svg" className="w-6 h-6 hover:scale-125 transition duration-500" alt="Threads" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* soft glow circle */}
                        <div className="pointer-events-none absolute -right-8 -bottom-8 w-44 h-44 rounded-full blur-3xl bg-edgeOrange/20 transition-all duration-700 group-hover:scale-[1.4] group-hover:bg-edgeOrange/30"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
