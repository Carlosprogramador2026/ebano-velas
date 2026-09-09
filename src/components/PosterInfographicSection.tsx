import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { Language, REPURPOSE_ITEMS } from '../data/candleData';
import {
  LeafCircleIcon,
  ClockCircleIcon,
  LotusIcon,
  DiamondIcon,
  GiftIcon,
  HandmadeHeartIcon,
  VaseBranchIcon,
  RingSparkleIcon,
  KeyObjectIcon,
  TrayOrganizerIcon,
  SucculentIcon,
} from './Icons';

interface PosterInfographicSectionProps {
  language: Language;
  onOpenQuickBuy: () => void;
}

export const PosterInfographicSection: React.FC<PosterInfographicSectionProps> = ({
  language,
  onOpenQuickBuy,
}) => {
  const [activeRepurpose, setActiveRepurpose] = useState<number>(0);
  const [activePosterTab, setActivePosterTab] = useState<'tall' | 'shallow'>('tall');

  const getRepurposeIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <VaseBranchIcon className="w-4 h-4 text-[#d4af37]" />;
      case 1:
        return <RingSparkleIcon className="w-4 h-4 text-[#d4af37]" />;
      case 2:
        return <KeyObjectIcon className="w-4 h-4 text-[#d4af37]" />;
      case 3:
        return <TrayOrganizerIcon className="w-4 h-4 text-[#d4af37]" />;
      case 4:
        return <SucculentIcon className="w-4 h-4 text-[#d4af37]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#d4af37]" />;
    }
  };

  return (
    <section className="relative w-full bg-[#090807] py-14 sm:py-20 border-t border-[#c6a779]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#c6a779] uppercase font-semibold">
            {language === 'en' ? 'EDITORIAL COMPOSITION' : 'COMPOSIÇÃO EDITORIAL'}
          </span>
          <h2
            className="font-cinzel font-bold tracking-[0.14em] text-[#f2ebe1] uppercase mt-1"
            style={{ fontSize: 'clamp(1.5rem, 5.5vw, 2.5rem)' }}
          >
            {language === 'en' ? 'THE SIGNATURE POSTER' : 'O POSTER ASSINATURA'}
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#c6a779] mt-2 max-w-md mx-auto">
            {language === 'en'
              ? 'Exact layout study matching the physical atelier collection print.'
              : 'Estudo exato de layout da edição impressa do ateliê.'}
          </p>

          {/* Variant toggle (Tall Fluted Column vs Shallow Scalloped Dish) with 44px min tap target */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4 p-1 rounded-full bg-[#14120e] border border-[#c6a779]/30 w-full max-w-xs sm:max-w-sm mx-auto">
            <button
              onClick={() => setActivePosterTab('tall')}
              className={`flex-1 min-h-[44px] px-3 sm:px-4 py-2 rounded-full text-xs font-cinzel font-semibold tracking-wider transition-all cursor-pointer ${
                activePosterTab === 'tall'
                  ? 'bg-[#c6a779] text-black shadow-md'
                  : 'text-[#ede4d8]/75 hover:text-white'
              }`}
            >
              {language === 'en' ? 'Tall Column' : 'Coluna Alta'}
            </button>
            <button
              onClick={() => setActivePosterTab('shallow')}
              className={`flex-1 min-h-[44px] px-3 sm:px-4 py-2 rounded-full text-xs font-cinzel font-semibold tracking-wider transition-all cursor-pointer ${
                activePosterTab === 'shallow'
                  ? 'bg-[#c6a779] text-black shadow-md'
                  : 'text-[#ede4d8]/75 hover:text-white'
              }`}
            >
              {language === 'en' ? 'Tart Bowl' : 'Prato Baixo'}
            </button>
          </div>
        </div>

        {/* The Poster Frame (Pixel-perfect reproduction of attached artwork) */}
        <div className="relative mx-auto max-w-4xl bg-[#0d0c0a] border border-[#c6a779]/40 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
          {/* Subtle gold inner border */}
          <div className="pointer-events-none absolute inset-2 sm:inset-3 border border-[#c6a779]/15 rounded-xl sm:rounded-2xl" />

          {/* Layout: Main Left Column (70%) + Repurposing Right Column (30%) on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 relative z-10">
            {/* Left 8 Columns: Hero Candle, Typography, 2 Badges, 4 Pillars */}
            <div className="md:col-span-8 flex flex-col justify-between">
              {/* Poster Header */}
              <div className="text-left mb-4 sm:mb-6">
                <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-[#c6a779] uppercase font-bold block">
                  {language === 'en' ? 'AGED' : 'COLEÇÃO'}
                </span>
                <h3
                  className="font-cinzel font-black tracking-[0.12em] sm:tracking-[0.14em] text-[#f5ebd8] uppercase leading-[1.05]"
                  style={{ fontSize: 'clamp(1.75rem, 7vw, 3.25rem)' }}
                >
                  {language === 'en' ? (
                    <>
                      <span className="block">EBONY</span>
                      <span className="block">COLLECTION</span>
                    </>
                  ) : (
                    <>
                      <span className="block">ÉBANO</span>
                      <span className="block">ENVELHECIDO</span>
                    </>
                  )}
                </h3>
                <p className="font-cormorant italic text-base sm:text-xl text-[#c6a779] mt-1.5">
                  {language === 'en' ? 'beauty that transforms spaces' : 'beleza que transforma ambientes'}
                </p>
                <div className="w-16 h-[1.5px] bg-[#c6a779] mt-2" />
              </div>

              {/* Main Candle Showcase Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden border border-[#c6a779]/25 bg-[#14120e] shadow-xl group">
                <img
                  src={
                    activePosterTab === 'tall'
                      ? '/images/hero-candle.jpg'
                      : '/images/candle-shallow.jpg'
                  }
                  alt="Aged Ebony Vessel"
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    objectPosition: activePosterTab === 'tall' ? 'center 38%' : 'center center',
                  }}
                />

                {/* Animated Flame Glow */}
                <div
                  className="absolute top-[37%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full pointer-events-none mix-blend-screen opacity-70 animate-flicker"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(255,190,85,0.7) 0%, rgba(220,130,30,0.3) 50%, rgba(0,0,0,0) 70%)',
                  }}
                />

                {/* Stone Badges Overlay in the image bottom (Exactly like reference) */}
                <div className="absolute bottom-2.5 inset-x-2.5 sm:bottom-3 sm:inset-x-3 flex items-center justify-between sm:justify-start sm:gap-6 bg-black/70 backdrop-blur-md px-3 sm:px-4 py-2 rounded-xl border border-[#c6a779]/30">
                  {/* Badge 1 */}
                  <div className="flex items-center gap-2">
                    <LeafCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37] flex-shrink-0" />
                    <div>
                      <span className="font-cinzel text-[8px] sm:text-[10px] font-bold text-[#f2ebe1] tracking-wider block uppercase leading-tight">
                        {language === 'en' ? 'PLANT-BASED WAX' : 'CERA VEGETAL'}
                      </span>
                      <span className="text-[7px] sm:text-[9px] text-[#c6a779] block leading-tight">
                        {language === 'en' ? 'clean burn' : 'queima limpa'}
                      </span>
                    </div>
                  </div>

                  <div className="w-[1px] h-6 sm:h-7 bg-[#c6a779]/30" />

                  {/* Badge 2 */}
                  <div className="flex items-center gap-2">
                    <ClockCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37] flex-shrink-0" />
                    <div>
                      <span className="font-cinzel text-[8px] sm:text-[10px] font-bold text-[#f2ebe1] tracking-wider block uppercase leading-tight">
                        {language === 'en' ? 'LONG-LASTING' : 'LONGA DURAÇÃO'}
                      </span>
                      <span className="text-[7px] sm:text-[9px] text-[#c6a779] block leading-tight">
                        {language === 'en' ? '60+ hours' : '60h+ duração'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom 4 Feature Pillars (Exact match to reference poster footer) - 2x2 grid on mobile, 4 columns on sm+ */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-2 pt-5 sm:pt-6 mt-4 border-t border-[#c6a779]/20 divide-y-0 sm:divide-x sm:divide-[#c6a779]/15">
                {/* 1. Fragrance */}
                <div className="flex flex-col items-center text-center p-1.5 sm:px-1 bg-[#14120e]/40 sm:bg-transparent rounded-lg">
                  <LotusIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37] mb-1" />
                  <span className="font-cinzel text-[9px] sm:text-[10px] font-bold text-[#ede4d8] uppercase tracking-wider leading-tight">
                    {language === 'en' ? 'SOPHISTICATED FRAGRANCE' : 'AROMA SOFISTICADO'}
                  </span>
                  <span className="font-cormorant italic text-[8px] sm:text-[10px] text-[#c6a779] mt-0.5">
                    {language === 'en' ? 'perfumes & welcomes' : 'perfuma e acolhe'}
                  </span>
                </div>

                {/* 2. Minimalist */}
                <div className="flex flex-col items-center text-center p-1.5 sm:px-1 sm:pl-2 bg-[#14120e]/40 sm:bg-transparent rounded-lg">
                  <DiamondIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37] mb-1" />
                  <span className="font-cinzel text-[9px] sm:text-[10px] font-bold text-[#ede4d8] uppercase tracking-wider leading-tight">
                    {language === 'en' ? 'MINIMALIST DESIGN' : 'DESIGN MINIMALISTA'}
                  </span>
                  <span className="font-cormorant italic text-[8px] sm:text-[10px] text-[#c6a779] mt-0.5">
                    {language === 'en' ? 'in every detail' : 'em cada detalhe'}
                  </span>
                </div>

                {/* 3. Gift */}
                <div className="flex flex-col items-center text-center p-1.5 sm:px-1 sm:pl-2 bg-[#14120e]/40 sm:bg-transparent rounded-lg">
                  <GiftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37] mb-1" />
                  <span className="font-cinzel text-[9px] sm:text-[10px] font-bold text-[#ede4d8] uppercase tracking-wider leading-tight">
                    {language === 'en' ? 'PERFECT GIFT' : 'PRESENTE PERFEITO'}
                  </span>
                  <span className="font-cormorant italic text-[8px] sm:text-[10px] text-[#c6a779] mt-0.5">
                    {language === 'en' ? 'all occasions' : 'todas ocasiões'}
                  </span>
                </div>

                {/* 4. Handmade */}
                <div className="flex flex-col items-center text-center p-1.5 sm:px-1 sm:pl-2 bg-[#14120e]/40 sm:bg-transparent rounded-lg">
                  <HandmadeHeartIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37] mb-1" />
                  <span className="font-cinzel text-[9px] sm:text-[10px] font-bold text-[#ede4d8] uppercase tracking-wider leading-tight">
                    {language === 'en' ? 'HANDMADE' : 'FEITO À MÃO'}
                  </span>
                  <span className="font-cormorant italic text-[8px] sm:text-[10px] text-[#c6a779] mt-0.5">
                    {language === 'en' ? 'care & purpose' : 'carinho e propósito'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right 4 Columns: "AFTER CANDLE USE" 5 Stacked Cards */}
            <div className="md:col-span-4 flex flex-col justify-between md:border-l md:border-[#c6a779]/25 md:pl-6 pt-4 md:pt-0">
              {/* Header */}
              <div className="text-left mb-3">
                <h4 className="font-cinzel text-sm sm:text-base font-bold tracking-[0.16em] text-[#d4af37] uppercase leading-tight">
                  {language === 'en' ? 'AFTER CANDLE USE' : 'PÓS USO DA VELA'}
                </h4>
                <p className="font-cormorant italic text-xs text-[#c6a779]">
                  {language === 'en' ? 'one piece, endless possibilities' : 'sua peça, infinitas possibilidades'}
                </p>
                <div className="w-12 h-[1px] bg-[#c6a779]/60 mt-1.5" />
              </div>

              {/* 5 Stacked Visual Cards with min 48px touch targets */}
              <div className="space-y-2 my-auto">
                {REPURPOSE_ITEMS.map((item, idx) => {
                  const isCurrent = activeRepurpose === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveRepurpose(idx)}
                      className={`w-full min-h-[48px] flex items-center justify-between p-2 rounded-xl transition-all border text-left cursor-pointer ${
                        isCurrent
                          ? 'bg-[#1b1914] border-[#d4af37] shadow-md'
                          : 'bg-[#12110e] border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={item.image}
                          alt={item.name[language]}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover border border-white/10 flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            {getRepurposeIcon(idx)}
                            <span className="font-cinzel text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#ede4d8] truncate">
                              {item.name[language]}
                            </span>
                          </div>
                          <span className="text-[9px] text-[#a89d8d] line-clamp-1">
                            {item.desc[language]}
                          </span>
                        </div>
                      </div>

                      {isCurrent && <Check className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mr-1" />}
                    </button>
                  );
                })}
              </div>

              {/* Bottom Reusable Leaf Badge matching poster */}
              <div className="pt-3 mt-3 border-t border-[#c6a779]/20 text-center flex flex-col items-center">
                <LeafCircleIcon className="w-5 h-5 text-[#d4af37] mb-1" />
                <p className="font-cormorant italic text-xs text-[#d4af37]">
                  {language === 'en'
                    ? 'sustainable, reusable, and made to last'
                    : 'sustentável, reutilizável e feita para durar'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button under Poster */}
        <div className="mt-8 flex justify-center w-full max-w-sm mx-auto">
          <button
            onClick={onOpenQuickBuy}
            className="w-full min-h-[50px] px-8 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c6a779] to-[#b38e4a] text-black font-cinzel text-xs sm:text-sm font-bold tracking-[0.16em] uppercase flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform cursor-pointer"
          >
            <span>{language === 'en' ? 'Order Artisanal Piece' : 'Encomendar Peça Artesanal'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
