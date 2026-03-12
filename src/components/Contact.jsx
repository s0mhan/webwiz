import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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
        // In a real app, this would send the data to a backend
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-grid">

                    {/* Contact Info Side */}
                    <div className="contact-info">
                        <h2>Ready to Grow Your Business?</h2>
                        <p className="contact-desc">
                            Let's build something amazing together. Fill out the form or reach out directly via WhatsApp for a faster response.
                        </p>

                        <div className="contact-methods">
                            <a
                                href="https://wa.me/8801577044432"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-btn"
                            >
                                <MessageCircle size={24} />
                                <span>Chat on WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form Side */}
                    <div className="contact-form-wrapper glass-card">
                        <h3>Send Us a Message</h3>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
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
                                    <label htmlFor="phone">Phone Number</label>
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
                                    <label htmlFor="email">Email Address</label>
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
                                <label htmlFor="message">How can we help you?</label>
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
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/8801577044432"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-whatsapp"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={30} />
            </a>
                <MessageCircle size={30} />
            </a>
        </section>
    );
};

export default Contact;
