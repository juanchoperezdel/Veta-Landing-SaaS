import React from 'react';
import { Target, Users, TrendingUp, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Atracción Premium",
    description: "Nuestras campañas segmentadas encuentran a dueños de mascotas que valoran la salud de sus animales por encima del precio.",
    icon: <Target className="w-6 h-6 text-white" />
  },
  {
    title: "Reactividad de Base de Datos",
    description: "Convertimos tus antiguos clientes inactivos en citas recurrentes mediante campañas de reactivación por email y SMS.",
    icon: <Users className="w-6 h-6 text-white" />
  },
  {
    title: "Sistema de Citas",
    description: "Implementamos un calendario inteligente que cualifica a los pacientes antes de que lleguen a tu puerta.",
    icon: <Zap className="w-6 h-6 text-white" />
  },
  {
    title: "Reputación Online",
    description: "Automatizamos la generación de reseñas 5 estrellas en Google para dominar el SEO local en tu ciudad.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />
  },
  {
    title: "Reportes en Tiempo Real",
    description: "Sabrás exactamente cuánto retorno te genera cada euro invertido con nuestro dashboard de control.",
    icon: <BarChart3 className="w-6 h-6 text-white" />
  },
  {
    title: "Escalado Predecible",
    description: "Una vez validado el sistema, simplemente aumentamos el presupuesto para llenar más quirófanos y consultas.",
    icon: <TrendingUp className="w-6 h-6 text-white" />
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase mb-2">Nuestra Metodología</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Todo lo que necesitas para dominar tu mercado local
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;