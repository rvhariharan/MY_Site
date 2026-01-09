import React from 'react';

export default function Footer() {
    return (
        <footer className="border-t border-white/6 py-8">
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-edgeMuted">
                <div> &copy; <span id="year">{new Date().getFullYear()}</span> HARIHARAN R. All rights reserved.</div>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/hariharan-r-5812a02a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-white">LinkedIn</a>
                    <a href="https://github.com/rvhariharan/" className="hover:text-white">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
