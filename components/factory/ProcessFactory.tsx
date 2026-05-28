import React from 'react';
import { Check, Circle, Clock, MessageSquare, AlertCircle, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

/* ─── Mini mockup: Scope Document ──────────────────────────── */
const ScopeMock = () => (
  <div className="glass-panel rounded-2xl p-5 text-left select-none">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-fino-purple"></div>
        <span className="text-[11px] font-bold text-fino-purple uppercase tracking-wider">Scope · Sprint Plan</span>
      </div>
      <span className="text-[10px] text-white/30 font-mono">v1.0 · aprobado</span>
    </div>
    <div className="space-y-2">
      {[
        { label: "Flujos de negocio mapeados", done: true },
        { label: "Arquitectura de base de datos", done: true },
        { label: "Stack tecnológico definido", done: true },
        { label: "Sprints y hitos planificados", done: true },
        { label: "Entregables por semana acordados", done: true },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3 py-1.5 border-b border-white/5 last:border-0">
          <div className="w-4 h-4 rounded-full bg-fino-purple/20 border border-fino-purple/40 flex items-center justify-center flex-shrink-0">
            <Check size={9} className="text-fino-purple" strokeWidth={3} />
          </div>
          <span className="text-[12px] text-white/80">{item.label}</span>
        </div>
      ))}
    </div>
    <div className="mt-4 bg-fino-purple/10 border border-fino-purple/20 rounded-xl px-4 py-2.5 flex items-center justify-between">
      <span className="text-[11px] text-fino-purple font-medium">Sin sorpresas. Scope cerrado.</span>
      <Check size={12} className="text-fino-purple" />
    </div>
  </div>
);

/* ─── Mini mockup: Sprint Board ────────────────────────────── */
const SprintMock = () => {
  const columns = [
    { label: "En proceso", color: "text-blue-400", cards: ["Auth + login", "API clientes"] },
    { label: "En revisión", color: "text-yellow-400", cards: ["Dashboard"] },
    { label: "Entregado ✓", color: "text-emerald-400", cards: ["Setup inicial", "DB schema", "Wireframes"] },
  ];
  return (
    <div className="glass-panel rounded-2xl p-5 text-left select-none">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-bold text-fino-purple uppercase tracking-wider">Sprint 3 · Semana en curso</span>
        <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/20 px-2 py-0.5 rounded font-medium">Demo: viernes 17hs</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {columns.map((col, i) => (
          <div key={i}>
            <div className={`text-[10px] font-bold uppercase mb-2 ${col.color}`}>{col.label}</div>
            <div className="space-y-1.5">
              {col.cards.map((card, j) => (
                <div key={j} className="bg-white/5 border border-white/8 rounded-lg px-2.5 py-2 text-[11px] text-white/80 leading-tight">
                  {card}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-[11px] text-white/50">
        <MessageSquare size={11} />
        <span>Feedback del cliente incorporado en tiempo real</span>
      </div>
    </div>
  );
};

/* ─── Mini mockup: Delivered System Dashboard ──────────────── */
const DeployMock = () => {
  const rows = [
    { id: "#1042", cliente: "Distribuidora Norte", estado: "Entregado", monto: "$48.200", dot: "bg-emerald-400" },
    { id: "#1041", cliente: "Logística Sur S.A.", estado: "En tránsito", monto: "$12.500", dot: "bg-blue-400" },
    { id: "#1040", cliente: "Comercio Central", estado: "Pendiente", monto: "$31.800", dot: "bg-yellow-400" },
  ];
  return (
    <div className="glass-panel rounded-2xl overflow-hidden text-left select-none">
      {/* App top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/8 bg-white/3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-fino-purple/80 flex items-center justify-center">
            <Wifi size={10} className="text-white" />
          </div>
          <span className="text-[11px] font-semibold text-white">Panel operativo · Veta Dev</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <span className="text-[10px] text-emerald-400 font-medium">En producción</span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-28 border-r border-white/8 py-3 px-2 space-y-0.5 flex-shrink-0">
          {[
            { label: "Dashboard", active: true },
            { label: "Clientes", active: false },
            { label: "Pedidos", active: false },
            { label: "Reportes", active: false },
          ].map((item, i) => (
            <div key={i} className={`px-2.5 py-2 rounded-lg text-[10px] font-medium transition-colors ${item.active ? 'bg-fino-purple/20 text-fino-purple' : 'text-white/40'}`}>
              {item.label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { label: "Pedidos hoy", val: "24" },
              { label: "En tránsito", val: "11" },
              { label: "Facturado", val: "$92k" },
            ].map((kpi, i) => (
              <div key={i} className="bg-white/5 border border-white/8 rounded-xl p-2.5 text-center">
                <div className="text-base font-bold text-white">{kpi.val}</div>
                <div className="text-[9px] text-white/40 mt-0.5">{kpi.label}</div>
              </div>
            ))}
          </div>

          {/* Mini table */}
          <div className="rounded-xl border border-white/8 overflow-hidden">
            <div className="grid grid-cols-4 px-3 py-1.5 bg-white/5 text-[9px] font-bold text-white/30 uppercase tracking-wider">
              <span>ID</span><span>Cliente</span><span>Estado</span><span className="text-right">Monto</span>
            </div>
            {rows.map((r, i) => (
              <div key={i} className="grid grid-cols-4 px-3 py-2 border-t border-white/5 items-center">
                <span className="text-[10px] text-white/50 font-mono">{r.id}</span>
                <span className="text-[10px] text-white/80 truncate pr-1">{r.cliente}</span>
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${r.dot} flex-shrink-0`}></div>
                  <span className="text-[9px] text-white/60">{r.estado}</span>
                </div>
                <span className="text-[10px] text-white font-medium text-right">{r.monto}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-white/8 px-4 py-2.5 flex items-center justify-between bg-white/2">
        <span className="text-[10px] text-white/30">Código entregado · Documentación incluida · Repo tuyo</span>
        <div className="flex items-center gap-1">
          <Check size={10} className="text-emerald-400" />
          <span className="text-[10px] text-emerald-400 font-medium">Handoff completo</span>
        </div>
      </div>
    </div>
  );
};

/* ─── Steps data ────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Discovery & Arquitectura",
    description: "Antes de escribir una sola línea de código, mapeamos tu negocio, flujos y requerimientos. Cerramos el scope con hitos claros. Sin este paso, todo lo que sigue es improvisación.",
    result: "Scope cerrado. Sin sorpresas. Sin cambios que alargan el proyecto.",
    mock: <ScopeMock />,
    side: "left",
  },
  {
    num: "02",
    title: "Build & Iteraciones",
    description: "Desarrollamos en sprints semanales. Al final de cada uno tenés una demo de lo que se construyó, podés dar feedback y ajustarlo antes de que sea tarde o caro.",
    result: "Progreso visible cada semana. No esperás meses para ver algo.",
    mock: <SprintMock />,
    side: "right",
  },
  {
    num: "03",
    title: "Deploy & Soporte",
    description: "Lanzamos, monitoreamos y acompañamos en el post go-live. Detectamos issues antes de que los reporten tus usuarios. El código es tuyo, documentado y listo para que cualquier dev lo entienda.",
    result: "Sistema estable. Equipo tranquilo. Proyecto cerrado.",
    mock: <DeployMock />,
    side: "left",
  },
];

/* ─── Component ─────────────────────────────────────────────── */
const Process: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="solucion">
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-fino-purple/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-xs font-bold tracking-widest text-fino-purple uppercase">Nuestro Proceso</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Así se ve trabajar<br /><span className="text-gradient">con nosotros.</span>
          </h2>
          <p className="text-xl text-fino-text max-w-2xl mx-auto font-light">
            Cada etapa tiene un entregable concreto. Nada de "estamos trabajando en eso".
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${step.side === 'right' ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Text side */}
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#08080A] border border-fino-purple flex items-center justify-center shadow-[0_0_20px_rgba(118,63,245,0.4)]">
                    <span className="text-sm font-bold text-white font-mono">{step.num}</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-fino-purple/50 to-transparent"></div>
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-snug">
                  {step.title}
                </h3>
                <p className="text-fino-text leading-relaxed font-light mb-6">
                  {step.description}
                </p>
                <div className="flex items-start gap-3 bg-fino-purple/10 border border-fino-purple/20 rounded-2xl px-5 py-4">
                  <Check size={16} className="text-fino-purple mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white font-medium">{step.result}</span>
                </div>
              </div>

              {/* Mockup side */}
              <div>
                {step.mock}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto text-center p-10 md:p-14 rounded-[2rem] relative overflow-hidden border border-white/10 bg-[#0E0E10]"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-fino-purple/10 to-transparent"></div>
          <h3 className="text-2xl md:text-4xl font-semibold text-white mb-6 relative z-20">
            Si querés software que se entregue en tiempo y forma,<br className="hidden md:block" />
            necesitás un <span className="text-fino-purple">proceso que no dependa de suerte.</span>
          </h3>
          <p className="text-fino-text text-base mb-10 relative z-20 font-light">Sprints semanales. Demos reales. Métricas claras.</p>
          <a href="#agendar" className="relative z-20 bg-fino-purple hover:bg-fino-purple_dark text-white px-10 py-4 rounded-full font-medium uppercase text-xs tracking-wider transition-all shadow-[0_10px_40px_-10px_rgba(118,63,245,0.6)] inline-block">
            Hablemos
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;
