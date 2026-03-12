import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const phoneNumber = '8801577044432';
        const message = `Hi Webwiz!
        
My Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}

Message: ${formData.message}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
        
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-grid">

                    {/* Contact Info Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="contact-info"
                    >
                        <h2>{t('contact.title')}</h2>
                        <p className="contact-desc">
                            {t('contact.desc')}
                        </p>

                        <div className="contact-methods">
                            <a
                                href="https://wa.me/8801577044432"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-btn"
                            >
                                <MessageCircle size={24} />
                                <span>{t('contact.whatsAppChat')}</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="contact-form-wrapper glass-card"
                    >
                        <h3>{t('contact.form.title')}</h3>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">{t('contact.form.name')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="e.g. Rahim Uddin"
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">{t('contact.form.phone')}</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="e.g. 018XX XXXXXX"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">{t('contact.form.email')}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="e.g. yourname@example.com"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">{t('contact.form.message')}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project or business needs..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                {t('contact.form.submit')} <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <motion.a
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                href="https://wa.me/8801577044432"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-whatsapp"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={30} />
            </motion.a>
        </section>
    );
};

export default Contact;
