import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Process.css';

const Process = () => {
    const { t } = useLanguage();
    const steps = t('process.steps');

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="process" className="process-section">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    {t('process.title')}
                </motion.h2>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="process-grid"
                >
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            className="process-card glass-card"
                        >
                            <div className="step-number">{index + 1}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                            {index < steps.length - 1 && (
                                <div className="step-connector"></div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
