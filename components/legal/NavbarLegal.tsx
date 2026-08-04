import React from 'react';
import { Link, NavLink } from 'react-router-dom';

/**
 * Navbar reducido para las páginas legales.
 * El Navbar principal usa anclas de la home (#diagnostico, #solucion),
 * que fuera de la home no llevan a ningún lado.
 */
const NavbarLegal: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-fino-text/60 hover:text-white'}`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#08080A]/80 backdrop-blur-xl border-b border-white/5 py-3 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 flex items-center justify-center">
              <img src="/logo.png" alt="Veta" className="w-full h-full object-contain" />
            </div>
            <span className="text-lg font-medium tracking-tight text-white">Veta</span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-7 overflow-x-auto no-scrollbar">
            <NavLink to="/terminos" className={linkClass}>
              <span className="whitespace-nowrap">Términos</span>
            </NavLink>
            <NavLink to="/privacidad" className={linkClass}>
              <span className="whitespace-nowrap">Privacidad</span>
            </NavLink>
            <NavLink to="/contacto" className={linkClass}>
              <span className="whitespace-nowrap">Contacto</span>
            </NavLink>
            <Link
              to="/#agendar"
              className="hidden sm:inline-flex bg-fino-purple hover:bg-fino-purple_dark text-white px-5 py-2 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(118,63,245,0.3)] hover:shadow-[0_0_30px_rgba(118,63,245,0.5)] text-sm whitespace-nowrap"
            >
              Agendar Llamada
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLegal;
