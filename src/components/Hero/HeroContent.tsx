import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const HeroContent: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
            >
                <motion.div
                    className="inline-block px-6 py-2 rounded-full bg-primary-gold/10 backdrop-blur-sm mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                </motion.div>

                <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                    <span className="text-white block mb-4">Discover</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-[#6BA38E] to-[#0C969C]">
            <Typewriter
                options={{
                    strings: ['Timeless Elegance', 'Swiss Precision', 'Luxury Watches'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 80,
                }}
            />
          </span>
                </h1>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <motion.a
                        href="#collection"
                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0C969C] to-[#6BA38E] text-white rounded-full flex items-center justify-center group hover:opacity-90 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <ShoppingBag className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                        Explore Collection
                    </motion.a>

                    <motion.a
                        href="#about"
                        className="w-full sm:w-auto px-8 py-4 border border-primary-gold/20 text-white rounded-full flex items-center justify-center hover:bg-primary-gold/10 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroContent;