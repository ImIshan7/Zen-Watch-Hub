import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';

const Wishlist = () => {
    const wishlistItems = [
        {
            id: 1,
            name: 'Zen Master Classic',
            price: 1299,
            image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80',
            inStock: true
        },
        {
            id: 2,
            name: 'Mindful Sport',
            price: 899,
            image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
            inStock: true
        },
        {
            id: 3,
            name: 'Serenity Elite',
            price: 2499,
            image: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&q=80',
            inStock: false
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
                    <motion.div
                        className="inline-block mb-4"
                        variants={itemVariants}
                    >
                        <Heart className="w-12 h-12 text-yellow-400" />
                    </motion.div>
                    <motion.h2
                        className="text-4xl font-bold text-white mb-4 font-['Playfair_Display']"
                        variants={itemVariants}
                    >
                        Your Wishlist
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg"
                        variants={itemVariants}
                    >
                        Keep track of your favorite timepieces
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {wishlistItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden group"
                            variants={itemVariants}
                        >
                            <div className="relative h-64">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                    <span className="text-2xl font-bold text-yellow-400">
                    ${item.price.toLocaleString()}
                  </span>
                                </div>

                                <div className="flex items-center justify-between">
                  <span className={`text-sm ${item.inStock ? 'text-green-400' : 'text-red-400'}`}>
                    {item.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>

                                    <div className="flex space-x-2">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors duration-300"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </motion.button>

                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`p-2 rounded-full ${
                                                item.inStock
                                                    ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                                                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                            } transition-colors duration-300`}
                                            disabled={!item.inStock}
                                        >
                                            <ShoppingBag className="w-5 h-5" />
                                        </motion.button>
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

export default Wishlist;