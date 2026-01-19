import React from 'react';

export default function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = React.useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate sending delay for better UX
        setTimeout(() => {
            // Construct mailto link
            const subject = `Portfolio Contact from ${formData.name}`;
            const body = `${formData.message}\n\n------------------------\nSent by: ${formData.name}\nEmail: ${formData.email}`;
            const mailtoLink = `mailto:rvhariharan2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success state
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset status after 3 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* left: form */}
                <div className="md:col-span-2 reveal min-w-0">
                    <h2 className="text-2xl sm:text-2xl font-semibold">Contact</h2>
                    <p className="text-edgeMuted mt-2 text-sm sm:text-base">Here are my contact details; you can reach out to me through them.</p>

                    <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-white/4 border border-white/6 text-edgeOrange focus:border-edgeOrange outline-none transition"
                            placeholder="Your name"
                            required
                        />
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-white/4 border border-white/6 text-edgeOrange focus:border-edgeOrange outline-none transition"
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-white/4 border border-white/6 sm:col-span-2 text-edgeOrange focus:border-edgeOrange outline-none transition"
                            rows="4"
                            placeholder="Message"
                            required
                        ></textarea>

                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full px-5 py-3 rounded bg-edgeOrange text-white font-semibold hover:bg-orange-500 transition disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white/50 border-t-white"></span>
                                        Sending...
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <span className="text-xl">✓</span> Message Sent!
                                    </>
                                ) : (
                                    'Send message'
                                )}
                            </button>
                            {status === 'success' && (
                                <p className="text-green-400 text-sm mt-2 text-center">
                                    Your email client has been opened with the message!
                                </p>
                            )}
                        </div>
                    </form>
                </div>

                {/* right: aside */}
                <aside className="rounded-2xl p-4 edge-acrylic border border-white/6 reveal hover:border-edgeOrange/15 transition min-w-0 md:mt-0 mt-6">
                    <div className="font-semibold">Quick links</div>
                    <div className="mt-3 text-sm text-edgeMuted space-y-2">
                        {/* Note: In React, we use className for icons. Assuming FontAwesome CDN is loaded in index.html, or we can use svg icons. 
                            Legacy index.html loaded FontAwesome via script. We kept that in the new index.html restoration. */}
                        <div><i className="fa-solid fa-phone"></i> <a href="tel:+917639554251" className="hover:text-edgeOrange transition">+91 7639554251</a></div>
                        <div><i className="fa-solid fa-envelope"></i> <a href="mailto:rvhariharan2004@gmail.com" className="hover:text-edgeOrange transition">rvhariharan2004@gmail.com</a></div>
                    </div>
                </aside>
            </div>
        </section>
    );
}
