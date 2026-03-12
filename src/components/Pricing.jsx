import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Pricing.css';

const Pricing = () => {
    const { t } = useLanguage();
    const plans = t('pricing.plans');

    return (
        <section id="pricing" className="pricing-section">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    {t('pricing.title')}
                </motion.h2>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className={`pricing-card glass-card ${index === 1 ? 'featured' : ''}`}
                        >
                            {index === 1 && <div className="featured-badge">Most Popular</div>}
                            <div className="plan-name">{plan.name}</div>
                            <div className="plan-price">
                                <span className="currency">৳</span>
                                <span className="amount">{plan.price}</span>
                            </div>
                            
                            <ul className="plan-features">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex}>
                                        <Check size={18} className="check-icon" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn ${index === 1 ? 'btn-primary' : 'btn-secondary'}`}>
                                {t('pricing.select')}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
