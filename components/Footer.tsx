import React from 'react';

const Footer: React.FC = () => {
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
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Diagnóstico</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Solución</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-white/40 text-xs uppercase tracking-widest mb-6">Contacto</h4>
            <ul className="space-y-3 text-sm text-fino-text">
              <li className="flex flex-col sm:flex-row gap-6">
                <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                  <span className="w-1 h-1 bg-fino-purple rounded-full"></span>
                  perezdelgadojc@veta.agency
                </span>
                <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                  <span className="w-1 h-1 bg-fino-purple rounded-full"></span>
                  lahunagustin@veta.agency
                </span>
              </li>
              <li className="pt-4"><a href="#agendar" className="text-white font-bold hover:text-fino-purple transition-colors border-b border-white/20 pb-0.5 hover:border-fino-purple">Agendar llamada →</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-fino-text/40">
            &copy; {new Date().getFullYear()} Veta. All rights reserved.
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