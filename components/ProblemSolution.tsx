import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* The Old Way */}
          <div className="bg-red-50 p-8 md:p-10 rounded-3xl border border-red-100">
            <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
              <XCircle className="text-red-500" />
              La "Vieja Forma"
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-red-800/80">
                <XCircle size={20} className="mt-1 flex-shrink-0 text-red-400" />
                <span>Depender totalmente del "boca a boca" impredecible.</span>
              </li>
              <li className="flex items-start gap-3 text-red-800/80">
                <XCircle size={20} className="mt-1 flex-shrink-0 text-red-400" />
                <span>Competir por precio con otras clínicas low-cost.</span>
              </li>
              <li className="flex items-start gap-3 text-red-800/80">
                <XCircle size={20} className="mt-1 flex-shrink-0 text-red-400" />
                <span>Publicar en Instagram sin ver ningún retorno real.</span>
              </li>
              <li className="flex items-start gap-3 text-red-800/80">
                <XCircle size={20} className="mt-1 flex-shrink-0 text-red-400" />
                <span>Agenda vacía y facturación estancada mes a mes.</span>
              </li>
            </ul>
          </div>

          {/* The VetaBoost Way */}
          <div className="bg-brand-50 p-8 md:p-10 rounded-3xl border border-brand-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMENDADO</div>
            <h3 className="text-2xl font-bold text-brand-900 mb-6 flex items-center gap-3">
              <CheckCircle className="text-brand-500" />
              El Método VetaBoost
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-900/80">
                <CheckCircle size={20} className="mt-1 flex-shrink-0 text-brand-500" />
                <span>Sistema automatizado que llena tu agenda en piloto automático.</span>
              </li>
              <li className="flex items-start gap-3 text-brand-900/80">
                <CheckCircle size={20} className="mt-1 flex-shrink-0 text-brand-500" />
                <span>Atraer dueños comprometidos dispuestos a pagar por calidad.</span>
              </li>
              <li className="flex items-start gap-3 text-brand-900/80">
                <CheckCircle size={20} className="mt-1 flex-shrink-0 text-brand-500" />
                <span>Posicionamiento como la autoridad veterinaria nº1 en tu zona.</span>
              </li>
              <li className="flex items-start gap-3 text-brand-900/80">
                <CheckCircle size={20} className="mt-1 flex-shrink-0 text-brand-500" />
                <span>Crecimiento predecible y escalable mes a mes.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;