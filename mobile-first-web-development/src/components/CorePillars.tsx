import React from 'react';
import { LotusIcon, DiamondIcon, GiftIcon, HandmadeHeartIcon } from './Icons';
import { Language } from '../data/candleData';

interface CorePillarsProps {
  language: Language;
}

export const CorePillars: React.FC<CorePillarsProps> = ({ language }) => {
  const pillars = [
    {
      icon: <LotusIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#d4af37]" />,
      title: language === 'en' ? 'SOPHISTICATED FRAGRANCE' : 'AROMA SOFISTICADO',
      desc: language === 'en' ? 'perfumes and welcomes' : 'perfuma e acolhe',
    },
    {
      icon: <DiamondIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#d4af37]" />,
      title: language === 'en' ? 'MINIMALIST DESIGN' : 'DESIGN MINIMALISTA',
      desc: language === 'en' ? 'elegance in every detail' : 'elegância em cada detalhe',
    },
    {
      icon: <GiftIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#d4af37]" />,
      title: language === 'en' ? 'PERFECT GIFT' : 'PRESENTE PERFEITO',
      desc: language === 'en' ? 'for all occasions' : 'para todas as ocasiões',
    },
    {
      icon: <HandmadeHeartIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#d4af37]" />,
      title: language === 'en' ? 'HANDMADE' : 'FEITO À MÃO',
      desc: language === 'en' ? 'with care and purpose' : 'com carinho e propósito',
    },
  ];

  return (
    <section className="relative w-full bg-[#12110e] border-y border-[#c6a779]/20 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-x-0 md:divide-x divide-[#c6a779]/15">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-xl transition-all duration-300 hover:bg-[#1a1814]/60 ${
                idx !== 0 ? 'md:pl-6' : ''
              }`}
            >
              <div className="mb-3 p-2.5 rounded-full bg-[#1e1c17] border border-[#c6a779]/30 shadow-inner">
                {item.icon}
              </div>
              <h2 className="font-cinzel text-[11px] sm:text-xs tracking-[0.18em] text-[#f2ebe1] font-bold uppercase leading-snug max-w-[160px]">
                {item.title}
              </h2>
              <p className="font-cormorant italic text-xs sm:text-sm text-[#c6a779] mt-1 font-normal tracking-wide">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
