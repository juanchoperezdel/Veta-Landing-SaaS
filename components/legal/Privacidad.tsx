import React from 'react';
import { Link } from 'react-router-dom';
import LegalLayout, { Seccion, Lista, Aviso } from './LegalLayout';
import { EMPRESA, CONTACTO } from './legalData';

const Privacidad: React.FC = () => {
  return (
    <LegalLayout
      eyebrow="Legales"
      titulo="Política de Privacidad"
      bajada={`Cómo ${EMPRESA.razonSocial} recolecta, usa, comparte y protege los datos personales que nos dejás en ${EMPRESA.dominio}, conforme a la Ley 25.326 de Protección de los Datos Personales.`}
    >
      <Seccion numero={1} titulo="Responsable del tratamiento">
        <p>
          El responsable de la base de datos y del tratamiento de los datos personales recolectados a través de{' '}
          <strong>{EMPRESA.sitio}</strong> es <strong>{EMPRESA.razonSocial}</strong>, {EMPRESA.tipoSocietario}{' '}
          constituida en la {EMPRESA.pais}, que opera comercialmente bajo la marca{' '}
          <strong>{EMPRESA.nombreComercial}</strong>.
        </p>
        <div className="glass-panel rounded-2xl p-6 mt-6 space-y-2 text-sm">
          <div className="flex flex-col sm:flex-row sm:gap-3">
            <span className="text-white/40 text-xs uppercase tracking-widest w-40 flex-shrink-0 pt-0.5">
              Responsable
            </span>
            <span className="text-white font-medium">{EMPRESA.razonSocial}</span>
          </div>
          {EMPRESA.cuit && (
            <div className="flex flex-col sm:flex-row sm:gap-3">
              <span className="text-white/40 text-xs uppercase tracking-widest w-40 flex-shrink-0 pt-0.5">CUIT</span>
              <span className="text-white font-medium">{EMPRESA.cuit}</span>
            </div>
          )}
          {EMPRESA.domicilio && (
            <div className="flex flex-col sm:flex-row sm:gap-3">
              <span className="text-white/40 text-xs uppercase tracking-widest w-40 flex-shrink-0 pt-0.5">
                Domicilio
              </span>
              <span className="text-white font-medium">{EMPRESA.domicilio}</span>
            </div>
          )}
          <div className="flex flex-col sm:flex-row sm:gap-3">
            <span className="text-white/40 text-xs uppercase tracking-widest w-40 flex-shrink-0 pt-0.5">
              Contacto de privacidad
            </span>
            <span className="text-white font-medium">
              <a href={`mailto:${CONTACTO.emailPrincipal}`}>{CONTACTO.emailPrincipal}</a>
            </span>
          </div>
        </div>
      </Seccion>

      <Seccion numero={2} titulo="Qué datos recolectamos">
        <p>
          <strong>Datos que nos das voluntariamente.</strong> Cuando completás un formulario de contacto o de
          calificación, agendás una reunión o nos escribís por email o WhatsApp, podemos recolectar:
        </p>
        <Lista
          items={[
            'Nombre y apellido.',
            'Correo electrónico y número de teléfono.',
            'Empresa, cargo, sitio web y rubro.',
            'Información de negocio que compartas voluntariamente: facturación aproximada, presupuesto de inversión, canales que usás, objetivos y desafíos actuales.',
            'Cualquier otro dato que incluyas en un campo libre o en el cuerpo de un mensaje.',
          ]}
        />
        <p className="pt-2">
          <strong>Datos que se recolectan automáticamente.</strong> Al navegar el Sitio, nuestros proveedores registran:
        </p>
        <Lista
          items={[
            'Dirección IP, tipo y versión de navegador, sistema operativo y tipo de dispositivo.',
            'Páginas visitadas, tiempo de permanencia, clics e interacciones.',
            'Origen del tráfico y parámetros de campaña (por ejemplo, utm_source, utm_medium, gclid o fbclid).',
            'Identificadores de cookies y tecnologías similares.',
          ]}
        />
        <p className="pt-2">
          <strong>Grabaciones de reuniones.</strong> Las videollamadas de diagnóstico pueden grabarse y transcribirse
          con fines de registro interno, seguimiento comercial y mejora del servicio. Se informa al inicio de la reunión
          y el participante puede oponerse en ese momento.
        </p>
        <p>
          <strong>No solicitamos datos sensibles</strong> en los términos del artículo 2 de la Ley 25.326 (origen
          racial o étnico, opiniones políticas, convicciones religiosas, información referente a la salud o a la vida
          sexual). Te pedimos que no los incluyas en los campos libres de nuestros formularios.
        </p>
      </Seccion>

      <Seccion numero={3} titulo="Para qué usamos tus datos">
        <p>Tratamos los datos personales con las siguientes finalidades:</p>
        <Lista
          items={[
            <>
              <strong>Responder y calificar tu consulta:</strong> contactarte, entender tu situación y determinar si
              nuestros servicios son adecuados para tu empresa.
            </>,
            <>
              <strong>Coordinar y sostener reuniones:</strong> agendar, recordar, reprogramar y dar seguimiento a las
              llamadas de diagnóstico.
            </>,
            <>
              <strong>Prestar los servicios contratados</strong> y gestionar la relación comercial, la facturación y el
              soporte.
            </>,
            <>
              <strong>Enviarte comunicaciones comerciales</strong> sobre nuestros servicios, contenidos y novedades,
              siempre con posibilidad de darte de baja en cualquier momento.
            </>,
            <>
              <strong>Medir y optimizar nuestras campañas:</strong> analizar el rendimiento del Sitio y de nuestras
              acciones publicitarias, y construir audiencias para remarketing.
            </>,
            <>
              <strong>Cumplir obligaciones legales</strong> y responder requerimientos de autoridades competentes.
            </>,
          ]}
        />
      </Seccion>

      <Seccion numero={4} titulo="Base legal del tratamiento">
        <p>
          El tratamiento se funda en el <strong>consentimiento libre, expreso e informado</strong> que prestás al
          completar un formulario o contactarnos (artículo 5 de la Ley 25.326), en la{' '}
          <strong>ejecución de la relación contractual</strong> cuando sos cliente, y en el{' '}
          <strong>cumplimiento de obligaciones legales</strong> a las que está sujeta la Empresa.
        </p>
        <p>
          El suministro de datos es voluntario, pero determinados campos son necesarios para poder responderte o prestar
          el servicio. Si no los proporcionás, no podremos dar curso a tu solicitud.
        </p>
      </Seccion>

      <Seccion numero={5} titulo="Cookies y tecnologías de seguimiento">
        <p>
          El Sitio utiliza cookies propias y de terceros, píxeles y tecnologías similares para funcionar correctamente,
          recordar preferencias, medir audiencia y mostrar publicidad relevante. Concretamente:
        </p>
        <Lista
          items={[
            <>
              <strong>Cookies técnicas:</strong> necesarias para la navegación y el funcionamiento básico del Sitio.
            </>,
            <>
              <strong>Cookies analíticas:</strong> nos permiten entender cómo se usa el Sitio de forma agregada para
              mejorarlo.
            </>,
            <>
              <strong>Meta Pixel (Meta Platforms, Inc.):</strong> registra visitas y eventos de conversión para medir
              nuestras campañas en Facebook e Instagram y armar audiencias de remarketing.
            </>,
            <>
              <strong>Herramientas de Google:</strong> medición de campañas y atribución de tráfico proveniente de
              Google Ads y del buscador.
            </>,
            <>
              <strong>Widgets embebidos de agendamiento y formularios:</strong> pueden instalar sus propias cookies para
              operar y asociar tu respuesta a tu sesión.
            </>,
          ]}
        />
        <p>
          Podés bloquear o eliminar las cookies desde la configuración de tu navegador, y gestionar la publicidad
          personalizada desde las preferencias de tu cuenta de Meta o Google. Tené en cuenta que bloquear ciertas
          cookies puede afectar el funcionamiento de algunas secciones del Sitio.
        </p>
      </Seccion>

      <Seccion numero={6} titulo="Con quién compartimos los datos">
        <p>
          No vendemos ni alquilamos datos personales. Compartimos información únicamente con proveedores que nos prestan
          servicios y actúan como encargados del tratamiento, obligados a la confidencialidad y a utilizar los datos solo
          conforme a nuestras instrucciones. Entre ellos:
        </p>
        <Lista
          items={[
            'Proveedores de hosting e infraestructura del Sitio.',
            'Plataformas de CRM, automatización de marketing, email y agendamiento de reuniones.',
            'Plataformas de publicidad y medición (Meta y Google), para atribución de conversiones y audiencias.',
            'Herramientas de videollamada, grabación y transcripción de reuniones.',
            'Asesores profesionales, contables y legales, cuando resulte necesario.',
          ]}
        />
        <p>
          También podremos comunicar datos cuando exista una obligación legal o un requerimiento de autoridad judicial o
          administrativa competente.
        </p>
      </Seccion>

      <Seccion numero={7} titulo="Transferencias internacionales">
        <p>
          Algunos de nuestros proveedores tienen servidores fuera de la {EMPRESA.pais}, principalmente en los Estados
          Unidos y en la Unión Europea. Esto implica una transferencia internacional de datos en los términos del
          artículo 12 de la Ley 25.326.
        </p>
        <p>
          En esos casos procuramos que la transferencia se realice hacia jurisdicciones con nivel adecuado de protección
          o bajo instrumentos contractuales que garanticen estándares equivalentes de seguridad y confidencialidad. Al
          utilizar el Sitio y suministrar tus datos, prestás conformidad con dichas transferencias.
        </p>
      </Seccion>

      <Seccion numero={8} titulo="Por cuánto tiempo los conservamos">
        <p>
          Conservamos los datos personales mientras dure la relación comercial y, una vez finalizada, durante los plazos
          necesarios para atender responsabilidades legales, contables e impositivas o para el ejercicio o defensa de
          reclamos.
        </p>
        <p>
          Los datos de contactos que no derivaron en una relación comercial se conservan mientras resulten útiles para
          la finalidad informada o hasta que solicites su supresión.
        </p>
      </Seccion>

      <Seccion numero={9} titulo="Seguridad de la información">
        <p>
          Aplicamos medidas técnicas y organizativas razonables para preservar la confidencialidad, integridad y
          disponibilidad de los datos: control de accesos por rol, cifrado en tránsito mediante HTTPS, uso de proveedores
          con estándares reconocidos de seguridad y acuerdos de confidencialidad con nuestro equipo.
        </p>
        <p>
          Ningún sistema es completamente infalible. Si tomamos conocimiento de un incidente de seguridad que afecte
          datos personales, actuaremos conforme a la normativa aplicable.
        </p>
      </Seccion>

      <Seccion numero={10} titulo="Tus derechos">
        <p>
          Como titular de los datos podés ejercer los derechos de <strong>acceso, rectificación, actualización y
          supresión</strong> de tus datos personales, así como oponerte a su tratamiento con fines publicitarios y
          revocar el consentimiento prestado.
        </p>
        <p>
          Para ejercerlos, escribinos a <a href={`mailto:${CONTACTO.emailPrincipal}`}>{CONTACTO.emailPrincipal}</a>{' '}
          indicando tu solicitud y acompañando un documento que acredite tu identidad. Responderemos dentro de los
          plazos legales: diez (10) días corridos para las solicitudes de acceso y cinco (5) días hábiles para las de
          rectificación, actualización o supresión.
        </p>
        <p>
          Si recibís comunicaciones comerciales nuestras, podés darte de baja en cualquier momento desde el enlace
          incluido en cada email o solicitándolo por los canales de contacto publicados.
        </p>
        <Aviso>
          <p className="mb-4 text-[11px] md:text-xs uppercase tracking-wide leading-relaxed">
            El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma
            gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto
            conforme lo establecido en el artículo 14, inciso 3 de la Ley N.º 25.326.
          </p>
          <p className="text-[11px] md:text-xs uppercase tracking-wide leading-relaxed">
            La Agencia de Acceso a la Información Pública, en su carácter de órgano de control de la Ley N.º 25.326,
            tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de
            las normas sobre protección de datos personales.
          </p>
        </Aviso>
      </Seccion>

      <Seccion numero={11} titulo="Menores de edad">
        <p>
          El Sitio y los servicios de {EMPRESA.nombreComercial} están dirigidos exclusivamente a personas mayores de
          edad y a empresas. No recolectamos de forma consciente datos de menores de 18 años. Si detectamos que se
          cargaron datos de un menor sin autorización de sus representantes legales, los eliminaremos.
        </p>
      </Seccion>

      <Seccion numero={12} titulo="Cambios en esta política">
        <p>
          Podemos actualizar esta Política de Privacidad para reflejar cambios en nuestras prácticas, en las
          herramientas que utilizamos o en la normativa aplicable. La versión vigente es siempre la publicada en esta
          página, con su fecha de última actualización.
        </p>
      </Seccion>

      <Seccion numero={13} titulo="Contacto">
        <p>
          Para cualquier consulta sobre esta política o sobre el tratamiento de tus datos, escribinos a{' '}
          <a href={`mailto:${CONTACTO.emailPrincipal}`}>{CONTACTO.emailPrincipal}</a> o a{' '}
          <a href={`mailto:${CONTACTO.emailSecundario}`}>{CONTACTO.emailSecundario}</a>. También podés ver el resto de
          los canales en la página de <Link to="/contacto">Contacto</Link> y consultar nuestros{' '}
          <Link to="/terminos">Términos y Condiciones</Link>.
        </p>
      </Seccion>
    </LegalLayout>
  );
};

export default Privacidad;
