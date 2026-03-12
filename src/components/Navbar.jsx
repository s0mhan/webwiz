import { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

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
                    <a href="#home">{t('nav.home')}</a>
                    <a href="#about">{t('nav.about')}</a>
                    <a href="#services">{t('nav.services')}</a>
                    <a href="#process">{t('nav.process')}</a>
                    <a href="#pricing">{t('nav.pricing')}</a>
                    
                    <button className="lang-toggle" onClick={toggleLanguage}>
                        <Languages size={18} />
                        <span>{language === 'en' ? 'BN' : 'EN'}</span>
                    </button>

                    <a href="#contact" className="btn btn-primary nav-cta">{t('nav.contact')}</a>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-actions">
                    <button className="lang-toggle mobile-lang" onClick={toggleLanguage}>
                        <span>{language === 'en' ? 'BN' : 'EN'}</span>
                    </button>
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.home')}</a>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.about')}</a>
                <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.services')}</a>
                <a href="#process" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.process')}</a>
                <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.pricing')}</a>
                <a href="#contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.contact')}</a>
            </div>
        </nav>
    );
};

export default Navbar;
