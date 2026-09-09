import React from 'react';
import { LeafCircleIcon } from './Icons';
import { Language } from '../data/candleData';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="relative w-full bg-[#080706] border-t border-[#c6a779]/20 pt-14 pb-28 md:pb-16 text-center text-xs text-[#a89d8d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Monogram */}
        <div className="w-12 h-12 rounded-full border border-[#c6a779]/60 flex items-center justify-center bg-black/60 mb-4 shadow-inner">
          <span className="font-cinzel text-base font-bold text-[#d4af37]">Æ</span>
        </div>

        <h3 className="font-cinzel text-sm sm:text-base font-bold tracking-[0.25em] text-[#f2ebe1] uppercase mb-1">
          {language === 'en' ? 'AGED EBONY ATELIER' : 'ATELIÊ ÉBANO ENVELHECIDO'}
        </h3>

        <p className="font-cormorant italic text-sm text-[#c6a779] max-w-sm mb-6">
          {language === 'en' ? 'beauty that transforms spaces' : 'beleza que transforma ambientes'}
        </p>

        {/* Circular sustainability badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#14120e] border border-[#c6a779]/20 mb-8">
          <LeafCircleIcon className="w-4 h-4 text-[#d4af37]" />
          <span className="text-[11px] text-[#ede4d8] font-cinzel tracking-wider">
            {language === 'en'
              ? 'One Piece, Endless Possibilities · Zero-Waste Living'
              : 'Sua Peça, Infinitas Possibilidades · Vida Consciente'}
          </span>
        </div>

        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c6a779]/40 to-transparent mb-6" />

        <p className="text-[11px] text-[#7a7266] tracking-wide">
          © {new Date().getFullYear()} {language === 'en' ? 'Aged Ebony Collection. All Rights Reserved.' : 'Coleção Ébano Envelhecido. Todos os direitos reservados.'}
        </p>
      </div>
    </footer>
  );
};
