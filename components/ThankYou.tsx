import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Calendar, FileText } from 'lucide-react';

const ThankYou: React.FC = () => {
    return (
        <section className="min-h-screen pt-32 pb-20 relative overflow-hidden flex flex-col items-center">
            {/* Background Elements - copied from Hero to maintain consistency */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-fino-purple/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                    >
                        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-white/60 tracking-widest uppercase">Agenda Lista · Siguiente Paso</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                    >
                        Recibimos tu agenda, <br />
                        <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent blur-sm absolute select-none inset-0 m-auto w-fit h-fit z-0 opacity-20 transform translate-y-12">solo falta una cosita...</span>
                        <span className="text-emerald-400">solo falta una cosita...</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-fino-text text-lg max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Seguí estos pasos ahora para que la reunión sea realmente productiva <br className="hidden md:block" />
                        y no se pierda tu lugar en la agenda.
                    </motion.p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

                    {/* Left Column: Siguiente Paso */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#0E0E10]/50 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-10"
                    >
                        <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-8">Siguiente Paso</h3>

                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="flex gap-5">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-500 font-bold text-sm">1</div>
                                <div>
                                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">Revisá tu correo ahora mismo</h4>
                                    <p className="text-sm text-fino-text/70 leading-relaxed">
                                        Te enviamos un mail de confirmación. Si no lo ves, revisá tu carpeta de <span className="text-emerald-400 font-medium">SPAM</span>.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-5">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-500 font-bold text-sm">2</div>
                                <div>
                                    <h4 className="text-white font-semibold mb-2">Agendá el evento</h4>
                                    <p className="text-sm text-fino-text/70 leading-relaxed">
                                        Bloqueá el horario en Google Calendar o Outlook, así evitás solaparlo con otras reuniones.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-5">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-500 font-bold text-sm">3</div>
                                <div>
                                    <h4 className="text-white font-semibold mb-2">Prepará la info clave</h4>
                                    <p className="text-sm text-fino-text/70 leading-relaxed">
                                        Tené a mano tus métricas actuales y dudas principales.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-white/20 mt-10">Si algo no te llega en los próximos minutos, escribinos por WhatsApp.</p>
                    </motion.div>

                    {/* Right Column: Importante */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-[#0E0E10]/50 backdrop-blur-md border border-amber-500/20 rounded-3xl p-8 md:p-10 relative overflow-hidden"
                    >
                        {/* Glow effect for important card */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-md mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Importante</span>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <p className="text-lg text-white font-medium leading-relaxed">
                                Recibimos muchas llamadas nuevas todos los días y no podemos tomar todas.
                            </p>

                            <p className="text-sm text-fino-text/70 leading-relaxed">
                                Para <span className="text-amber-400 font-bold">asegurar tu lugar</span>, confirmá por WhatsApp ahora mismo.
                            </p>

                            <div className="pt-4">
                                <a
                                    href="https://wa.me/5491130800683?text=Hola,%20acabo%20de%20agendar%20mi%20auditoría.%20Quiero%20confirmar%20mi%20asistencia."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2 group"
                                >
                                    Confirmar por WhatsApp
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>

                            <p className="text-[10px] text-center text-white/30 uppercase tracking-widest mt-6">
                                Sin confirmación tu horario puede liberarse
                            </p>
                        </div>
                    </motion.div>

                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xs text-white/30 text-center mt-12"
                >
                    Si necesitás reprogramar, hacelo con al menos <strong className="text-white/50">12 horas de anticipación.</strong>
                </motion.p>

            </div>
        </section>
    );
};

export default ThankYou;
