import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Process from './components/Process';
import Comparison from './components/Comparison';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-fino-bg text-fino-text selection:bg-fino-purple selection:text-white overflow-x-hidden">
      <div className="bg-noise"></div>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Process />
        <Comparison />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;