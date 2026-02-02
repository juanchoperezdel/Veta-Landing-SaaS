import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Booking: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.vetaagency.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-24 bg-[#08080A] border-t border-white/5" id="agendar">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl overflow-hidden shadow-2xl mx-auto border border-white/10 min-h-[600px] flex items-center justify-center bg-[#0E0E10]"
        >
          <iframe
            src="https://www.vetaagency.com/widget/booking/7G2vJ1L0FgJU1uDx2r4e"
            style={{ width: '100%', height: '100%', minHeight: '800px', border: 'none', overflow: 'hidden' }}
            scrolling="no"
            id="7G2vJ1L0FgJU1uDx2r4e_1770044390163"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;