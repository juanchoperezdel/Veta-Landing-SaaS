import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, ShoppingBag, Building2, Wrench, Bot, BarChart3, Database, MapPin } from 'lucide-react';

const cases = [
  {
    client: "Andesmar Cargas", industry: "Logística & Transporte",
    icon: <Truck size={22} className="text-white" />,
    headline: "Monitoreo de flota y rutas de entrega 24/7, 100% automatizado.",
    description: "Plataforma de monitoreo en tiempo real que reemplazó procesos manuales de seguimiento. Alertas automáticas, dashboards operativos y trazabilidad completa sin intervención humana.",
    tags: ["Automatización 24/7", "Monitoreo de flota", "Trazabilidad"],
    metric: "100%", metricLabel: "automatizado",
    color: "from-blue-600/20 to-blue-900/10", border: "border-blue-500/20",
    tagColor: "bg-blue-500/10 text-blue-300 border-blue-500/20", badge: <BarChart3 size={14} />
  },
  {
    client: "Tesoros del Pasado", industry: "Retail & E-commerce",
    icon: <ShoppingBag size={22} className="text-white" />,
    headline: "Gestión de stock y CRM de ventas integrados en una sola plataforma.",
    description: "Sistema unificado que centraliza inventario, seguimiento de clientes y pipeline de ventas. Eliminó hojas de cálculo dispersas y procesos manuales de actualización de stock.",
    tags: ["Gestión de stock", "CRM de ventas", "Integración"],
    metric: "1 sistema", metricLabel: "todo integrado",
    color: "from-amber-600/20 to-amber-900/10", border: "border-amber-500/20",
    tagColor: "bg-amber-500/10 text-amber-300 border-amber-500/20", badge: <Database size={14} />
  },
  {
    client: "ZOD Desarrollos Inmobiliarios", industry: "Real Estate",
    icon: <Building2 size={22} className="text-white" />,
    headline: "Plataforma inmobiliaria con CRM automatizado y agente de IA respondiendo consultas 24/7.",
    description: "Plataforma propia para gestión de emprendimientos, clientes y operaciones. Incluye un agente de IA que responde consultas de prospectos en tiempo real, sin esperar al equipo comercial.",
    tags: ["Agente de IA 24/7", "CRM automatizado", "Plataforma propia"],
    metric: "24/7", metricLabel: "sin intervención humana",
    color: "from-fino-purple/20 to-purple-900/10", border: "border-fino-purple/20",
    tagColor: "bg-fino-purple/10 text-purple-300 border-fino-purple/20", badge: <Bot size={14} />
  },
  {
    client: "Multiservicios Integrales", industry: "Logística & Servicios",
    icon: <Wrench size={22} className="text-white" />,
    headline: "Plataforma para gestión y administración de fleteros.",
    description: "Sistema centralizado para coordinar operaciones, asignar servicios, registrar liquidaciones y gestionar la red de fleteros. Reemplazó la coordinación por WhatsApp y planillas.",
    tags: ["Gestión operativa", "Administración", "Plataforma custom"],
    metric: "0 planillas", metricLabel: "todo en sistema",
    color: "from-emerald-600/20 to-emerald-900/10", border: "border-emerald-500/20",
    tagColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20", badge: <MapPin size={14} />
  }
];

const CaseStudies: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="py-24 bg-[#0A0A0C] border-t border-white/5 relative overflow-hidden" id="casos">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fino-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-xs font-bold tracking-widest text-fino-purple uppercase">Casos de éxito</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Empresas que ya operan<br />con tecnología propia.
          </h2>
          <p className="text-fino-text font-light text-lg">Software a medida, agentes de IA y automatizaciones que cambiaron cómo operan.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}
              className={`rounded-3xl p-8 border bg-gradient-to-br ${c.color} ${c.border} transition-all duration-300 cursor-default ${active === i ? 'shadow-[0_0_40px_-10px_rgba(118,63,245,0.3)] scale-[1.01]' : ''}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg leading-tight">{c.client}</div>
                    <div className="text-xs text-fino-text/60 mt-0.5">{c.industry}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white tabular-nums">{c.metric}</div>
                  <div className="text-xs text-fino-text/60">{c.metricLabel}</div>
                </div>
              </div>
              <h3 className="text-base font-semibold text-white mb-3 leading-snug">{c.headline}</h3>
              <p className="text-sm text-fino-text/70 leading-relaxed mb-6">{c.description}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag, j) => (
                  <span key={j} className={`flex items-center gap-1.5 text-[11px] font-medium px-3 py-1 rounded-full border ${c.tagColor}`}>
                    {j === 0 && c.badge}{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-14 text-center">
          <p className="text-white/50 text-sm mb-6">¿Querés ver cómo aplica a tu negocio?</p>
          <a href="#agendar" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            Agendar llamada
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
