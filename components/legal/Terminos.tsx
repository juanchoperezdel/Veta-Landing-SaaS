import React from 'react';
import { Link } from 'react-router-dom';
import LegalLayout, { Seccion, Lista, Aviso } from './LegalLayout';
import { EMPRESA, CONTACTO } from './legalData';

const Terminos: React.FC = () => {
  return (
    <LegalLayout
      eyebrow="Legales"
      titulo="Términos y Condiciones"
      bajada={`Estos términos regulan el acceso y uso del sitio ${EMPRESA.dominio} y de los servicios que ofrece ${EMPRESA.razonSocial}, que opera comercialmente bajo la marca ${EMPRESA.nombreComercial}.`}
    >
      <Seccion numero={1} titulo="Quiénes somos">
        <p>
          El sitio web <strong>{EMPRESA.sitio}</strong> y sus subdominios y secciones (en adelante, el
          «Sitio») son titularidad y responsabilidad de <strong>{EMPRESA.razonSocial}</strong>, una{' '}
          {EMPRESA.tipoSocietario} constituida y con domicilio en la {EMPRESA.pais} (en adelante,
          «{EMPRESA.nombreComercial}», «nosotros» o «la Empresa»).
        </p>
        <p>
          {EMPRESA.nombreComercial} es la marca comercial bajo la cual {EMPRESA.razonSocial} presta sus servicios de
          adquisición de clientes, marketing de performance y desarrollo de software a medida.
        </p>
        <div className="glass-panel rounded-2xl p-6 mt-6 space-y-2 text-sm">
          <div className="flex flex-col sm:flex-row sm:gap-3">
            <span className="text-white/40 text-xs uppercase tracking-widest w-40 flex-shrink-0 pt-0.5">
              Razón social
            </span>
            <span className="text-white font-medium">{EMPRESA.razonSocial}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-3">
            <span className="text-white/40 text-xs uppercase tracking-widest w-40 flex-shrink-0 pt-0.5">
              Nombre comercial
            </span>
            <span className="text-white font-medium">{EMPRESA.nombreComercial}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-3">
            <span className="text-white/40 text-xs uppercase tracking-widest w-40 flex-shrink-0 pt-0.5">Tipo</span>
            <span className="text-white font-medium">{EMPRESA.tipoSocietario}</span>
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
            <span className="text-white/40 text-xs uppercase tracking-widest w-40 flex-shrink-0 pt-0.5">Contacto</span>
            <span className="text-white font-medium">
              <a href={`mailto:${CONTACTO.emailPrincipal}`}>{CONTACTO.emailPrincipal}</a>
            </span>
          </div>
        </div>
      </Seccion>

      <Seccion numero={2} titulo="Aceptación de los términos">
        <p>
          El acceso, la navegación y el uso del Sitio implican la aceptación plena y sin reservas de estos Términos y
          Condiciones, así como de la <Link to="/privacidad">Política de Privacidad</Link>, que forma parte integrante de
          este documento. Si no estás de acuerdo con alguno de sus puntos, te pedimos que no utilices el Sitio.
        </p>
        <p>
          Al completar un formulario, agendar una llamada o contactarnos por cualquiera de los canales publicados,
          declarás que sos mayor de edad, que actuás con capacidad legal suficiente y que, cuando lo hacés en nombre de
          una empresa, contás con facultades para representarla.
        </p>
      </Seccion>

      <Seccion numero={3} titulo="Objeto del Sitio">
        <p>El Sitio tiene finalidad informativa y comercial. A través de él, {EMPRESA.nombreComercial}:</p>
        <Lista
          items={[
            'Presenta sus servicios de adquisición de clientes y sistemas de generación de demanda para SaaS y empresas B2B.',
            'Presenta sus servicios de desarrollo de software a medida, automatizaciones e integraciones con inteligencia artificial.',
            'Permite a los interesados solicitar información, completar formularios de calificación y agendar reuniones de diagnóstico sin costo.',
            'Publica contenidos, casos y materiales de referencia con fines informativos.',
          ]}
        />
        <p>
          <strong>El Sitio no comercializa productos ni servicios de forma directa ni procesa pagos en línea.</strong>{' '}
          La contratación efectiva de cualquier servicio se instrumenta siempre por separado, mediante una propuesta y
          un contrato específico firmado entre las partes.
        </p>
      </Seccion>

      <Seccion numero={4} titulo="Naturaleza de la información publicada">
        <p>
          Los contenidos del Sitio —incluyendo textos, descripciones de servicios, precios de referencia, plazos,
          calculadoras y estimaciones— tienen carácter <strong>meramente informativo y no constituyen una oferta
          vinculante</strong> en los términos del artículo 972 del Código Civil y Comercial de la Nación.
        </p>
        <p>
          Cualquier propuesta comercial concreta se emite de forma individual, por escrito, luego de una instancia de
          diagnóstico, y sus condiciones prevalecen sobre lo publicado en el Sitio.
        </p>
      </Seccion>

      <Seccion numero={5} titulo="Testimonios, casos y resultados">
        <Aviso>
          <p className="mb-3">
            <strong className="text-white">Sobre los resultados mencionados en el Sitio.</strong> Los testimonios, casos
            de éxito, métricas y cifras publicadas corresponden a resultados reales obtenidos por clientes concretos, en
            un contexto de mercado, producto, equipo y presupuesto específico.
          </p>
          <p>
            Esos resultados <strong className="text-white">no constituyen una promesa, garantía ni proyección</strong> de
            los resultados que pueda obtener cualquier otro cliente. El desempeño de un sistema de adquisición o de un
            desarrollo depende de factores que exceden a {EMPRESA.nombreComercial}, entre ellos el producto, el precio,
            el mercado, la capacidad de venta y el nivel de inversión de cada empresa.
          </p>
        </Aviso>
      </Seccion>

      <Seccion numero={6} titulo="Uso permitido del Sitio">
        <p>El usuario se compromete a utilizar el Sitio conforme a la ley, la buena fe y estos términos. En particular, se abstiene de:</p>
        <Lista
          items={[
            'Utilizar el Sitio con fines ilícitos, fraudulentos o lesivos de derechos de terceros.',
            'Introducir datos falsos, de terceros sin su autorización, o suplantar la identidad de otra persona o empresa.',
            'Intentar acceder a áreas restringidas, vulnerar medidas de seguridad o interferir en el funcionamiento del Sitio.',
            'Extraer, copiar o reutilizar de forma sistemática los contenidos del Sitio, incluyendo mediante scraping o procesos automatizados, sin autorización previa y por escrito.',
            'Introducir software malicioso, virus o cualquier código capaz de dañar los sistemas de la Empresa o de terceros.',
          ]}
        />
        <p>
          {EMPRESA.nombreComercial} podrá restringir o bloquear el acceso de cualquier usuario que incumpla estas
          condiciones, sin necesidad de aviso previo y sin derecho a compensación alguna.
        </p>
      </Seccion>

      <Seccion numero={7} titulo="Formularios y agendamiento de reuniones">
        <p>
          Al completar un formulario o agendar una reunión, el usuario nos autoriza a contactarlo por correo
          electrónico, teléfono, WhatsApp o videollamada con el fin de responder su consulta, calificar la oportunidad y
          coordinar la reunión solicitada.
        </p>
        <p>
          {EMPRESA.nombreComercial} se reserva el derecho de no dar curso a una solicitud o de cancelar una reunión
          agendada cuando la consulta no se corresponda con los servicios ofrecidos, cuando la información suministrada
          sea incompleta o inexacta, o cuando exista un conflicto de interés.
        </p>
        <p>
          Las reuniones pueden ser grabadas con fines de registro interno y mejora del servicio. En ese caso, se
          informará al inicio de la reunión y el participante podrá oponerse. El tratamiento de esos datos se rige por
          la <Link to="/privacidad">Política de Privacidad</Link>.
        </p>
      </Seccion>

      <Seccion numero={8} titulo="Propiedad intelectual">
        <p>
          Todos los elementos del Sitio —marca, logotipo, denominación «{EMPRESA.nombreComercial}», textos, diseños,
          gráficos, estructura de navegación, metodologías, código fuente y materiales descargables— son propiedad de{' '}
          {EMPRESA.razonSocial} o de terceros que autorizaron su uso, y están protegidos por la Ley 11.723 de Propiedad
          Intelectual, la Ley 22.362 de Marcas y demás normativa aplicable.
        </p>
        <p>
          El acceso al Sitio no otorga al usuario ningún derecho de propiedad sobre dichos contenidos. Queda prohibida
          su reproducción, distribución, comunicación pública, transformación o uso comercial sin autorización previa y
          por escrito de la Empresa.
        </p>
        <p>
          Las marcas, logotipos y nombres comerciales de clientes o terceros que aparecen en el Sitio pertenecen a sus
          respectivos titulares y se exhiben únicamente con fines identificatorios y de referencia.
        </p>
      </Seccion>

      <Seccion numero={9} titulo="Enlaces y servicios de terceros">
        <p>
          El Sitio puede contener enlaces a sitios de terceros e integrar servicios externos —entre ellos, herramientas
          de agendamiento, formularios embebidos, plataformas de análisis y redes sociales—. Esos servicios se rigen por
          sus propios términos y políticas de privacidad.
        </p>
        <p>
          {EMPRESA.nombreComercial} no controla ni responde por los contenidos, prácticas o disponibilidad de dichos
          sitios y servicios, ni por los daños que pudieran derivarse de su uso.
        </p>
      </Seccion>

      <Seccion numero={10} titulo="Disponibilidad y continuidad">
        <p>
          La Empresa procura mantener el Sitio operativo y actualizado, pero no garantiza su disponibilidad ininterrumpida
          ni la ausencia de errores. El Sitio puede sufrir interrupciones por mantenimiento, fallas técnicas,
          indisponibilidad de proveedores de hosting o causas de fuerza mayor.
        </p>
        <p>
          {EMPRESA.nombreComercial} se reserva el derecho de modificar, suspender o discontinuar total o parcialmente el
          Sitio o cualquiera de sus secciones, en cualquier momento y sin aviso previo.
        </p>
      </Seccion>

      <Seccion numero={11} titulo="Limitación de responsabilidad">
        <p>
          En la máxima medida permitida por la legislación aplicable, {EMPRESA.razonSocial} no será responsable por
          daños indirectos, lucro cesante, pérdida de chance o pérdida de datos derivados del uso o de la imposibilidad
          de uso del Sitio, ni por las decisiones de negocio que el usuario adopte sobre la base de la información
          publicada.
        </p>
        <p>
          Nada en esta cláusula limita la responsabilidad de la Empresa en los casos en que dicha limitación esté
          prohibida por normas de orden público, incluyendo las derivadas de la Ley 24.240 de Defensa del Consumidor
          cuando resulte aplicable.
        </p>
      </Seccion>

      <Seccion numero={12} titulo="Protección de datos personales">
        <p>
          El tratamiento de los datos personales recolectados a través del Sitio se rige por la{' '}
          <Link to="/privacidad">Política de Privacidad</Link>, elaborada conforme a la Ley 25.326 de Protección de los
          Datos Personales y su normativa complementaria.
        </p>
      </Seccion>

      <Seccion numero={13} titulo="Modificaciones">
        <p>
          {EMPRESA.nombreComercial} puede actualizar estos Términos y Condiciones en cualquier momento para reflejar
          cambios en sus servicios o en la normativa aplicable. La versión vigente es siempre la publicada en esta
          página, con su fecha de última actualización. El uso del Sitio con posterioridad a una modificación implica su
          aceptación.
        </p>
      </Seccion>

      <Seccion numero={14} titulo="Ley aplicable y jurisdicción">
        <p>
          Estos Términos y Condiciones se rigen por las leyes de la {EMPRESA.pais}. Para toda controversia derivada de su
          interpretación o aplicación, las partes se someten a la jurisdicción de los tribunales ordinarios competentes
          de la Ciudad Autónoma de Buenos Aires, renunciando a cualquier otro fuero o jurisdicción que pudiera
          corresponder.
        </p>
        <p>
          Cuando el usuario revista el carácter de consumidor en los términos de la Ley 24.240, se aplicarán las reglas
          de competencia previstas en dicha norma.
        </p>
      </Seccion>

      <Seccion numero={15} titulo="Contacto">
        <p>
          Para consultas sobre estos Términos y Condiciones podés escribirnos a{' '}
          <a href={`mailto:${CONTACTO.emailPrincipal}`}>{CONTACTO.emailPrincipal}</a> o a{' '}
          <a href={`mailto:${CONTACTO.emailSecundario}`}>{CONTACTO.emailSecundario}</a>, o utilizar los canales
          publicados en la página de <Link to="/contacto">Contacto</Link>.
        </p>
      </Seccion>
    </LegalLayout>
  );
};

export default Terminos;
