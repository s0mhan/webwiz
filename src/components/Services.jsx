import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Services.css';

const Services = () => {
    const { t } = useLanguage();
    
    const serviceKeys = ['business', 'visibility', 'landing', 'maintenance'];

    return (
        <section id="services" className="services">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {t('services.title')}
                </motion.h2>
                
                <div className="services-grid">
                    {serviceKeys.map((key, index) => {
                        const service = t(`services.items.${key}`);
                        return (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={`service-card glass-card`}
                            >
                                <div className="service-header">
                                    <h3>{service.title}</h3>
                                    <p className="service-desc">{service.desc}</p>
                                </div>

                                <ul className="service-features">
                                    {[1, 2, 3].map((_, i) => (
                                        <li key={i}>
                                            <CheckCircle size={18} className="text-ultra-violet" />
                                            <span>{t('about.points')[i % 4]}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a href="#contact" className="btn btn-primary service-btn">
                                    {t('hero.getStarted')}
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
