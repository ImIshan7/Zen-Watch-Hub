import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Featured from './components/Featured';
import About from './components/About';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Deals from './components/Deals';
import FAQ from './components/FAQ';
import Wishlist from './components/Wishlist';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import { CartProvider } from './context/CartContext';

function App() {
  return (
      <CartProvider>
        <Layout>
          <Hero />
          <Featured />
          <About />
          <Benefits />
          <Products />
          <Gallery />
          <Blog />
          <Deals />
          <Wishlist />
          <FAQ />
          <Reviews />
          <Newsletter />
          <Contact />
        </Layout>
      </CartProvider>
  );
}

export default App;