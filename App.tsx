import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';
import NavbarFactory from './components/factory/NavbarFactory';
import FooterFactory from './components/factory/FooterFactory';
import HomeFactory from './components/factory/HomeFactory';

function Layout() {
  const location = useLocation();
  const isThankYou = location.pathname === '/thank-you';
  const isFactory = location.pathname.startsWith('/softwarefactory');

  if (isFactory) {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-fino-bg text-fino-text selection:bg-fino-purple selection:text-white overflow-x-hidden">
        <div className="bg-noise"></div>
        <NavbarFactory />
        <main className="flex-grow">
          <Routes>
            <Route path="/softwarefactory" element={<HomeFactory />} />
          </Routes>
        </main>
        <FooterFactory />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-fino-bg text-fino-text selection:bg-fino-purple selection:text-white overflow-x-hidden">
      <div className="bg-noise"></div>
      {!isThankYou && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/google" element={<Home />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      {!isThankYou && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;