import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <a href="#" className="logo">
                        Webwiz<span className="logo-dot">.</span>
                    </a>
                    <p className="footer-desc">
                        {t('footer.desc')}
                    </p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/share/1bFN4iER8b/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="https://www.instagram.com/webwizzofficial?igsh=MXI2b3RwaDlhdXdscg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>{t('nav.about')}</h3>
                    <ul>
                        <li><a href="#home">{t('nav.home')}</a></li>
                        <li><a href="#about">{t('nav.about')}</a></li>
                        <li><a href="#services">{t('nav.services')}</a></li>
                        <li><a href="#contact">{t('nav.contact')}</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>{t('nav.services')}</h3>
                    <ul>
                        <li><a href="#services">{t('services.items.business.title')}</a></li>
                        <li><a href="#services">{t('services.items.visibility.title')}</a></li>
                        <li><a href="#services">{t('services.items.landing.title')}</a></li>
                        <li><a href="#pricing">{t('nav.pricing')}</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>{t('nav.contact')}</h3>
                    <ul>
                        <li><MapPin size={18} className="contact-icon" /> Dhaka, Bangladesh</li>
                        <li><Mail size={18} className="contact-icon" /> webwiz551@gmail.com</li>
                        <li><Phone size={18} className="contact-icon" /> +880 1577-044432</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container text-center">
                    <p>{t('footer.copy')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
