import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dra. María González",
    role: "Directora Médica",
    clinic: "Clínica VetVida",
    quote: "Pasamos de tener huecos libres todos los días a tener lista de espera de 2 semanas. El sistema de VetaBoost es simplemente increíble.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Dr. Carlos Ruiz",
    role: "Propietario",
    clinic: "Hospital Veterinario Central",
    quote: "Lo mejor no es solo la cantidad de pacientes, sino la calidad. Ahora vienen dueños que aceptan los presupuestos sin regatear.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Laura M.",
    role: "Gerente",
    clinic: "Mascotas Felices",
    quote: "Hemos duplicado la facturación en 4 meses. Su equipo se encarga de todo el marketing y yo puedo dedicarme a la medicina.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2000&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="resultados">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Resultados Reales de Clínicas Reales
          </h2>
          <p className="text-xl text-slate-600">
            Únete a las más de 50 clínicas que ya han transformado su negocio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 rounded-2xl relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-200" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}, {t.clinic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metric Strip */}
        <div className="mt-20 py-10 border-y border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
                <p className="text-4xl font-extrabold text-brand-600 mb-2">+50</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Clínicas Escaladas</p>
            </div>
            <div>
                <p className="text-4xl font-extrabold text-brand-600 mb-2">€2M+</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Ingresos Generados</p>
            </div>
            <div>
                <p className="text-4xl font-extrabold text-brand-600 mb-2">15k+</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Citas Agendadas</p>
            </div>
            <div>
                <p className="text-4xl font-extrabold text-brand-600 mb-2">300%</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">ROI Promedio</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;