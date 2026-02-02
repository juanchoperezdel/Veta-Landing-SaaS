import React from 'react';
import { CalendarCheck, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-brand-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-500 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-500 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          ¿Listo para llenar tu agenda veterinaria?
        </h2>
        <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
          Agenda una sesión estratégica gratuita de 30 minutos. Analizaremos tu clínica y te daremos un plan de acción personalizado.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-brand-900 font-bold rounded-lg hover:bg-brand-50 transition-all text-lg flex items-center justify-center gap-2 shadow-xl">
            <CalendarCheck size={20} />
            Agendar Mi Auditoría Gratis
          </button>
        </div>
        
        <p className="mt-6 text-sm text-brand-300 opacity-80">
          Sin compromiso de compra. Solo valor real para tu negocio.
        </p>
      </div>
    </section>
  );
};

export default CTA;