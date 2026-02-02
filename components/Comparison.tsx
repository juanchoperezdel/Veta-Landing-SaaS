import React from 'react';
import { Check, X, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-fino-bg relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-white/40 uppercase border border-white/10 px-4 py-1.5 rounded-full bg-white/5 mb-6 inline-block tracking-widest backdrop-blur-sm">Comparativa</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Por qué esto funciona mejor <br /> que alternativas típicas
          </h2>
          <p className="text-fino-text font-light text-lg">Comparación directa, sin humo.</p>

          <div className="mt-8 md:hidden flex justify-center items-center gap-3 text-[10px] text-fino-purple font-bold tracking-widest uppercase animate-pulse">
            <span className="opacity-50">←</span>
            Desliza para comparar
            <span className="opacity-50">→</span>
          </div>
        </div>

        <div className="overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="py-8 px-6 text-left text-xs font-bold text-fino-text/40 uppercase tracking-widest w-1/4">Criterio</th>
                <th className="py-8 px-6 text-left text-xs font-bold text-fino-text/40 uppercase tracking-widest w-1/4">EQUIPO IN-HOUSE</th>
                <th className="py-8 px-6 text-left text-xs font-bold text-fino-text/40 uppercase tracking-widest w-1/4">AGENCIA DE MARKETING</th>
                <th className="py-8 px-6 text-left text-xs font-bold text-white uppercase tracking-widest w-1/4 bg-fino-purple/10 rounded-t-2xl border-t border-x border-fino-purple/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-fino-purple"></div>
                  VETA
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                {
                  criterio: "Foco y especialización",
                  inHouse: "Marketing y ejecución diaria con foco operativo, no en crecimiento",
                  inHouseIcon: "x",
                  agency: "Clientes de múltiples rubros, sin especialización real en SaaS",
                  agencyIcon: "x",
                  veta: "100% orientados a crecimiento predecible de SaaS B2B",
                  vetaIcon: "check"
                },
                {
                  criterio: "Cómo se toman decisiones",
                  inHouse: "Basadas en experiencia del equipo y prueba-error",
                  inHouseIcon: "x",
                  agency: "Métricas superficiales (CTR, CPL, volumen de leads)",
                  agencyIcon: "x",
                  veta: "Data del negocio, competencia, señales del ICP y comportamiento real",
                  vetaIcon: "check"
                },
                {
                  criterio: "Velocidad de implementación",
                  inHouse: "Lenta: contratar, entrenar y ajustar procesos lleva meses",
                  inHouseIcon: "x",
                  agency: "Irregular: picos de resultados sin estabilidad",
                  agencyIcon: "x",
                  veta: "Arquitectura clara desde el inicio, estabilidad progresiva",
                  vetaIcon: "check"
                },
                {
                  criterio: "Profundidad en el negocio",
                  inHouse: "Alta cercanía, pero foco dividido entre tareas internas",
                  inHouseIcon: "dash",
                  agency: "Relación proveedor-cliente, sin ownership real",
                  agencyIcon: "x",
                  veta: "Operamos como extensión del área de Growth del SaaS",
                  vetaIcon: "check"
                },
                {
                  criterio: "Qué pasa después del lead",
                  inHouse: "Depende del tiempo y disponibilidad del equipo",
                  inHouseIcon: "dash",
                  agency: "El lead entra y el servicio termina ahí",
                  agencyIcon: "x",
                  veta: "Optimizamos y automatizamos hasta la reunión calificada",
                  vetaIcon: "check"
                },
                {
                  criterio: "Capacidad de adaptación",
                  inHouse: "Limitada por recursos, prioridades y seniority",
                  inHouseIcon: "x",
                  agency: "Procesos estándar, poca personalización real",
                  agencyIcon: "x",
                  veta: "Sistema flexible adaptado al modelo y ciclo del SaaS",
                  vetaIcon: "check"
                },
                {
                  criterio: "Costo total",
                  inHouse: "Costos altos antes de validar escalabilidad y con rotación",
                  inHouseIcon: "x",
                  agency: "Costo fijo sin garantía de retorno",
                  agencyIcon: "dash",
                  veta: "Costo fijo alineado a impacto y resultados esperados",
                  vetaIcon: "check"
                },
                {
                  criterio: "Escalabilidad real",
                  inHouse: "Escalar implica sumar personas y complejidad",
                  inHouseIcon: "x",
                  agency: "Escalado forzado vía presupuesto",
                  agencyIcon: "x",
                  veta: "Escalado progresivo basado en señales y expertise sectorial",
                  vetaIcon: "check"
                }
              ].map((row, index) => (
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

                  {/* Agency */}
                  <td className="py-6 px-6 text-fino-text/80">
                    <div className="flex gap-4">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10 ${row.agencyIcon === 'x' ? 'text-red-400' : 'text-yellow-400'}`}>
                        {row.agencyIcon === 'x' ? <X size={12} strokeWidth={3} /> : <Minus size={12} strokeWidth={3} />}
                      </div>
                      <span className="leading-snug">{row.agency}</span>
                    </div>
                  </td>

                  {/* VETA */}
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