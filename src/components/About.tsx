import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Award, Watch } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: Clock,
            title: 'Heritage',
            description: '50+ years of expertise in luxury timepieces, crafting excellence since 1970.'
        },
        {
            icon: Shield,
            title: 'Authenticity',
            description: 'Every timepiece certified and verified with detailed documentation.'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'Award-winning customer service and after-sales support.'
        },
        {
            icon: Watch,
            title: 'Craftsmanship',
            description: 'Meticulously curated collection of premium watches.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="about" className="py-24 bg-gradient-to-b from-primary-deepBlue to-secondary-charcoal relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />

            <div className="container-custom relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-bold text-white mb-6"
                    >
                        Crafting Time with
                        <span className="text-primary-gold"> Precision</span>
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-neutral-300 text-lg"
                    >
                        Since 1970, we've been at the forefront of luxury watchmaking, combining traditional craftsmanship with modern innovation. Our commitment to excellence has made us a trusted name in the world of premium timepieces.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="glass-effect rounded-2xl p-6 text-center group"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-gold/10 text-primary-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-neutral-300">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <motion.a
                        href="#collections"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center px-8 py-3 rounded-full bg-primary-gold text-secondary-charcoal font-semibold hover:bg-primary-silver transition-colors duration-300"
                    >
                        Explore Our Collection
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;