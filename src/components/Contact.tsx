import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            details: 'contact@chronowatch.com',
            action: 'mailto:contact@chronowatch.com'
        },
        {
            icon: Phone,
            title: 'Phone',
            details: '+1 (555) 123-4567',
            action: 'tel:+15551234567'
        },
        {
            icon: MapPin,
            title: 'Visit Our Store',
            details: '123 Luxury Lane, New York',
            action: '#'
        }
    ];

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-secondary-charcoal to-primary-deepBlue relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80')] bg-cover bg-fixed opacity-5" />

            <div className="container-custom relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Get in <span className="text-primary-gold">Touch</span>
                    </h2>
                    <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
                        Have questions about our timepieces? We'd love to hear from you and assist with your inquiries.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-effect rounded-2xl p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="input-field"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="input-field"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    className="input-field resize-none"
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                                    isSubmitting
                                        ? 'bg-primary-silver text-secondary-charcoal'
                                        : 'bg-primary-gold text-secondary-charcoal hover:bg-primary-silver'
                                }`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                                ) : (
                                    <span className="flex items-center justify-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                                )}
                            </motion.button>

                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center justify-center space-x-2 text-green-400"
                                >
                                    <CheckCircle className="h-5 w-5" />
                                    <span>Message sent successfully!</span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {contactInfo.map((item, index) => (
                            <motion.a
                                key={item.title}
                                href={item.action}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="glass-effect rounded-2xl p-6 flex items-center space-x-4 cursor-pointer"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-primary-gold/10 flex items-center justify-center text-primary-gold">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                    <p className="text-neutral-300">{item.details}</p>
                                </div>
                            </motion.a>
                        ))}

                        <div className="glass-effect rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                            <div className="space-y-2 text-neutral-300">
                                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                                <p>Saturday: 10:00 AM - 6:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;