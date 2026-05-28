import React from 'react';
import { Clock, AlertCircle, Users, FileX, GitFork, Puzzle } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';
import { motion } from 'framer-motion';

const painPoints = [
  {
    id: '01',
    title: "Necesitás software custom pero no querés armar un equipo in-house",
    description: "Contratar, entrenar y retener desarrolladores es caro, lento y riesgoso. Y aun así podés quedar sin capacidad.",
    icon: <Users className="text-white" size={20} />
  },
  {
    id: '02',
    title: "Proyectos que arrancan y nunca terminan",
    description: "Meses de desarrollo y el sistema sigue en el 60%. Las fechas no se cumplen y el scope crece sin control.",
    icon: <Clock className="text-white" size={20} />
  },
  {
    id: '03',
    title: "Código que nadie puede mantener",
    description: "El proveedor anterior se fue y quedaste con algo que nadie entiende ni puede tocar sin romper todo.",
    icon: <AlertCircle className="text-white" size={20} />
  },
  {
    id: '04',
    title: "Cotizaciones que no dicen nada",
    description: "Precios sin detalle, sin hitos, sin garantía de qué vas a recibir ni cuándo. Y después siempre hay extras.",
    icon: <FileX className="text-white" size={20} />
  },
  {
    id: '05',
    title: "Freelancers que desaparecen",
    description: "Sin continuidad, sin documentación, sin ownership real. Si el proyecto crece, empezás de cero otra vez.",
    icon: <GitFork className="text-white" size={20} />
  },
  {
    id: '06',
    title: "Tecnología desacoplada de tu negocio",
    description: "Software genérico que te obliga a adaptar tus procesos a la herramienta, no al revés.",
    icon: <Puzzle className="text-white" size={20} />
  }
];

const PainPointsFactory: React.FC = () => {
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
            Si esto te suena, no necesitás más proveedores. Necesitás un equipo con ownership real.
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
                <h3 className="text-xl font-medium text-white mb-3 leading-snug">{point.title}</h3>
                <p className="text-sm text-fino-text leading-relaxed opacity-80">{point.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass-panel rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-fino-purple/10 to-transparent pointer-events-none"></div>
          <div className="text-center md:text-left relative z-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              El problema no es la tecnología. <br />
              <span className="text-gradient">Es quién la construye y cómo.</span>
            </h3>
            <p className="text-sm text-fino-text mt-3">Cuando el desarrollo no tiene sistema ni ownership, termina siendo caro, lento y descartable.</p>
          </div>
          <a href="#agendar" className="relative z-10 bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap">
            Hablemos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsFactory;
