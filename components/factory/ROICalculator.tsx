import React, { useState } from 'react';
import { motion } from 'framer-motion';

function SliderInput({ label, value, setValue, min, max, prefix = '', suffix = '' }: {
  label: string; value: number; setValue: (v: number) => void;
  min: number; max: number; prefix?: string; suffix?: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <label className="text-sm font-medium text-fino-text/80">{label}</label>
        <span className="text-sm font-bold text-white bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg tabular-nums">
          {prefix}{value}{suffix}
        </span>
      </div>
      <input
        type="range" min={min} max={max} value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#763FF5]"
      />
    </div>
  );
}

const ROICalculator: React.FC = () => {
  const [employees, setEmployees] = useState(3);
  const [hours, setHours] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(10);

  const monthlyCost = employees * hours * 4 * hourlyRate;
  const yearlyCost = monthlyCost * 12;
  const recoveryMin = Math.max(1, Math.round(10000 / monthlyCost));
  const recoveryMax = Math.max(2, Math.round(15000 / monthlyCost));

  return (
    <section id="calculadora" className="py-24 bg-fino-bg border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-fino-purple/8 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-xs font-bold tracking-widest text-fino-purple uppercase">Calculadora de impacto</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Cuánto te cuesta seguir<br />operando así.
          </h2>
          <p className="text-fino-text font-light text-lg max-w-xl mx-auto">
            No es solo incomodidad: es sueldo pagado para hacer lo que un sistema resuelve en segundos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass-panel rounded-3xl p-8 md:p-10 space-y-8">
            <SliderInput label="Personas realizando tareas repetitivas" value={employees} setValue={setEmployees} min={1} max={20} suffix=" personas" />
            <SliderInput label="Horas semanales perdidas por persona" value={hours} setValue={setHours} min={2} max={40} suffix=" hrs/sem" />
            <SliderInput label="Costo hora de trabajo (USD)" value={hourlyRate} setValue={setHourlyRate} min={3} max={100} prefix="$" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl p-8 md:p-10 bg-fino-purple/10 border border-fino-purple/20 relative overflow-hidden purple-glow">
            <div className="absolute inset-0 bg-gradient-to-tr from-fino-purple/10 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-fino-purple rounded-t-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-sm font-medium text-fino-text/60 mb-2 uppercase tracking-wider">Costo anual de no automatizar</h3>
              <div className="text-5xl md:text-6xl font-semibold text-white mb-2 tabular-nums">${yearlyCost.toLocaleString()}</div>
              <p className="text-sm text-fino-purple font-medium mb-8">USD al año en horas destinadas a tareas evitables.</p>
              <div className="h-px w-full bg-white/10 mb-8"></div>
              <h4 className="text-base font-semibold text-white mb-5">Lo que Veta Dev puede hacer por vos:</h4>
              <ul className="space-y-4 mb-8">
                {["Inversión desde USD 10.000 — pago único, sin licencias", "Primera versión operativa en 4 a 6 semanas", "El código es tuyo. Crecemos con vos a largo plazo."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-fino-text/90 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-fino-purple mt-1.5 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-fino-purple/15 border border-fino-purple/30 rounded-2xl p-5 text-center">
                <p className="text-fino-purple font-medium text-sm">
                  Recuperás la inversión en {recoveryMin} a {recoveryMax} meses. A partir de ahí, todo lo que ahorrás es ganancia.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-14 text-center">
          <p className="text-white/70 text-lg mb-6">¿Querés dejar de operar con esa fricción?</p>
          <a href="#agendar" className="inline-flex items-center gap-2 bg-fino-purple hover:bg-fino-purple_dark text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-[0_10px_30px_-10px_rgba(118,63,245,0.5)]">
            Hablemos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
