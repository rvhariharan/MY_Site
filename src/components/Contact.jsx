import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* left: form */}
                <div className="md:col-span-2 reveal min-w-0">
                    <h2 className="text-2xl sm:text-2xl font-semibold">Contact</h2>
                    <p className="text-edgeMuted mt-2 text-sm sm:text-base">Here are my contact details; you can reach out to me through them.</p>

                    <form id="contactForm" className="mt-6 grid sm:grid-cols-2 gap-4">
                        <input name="name" className="w-full p-3 rounded bg-white/4 border border-white/6 text-edgeOrange" placeholder="Your name" required />
                        <input name="email" className="w-full p-3 rounded bg-white/4 border border-white/6 text-edgeOrange" type="email" placeholder="Email" required />
                        <textarea name="message" className="w-full p-3 rounded bg-white/4 border border-white/6 sm:col-span-2 text-edgeOrange" rows="4" placeholder="Message"></textarea>
                        <button type="submit" className="w-full sm:col-span-2 px-5 py-3 rounded bg-edgeOrange text-white font-semibold hover:bg-orange-500 transition">Send message</button>
                    </form>
                </div>

                {/* right: aside */}
                <aside className="rounded-2xl p-4 edge-acrylic border border-white/6 reveal hover:border-edgeOrange/15 transition min-w-0 md:mt-0 mt-6">
                    <div className="font-semibold">Quick links</div>
                    <div className="mt-3 text-sm text-edgeMuted space-y-2">
                        {/* Note: In React, we use className for icons. Assuming FontAwesome CDN is loaded in index.html, or we can use svg icons. 
                            Legacy index.html loaded FontAwesome via script. We kept that in the new index.html restoration. */}
                        <div><i className="fa-solid fa-phone"></i> <a href="tel:+917639554251">+91 7639554251</a></div>
                        <div><i className="fa-solid fa-envelope"></i> <a href="mailto:rvhariharan2004@gmail.com">rvhariharan2004@gmail.com</a></div>
                    </div>
                </aside>
            </div>
        </section>
    );
}
