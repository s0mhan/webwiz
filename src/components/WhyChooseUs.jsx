import { motion } from 'framer-motion';
import { Smartphone, Search, Zap, MousePointerClick } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const { t } = useLanguage();
    
    const features = [
        { icon: <Smartphone size={28} />, key: 'business' },
        { icon: <Search size={28} />, key: 'visibility' },
        { icon: <Zap size={28} />, key: 'landing' },
        { icon: <MousePointerClick size={28} />, key: 'maintenance' }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    return (
        <section className="why-us">
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-center">{t('about.title')}</h2>
                    <p className="text-center subtitle">{t('about.desc')}</p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="features-container"
                >
                    {features.map((feature, index) => {
                        const service = t(`services.items.${feature.key}`);
                        return (
                            <motion.div 
                                key={index} 
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                                }}
                                className="feature-block glass-card"
                            >
                                <div className="feature-icon-wrapper">
                                    {feature.icon}
                                </div>
                                <div className="feature-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
