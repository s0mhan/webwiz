import { Zap, Target, TrendingUp } from 'lucide-react';
import './About.css';

const About = () => {
    const highlights = [
        {
            icon: <Zap size={32} />,
            title: "Fast Delivery",
            description: "Get your business online quickly without compromising on quality or performance."
        },
        {
            icon: <Target size={32} />,
            title: "Conversion-Focused",
            description: "Every element is designed to turn your website visitors into paying customers."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Business Growth Oriented",
            description: "Scalable digital solutions that grow seamlessly alongside your business."
        }
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-header text-center">
                    <h2>Empowering Local Businesses</h2>
                    <p className="about-desc">
                        Webwiz helps businesses establish powerful online presence with modern websites, visibility optimization, and custom digital solutions.
                    </p>
                </div>

                <div className="highlights-grid">
                    {highlights.map((item, index) => (
                        <div key={index} className={`glass-card highlight-card animate-fade-in-up delay-${(index + 1) * 100}`}>
                            <div className="highlight-icon">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
