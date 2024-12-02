import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Clock, ShoppingBag } from 'lucide-react';

const Deals = () => {
    const deals = [
        {
            id: 1,
            title: 'Spring Collection Sale',
            discount: '30% OFF',
            description: 'Get amazing discounts on our latest spring collection',
            image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80',
            endDate: '2024-03-31',
            code: 'SPRING30'
        },
        {
            id: 2,
            title: 'Limited Time Offer',
            discount: '25% OFF',
            description: 'Special discount on luxury watches',
            image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
            endDate: '2024-03-15',
            code: 'LUXURY25'
        },
        {
            id: 3,
            title: 'New Customer Special',
            discount: '15% OFF',
            description: 'Welcome discount for new customers',
            image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80',
            endDate: '2024-03-20',
            code: 'WELCOME15'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
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
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl font-bold text-white mb-4 font-['Playfair_Display']"
                        variants={itemVariants}
                    >
                        Special Offers
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Don't miss out on these exclusive deals and limited-time offers
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {deals.map((deal) => (
                        <motion.div
                            key={deal.id}
                            className="relative group overflow-hidden rounded-2xl"
                            variants={itemVariants}
                        >
                            <div className="relative h-96">
                                <img
                                    src={deal.image}
                                    alt={deal.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                                            {deal.discount}
                                        </div>
                                        <div className="flex items-center text-white">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span className="text-sm">Ends {new Date(deal.endDate).toLocaleDateString()}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {deal.title}
                                        </h3>
                                        <p className="text-gray-300 mb-4">
                                            {deal.description}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                                                <Tag className="w-4 h-4 text-yellow-400 mr-2" />
                                                <span className="text-yellow-400 font-mono">{deal.code}</span>
                                            </div>

                                            <motion.button
                                                className="flex items-center px-6 py-2 bg-yellow-400 text-black rounded-full font-medium hover:bg-yellow-300 transition-colors duration-300"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <ShoppingBag className="w-4 h-4 mr-2" />
                                                Shop Now
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Deals;