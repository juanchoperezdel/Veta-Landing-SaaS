import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "¿Qué tipo de proyectos desarrollan?",
    answer: "Aplicaciones web a medida, plataformas internas, dashboards operativos, APIs e integraciones entre sistemas, mobile apps y automatizaciones de procesos. Trabajamos con empresas que necesitan tecnología propia para operar o escalar, no soluciones genéricas."
  },
  {
    question: "¿Cómo definen el alcance y el precio?",
    answer: "Empezamos con una etapa de Discovery donde mapeamos el negocio, los flujos y los requerimientos. Con eso generamos un scope detallado con hitos, entregables y precio fijo por etapa. Sin sorpresas ni extras que aparecen a mitad del proyecto."
  },
  {
    question: "¿Con qué tecnologías trabajan?",
    answer: "Usamos el stack más adecuado para cada proyecto, priorizando tecnologías maduras, mantenibles y con ecosistemas activos. Trabajamos con React, Next.js, Node.js, Python, React Native, entre otros. No imponemos stack: lo definimos juntos en el Discovery según las necesidades del negocio."
  },
  {
    question: "¿Qué pasa si el proyecto cambia durante el desarrollo?",
    answer: "Trabajamos en sprints semanales con demos al final de cada uno. Si hay cambios de scope, los evaluamos juntos, los documentamos y los incorporamos al plan con visibilidad total de impacto en tiempos y costo. Nada se hace de forma silenciosa."
  },
  {
    question: "¿Cuánto tiempo lleva tener una primera versión funcional?",
    answer: "Depende del proyecto, pero en la mayoría de los casos tenés las primeras pantallas funcionales en 2–3 semanas desde el cierre del Discovery. Trabajamos en modo iterativo: vas viendo avance real cada semana, no esperás meses para ver algo."
  },
  {
    question: "¿Hacen mantenimiento y soporte post-launch?",
    answer: "Sí. Ofrecemos planes de soporte y mantenimiento con SLA definido una vez que el proyecto está en producción. No desaparecemos después del go-live. Si necesitás evolucionar el producto, también podemos acompañar ese proceso."
  },
  {
    question: "¿El código y la propiedad intelectual son nuestros?",
    answer: "Sí, siempre. El código es tuyo desde el primer día. Entregamos el repositorio completo, documentación técnica y funcional, y todo lo necesario para que tu equipo (o cualquier otro proveedor) pueda tomar el proyecto sin fricción."
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
            Todo lo que necesitás saber antes de arrancar.
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
