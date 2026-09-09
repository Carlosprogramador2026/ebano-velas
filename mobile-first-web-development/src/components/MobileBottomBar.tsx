import React from 'react';
import { Sparkles } from 'lucide-react';
import { Language, VesselVariant } from '../data/candleData';

interface MobileBottomBarProps {
  language: Language;
  onQuickBuy: () => void;
  onExploreRepurposing: () => void;
  featuredVessel: VesselVariant;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  language,
  onQuickBuy,
  onExploreRepurposing,
  featuredVessel,
}) => {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0c0b09]/95 backdrop-blur-md border-t border-[#c6a779]/25 px-4 py-2.5 shadow-[0_-8px_24px_rgba(0,0,0,0.7)]"
      style={{
        paddingBottom: 'max(env(safe-area-inset-bottom, 12px), 12px)',
      }}
    >
      <div className="flex items-center gap-2.5">
        {/* Explore Repurposing Quick Button */}
        <button
          onClick={onExploreRepurposing}
          className="min-w-[44px] min-h-[44px] px-3.5 rounded-full bg-[#181612] border border-[#c6a779]/30 text-[#f2ebe1] flex items-center justify-center gap-1.5 active:scale-95 transition-all text-xs font-cinzel font-semibold tracking-wider"
          aria-label="View 5 repurposed uses"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-[11px]">{language === 'en' ? '5 Uses' : '5 Usos'}</span>
        </button>

        {/* Primary CTA */}
        <button
          onClick={onQuickBuy}
          className="flex-1 min-h-[44px] px-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c6a779] to-[#b38e4a] text-[#0a0908] font-cinzel text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-between shadow-[0_2px_16px_rgba(212,175,55,0.35)] active:scale-95 transition-all"
        >
          <span>{language === 'en' ? 'ACQUIRE PIECE' : 'ADQUIRIR PEÇA'}</span>
          <span className="font-mono bg-black/20 px-2 py-0.5 rounded-full text-[11px]">
            ${featuredVessel.price}
          </span>
        </button>
      </div>
    </div>
  );
};
