import React from 'react';
import { Activity, PenTool, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="solucion">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-fino-purple/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-xs font-bold tracking-widest text-fino-purple uppercase">Nuestro Proceso</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            De la esperanza al <span className="text-gradient">sistema.</span>
          </h2>
          <p className="text-xl text-fino-text max-w-2xl mx-auto font-light">
            Dejá de depender de referidos o del "boca a boca". Construimos un motor de adquisición predecible.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-fino-purple/50 to-transparent hidden md:block"></div>

          {/* Steps Container */}
          <div className="space-y-12 md:space-y-0">

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-12 md:mb-24 relative"
            >
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#08080A] border border-fino-purple items-center justify-center z-10 shadow-[0_0_20px_rgba(118,63,245,0.5)]">
                <span className="text-sm font-bold text-white">01</span>
              </div>

              <div className="w-full md:w-1/2 md:pr-16 md:text-right">
                {/* Mobile Card Style */}
                <div className="glass-panel rounded-3xl p-8 md:bg-transparent md:backdrop-filter-none md:border-none md:p-0">
                  <div className="flex justify-between items-start mb-6 md:hidden">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Activity size={24} className="text-fino-purple" />
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono font-bold text-white/60">01</div>
                  </div>
                  <div className="text-xs font-bold text-fino-purple uppercase mb-2 md:hidden text-left tracking-wider">Paso 01</div>

                  <div className="hidden md:flex items-center gap-6 justify-start md:justify-end mb-6">
                    <h3 className="text-3xl font-semibold text-white">Diagnóstico <br /> & Data Strategy</h3>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                      <Activity size={28} className="text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 md:hidden text-left">Diagnóstico & Data Strategy</h3>

                  <p className="text-fino-text text-base leading-relaxed mb-8 text-left md:text-right font-light">
                    Analizamos tu data histórica, ICP real y funnel actual para detectar qué está frenando el escalado y qué sí puede escalar.
                  </p>

                  <div className="bg-fino-purple/10 border border-fino-purple/20 rounded-2xl p-5 inline-block w-full text-left backdrop-blur-sm">
                    <div className="text-[10px] text-fino-purple font-bold uppercase mb-2 tracking-wider">Resultado</div>
                    <div className="text-white font-medium text-sm">Claridad total y foco correcto.</div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-full md:w-1/2 md:pl-16"></div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-12 md:mb-24 relative"
            >
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#08080A] border border-fino-purple items-center justify-center z-10 shadow-[0_0_20px_rgba(118,63,245,0.5)]">
                <span className="text-sm font-bold text-white">02</span>
              </div>

              <div className="hidden md:block w-full md:w-1/2 md:pr-16"></div>
              <div className="w-full md:w-1/2 md:pl-16">
                {/* Mobile Card Style */}
                <div className="glass-panel rounded-3xl p-8 md:bg-transparent md:backdrop-filter-none md:border-none md:p-0">
                  <div className="flex justify-between items-start mb-6 md:hidden">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <PenTool size={24} className="text-fino-purple" />
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono font-bold text-white/60">02</div>
                  </div>
                  <div className="text-xs font-bold text-fino-purple uppercase mb-2 md:hidden text-left tracking-wider">Paso 02</div>

                  <div className="hidden md:flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                      <PenTool size={28} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-semibold text-white">Arquitectura <br /> de Adquisición</h3>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 md:hidden text-left">Arquitectura de Adquisición</h3>

                  <p className="text-fino-text text-base leading-relaxed mb-8 text-left font-light">
                    Rediseñamos la estructura de campañas, mensajes y puntos de conversión para alimentar correctamente a los algoritmos y al equipo comercial.
                  </p>
                  <div className="bg-fino-purple/10 border border-fino-purple/20 rounded-2xl p-5 inline-block w-full text-left backdrop-blur-sm">
                    <div className="text-[10px] text-fino-purple font-bold uppercase mb-2 tracking-wider">Resultado</div>
                    <div className="text-white font-medium text-sm">Reuniones más estables y mejor calidad.</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-12 relative"
            >
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#08080A] border border-fino-purple items-center justify-center z-10 shadow-[0_0_20px_rgba(118,63,245,0.5)]">
                <span className="text-sm font-bold text-white">03</span>
              </div>

              <div className="w-full md:w-1/2 md:pr-16 md:text-right">
                {/* Mobile Card Style */}
                <div className="glass-panel rounded-3xl p-8 md:bg-transparent md:backdrop-filter-none md:border-none md:p-0">
                  <div className="flex justify-between items-start mb-6 md:hidden">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <TrendingUp size={24} className="text-fino-purple" />
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono font-bold text-white/60">03</div>
                  </div>
                  <div className="text-xs font-bold text-fino-purple uppercase mb-2 md:hidden text-left tracking-wider">Paso 03</div>

                  <div className="hidden md:flex items-center gap-6 justify-start md:justify-end mb-6">
                    <h3 className="text-3xl font-semibold text-white">Escalado <br /> & Optimización</h3>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                      <TrendingUp size={28} className="text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 md:hidden text-left">Escalado & Optimización</h3>

                  <p className="text-fino-text text-base leading-relaxed mb-8 text-left md:text-right font-light">
                    Escalamos progresivamente con testing continuo, métricas claras y ajustes semanales basados en performance real.
                  </p>
                  <div className="bg-fino-purple/10 border border-fino-purple/20 rounded-2xl p-5 inline-block w-full text-left backdrop-blur-sm">
                    <div className="text-[10px] text-fino-purple font-bold uppercase mb-2 tracking-wider">Resultado</div>
                    <div className="text-white font-medium text-sm">Previsibilidad mensual y crecimiento controlado.</div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-full md:w-1/2 md:pl-16"></div>
            </motion.div>

          </div>

        </div>

        {/* Banner with FIX */}
        <motion.div
          initial={{ opacity: 0, width: "90%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 max-w-4xl mx-auto text-center p-10 md:p-14 rounded-[2rem] relative overflow-hidden group border border-white/10 bg-[#0E0E10]"
        >
          {/* Replaced glass-panel with solid gradient based bg to prevent iOS glitch */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-fino-purple/10 to-transparent"></div>

          <h3 className="text-2xl md:text-4xl font-semibold text-white mb-6 relative z-20">
            Si querés reuniones calificadas predecibles, <br className="hidden md:block" />
            necesitás un <span className="text-fino-purple">proceso que no dependa de suerte.</span>
          </h3>
          <p className="text-fino-text text-base mb-10 relative z-20 font-light">Ejecutamos en sprints semanales, con métricas claras y foco en performance real.</p>
          <a href="#agendar" className="relative z-20 bg-fino-purple hover:bg-fino-purple_dark text-white px-10 py-4 rounded-full font-medium uppercase text-xs tracking-wider transition-all shadow-[0_10px_40px_-10px_rgba(118,63,245,0.6)] flex items-center gap-2 mx-auto w-fit">
            Hablemos
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;