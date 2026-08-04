import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ULTIMA_ACTUALIZACION } from './legalData';

interface LegalLayoutProps {
  eyebrow: string;
  titulo: string;
  bajada: string;
  mostrarFecha?: boolean;
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ eyebrow, titulo, bajada, mostrarFecha = true, children }) => {
  return (
    <section className="min-h-screen pt-28 md:pt-36 pb-24 relative overflow-hidden">
      {/* Glows de fondo, mismo tratamiento que Hero/ThankYou */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-15%] left-[15%] w-[500px] h-[500px] bg-fino-purple/15 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs text-fino-text/50 hover:text-white transition-colors mb-10 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="flex h-1.5 w-1.5 rounded-full bg-fino-purple"></span>
            <span className="text-[10px] font-bold text-white/60 tracking-widest uppercase">{eyebrow}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{titulo}</h1>

          <p className="text-fino-text/70 text-base md:text-lg font-light leading-relaxed max-w-2xl">{bajada}</p>

          {mostrarFecha && (
            <p className="text-xs text-fino-text/40 mt-8 pb-10 border-b border-white/5">
              Última actualización: <span className="text-fino-text/60">{ULTIMA_ACTUALIZACION}</span>
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mt-12"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

/** Sección numerada del documento legal. */
export const Seccion: React.FC<{ numero: number; titulo: string; children: React.ReactNode }> = ({
  numero,
  titulo,
  children,
}) => (
  <div className="mb-12 scroll-mt-32" id={`seccion-${numero}`}>
    <h2 className="flex items-baseline gap-3 text-xl md:text-2xl font-bold text-white mb-5 tracking-tight">
      <span className="text-fino-purple text-sm font-bold tabular-nums">{String(numero).padStart(2, '0')}</span>
      {titulo}
    </h2>
    <div className="space-y-4 text-sm md:text-[15px] text-fino-text/75 leading-relaxed [&_strong]:text-white [&_strong]:font-semibold [&_a]:text-fino-purple [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-white">
      {children}
    </div>
  </div>
);

/** Lista con viñetas violetas, consistente con el resto del sitio. */
export const Lista: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="space-y-3 mt-2">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span className="w-1 h-1 bg-fino-purple rounded-full flex-shrink-0 mt-[0.55rem]"></span>
        <span className="flex-1">{item}</span>
      </li>
    ))}
  </ul>
);

/** Bloque destacado para leyendas obligatorias o advertencias. */
export const Aviso: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="glass-panel rounded-2xl p-6 border-fino-purple/20 text-xs md:text-sm text-fino-text/70 leading-relaxed">
    {children}
  </div>
);

export default LegalLayout;
