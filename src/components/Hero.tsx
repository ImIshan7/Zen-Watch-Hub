import React from 'react';
import { Shield, Clock, Watch } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBackground from './Hero/HeroBackground';
import HeroContent from './Hero/HeroContent';
import FeatureCard from './Hero/FeatureCard';

const Hero: React.FC = () => {
    const features = [
        { icon: Shield, text: "2-Year Warranty" },
        { icon: Clock, text: "Swiss Movement" },
        { icon: Watch, text: "Lifetime Support" }
    ];

    return (
        <section className="relative min-h-screen overflow-hidden bg-primary-deepBlue">
            <HeroBackground />

            <motion.div
                className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12">
                    <div className="flex-1 w-full">
                        <HeroContent />

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                            {features.map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    icon={feature.icon}
                                    text={feature.text}
                                    delay={0.5 + index * 0.1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;