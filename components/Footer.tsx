import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EMPRESA, CONTACTO } from './legal/legalData';

const Footer: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/google';

  // En la home resolvemos el ancla con scroll suave; fuera de ella dejamos que
  // React Router navegue a "/" y ScrollToTop se encargue del hash.
  const irASeccion = (id: string) => (e: React.MouseEvent) => {
    if (!isHome) return;
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">

          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/logo.png" alt="Veta" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-medium text-white tracking-tight">Veta</span>
            </div>
            <div className="text-[10px] font-bold text-fino-purple uppercase tracking-wider mb-3 bg-fino-purple/10 inline-block px-2 py-1 rounded">Growth System</div>
            <p className="text-xs text-white font-medium mb-4">SaaS B2B · PMF validado · Escalado en 90 días</p>
            <p className="text-xs text-fino-text/60 leading-relaxed max-w-xs">
              Sistema de adquisición predecible para generar reuniones calificadas sin quemar presupuesto.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white/40 text-xs uppercase tracking-widest mb-6">Secciones</h4>
            <ul className="space-y-3 text-sm text-fino-text">
              <li><Link to="/#inicio" onClick={irASeccion('inicio')} className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/#diagnostico" onClick={irASeccion('diagnostico')} className="hover:text-white transition-colors">Diagnóstico</Link></li>
              <li><Link to="/#solucion" onClick={irASeccion('solucion')} className="hover:text-white transition-colors">Solución</Link></li>
              <li><Link to="/softwarefactory" className="hover:text-white transition-colors">Software Factory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white/40 text-xs uppercase tracking-widest mb-6">Legales</h4>
            <ul className="space-y-3 text-sm text-fino-text">
              <li><Link to="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link></li>
              <li><Link to="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white/40 text-xs uppercase tracking-widest mb-6">Contacto</h4>
            <ul className="space-y-3 text-sm text-fino-text">
              <li>
                <a href={`mailto:${CONTACTO.emailPrincipal}`} className="hover:text-white transition-colors flex items-center gap-2 break-all">
                  <span className="w-1 h-1 bg-fino-purple rounded-full flex-shrink-0"></span>
                  {CONTACTO.emailPrincipal}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACTO.emailSecundario}`} className="hover:text-white transition-colors flex items-center gap-2 break-all">
                  <span className="w-1 h-1 bg-fino-purple rounded-full flex-shrink-0"></span>
                  {CONTACTO.emailSecundario}
                </a>
              </li>
              <li className="pt-4"><Link to="/#agendar" onClick={irASeccion('agendar')} className="text-white font-bold hover:text-fino-purple transition-colors border-b border-white/20 pb-0.5 hover:border-fino-purple">Agendar llamada →</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-fino-text/40 text-center md:text-left">
            &copy; {new Date().getFullYear()} {EMPRESA.razonSocial}. Todos los derechos reservados.
          </p>
          <div className="flex items-center bg-white/5 border border-white/5 px-4 py-2 rounded-full">
            <span className="text-[10px] text-fino-text/60 mr-3">Reuniones calificadas · Conversión real</span>
            <span className="text-[10px] text-white bg-fino-purple/20 border border-fino-purple/30 px-2 py-0.5 rounded font-medium">Sin humo</span>
          </div>
          <p className="text-xs text-fino-text/40">
            Dev by Atlon.io
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
