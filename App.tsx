import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import NavbarFactory from './components/factory/NavbarFactory';
import FooterFactory from './components/factory/FooterFactory';
import HomeFactory from './components/factory/HomeFactory';
import NavbarLegal from './components/legal/NavbarLegal';
import Terminos from './components/legal/Terminos';
import Privacidad from './components/legal/Privacidad';
import Contacto from './components/legal/Contacto';

const LEGAL_PATHS = ['/terminos', '/terminos-y-condiciones', '/privacidad', '/politica-de-privacidad', '/contacto'];

const META_POR_RUTA: Record<string, { title: string; description: string }> = {
  '/terminos': {
    title: 'Términos y Condiciones · Veta',
    description: 'Términos y condiciones de uso del sitio y los servicios de Activeta Agency SAS (Veta).',
  },
  '/privacidad': {
    title: 'Política de Privacidad · Veta',
    description:
      'Cómo Activeta Agency SAS (Veta) recolecta, usa y protege tus datos personales, conforme a la Ley 25.326.',
  },
  '/contacto': {
    title: 'Contacto · Veta',
    description: 'Escribinos por email o WhatsApp, o agendá una llamada de diagnóstico con el equipo de Veta.',
  },
};

function Layout() {
  const location = useLocation();
  // Normalizamos el trailing slash para que /terminos y /terminos/ resuelvan igual.
  const pathname = location.pathname.length > 1 ? location.pathname.replace(/\/+$/, '') : location.pathname;
  const isThankYou = pathname === '/thank-you';
  const isFactory = pathname.startsWith('/softwarefactory');
  const isLegal = LEGAL_PATHS.includes(pathname);

  React.useEffect(() => {
    const setMeta = (title: string, description: string) => {
      document.title = title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', description);
    };

    const legalMeta = META_POR_RUTA[pathname];

    if (legalMeta) {
      setMeta(legalMeta.title, legalMeta.description);
    } else if (isFactory) {
      setMeta(
        'VETA Dev - Software Factory · Desarrollo a Medida',
        'Construimos software a medida, automatizaciones con IA y agentes para empresas. Entrega predecible, código tuyo, soporte real.'
      );
    } else {
      setMeta(
        'VETA - Growth System para SaaS B2B',
        'Escalá tu SaaS con un sistema predecible de reuniones calificadas.'
      );
    }
  }, [pathname, isFactory]);

  const shell = 'min-h-screen flex flex-col font-sans bg-fino-bg text-fino-text selection:bg-fino-purple selection:text-white overflow-x-hidden';

  if (isLegal) {
    return (
      <div className={shell}>
        <div className="bg-noise"></div>
        <NavbarLegal />
        <main className="flex-grow">
          <Routes>
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/terminos-y-condiciones" element={<Terminos />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/politica-de-privacidad" element={<Privacidad />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }

  if (isFactory) {
    return (
      <div className={shell}>
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
    <div className={shell}>
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
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;
