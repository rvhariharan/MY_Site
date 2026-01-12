import React, { useState, useEffect } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    return (
        <header className="sticky top-0 z-40 edge-acrylic border-b border-white/10 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative z-50">

                {/* Left: Logo + Name */}
                <div className="flex items-center gap-3">
                    <div>
                        <img
                            src="/assets/image/Hari_Name.jpg"
                            alt="Logo"
                            className="w-12 h-12 object-cover rounded-md border border-white/20 shadow-md"
                        />
                    </div>
                    <a href="#hariharan" className="font-cinzel text-white text-xl font-bold">
                        HAR<span className="text-edgeOrange">!</span>HARAN <span className="text-edgeOrange font-bold"> .</span>
                    </a>
                </div>

                {/* Middle: Navigation (Desktop Only) */}
                <nav className="hidden md:flex items-center gap-8 text-gray-300 text-lg">
                    <a href="#about" className="hover:text-orange-500 hover:font-bold transition">About</a>
                    <a href="#skills" className="hover:text-orange-500 hover:font-bold transition">Skills</a>
                    <a href="#projects" className="hover:text-orange-500 hover:font-bold transition">Projects</a>
                    <a href="#Experience" className="hover:text-orange-500 hover:font-bold transition">Experience</a>
                    <a href="#contact" className="hover:text-orange-500 hover:font-bold transition">Contact</a>
                </nav>

                {/* Right: Button (Desktop) */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="#contact"
                        className="text-sm text-orange-500 font-bold border border-white/20 px-4 py-2 rounded-full hover:bg-edgeOrange hover:text-white transition"
                    >
                        Get in touch
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    id="menu-btn"
                    aria-expanded={isMenuOpen}
                    aria-controls="menu"
                    className="md:hidden text-gray-300 text-3xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                id="menu"
                role="menu"
                aria-hidden={!isMenuOpen}
                className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden fixed left-4 right-4 top-20 bg-black/95 text-gray-300 flex-col items-center space-y-6 py-6 rounded-lg z-50`}
            >
                <a href="#about" className="hover:text-orange-500" role="menuitem" onClick={closeMenu}>About</a>
                <a href="#skills" className="hover:text-orange-500" role="menuitem" onClick={closeMenu}>Skills</a>
                <a href="#projects" className="hover:text-orange-500" role="menuitem" onClick={closeMenu}>Projects</a>
                <a href="#Experience" className="hover:text-orange-500" role="menuitem" onClick={closeMenu}>Experience</a>
                <a href="#contact" className="hover:text-orange-500" role="menuitem" onClick={closeMenu}>Contact</a>
                <a
                    href="#contact"
                    className="text-sm text-orange-500 font-bold border border-white/20 px-4 py-2 rounded-full hover:bg-edgeOrange hover:text-white transition"
                    role="menuitem"
                    onClick={closeMenu}
                >
                    Get in touch
                </a>
            </div>
        </header>
    );
}
