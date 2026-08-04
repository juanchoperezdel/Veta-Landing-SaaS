import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, CalendarCheck, Building2, ArrowRight, Clock } from 'lucide-react';
import LegalLayout from './LegalLayout';
import { EMPRESA, CONTACTO } from './legalData';

const Tarjeta: React.FC<{
  icono: React.ReactNode;
  titulo: string;
  descripcion: string;
  children: React.ReactNode;
}> = ({ icono, titulo, descripcion, children }) => (
  <div className="glass-panel rounded-3xl p-8 flex flex-col">
    <div className="w-11 h-11 rounded-xl bg-fino-purple/10 border border-fino-purple/20 flex items-center justify-center text-fino-purple mb-6">
      {icono}
    </div>
    <h3 className="text-white font-semibold text-lg mb-2">{titulo}</h3>
    <p className="text-sm text-fino-text/60 leading-relaxed mb-6 flex-grow">{descripcion}</p>
    {children}
  </div>
);

const Contacto: React.FC = () => {
  return (
    <LegalLayout
      eyebrow="Contacto"
      titulo="Hablemos"
      bajada="Escribinos por el canal que te quede más cómodo. Respondemos consultas comerciales, de soporte y legales en días hábiles."
      mostrarFecha={false}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Tarjeta
          icono={<Mail size={20} />}
          titulo="Email"
          descripcion="El canal principal para consultas comerciales, soporte, temas legales y ejercicio de derechos sobre datos personales."
        >
          <div className="space-y-3">
            <a
              href={`mailto:${CONTACTO.emailPrincipal}`}
              className="flex items-center gap-2 text-sm text-white hover:text-fino-purple transition-colors group"
            >
              <span className="w-1 h-1 bg-fino-purple rounded-full flex-shrink-0"></span>
              <span className="border-b border-white/10 group-hover:border-fino-purple pb-0.5 break-all">
                {CONTACTO.emailPrincipal}
              </span>
            </a>
            <a
              href={`mailto:${CONTACTO.emailSecundario}`}
              className="flex items-center gap-2 text-sm text-white hover:text-fino-purple transition-colors group"
            >
              <span className="w-1 h-1 bg-fino-purple rounded-full flex-shrink-0"></span>
              <span className="border-b border-white/10 group-hover:border-fino-purple pb-0.5 break-all">
                {CONTACTO.emailSecundario}
              </span>
            </a>
          </div>
        </Tarjeta>

        <Tarjeta
          icono={<MessageCircle size={20} />}
          titulo="WhatsApp"
          descripcion="Para consultas rápidas, confirmar una reunión ya agendada o reprogramar un horario."
        >
          <a
            href={CONTACTO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 px-5 rounded-xl transition-all text-sm group"
          >
            Escribir por WhatsApp
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </Tarjeta>

        <Tarjeta
          icono={<CalendarCheck size={20} />}
          titulo="Agendar una llamada"
          descripcion="Reunión de diagnóstico sin costo. Revisamos tu situación actual y te decimos con franqueza si podemos ayudarte."
        >
          <Link
            to="/#agendar"
            className="inline-flex items-center justify-center gap-2 bg-fino-purple hover:bg-fino-purple_dark text-white font-bold py-3 px-5 rounded-xl transition-all shadow-[0_0_20px_rgba(118,63,245,0.25)] hover:shadow-[0_0_30px_rgba(118,63,245,0.45)] text-sm group"
          >
            Ver agenda disponible
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Tarjeta>

        <Tarjeta
          icono={<Clock size={20} />}
          titulo="Horarios de atención"
          descripcion="Trabajamos con horario de la Argentina (GMT-3). Los mensajes recibidos fuera de ese rango se responden el siguiente día hábil."
        >
          <div className="space-y-2 text-sm text-fino-text/80">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>Lunes a viernes</span>
              <span className="text-white font-medium">9:00 a 18:00 h</span>
            </div>
            <div className="flex justify-between">
              <span>Sábados, domingos y feriados</span>
              <span className="text-white/40">Cerrado</span>
            </div>
          </div>
        </Tarjeta>
      </div>

      {/* Identificación de la entidad */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="glass-panel rounded-3xl p-8 md:p-10 mt-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-fino-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-xl bg-fino-purple/10 border border-fino-purple/20 flex items-center justify-center text-fino-purple">
              <Building2 size={20} />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg leading-tight">Datos de la entidad</h3>
              <p className="text-xs text-fino-text/50">Titular del sitio y responsable de los servicios</p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex flex-col sm:flex-row sm:gap-3 border-b border-white/5 pb-3">
              <span className="text-white/40 text-xs uppercase tracking-widest w-44 flex-shrink-0 pt-0.5">
                Razón social
              </span>
              <span className="text-white font-medium">{EMPRESA.razonSocial}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 border-b border-white/5 pb-3">
              <span className="text-white/40 text-xs uppercase tracking-widest w-44 flex-shrink-0 pt-0.5">
                Nombre comercial
              </span>
              <span className="text-white font-medium">{EMPRESA.nombreComercial}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 border-b border-white/5 pb-3">
              <span className="text-white/40 text-xs uppercase tracking-widest w-44 flex-shrink-0 pt-0.5">
                Tipo societario
              </span>
              <span className="text-white font-medium">{EMPRESA.tipoSocietario}</span>
            </div>
            {EMPRESA.cuit && (
              <div className="flex flex-col sm:flex-row sm:gap-3 border-b border-white/5 pb-3">
                <span className="text-white/40 text-xs uppercase tracking-widest w-44 flex-shrink-0 pt-0.5">CUIT</span>
                <span className="text-white font-medium">{EMPRESA.cuit}</span>
              </div>
            )}
            {EMPRESA.domicilio && (
              <div className="flex flex-col sm:flex-row sm:gap-3 border-b border-white/5 pb-3">
                <span className="text-white/40 text-xs uppercase tracking-widest w-44 flex-shrink-0 pt-0.5">
                  Domicilio
                </span>
                <span className="text-white font-medium">{EMPRESA.domicilio}</span>
              </div>
            )}
            <div className="flex flex-col sm:flex-row sm:gap-3 border-b border-white/5 pb-3">
              <span className="text-white/40 text-xs uppercase tracking-widest w-44 flex-shrink-0 pt-0.5">País</span>
              <span className="text-white font-medium">{EMPRESA.pais}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3">
              <span className="text-white/40 text-xs uppercase tracking-widest w-44 flex-shrink-0 pt-0.5">Sitio</span>
              <a
                href={EMPRESA.sitio}
                className="text-fino-purple hover:text-white transition-colors font-medium underline underline-offset-2"
              >
                {EMPRESA.dominio}
              </a>
            </div>
          </div>

          <p className="text-xs text-fino-text/50 leading-relaxed mt-8 pt-6 border-t border-white/5">
            Consultá también nuestros <Link to="/terminos" className="text-fino-purple hover:text-white underline underline-offset-2">Términos y Condiciones</Link> y
            nuestra <Link to="/privacidad" className="text-fino-purple hover:text-white underline underline-offset-2">Política de Privacidad</Link>.
          </p>
        </div>
      </motion.div>
    </LegalLayout>
  );
};

export default Contacto;
