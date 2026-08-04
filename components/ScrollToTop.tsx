import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * En una SPA el navegador conserva el scroll al cambiar de ruta.
 * Este componente lleva la vista al tope en cada navegación y, cuando la URL
 * trae un hash (por ejemplo /#agendar desde una página legal), scrollea a esa sección.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Esperamos un frame a que la ruta destino termine de montar.
      const id = hash.replace('#', '');
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
