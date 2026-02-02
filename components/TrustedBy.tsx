import React from 'react';

import { LogoCarousel } from './ui/logo-carousel';

const logos = [
    { name: 'SharpCRM', id: 1, img: '/logos/sharpcrm.png', className: 'h-8 md:h-14' },
    { name: 'PowerChat', id: 2, img: '/logos/powerchat.png', className: 'h-9 md:h-16' },
    { name: 'Andesmar Cargas', id: 3, img: '/logos/andesmar-cargas.png', className: 'h-12 md:h-20' },
    { name: 'Andesmar Chile', id: 4, img: '/logos/client-3.png', className: 'h-10 md:h-16' },
    { name: 'Lunko', id: 5, img: '/logos/lunko.png', className: 'h-12 md:h-20' },
    { name: 'HookBase', id: 6, img: '/logos/hookbase.png', className: 'h-9 md:h-16' },
    { name: 'Megacom', id: 7, img: '/logos/client-5.png', className: 'h-10 md:h-16' },
];

const TrustedBy: React.FC = () => {
    return (
        <section className="py-10 border-b border-white/5 bg-[#0E0E10]/50 backdrop-blur-sm overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-semibold text-white/30 uppercase tracking-widest mb-8">
                    Empresas que escalan con Veta
                </p>

                <div className="w-full">
                    <LogoCarousel columnCount={3} logos={logos} />
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
