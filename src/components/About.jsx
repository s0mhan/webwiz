import { motion } from 'framer-motion';
import { Zap, Target, TrendingUp, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
    const { t } = useLanguage();
    
    const icons = [<Zap size={32} />, <Target size={32} />, <TrendingUp size={32} />, <ShieldCheck size={32} />];
    const points = t('about.points');

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="about">
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="about-header text-center"
                >
                    <h2>{t('about.title')}</h2>
                    <p className="about-desc">
                        {t('about.desc')}
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="highlights-grid"
                >
                    {points.map((point, index) => (
                        <motion.div 
                            key={index} 
                            variants={cardVariants}
                            className="glass-card highlight-card"
                        >
                            <div className="highlight-icon">
                                {icons[index % icons.length]}
                            </div>
                            <h3>{point}</h3>
                            <p>{t(`services.items.${['business', 'visibility', 'landing', 'maintenance'][index % 4]}.desc`)}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
