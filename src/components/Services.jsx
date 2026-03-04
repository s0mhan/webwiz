import { CheckCircle } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Business Website",
            price: "15,000",
            description: "Professional multi-page website for established businesses.",
            features: [
                "1–5 page website",
                "Mobile responsive design",
                "Basic SEO setup",
                "WhatsApp call-to-action button",
                "Contact form integration",
                "Google Maps embed"
            ],
            btnText: "Get This Package",
            isPopular: true
        },
        {
            title: "Google Visibility Profile Setup",
            price: "5,000",
            description: "Dominate local search results and attract nearby customers.",
            features: [
                "Business profile setup & verification",
                "Optimized description",
                "Categories & services setup",
                "Image optimization",
                "Basic keyword positioning"
            ],
            btnText: "Improve My Visibility",
            isPopular: false
        },
        {
            title: "Landing Page for Ads",
            price: "10,000",
            description: "High-converting single-page website designed specifically for paid advertisements.",
            features: [
                "Single focused page",
                "High-conversion layout",
                "Fast loading speed",
                "Lead capture forms",
                "Analytics integration"
            ],
            btnText: "Create My Landing Page",
            isPopular: false
        },
        {
            title: "Maintenance Plan",
            price: "2,000/mo",
            description: "Keep your website secure, fast, and up-to-date.",
            features: [
                "Hosting management",
                "Regular software updates",
                "Automated backups",
                "Small content edits",
                "Performance optimization"
            ],
            btnText: "Start Maintenance",
            isPopular: false
        },
        {
            title: "Custom Solution",
            price: "Custom",
            description: "Any custom tool or system needed to help your business grow or manage operations.",
            features: [
                "Tailored web applications",
                "Inventory management systems",
                "Custom booking systems",
                "3rd party API integrations",
                "Dedicated structural planning"
            ],
            btnText: "Contact Us for Custom Quote",
            isPopular: false
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <h2>Our Services</h2>
                <p className="services-subtitle text-center">
                    Comprehensive digital solutions tailored for your business needs.
                </p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className={`service-card glass-card ${service.isPopular ? 'popular' : ''}`}>
                            {service.isPopular && <div className="popular-badge">Most Popular</div>}

                            <div className="service-header">
                                <h3>{service.title}</h3>
                                <p className="service-desc">{service.description}</p>
                            </div>

                            <div className="service-price">
                                {service.price === 'Custom' ? (
                                    <span className="price-amount">Tailored Quote</span>
                                ) : (
                                    <>
                                        <span className="price-currency">৳</span>
                                        <span className="price-amount">{service.price}</span>
                                        {service.price.includes('/mo') ? '' : <span className="price-period"> BDT</span>}
                                    </>
                                )}
                            </div>

                            <ul className="service-features">
                                {service.features.map((feature, i) => (
                                    <li key={i}>
                                        <CheckCircle size={18} className="text-ultra-violet" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href="#contact" className="btn btn-primary service-btn">
                                {service.btnText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
