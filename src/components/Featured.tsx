import React from 'react';
import { Star } from 'lucide-react';

const Featured = () => {
    const featuredWatches = [
        {
            id: 1,
            name: 'Zen Chronograph',
            price: '$599',
            image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
            rating: 5
        },
        {
            id: 2,
            name: 'Mindful Classic',
            price: '$799',
            image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80',
            rating: 4
        },
        {
            id: 3,
            name: 'Serenity Pro',
            price: '$899',
            image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80',
            rating: 5
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Featured Timepieces
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Discover our most sought-after collections
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {featuredWatches.map((watch) => (
                        <div key={watch.id} className="group relative hover-scale">
                            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                                <img
                                    src={watch.image}
                                    alt={watch.name}
                                    className="w-full h-64 object-cover object-center"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">
                                        {watch.name}
                                    </h3>
                                    <p className="mt-1 text-xl font-semibold text-indigo-600">
                                        {watch.price}
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    {[...Array(watch.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 text-yellow-400 fill-current"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;