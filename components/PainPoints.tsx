import React from 'react';
import { TrendingUp, AlertCircle, Users, Calendar, Filter, Frown } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { motion } from 'framer-motion';

const painPoints = [
  {
    id: '01',
    title: "PMF validado, adquisición inconsistente",
    description: "El producto funciona, pero el flujo de reuniones sube y baja sin patrón.",
    icon: <TrendingUp className="text-white" size={20} />
  },
  {
    id: '02',
    title: "Escalar ads dispara el CPA",
    description: "Metés más presupuesto y la eficiencia se rompe: CAC/CPA se te va a la luna.",
    icon: <AlertCircle className="text-white" size={20} />
  },
  {
    id: '03',
    title: "Dependés de referidos o esfuerzo manual",
    description: "Prospección a pulmón, founder-led sales eterno, y pipeline impredecible.",
    icon: <Users className="text-white" size={20} />
  },
  {
    id: '04',
    title: "No sabés cuántas reuniones habrá el mes que viene",
    description: "Sin forecast real: decisiones a ciegas en hiring, producto y caja.",
    icon: <Calendar className="text-white" size={20} />
  },
  {
    id: '05',
    title: "Tu funnel está roto (o nadie sabe dónde)",
    description: "Se pierde demanda entre mensajes, landing, calificación y agenda.",
    icon: <Filter className="text-white" size={20} />
  },
  {
    id: '06',
    title: "Probaste agencias/freelancers sin impacto real",
    description: "Mucho entregable, cero sistema y cero resultados consistentes.",
    icon: <Frown className="text-white" size={20} />
  }
];

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-fino-bg relative overflow-hidden" id="diagnostico">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-fino-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Si te sentís identificado con alguno<br />
            de estos puntos, <span className="text-fino-purple">esto es para vos.</span>
          </h2>
          <p className="text-fino-text text-lg font-light">
            Si esto te suena, no necesitás más ideas. Necesitás sistema.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="p-8 h-full group">
                <div className="absolute top-8 right-8 text-xs font-mono text-white/20 group-hover:text-fino-purple transition-colors font-bold">
                  {point.id}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3 leading-snug">
                  {point.title}
                </h3>
                <p className="text-sm text-fino-text leading-relaxed opacity-80">
                  {point.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass-panel rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-fino-purple/10 to-transparent pointer-events-none"></div>
          <div className="text-center md:text-left relative z-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              El problema no es tu SaaS. <br />
              <span className="text-gradient">Es cómo lo estás llevando al mercado.</span>
            </h3>
            <p className="text-sm text-fino-text mt-3">Cuando la adquisición no es un sistema, termina siendo una lotería cara.</p>
          </div>
          <a href="#agendar" className="relative z-10 bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap">
            Hablemos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;