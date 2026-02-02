import React from 'react';
import { Check, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { AvatarCircles } from './ui/avatar-circles';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden" id="inicio">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-fino-purple/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-fino-purple/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 relative z-10">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <AvatarCircles
                numPeople={25}
                avatarUrls={[
                  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
                ]}
              />
              <div className="flex flex-col">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} className="w-4 h-4 text-fino-purple fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-white/80">Elegido por +25 Founders</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05] mb-8"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Escalá tu SaaS <br />
              con un sistema predecible de <br />
              <span className="text-gradient">reuniones calificadas.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-fino-text mb-10 leading-relaxed max-w-lg font-light"
            >
              Sin quemar presupuesto. Sin improvisar. <br />Sin depender de referidos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="space-y-4 mb-10"
            >
              <p className="text-fino-text/80 text-sm leading-relaxed border-l border-fino-purple/50 pl-4">
                Implementamos un <strong className="text-white">sistema de growth</strong> para <strong className="text-white">SaaS B2B</strong> con <strong className="text-white">PMF validado</strong> que te permite aumentar entre <strong className="text-white">25% y 50%</strong> las <strong className="text-white">reuniones mensuales</strong>, manteniendo o mejorando el <strong className="text-white">costo por reunión</strong>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 items-center mb-12"
            >
              <a href="#agendar" className="w-full sm:w-auto px-8 py-4 bg-fino-purple text-white font-medium rounded-full hover:bg-fino-purple_dark transition-all shadow-[0_10px_30px_-10px_rgba(118,63,245,0.5)] flex items-center justify-center gap-2">
                Hablemos
              </a>
              <a href="#solucion" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-md text-center">
                Ver el sistema
              </a>
            </motion.div>

            {/* Esto es para - Glass Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:border-fino-purple/30 transition-colors duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <p className="text-xs font-semibold text-white/50 uppercase mb-4 tracking-wider">Esto es para</p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-start gap-3 text-sm text-fino-text">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fino-purple flex-shrink-0 shadow-[0_0_10px_rgba(118,63,245,0.8)]"></div>
                  <span>SaaS B2B con MRR entre USD 5K y 50K /mes</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-fino-text">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fino-purple flex-shrink-0 shadow-[0_0_10px_rgba(118,63,245,0.8)]"></div>
                  <span>Ideal si ya tenés producto validado, cierres y bajo churn</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-fino-text">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fino-purple flex-shrink-0 shadow-[0_0_10px_rgba(118,63,245,0.8)]"></div>
                  <span>SaaS que buscan resultados medibles en 90 días</span>
                </li>
              </ul>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-xs text-fino-text/40 font-medium text-center sm:text-left"
            >
              Resultados medibles · Pipeline limpio · Costos controlados
            </motion.p>
          </div>

          {/* Visual Content (Dashboard Mock) - Glass Style */}
          <motion.div
            initial={{ opacity: 0, rotateY: -10, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: -5, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="w-full lg:w-1/2 relative hidden lg:block perspective-1000"
          >
            <div className="relative glass-panel rounded-3xl p-8 purple-glow transform transition-transform duration-500 hover:rotate-0">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-fino-purple/30 rounded-full blur-[40px] pointer-events-none"></div>

              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 font-medium backdrop-blur-md">
                Playbook Preview
              </div>

              <div className="mb-8">
                <div className="text-[10px] font-bold text-fino-purple uppercase mb-2 tracking-wider">Sistema GTM + DEMANDA</div>
                <div className="text-2xl font-semibold text-white">Estrategia · Mensajería · Conversión</div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-[10px] text-fino-text/60 mb-2 uppercase tracking-wide">Output</div>
                  <div className="text-3xl font-medium text-white mb-1">25-50%</div>
                  <div className="text-xs text-fino-text/80">Reuniones / mes</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-[10px] text-fino-text/60 mb-2 uppercase tracking-wide">Eficiencia</div>
                  <div className="text-3xl font-medium text-white mb-1">↓ / =</div>
                  <div className="text-xs text-fino-text/80">Costo por reunión</div>
                </div>
              </div>

              {/* Checklist Component */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                <div className="flex justify-between items-center mb-5">
                  <span className="text-xs text-fino-text/80 font-medium">Componentes del sistema</span>
                  <span className="text-[10px] text-fino-purple bg-fino-purple/10 px-2 py-0.5 rounded border border-fino-purple/20">En ejecución</span>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "ICP + Oferta", width: "80%" },
                    { name: "Mensajería + Creativos", width: "65%" },
                    { name: "Canales + Prospección", width: "90%" },
                    { name: "Landing + Conversión", width: "75%" },
                    { name: "Calificación + Agenda", width: "50%" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between gap-4 group">
                      <div className="flex-1">
                        <div className="flex justify-between mb-1.5">
                          <span className="text-[11px] font-medium text-white group-hover:text-fino-purple transition-colors">{item.name}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-fino-purple to-purple-400 shadow-[0_0_10px_rgba(118,63,245,0.5)]" style={{ width: item.width }}></div>
                        </div>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-fino-purple/20 flex items-center justify-center border border-fino-purple/30">
                        <Check size={10} className="text-fino-purple" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;