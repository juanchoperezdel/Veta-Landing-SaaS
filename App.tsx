import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';

function Layout() {
  const location = useLocation();
  const isThankYou = location.pathname === '/thank-you';

  return (
    <div className="min-h-screen flex flex-col font-sans bg-fino-bg text-fino-text selection:bg-fino-purple selection:text-white overflow-x-hidden">
      <div className="bg-noise"></div>
      {!isThankYou && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
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