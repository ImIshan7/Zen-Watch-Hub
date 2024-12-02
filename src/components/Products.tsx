import React, { useState } from 'react';
import { ShoppingCart, Heart, Filter, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const [addedToCart, setAddedToCart] = useState<number | null>(null);
    const { dispatch } = useCart();

    const categories = ['all', 'luxury', 'sport', 'classic'];

    const products = [
        {
            id: 1,
            name: 'Zen Master Classic',
            category: 'luxury',
            price: 1299,
            image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80',
            description: 'Elegant timepiece with premium craftsmanship'
        },
        {
            id: 2,
            name: 'Mindful Sport',
            category: 'sport',
            price: 899,
            image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
            description: 'Perfect for active lifestyle'
        },
        {
            id: 3,
            name: 'Serenity Elite',
            category: 'luxury',
            price: 2499,
            image: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&q=80',
            description: 'Premium luxury watch'
        },
        {
            id: 4,
            name: 'Harmony Classic',
            category: 'classic',
            price: 699,
            image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80',
            description: 'Timeless classic design'
        }
    ];

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category === activeCategory);

    const addToCart = (product: typeof products[0]) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            }
        });

        // Show success feedback
        setAddedToCart(product.id);
        setTimeout(() => setAddedToCart(null), 2000);
    };

    return (
        <section id="collections" className="py-24 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4 font-['Playfair_Display']">
                        Our Collection
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto" />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                    <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors duration-300 text-white"
                        >
                            <Filter className="w-5 h-5" />
                            <span>Filters</span>
                        </button>
                        {showFilters && (
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                            activeCategory === category
                                                ? 'bg-yellow-400 text-black'
                                                : 'bg-white/5 text-white hover:bg-white/10'
                                        }`}
                                    >
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="group relative overflow-hidden rounded-2xl glass-effect hover:border-yellow-400/50 transition-all duration-300"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                                opacity: 0,
                                transform: 'translateY(20px)'
                            }}
                        >
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-gray-400 mb-4">{product.description}</p>
                                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-yellow-400">
                    ${product.price.toLocaleString()}
                  </span>
                                    <div className="flex space-x-2">
                                        <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300 text-white">
                                            <Heart className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => addToCart(product)}
                                            className={`p-2 rounded-full transition-all duration-300 relative ${
                                                addedToCart === product.id
                                                    ? 'bg-green-500 text-white'
                                                    : 'bg-yellow-400 text-black hover:bg-yellow-300'
                                            }`}
                                        >
                                            {addedToCart === product.id ? (
                                                <CheckCircle className="w-5 h-5" />
                                            ) : (
                                                <ShoppingCart className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
};

export default Products;