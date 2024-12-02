import React, { useEffect, useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const Reviews = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const reviews = [
        {
            name: 'John Doe',
            role: 'Watch Collector',
            review: 'Exceptional service and product quality. The vintage watch I received exceeded my expectations. Fast delivery!',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
        },
        {
            name: 'Jane Smith',
            role: 'Horology Enthusiast',
            review: 'The attention to detail and authenticity of these vintage pieces is remarkable. Worth every penny!',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
        },
        {
            name: 'Emily Johnson',
            role: 'Luxury Consultant',
            review: 'Best vintage watch shopping experience. Great communication and the watch arrived in perfect condition.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % reviews.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="bg-gray-900 py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-16">
                    What Our Clients Say
                </h2>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>

                    {/* Reviews Slider */}
                    <div className="relative h-[400px] overflow-hidden">
                        <div
                            className="absolute w-full transition-transform duration-500 ease-out flex"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 px-4"
                                >
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mx-auto max-w-3xl">
                                        <div className="flex flex-col items-center text-center">
                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                className="w-20 h-20 rounded-full object-cover mb-4"
                                            />
                                            <div className="flex mb-4">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-5 h-5 text-yellow-400 fill-current"
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-gray-300 text-lg mb-6 italic">
                                                "{review.review}"
                                            </p>
                                            <h3 className="text-white font-semibold text-xl">
                                                {review.name}
                                            </h3>
                                            <p className="text-gray-400">{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    currentSlide === index ? 'bg-yellow-400 w-6' : 'bg-white/30'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;