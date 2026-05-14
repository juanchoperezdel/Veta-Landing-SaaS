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
          className="glass-panel rounded-3xl overflow-hidden shadow-2xl mx-auto border border-white/10 bg-[#0E0E10]"
        >
          <iframe
            src="https://www.vetaagency.com/widget/survey/6K5iKhHe67fViUBuGKZK"
            style={{ border: 'none', width: '100%', display: 'block' }}
            scrolling="no"
            id="6K5iKhHe67fViUBuGKZK"
            title="survey"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;