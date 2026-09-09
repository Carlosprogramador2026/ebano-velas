import React from 'react';
import { Wind, ShieldCheck, Droplet } from 'lucide-react';
import { Language, FRAGRANCE_NOTES } from '../data/candleData';

interface OlfactoryPyramidProps {
  language: Language;
}

export const OlfactoryPyramid: React.FC<OlfactoryPyramidProps> = ({ language }) => {
  return (
    <section className="relative w-full bg-[#100f0d] py-14 sm:py-20 border-t border-[#c6a779]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a1814] border border-[#c6a779]/30 mb-2">
            <Wind className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-semibold">
              {language === 'en' ? 'OLFACTORY ARCHITECTURE' : 'PIRÂMIDE OLFATIVA'}
            </span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-[0.14em] text-[#f2ebe1] uppercase">
            {FRAGRANCE_NOTES.name[language]}
          </h2>

          <p className="font-cormorant italic text-base sm:text-lg text-[#c6a779] mt-2">
            {language === 'en'
              ? 'An intoxicating warm chiaroscuro of smoky woods, spicy cardamom, and gilded amber resin.'
              : 'Um chiaroscuro envolvente de madeiras defumadas, cardamomo e resina de âmbar dourado.'}
          </p>
        </div>

        {/* 3-Tier Olfactory Pyramid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {/* Top Notes */}
          <div className="p-6 rounded-2xl bg-[#161410] border border-[#c6a779]/20 flex flex-col justify-between relative overflow-hidden group hover:border-[#c6a779]/50 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-cinzel tracking-[0.25em] text-[#d4af37] uppercase font-bold">
                  {language === 'en' ? '01 · TOP NOTES' : '01 · NOTAS DE TOPO'}
                </span>
                <span className="text-[10px] text-[#a89d8d] font-mono">15–30 min</span>
              </div>
              <h3 className="font-cinzel text-base font-bold text-[#f3ece2] mb-2 uppercase">
                {language === 'en' ? 'Initial Awakening' : 'Despertar Inicial'}
              </h3>
              <p className="text-xs sm:text-sm text-[#d5cbbe] leading-relaxed">
                {FRAGRANCE_NOTES.top[language]}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#c6a779] italic font-cormorant">
              {language === 'en' ? 'Crisp, radiant citrus and aromatic spice sparks the room.' : 'Cítricos radiantes e especiarias aromáticas preenchem o ambiente.'}
            </div>
          </div>

          {/* Heart Notes */}
          <div className="p-6 rounded-2xl bg-[#1a1813] border border-[#d4af37]/40 shadow-lg flex flex-col justify-between relative overflow-hidden group hover:border-[#d4af37] transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/10 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-cinzel tracking-[0.25em] text-[#d4af37] uppercase font-bold">
                  {language === 'en' ? '02 · HEART NOTES' : '02 · NOTAS DE CORPO'}
                </span>
                <span className="text-[10px] text-[#d4af37] font-mono font-bold">2–4 hrs</span>
              </div>
              <h3 className="font-cinzel text-base font-bold text-[#f3ece2] mb-2 uppercase">
                {language === 'en' ? 'Soul & Character' : 'Alma & Personalidade'}
              </h3>
              <p className="text-xs sm:text-sm text-[#f5ebd8] leading-relaxed">
                {FRAGRANCE_NOTES.heart[language]}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-[#d4af37] italic font-cormorant">
              {language === 'en' ? 'Rich charred ebony woods mingle with sacred temple incenses.' : 'Madeiras de ébano nobre fundidas a incensos ancestrais.'}
            </div>
          </div>

          {/* Base Notes */}
          <div className="p-6 rounded-2xl bg-[#161410] border border-[#c6a779]/20 flex flex-col justify-between relative overflow-hidden group hover:border-[#c6a779]/50 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-cinzel tracking-[0.25em] text-[#d4af37] uppercase font-bold">
                  {language === 'en' ? '03 · BASE NOTES' : '03 · NOTAS DE FUNDO'}
                </span>
                <span className="text-[10px] text-[#a89d8d] font-mono">6–12 hrs+</span>
              </div>
              <h3 className="font-cinzel text-base font-bold text-[#f3ece2] mb-2 uppercase">
                {language === 'en' ? 'Enduring Warmth' : 'Rastro Duradouro'}
              </h3>
              <p className="text-xs sm:text-sm text-[#d5cbbe] leading-relaxed">
                {FRAGRANCE_NOTES.base[language]}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#c6a779] italic font-cormorant">
              {language === 'en' ? 'Lush amber resins and dark bourbon vanilla linger in the atmosphere.' : 'Resinas de âmbar e baunilha bourbon que perduram na memória.'}
            </div>
          </div>
        </div>

        {/* Clean Purity Guarantee */}
        <div className="p-5 sm:p-6 rounded-2xl bg-black/40 border border-[#c6a779]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c6a779]/20 border border-[#c6a779]/50 flex items-center justify-center flex-shrink-0 text-[#d4af37]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-cinzel text-xs sm:text-sm font-bold text-[#ede4d8] uppercase tracking-wider">
                {language === 'en' ? 'Botanical Purity Promise' : 'Compromisso de Pureza Botânica'}
              </h4>
              <p className="text-xs text-[#a89d8d] mt-0.5">
                {language === 'en'
                  ? 'Phthalate-free · Cruelty-free · Non-toxic · 100% natural cotton wicks'
                  : 'Livre de ftalatos · Sem crueldade · Cera 100% vegetal · Pavio puro de algodão'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#1a1813] px-3.5 py-1.5 rounded-full border border-[#c6a779]/30">
            <Droplet className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs font-cinzel font-semibold text-[#f5e5c9] tracking-wider">
              {language === 'en' ? '12% Fragrance Load' : '12% Concentração de Essência'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
