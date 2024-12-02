import React from 'react';
import { Shield, Truck, RefreshCw, CreditCard } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            title: 'Premium Protection',
            description: '100% money-back guarantee with our comprehensive protection plan',
            icon: Shield,
            image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80'
        },
        {
            title: 'Secure Payments',
            description: 'Multiple payment options with advanced encryption security',
            icon: CreditCard,
            image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80'
        },
        {
            title: 'Global Shipping',
            description: 'Fast worldwide delivery with premium carriers and tracking',
            icon: Truck,
            image: 'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80'
        },
        {
            title: 'Easy Returns',
            description: 'Hassle-free returns with free shipping and instant refunds',
            icon: RefreshCw,
            image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80'
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Why Choose Us
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={benefit.title}
                            className="group relative overflow-hidden rounded-2xl"
                            style={{
                                transform: `translateY(${50}px)`,
                                opacity: 0,
                                animation: `slideUp 0.5s ease-out ${index * 0.2}s forwards`
                            }}
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={benefit.image}
                                    alt={benefit.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
                            </div>

                            <div className="relative p-8 h-full flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <benefit.icon className="w-8 h-8 text-yellow-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-gray-300">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes slideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
        </section>
    );
};

export default Benefits;