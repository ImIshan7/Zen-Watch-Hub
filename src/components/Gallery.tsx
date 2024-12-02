import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Gallery = () => {
    const [index, setIndex] = useState(-1);

    const photos = [
        {
            src: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80',
            width: 1600,
            height: 900,
            title: 'Luxury Timepiece'
        },
        {
            src: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
            width: 1600,
            height: 900,
            title: 'Classic Watch'
        },
        {
            src: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80',
            width: 1600,
            height: 900,
            title: 'Vintage Collection'
        },
        {
            src: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80',
            width: 1600,
            height: 900,
            title: 'Modern Design'
        },
        {
            src: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80',
            width: 1600,
            height: 900,
            title: 'Elegant Watch'
        },
        {
            src: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80',
            width: 1600,
            height: 900,
            title: 'Premium Collection'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    const titleVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section id="gallery" className="py-24 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl font-bold text-white mb-4 font-['Playfair_Display']"
                        variants={titleVariants}
                    >
                        Our Gallery
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                        variants={titleVariants}
                    >
                        Explore our collection of exquisite timepieces through stunning photography
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden"
                >
                    <PhotoAlbum
                        layout="rows"
                        photos={photos}
                        onClick={({ index }) => setIndex(index)}
                        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
                            <motion.div
                                style={wrapperStyle}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                {renderDefaultPhoto({ wrapped: true })}
                            </motion.div>
                        )}
                    />

                    <Lightbox
                        slides={photos}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;