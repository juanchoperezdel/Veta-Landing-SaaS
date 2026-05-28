import React, { useState } from 'react';
import { Check, X, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const COMPARISON_DATA = [
  {
    criterio: "Velocidad de arranque",
    inHouse: "Meses de hiring, onboarding y alineación antes de la primera línea de código",
    inHouseIcon: "x",
    freelancer: "Disponibilidad incierta y curva de contexto en cada proyecto",
    freelancerIcon: "x",
    veta: "Arrancamos en días con un equipo ya formado y proceso definido",
    vetaIcon: "check"
  },
  {
    criterio: "Continuidad del proyecto",
    inHouse: "Alto riesgo de rotación: si se va alguien clave, perdés conocimiento",
    inHouseIcon: "x",
    freelancer: "Sin garantía de continuidad ni commitment a largo plazo",
    freelancerIcon: "x",
    veta: "Equipo estable con ownership completo del proyecto de principio a fin",
    vetaIcon: "check"
  },
  {
    criterio: "Documentación y handoff",
    inHouse: "Depende del equipo y cultura interna; generalmente incompleta",
    inHouseIcon: "dash",
    freelancer: "Generalmente inexistente o mínima, sin estándar",
    freelancerIcon: "x",
    veta: "Documentación técnica y funcional incluida como parte del entregable",
    vetaIcon: "check"
  },
  {
    criterio: "Costo y previsibilidad",
    inHouse: "Costo fijo alto con overhead (sueldos, equipos, licencias, gestión)",
    inHouseIcon: "x",
    freelancer: "Precio variable, sin certeza de scope ni fecha de entrega",
    freelancerIcon: "x",
    veta: "Costo claro por scope y sprint, sin sorpresas ni extras inesperados",
    vetaIcon: "check"
  },
  {
    criterio: "Escalabilidad del equipo",
    inHouse: "Requiere más contratación: lento, costoso y difícil de revertir",
    inHouseIcon: "x",
    freelancer: "No escala bien: agregar más freelancers multiplica la coordinación",
    freelancerIcon: "x",
    veta: "Ajustamos capacidad según el proyecto, sin overhead de gestión",
    vetaIcon: "check"
  },
  {
    criterio: "Calidad y code review",
    inHouse: "Depende del seniority y cultura del equipo interno",
    inHouseIcon: "dash",
    freelancer: "Sin proceso estándar de revisión ni estándares compartidos",
    freelancerIcon: "x",
    veta: "Code review y estándares de calidad en cada sprint, sin negociación",
    vetaIcon: "check"
  },
  {
    criterio: "Post-deploy y soporte",
    inHouse: "Depende de disponibilidad interna y prioridades del equipo",
    inHouseIcon: "dash",
    freelancer: "Sin compromiso: el proyecto termina y el freelancer desaparece",
    freelancerIcon: "x",
    veta: "Soporte y mantenimiento incluido con SLA definido",
    vetaIcon: "check"
  },
  {
    criterio: "Conocimiento del negocio",
    inHouse: "Alta cercanía, pero foco dividido entre tareas operativas",
    inHouseIcon: "dash",
    freelancer: "Bajo: contexto limitado y sin incentivo para profundizar",
    freelancerIcon: "x",
    veta: "Nos embebemos como extensión del equipo con foco total en el proyecto",
    vetaIcon: "check"
  }
];

const Comparison: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-fino-bg relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-white/40 uppercase border border-white/10 px-4 py-1.5 rounded-full bg-white/5 mb-6 inline-block tracking-widest backdrop-blur-sm">Comparativa</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Por qué esto funciona mejor <br /> que las alternativas típicas
          </h2>
          <p className="text-fino-text font-light text-lg">Comparación directa, sin humo.</p>
        </div>

        {/* DESKTOP VIEW (TABLE) */}
        <div className="hidden md:block overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="py-8 px-6 text-left text-xs font-bold text-fino-text/40 uppercase tracking-widest w-1/4">Criterio</th>
                <th className="py-8 px-6 text-left text-xs font-bold text-fino-text/40 uppercase tracking-widest w-1/4">EQUIPO IN-HOUSE</th>
                <th className="py-8 px-6 text-left text-xs font-bold text-fino-text/40 uppercase tracking-widest w-1/4">FREELANCER</th>
                <th className="py-8 px-6 text-left text-xs font-bold text-white uppercase tracking-widest w-1/4 bg-fino-purple/10 rounded-t-2xl border-t border-x border-fino-purple/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-fino-purple"></div>
                  VETA DEV
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {COMPARISON_DATA.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-6 px-6 font-semibold text-white">{row.criterio}</td>

                  {/* In-House */}
                  <td className="py-6 px-6 text-fino-text/80">
                    <div className="flex gap-4">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10 ${row.inHouseIcon === 'x' ? 'text-red-400' : 'text-yellow-400'}`}>
                        {row.inHouseIcon === 'x' ? <X size={12} strokeWidth={3} /> : <Minus size={12} strokeWidth={3} />}
                      </div>
                      <span className="leading-snug">{row.inHouse}</span>
                    </div>
                  </td>

                  {/* Freelancer */}
                  <td className="py-6 px-6 text-fino-text/80">
                    <div className="flex gap-4">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10 ${row.freelancerIcon === 'x' ? 'text-red-400' : 'text-yellow-400'}`}>
                        {row.freelancerIcon === 'x' ? <X size={12} strokeWidth={3} /> : <Minus size={12} strokeWidth={3} />}
                      </div>
                      <span className="leading-snug">{row.freelancer}</span>
                    </div>
                  </td>

                  {/* VETA DEV */}
                  <td className="py-6 px-6 bg-fino-purple/5 text-white border-x border-fino-purple/10">
                    <div className="flex gap-4">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-fino-purple text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(118,63,245,0.4)]">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      <span className="leading-snug font-medium">{row.veta}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE VIEW (ACCORDION) */}
        <div className="md:hidden space-y-4">
          {COMPARISON_DATA.map((row, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-white/[0.03] border-white/20 shadow-lg' : 'bg-white/[0.01] border-white/5'}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className={`font-medium ${isOpen ? 'text-white' : 'text-white/70'}`}>
                    {row.criterio}
                  </span>
                  <div className={`p-1 rounded-full transition-colors ${isOpen ? 'bg-white/10 text-white' : 'text-white/40'}`}>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-5 space-y-4 pt-1 border-t border-white/5">
                        {/* VETA DEV (First for impact) */}
                        <div className="bg-fino-purple/10 rounded-lg p-3 border border-fino-purple/30 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1 h-full bg-fino-purple"></div>
                          <div className="flex gap-3 mb-1">
                            <span className="text-[10px] uppercase font-bold text-fino-purple tracking-wider">Veta Dev</span>
                          </div>
                          <div className="flex gap-3 items-start">
                            <div className="mt-0.5 w-4 h-4 rounded-full bg-fino-purple text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(118,63,245,0.4)]">
                              <Check size={10} strokeWidth={4} />
                            </div>
                            <span className="text-sm font-medium text-white leading-snug">{row.veta}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3 pl-2 opacity-80">
                          {/* In-House */}
                          <div className="flex gap-3 items-start">
                            <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10 ${row.inHouseIcon === 'x' ? 'text-red-400' : 'text-yellow-400'}`}>
                              {row.inHouseIcon === 'x' ? <X size={10} strokeWidth={3} /> : <Minus size={10} strokeWidth={3} />}
                            </div>
                            <div>
                              <div className="text-[10px] uppercase text-white/40 tracking-wider mb-0.5">In-House</div>
                              <span className="text-sm text-fino-text/90 leading-snug">{row.inHouse}</span>
                            </div>
                          </div>
                          {/* Freelancer */}
                          <div className="flex gap-3 items-start">
                            <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10 ${row.freelancerIcon === 'x' ? 'text-red-400' : 'text-yellow-400'}`}>
                              {row.freelancerIcon === 'x' ? <X size={10} strokeWidth={3} /> : <Minus size={10} strokeWidth={3} />}
                            </div>
                            <div>
                              <div className="text-[10px] uppercase text-white/40 tracking-wider mb-0.5">Freelancer</div>
                              <span className="text-sm text-fino-text/90 leading-snug">{row.freelancer}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#agendar" className="bg-white text-black px-12 py-4 rounded-full font-semibold uppercase text-xs tracking-widest hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
