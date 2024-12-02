import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground: React.FC = () => {
    return (
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95" />

            {/* Animated Gradient Orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(12,150,156,0.1) 0%, rgba(10,112,117,0.05) 50%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(107, 163, 142, 0.1) 0%, rgba(39, 77, 96, 0.05) 50%, rgba(0, 0, 0, 0.5) 70%)',

                }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};

export default HeroBackground;