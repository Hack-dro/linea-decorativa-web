
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import ImageGallery from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#FDFDFB] text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <ImageGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
