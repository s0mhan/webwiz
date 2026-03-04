import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">
                    Webwiz<span className="logo-dot">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact" className="btn btn-primary nav-cta">Get Started</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                <a href="#contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Get Started</a>
            </div>
        </nav>
    );
};

export default Navbar;
