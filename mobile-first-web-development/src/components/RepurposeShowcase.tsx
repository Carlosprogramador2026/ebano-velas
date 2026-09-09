import React, { useState } from 'react';
import { Sparkles, Check, Info, ArrowUpRight } from 'lucide-react';
import { Language, REPURPOSE_ITEMS } from '../data/candleData';
import {
  VaseBranchIcon,
  RingSparkleIcon,
  KeyObjectIcon,
  TrayOrganizerIcon,
  SucculentIcon,
} from './Icons';

interface RepurposeShowcaseProps {
  language: Language;
  onOpenQuickBuy: () => void;
}

export const RepurposeShowcase: React.FC<RepurposeShowcaseProps> = ({
  language,
  onOpenQuickBuy,
}) => {
  const [selectedId, setSelectedId] = useState<string>('decor');
  const [showHowToClean, setShowHowToClean] = useState<boolean>(false);

  const currentItem = REPURPOSE_ITEMS.find((item) => item.id === selectedId) || REPURPOSE_ITEMS[0];

  const getItemIcon = (id: string) => {
    switch (id) {
      case 'decor':
        return <VaseBranchIcon className="w-5 h-5 text-[#d4af37]" />;
      case 'jewelry':
        return <RingSparkleIcon className="w-5 h-5 text-[#d4af37]" />;
      case 'object':
        return <KeyObjectIcon className="w-5 h-5 text-[#d4af37]" />;
      case 'small-items':
        return <TrayOrganizerIcon className="w-5 h-5 text-[#d4af37]" />;
      case 'plant':
        return <SucculentIcon className="w-5 h-5 text-[#d4af37]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <section id="repurpose-section" className="relative w-full bg-[#0a0908] py-14 sm:py-20 overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#c6a779]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header mirroring Reference Poster */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181612] border border-[#c6a779]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-semibold">
              {language === 'en' ? 'ZERO-WASTE LUXURY' : 'LUXO SUSTENTÁVEL'}
            </span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[0.16em] text-[#f2ebe1] uppercase leading-tight">
            {language === 'en' ? 'AFTER CANDLE USE' : 'PÓS USO DA VELA'}
          </h2>

          <p className="font-cormorant italic text-lg sm:text-2xl text-[#c6a779] mt-2 font-light">
            {language === 'en' ? 'one piece, endless possibilities' : 'sua peça, infinitas possibilidades'}
          </p>

          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#c6a779] to-transparent mx-auto mt-4" />
        </div>

        {/* 2-Column Responsive Layout: Left Active Stage / Right 5 Items List (exactly like poster) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Stage / Featured Highlight (Left 7 cols on desktop, top on mobile) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-[#c6a779]/30 bg-[#14120e] shadow-[0_16px_40px_rgba(0,0,0,0.7)] group">
              <img
                src={currentItem.image}
                alt={currentItem.name[language]}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Card Label Tag */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#c6a779]/40 flex items-center gap-2">
                {getItemIcon(currentItem.id)}
                <span className="font-cinzel text-xs font-bold tracking-[0.2em] text-[#f2ebe1] uppercase">
                  {currentItem.name[language]}
                </span>
              </div>

              {/* Bottom Caption & Tip */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-left">
                <p className="text-sm sm:text-base text-[#ede4d8] font-medium leading-relaxed drop-shadow">
                  {currentItem.desc[language]}
                </p>
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10 text-xs text-[#c6a779]">
                  <Info className="w-3.5 h-3.5 flex-shrink-0 text-[#d4af37]" />
                  <span className="font-light italic">{currentItem.tip[language]}</span>
                </div>
              </div>
            </div>

            {/* Quick action buttons below image */}
            <div className="flex items-center gap-3 mt-4 w-full max-w-md justify-between px-1">
              <button
                onClick={() => setShowHowToClean(!showHowToClean)}
                className="text-xs font-cinzel tracking-wider text-[#c6a779] hover:text-[#f2ebe1] flex items-center gap-1.5 transition-colors py-2"
              >
                <span>{language === 'en' ? 'How to clean vessel for reuse' : 'Como limpar a peça para reutilizar'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenQuickBuy}
                className="text-xs font-cinzel font-semibold tracking-wider text-[#0a0908] bg-[#c6a779] hover:bg-[#d4af37] px-4 py-2 rounded-full transition-all"
              >
                {language === 'en' ? 'Select Vessel' : 'Escolher Vaso'}
              </button>
            </div>

            {/* Expandable Cleaning Guide Drawer */}
            {showHowToClean && (
              <div className="mt-3 w-full max-w-md p-4 rounded-xl bg-[#171511] border border-[#c6a779]/30 text-left text-xs leading-relaxed animate-fadeIn">
                <h4 className="font-cinzel text-xs font-bold tracking-widest text-[#d4af37] uppercase mb-2">
                  {language === 'en' ? 'Simple 3-Step Repurposing' : '3 Passos Simples para Reutilizar'}
                </h4>
                <ol className="space-y-1.5 text-[#ede4d8]/90">
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37] font-bold">1.</span>
                    <span>
                      {language === 'en'
                        ? 'Pour warm water (not boiling) with gentle soap into the spent vessel to loosen residual wax.'
                        : 'Coloque água morna com sabão neutro para amolecer resíduos de cera vegetal.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37] font-bold">2.</span>
                    <span>
                      {language === 'en'
                        ? 'Remove remaining wick base with a dull spoon and wipe inside with a dry cotton cloth.'
                        : 'Retire a base metálica do pavio e passe um pano de algodão macio por dentro.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37] font-bold">3.</span>
                    <span>
                      {language === 'en'
                        ? 'Your handcrafted ceramic vessel is ready for decades of functional elegance.'
                        : 'Sua cerâmica artesanal está pronta para décadas de elegância duradoura.'}
                    </span>
                  </li>
                </ol>
              </div>
            )}
          </div>

          {/* Vertical Stack of the 5 Options (Right 5 cols on desktop, bottom tabs on mobile) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[11px] font-cinzel tracking-[0.25em] text-[#c6a779] uppercase font-semibold text-center lg:text-left mb-1">
              {language === 'en' ? 'TAP TO PREVIEW USES' : 'TOQUE PARA EXPLORAR O USO'}
            </span>

            {REPURPOSE_ITEMS.map((item, index) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-center gap-3.5 group ${
                    isSelected
                      ? 'bg-[#1e1c17] border-[#d4af37] shadow-[0_4px_20px_rgba(212,175,55,0.18)] translate-x-1'
                      : 'bg-[#13120e] border-[#c6a779]/20 hover:border-[#c6a779]/50 hover:bg-[#181612]'
                  }`}
                  aria-pressed={isSelected}
                >
                  {/* Thumbnail */}
                  <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 relative">
                    <img
                      src={item.image}
                      alt={item.name[language]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 bg-[#d4af37]/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white drop-shadow" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-cinzel tracking-wider text-[#c6a779] font-medium">
                        0{index + 1}
                      </span>
                      <h3
                        className={`font-cinzel text-xs sm:text-sm font-bold tracking-[0.16em] uppercase truncate ${
                          isSelected ? 'text-[#f5e5c9]' : 'text-[#ede4d8]'
                        }`}
                      >
                        {item.name[language]}
                      </h3>
                    </div>
                    <p className="text-xs text-[#a89d8d] line-clamp-1 font-light">
                      {item.desc[language]}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className={`p-2 rounded-full ${isSelected ? 'bg-[#d4af37]/20' : 'bg-black/30'}`}>
                    {getItemIcon(item.id)}
                  </div>
                </button>
              );
            })}

            {/* Bottom Statement Matching Poster */}
            <div className="mt-4 pt-4 border-t border-[#c6a779]/20 flex items-center justify-center gap-2.5 text-center">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
              <p className="font-cormorant italic text-sm sm:text-base text-[#d4af37] font-normal tracking-wide">
                {language === 'en'
                  ? 'sustainable, reusable, and made to last'
                  : 'sustentável, reutilizável e feita para durar'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
