import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-[#08080A]/80 backdrop-blur-xl border-b border-white/5 py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              {/* Logo Image - Add your logo.png to the public folder */}
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/logo.png" alt="Veta" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-medium tracking-tight text-white">
                Veta
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <a href="#inicio" className="text-sm font-medium text-fino-text hover:text-white transition-colors">Inicio</a>
            <a href="#diagnostico" className="text-sm font-medium text-fino-text hover:text-white transition-colors">Diagnóstico</a>
            <a href="#solucion" className="text-sm font-medium text-fino-text hover:text-white transition-colors">Solución</a>
            <a href="#agendar" className="bg-fino-purple hover:bg-fino-purple_dark text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(118,63,245,0.3)] hover:shadow-[0_0_30px_rgba(118,63,245,0.5)] text-sm">
              Agendar Llamada
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <a href="#agendar" className="bg-fino-purple text-white px-4 py-2 rounded-full font-medium hover:bg-fino-purple_dark transition-all text-xs" onClick={() => setIsOpen(false)}>
              Agendar
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#08080A] border-b border-white/5 overflow-hidden"
            style={{ height: "calc(100vh - 80px)" }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
              <a href="#inicio" className="text-xl font-medium text-white hover:text-fino-purple transition-colors" onClick={() => setIsOpen(false)}>Inicio</a>
              <a href="#diagnostico" className="text-xl font-medium text-white hover:text-fino-purple transition-colors" onClick={() => setIsOpen(false)}>Diagnóstico</a>
              <a href="#solucion" className="text-xl font-medium text-white hover:text-fino-purple transition-colors" onClick={() => setIsOpen(false)}>Solución</a>
              <a href="#agendar" className="bg-fino-purple text-white px-8 py-3 rounded-full font-medium shadow-[0_0_20px_rgba(118,63,245,0.4)] text-lg" onClick={() => setIsOpen(false)}>
                Agendar Llamada
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;