import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
    const { t } = useLanguage();

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-glow hero-glow-1"></div>
            <div className="hero-glow hero-glow-2"></div>

            <div className="container hero-container text-center">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="hero-badge"
                >
                    <Sparkles size={16} className="text-ultra-violet" />
                    <span>{t('hero.badge')}</span>
                </motion.div>

                <motion.h1 
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.1 }}
                    className="hero-title"
                >
                    {t('hero.title').split('Website')[0]}
                    <span className="text-gradient"> {t('hero.title').includes('Website') ? 'Website' : ''} </span>
                    {t('hero.title').split('Website')[1]}
                </motion.h1>

                <motion.p 
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                    className="hero-subtitle"
                >
                    {t('hero.desc')}
                </motion.p>

                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.3 }}
                    className="hero-actions"
                >
                    <a href="#contact" className="btn btn-primary btn-lg">
                        {t('hero.getStarted')} <ArrowRight size={18} />
                    </a>
                    <a href="#services" className="btn btn-secondary btn-lg">
                        {t('hero.viewServices')}
                    </a>
                </motion.div>
            </div>

            <div className="hero-particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`
                    }}></div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
