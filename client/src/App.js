import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Features from './components/features';
import Landing from './components/landing';
import Footer from './components/footer';

function App() {
  return (
    <div className='main'>
      <Navbar />
      <Hero />
      <Features />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;