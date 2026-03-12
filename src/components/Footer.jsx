import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <a href="#" className="logo">
                        Webwiz<span className="logo-dot">.</span>
                    </a>
                    <p className="footer-desc">
                        Modern websites and digital tools for local businesses in Bangladesh. We build high-converting digital experiences.
                    </p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/share/1bFN4iER8b/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="https://www.instagram.com/webwizzofficial?igsh=MXI2b3RwaDlhdXdscg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#services">Business Website</a></li>
                        <li><a href="#services">Google Visibility</a></li>
                        <li><a href="#services">Landing Pages</a></li>
                        <li><a href="#services">Maintenance Plan</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><MapPin size={18} className="contact-icon" /> Dhaka, Bangladesh</li>
                        <li><Mail size={18} className="contact-icon" /> webwiz551@gmail.com</li>
                        <li><Phone size={18} className="contact-icon" /> +880 1577-044432</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container text-center">
                    <p>&copy; 2026 Webwiz. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
