import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    text: string;
    delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, text, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="group p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
        >
            <div className="flex flex-col items-center justify-center text-gray-300">
                <Icon className="w-8 h-8 text-primary-gold mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">{text}</span>
            </div>
        </motion.div>
    );
};

export default FeatureCard;