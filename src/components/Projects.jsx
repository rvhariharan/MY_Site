import React from 'react';

export default function Projects() {
    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-20">
            <h2 className="text-2xl font-semibold reveal mb-6">My Projects</h2>

            <div className="grid md:grid-cols-3 gap-8">

                {/* TextTalk */}
                <article className="md:col-span-2 odd:md:col-start-1 even:md:col-start-2 rounded-2xl p-6 edge-acrylic border border-white/6 reveal hover:border-edgeOrange/15 shadow-lg transition-transform transform hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">TextTalk</h3>
                        <span className="text-edgeMuted text-sm">AI · gTTS</span>
                    </div>
                    <p className="mt-3 text-edgeMuted text-sm">PDF to audio converter with multilingual TTS and desktop + web apps.</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-white/5 rounded text-xs">Python</span>
                        <span className="px-2 py-1 bg-white/5 rounded text-xs">Flask</span>
                    </div>
                    <div className="mt-6 flex justify-center gap-6 text-sm">
                        <a href="https://github.com/rvhariharan/pdf-to-audio" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline">GitHub</a>
                        <a href="https://pdf-to-audio-0kd4.onrender.com" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline">Live Demo</a>
                    </div>
                </article>

                {/* Naren Swadeshi */}
                <article className="md:col-span-2 odd:md:col-start-1 even:md:col-start-2 rounded-2xl p-6 edge-acrylic border border-white/6 reveal hover:border-edgeOrange/15 shadow-lg transition-transform transform hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">Naren Swadeshi</h3>
                        <span className="text-edgeMuted text-sm">VB.Net · C# · SQL</span>
                    </div>
                    <p className="mt-3 text-edgeMuted text-sm">Standalone desktop application for prepaid student transactions with billing and reports.</p>
                    <div className="mt-4 flex gap-2">
                        <span className="px-2 py-1 bg-white/5 rounded text-xs">VB.Net</span>
                        <span className="px-2 py-1 bg-white/5 rounded text-xs">C#</span>
                    </div>
                    <div className="mt-6 flex justify-center gap-6 text-sm">
                        <a href="https://github.com/rvhariharan/" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline">GitHub</a>
                        <a href="#" className="text-orange-500 hover:underline"><s>Live Demo</s> </a>
                    </div>
                </article>

                {/* Theni Shops */}
                <article className="md:col-span-2 odd:md:col-start-1 even:md:col-start-2 rounded-2xl p-6 edge-acrylic border border-white/6 reveal hover:border-edgeOrange/15 shadow-lg transition-transform transform hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">Theni Shops</h3>
                        <span className="text-edgeMuted text-sm">JS · React.js · Tailwind CSS</span>
                    </div>
                    <p className="mt-3 text-edgeMuted text-sm">E-commerce website for Theni Shops, only for <b>Mobile Responsive & Tab Responsive</b></p>
                    <div className="mt-4 flex gap-2">
                        <span className="px-2 py-1 bg-white/5 rounded text-xs">JS</span>
                        <span className="px-2 py-1 bg-white/5 rounded text-xs">React.js</span>
                        <span className="px-2 py-1 bg-white/5 rounded text-xs">Tailwind CSS</span>
                    </div>
                    <div className="mt-6 flex justify-center gap-6 text-sm">
                        <a href="https://github.com/rvhariharan/" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline">GitHub</a>
                        <a href="https://rvhariharan.github.io/Theni_Shops-/" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline">Live Demo</a>
                    </div>
                </article>

                {/* SK Crane Servics, Salem. */}
                <article className="md:col-span-2 odd:md:col-start-1 even:md:col-start-2 rounded-2xl p-6 edge-acrylic border border-white/6 reveal hover:border-edgeOrange/15 shadow-lg transition-transform transform hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">SK Crane Servics, Salem. </h3>
                        <span className="text-edgeMuted text-sm">JS · CSS </span>
                    </div>
                    <p className="mt-3 text-edgeMuted text-sm">Salem based Crane Servics website. </p>
                    <div className="mt-4 flex gap-2">
                        <span className="px-2 py-1 bg-white/5 rounded text-xs">JS</span>
                        <span className="px-2 py-1 bg-white/5 rounded text-xs">CSS</span>
                    </div>
                    <div className="mt-6 flex justify-center gap-6 text-sm">
                        <a href="https://github.com/rvhariharan/SK_CRANE_Salem" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline">GitHub</a>
                        <a href="#" className="text-orange-500 hover:underline"><s>Live Demo</s> </a>
                    </div>
                </article>

            </div>
        </section>
    );
}
