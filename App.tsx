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

  React.useEffect(() => {
    if (isFactory) {
      document.title = 'VETA Dev - Software Factory · Desarrollo a Medida';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', 'Construimos software a medida, automatizaciones con IA y agentes para empresas. Entrega predecible, código tuyo, soporte real.');
    } else {
      document.title = 'VETA - Growth System para SaaS B2B';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', 'Escalá tu SaaS con un sistema predecible de reuniones calificadas.');
    }
  }, [isFactory]);

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