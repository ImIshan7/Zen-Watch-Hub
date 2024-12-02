import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Disclosure } from '@headlessui/react';

const FAQ = () => {
    const faqs = [
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our encrypted payment system.'
        },
        {
            question: 'What is your shipping policy?',
            answer: 'We offer worldwide shipping with tracking. Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. Free shipping is available for orders over $500.'
        },
        {
            question: 'What is your return policy?',
            answer: 'We offer a 30-day return policy for unworn items in their original condition with all tags attached. Returns are free for customers in the United States.'
        },
        {
            question: 'Are your watches authentic?',
            answer: 'Yes, all our watches are 100% authentic and come with official documentation, warranty cards, and certificates of authenticity.'
        },
        {
            question: 'How do I track my order?',
            answer: 'Once your order ships, you will receive a confirmation email with a tracking number that you can use to monitor your shipment.'
        },
        {
            question: 'Do you offer international warranty?',
            answer: 'Yes, all our watches come with an international warranty valid for 2 years from the date of purchase.'
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
        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg"
                        variants={itemVariants}
                    >
                        Find answers to common questions about our products and services
                    </motion.p>
                </motion.div>

                <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="overflow-hidden"
                        >
                            <Disclosure>
                                {({ open }) => (
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
                                        <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 text-left text-white hover:bg-white/10 transition-colors duration-300">
                                            <span className="text-lg font-medium">{faq.question}</span>
                                            <motion.div
                                                animate={{ rotate: open ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {open ? (
                                                    <Minus className="w-5 h-5 text-yellow-400" />
                                                ) : (
                                                    <Plus className="w-5 h-5 text-yellow-400" />
                                                )}
                                            </motion.div>
                                        </Disclosure.Button>
                                        <Disclosure.Panel>
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="px-6 py-4 text-gray-400 border-t border-white/10"
                                            >
                                                {faq.answer}
                                            </motion.div>
                                        </Disclosure.Panel>
                                    </div>
                                )}
                            </Disclosure>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;