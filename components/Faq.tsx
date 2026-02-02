import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "¿Para quién es este sistema?",
    answer: "Este sistema es para founders de SaaS B2B con PMF validado, que ya venden (USD 5k–50k MRR), tienen buen producto y bajo churn, pero no cuentan con un sistema predecible de generación de reuniones calificadas."
  },
  {
    question: "¿En qué se diferencian de una agencia de marketing tradicional?",
    answer: "No ejecutamos campañas aisladas ni optimizamos métricas sueltas. Diseñamos e implementamos un sistema completo de adquisición (mensaje, funnel, automatización y medición) alineado al negocio y al ciclo de venta del SaaS."
  },
  {
    question: "¿Trabajan con LinkedIn?",
    answer: "Nuestro foco está en capturar y convertir demanda con Google y Meta mediante sistemas medibles y escalables. Si LinkedIn existe en tu operación, lo contemplamos a nivel estratégico, pero no basamos el sistema en outreach manual."
  },
  {
    question: "¿Necesito invertir en anuncios?",
    answer: "Sí. Para generar señales y escalar, el sistema requiere presupuesto activo en paid media. Nuestro objetivo no es “gastar más”, sino crecer manteniendo o mejorando el costo por reunión calificada."
  },
  {
    question: "¿Cuánto tiempo requiere de mi parte?",
    answer: "Muy poco. El sistema es done-for-you. Solo necesitamos una llamada semanal de 30–45 minutos para revisar métricas y calidad de las reuniones."
  },
  {
    question: "¿Qué consideran una reunión calificada?",
    answer: "Una reunión con el ICP correcto, con dolor real, capacidad de decisión y potencial de compra. Los criterios se definen en la primera fase y se revisan semanalmente."
  },
  {
    question: "¿Qué garantía ofrecen?",
    answer: "Garantía condicional a 90 días. Si cumplís con el proceso acordado y no aumentamos el volumen de reuniones calificadas, seguimos trabajando sin costo hasta lograrlo."
  }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#08080A] border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-fino-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-fino-purple mb-4 block">
            <HelpCircle className="w-8 h-8 mx-auto opacity-80" />
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-fino-text/60">
            Todo lo que necesitás saber antes de escalar.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/[0.03] border-fino-purple/30' : 'bg-transparent border-white/5 hover:border-white/10'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-medium text-lg pr-8 ${isOpen ? 'text-white' : 'text-white/80'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 p-1 rounded-full ${isOpen ? 'bg-fino-purple text-white' : 'text-white/40'}`}>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-fino-text/80 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/60 mb-6">¿Tu duda no está acá?</p>
          <a
            href="#agendar"
            className="inline-flex items-center gap-2 text-fino-purple hover:text-white transition-colors font-medium border-b border-fino-purple/30 pb-0.5 hover:border-white"
          >
            Agendá una llamada y hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;