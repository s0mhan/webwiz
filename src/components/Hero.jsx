import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-glow hero-glow-1"></div>
            <div className="hero-glow hero-glow-2"></div>

            <div className="container hero-container text-center">
                <div className="hero-badge animate-fade-in-up">
                    <Sparkles size={16} className="text-ultra-violet" />
                    <span>Premier Digital Agency in Bangladesh</span>
                </div>

                <h1 className="hero-title animate-fade-in-up delay-100">
                    We Build Websites That <br className="hidden-mobile" />
                    <span className="text-gradient">Grow Your Business.</span>
                </h1>

                <p className="hero-subtitle animate-fade-in-up delay-200">
                    Modern websites and digital tools for local businesses in Bangladesh. Establish a powerful online presence designed to convert visitors into loyal customers.
                </p>

                <div className="hero-actions animate-fade-in-up delay-300">
                    <a href="#contact" className="btn btn-primary btn-lg">
                        Get Started <ArrowRight size={18} />
                    </a>
                    <a href="#services" className="btn btn-secondary btn-lg">
                        View Services
                    </a>
                </div>
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
