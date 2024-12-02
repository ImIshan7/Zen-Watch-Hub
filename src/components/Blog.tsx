import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
    const articles = [
        {
            id: 1,
            title: 'The Art of Watch Making',
            excerpt: 'Discover the intricate process behind creating luxury timepieces...',
            image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80',
            author: 'John Smith',
            date: 'March 1, 2024',
            readTime: '5 min read'
        },
        {
            id: 2,
            title: 'Vintage Watch Collection Guide',
            excerpt: 'Essential tips for starting your vintage watch collection...',
            image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80',
            author: 'Emma Davis',
            date: 'February 28, 2024',
            readTime: '7 min read'
        },
        {
            id: 3,
            title: 'Watch Care and Maintenance',
            excerpt: 'Learn how to properly maintain your luxury timepiece...',
            image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
            author: 'Michael Brown',
            date: 'February 25, 2024',
            readTime: '4 min read'
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
        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl font-bold text-white mb-4 font-['Playfair_Display']"
                        variants={itemVariants}
                    >
                        Latest from Our Blog
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Discover the latest trends, stories, and insights from the world of luxury timepieces
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {articles.map((article) => (
                        <motion.article
                            key={article.id}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                            variants={itemVariants}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-400 mb-4">
                                    <User className="w-4 h-4 mr-1" />
                                    <span>{article.author}</span>
                                    <span className="mx-2">•</span>
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span>{article.readTime}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {article.excerpt}
                                </p>

                                <motion.a
                                    href={`#article-${article.id}`}
                                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                                    whileHover={{ x: 5 }}
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </motion.a>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center mt-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.a
                        href="#blog"
                        className="inline-flex items-center px-8 py-3 rounded-full bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition-colors duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Articles
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;