import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "¿Esto funciona para clínicas pequeñas o de reciente apertura?",
    answer: "Absolutamente. De hecho, es ideal para establecer una base sólida de clientes desde el principio. Nuestro sistema se adapta al tamaño y capacidad de tu clínica para no saturarte, pero asegurando un crecimiento constante."
  },
  {
    question: "¿Cuánto tiempo tardaré en ver resultados?",
    answer: "La mayoría de nuestros clientes empiezan a ver nuevas citas agendadas en los primeros 7-14 días tras el lanzamiento de las campañas. El sistema está diseñado para generar impacto inmediato."
  },
  {
    question: "¿Tengo que saber de tecnología o marketing?",
    answer: "No. Nosotros nos encargamos del 100% de la parte técnica, la configuración de anuncios, el software de citas y las automatizaciones. Tú solo tienes que preocuparte de atender a los pacientes que te enviamos."
  },
  {
    question: "¿Hay permanencia?",
    answer: "Confiamos tanto en nuestros resultados que no necesitamos atarte con contratos largos. Trabajamos mes a mes, y si no estás satisfecho, puedes cancelar en cualquier momento."
  }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Preguntas Frecuentes</h2>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-slate-900 text-lg">{item.question}</span>
                {openIndex === index ? (
                  <Minus className="text-brand-600 flex-shrink-0" />
                ) : (
                  <Plus className="text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;