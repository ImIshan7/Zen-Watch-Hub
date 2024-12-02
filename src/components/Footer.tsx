import React from 'react';
import { motion } from 'framer-motion';
import { Watch, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
    const footerSections = [
        {
            title: 'Quick Links',
            links: [
                { name: 'Home', href: '#' },
                { name: 'About', href: '#about' },
                { name: 'Collections', href: '#collections' },
                { name: 'Contact', href: '#contact' }
            ]
        },
        {
            title: 'Customer Service',
            links: [
                { name: 'Shipping Policy', href: '#' },
                { name: 'Returns & Exchanges', href: '#' },
                { name: 'Watch Care Guide', href: '#' },
                { name: 'FAQ', href: '#faq' }
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' },
                { name: 'Warranty Information', href: '#' },
                { name: 'Cookie Policy', href: '#' }
            ]
        }
    ];

    const socialLinks = [
        { icon: Facebook, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Instagram, href: '#' },
        { icon: Youtube, href: '#' }
    ];

    return (
        <footer className="bg-primary-deepBlue relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary-charcoal/50" />

            <div className="container-custom relative">
                {/* Newsletter Section */}
                <div className="py-12 border-b border-primary-silver/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Subscribe to Our Newsletter
                        </h3>
                        <p className="text-neutral-300 mb-6">
                            Stay updated with our latest collections and exclusive offers.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 input-field"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 rounded-full bg-primary-gold text-secondary-charcoal font-medium hover:bg-primary-silver transition-colors duration-300 flex items-center justify-center"
                            >
                                Subscribe
                                <Mail className="ml-2 h-4 w-4" />
                            </motion.button>
                        </form>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <motion.a
                            href="#"
                            className="flex items-center space-x-2 group mb-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Watch className="h-8 w-8 text-primary-gold group-hover:text-primary-silver transition-colors" />
                            <span className="text-2xl font-bold text-white font-['Playfair_Display']">
               Zen Watch Hub
              </span>
                        </motion.a>
                        <p className="text-neutral-300 mb-6 max-w-md">
                            Crafting timeless elegance through precision engineering and mindful design.
                            Each timepiece tells a unique story of luxury and innovation.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-10 h-10 rounded-full bg-primary-gold/10 flex items-center justify-center text-primary-gold hover:bg-primary-gold hover:text-secondary-charcoal transition-colors duration-300"
                                >
                                    <social.icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Columns */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-lg font-semibold text-white mb-6">
                                {section.title}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <motion.a
                                            href={link.href}
                                            className="text-neutral-300 hover:text-primary-gold transition-colors duration-300 flex items-center"
                                            whileHover={{ x: 4 }}
                                        >
                                            {link.name}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-primary-silver/10 text-center text-neutral-400 text-sm">
                    <p>© {new Date().getFullYear()} Zen Watch Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;