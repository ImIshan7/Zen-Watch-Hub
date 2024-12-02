import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Watch, Menu, X, ShoppingBag, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { state } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed w-full z-40 transition-all duration-500 ${
                    isScrolled ? 'glass-effect py-2' : 'bg-transparent py-4'
                }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="flex items-center space-x-2 group"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Watch className="h-8 w-8 text-primary-gold group-hover:text-primary-silver transition-colors" />
                            <span className="text-xl font-bold text-white font-['Playfair_Display']">
                Zen Watch Hub
              </span>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {[
                                { name: 'Collections', id: 'collections' },
                                { name: 'About', id: 'about' },
                                { name: 'Gallery', id: 'gallery' },
                                { name: 'Contact', id: 'contact' }
                            ].map((item) => (
                                <motion.button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.id)}
                                    className="relative text-neutral-200 hover:text-primary-gold transition-colors duration-300 text-sm font-medium group"
                                    whileHover={{ y: -2 }}
                                >
                                    {item.name}
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                                </motion.button>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="p-2 rounded-full glass-effect-light text-primary-silver hover:text-primary-gold transition-colors duration-300"
                            >
                                <Search className="w-5 h-5" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 rounded-full glass-effect-light text-primary-gold hover:text-primary-silver transition-colors duration-300"
                            >
                                <ShoppingBag className="w-5 h-5" />
                                {state.items.length > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-accent-crimson text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {state.items.length}
                  </span>
                                )}
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 md:hidden rounded-full glass-effect-light text-primary-silver hover:text-primary-gold transition-colors duration-300"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden mt-4"
                            >
                                <div className="glass-effect rounded-2xl p-4 space-y-2">
                                    {[
                                        { name: 'Collections', id: 'collections' },
                                        { name: 'About', id: 'about' },
                                        { name: 'Gallery', id: 'gallery' },
                                        { name: 'Contact', id: 'contact' }
                                    ].map((item) => (
                                        <motion.button
                                            key={item.name}
                                            onClick={() => scrollToSection(item.id)}
                                            className="block w-full text-left px-4 py-2 rounded-lg text-neutral-200 hover:text-primary-gold hover:bg-white/5 transition-all duration-300"
                                            whileHover={{ x: 4 }}
                                        >
                                            {item.name}
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>

            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};

export default Navbar;