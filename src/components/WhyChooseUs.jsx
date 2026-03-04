import { Smartphone, Search, Zap, MousePointerClick } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Smartphone size={28} />,
            title: "Mobile Optimized",
            description: "Flawless experience across all devices, ensuring you never miss a customer on mobile."
        },
        {
            icon: <Search size={28} />,
            title: "SEO Friendly",
            description: "Built with best practices to help you rank higher on Google search results."
        },
        {
            icon: <Zap size={28} />,
            title: "Fast Loading",
            description: "Lightning-fast performance that keeps visitors engaged and reduces bounce rates."
        },
        {
            icon: <MousePointerClick size={28} />,
            title: "Designed for Conversions",
            description: "Strategic layouts and compelling CTAs to turn traffic into tangible leads."
        }
    ];

    return (
        <section className="why-us">
            <div className="container">
                <h2 className="text-center">Why Choose Us</h2>
                <p className="text-center subtitle">The Webwiz advantage for your digital growth</p>

                <div className="features-container">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-block glass-card">
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <div className="feature-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
