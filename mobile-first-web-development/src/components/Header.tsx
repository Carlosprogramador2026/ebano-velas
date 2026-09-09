import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ShoppingBag, Menu, Globe } from 'lucide-react';
import { Language } from '../data/candleData';
import { candleSound } from '../utils/audio';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  cartCount,
  onOpenCart,
  onOpenMenu,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const playing = candleSound.toggle();
    setIsPlayingSound(playing);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-auto ${
        isScrolled
          ? 'bg-[#0d0c0a]/85 backdrop-blur-md border-b border-[#c6a779]/20 shadow-lg shadow-black/40 py-2.5'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-3 sm:py-4'
      }`}
      style={{ paddingTop: 'max(env(safe-area-inset-top, 0px), 8px)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <a
          href="#hero-section"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-1 focus:ring-[#c6a779]"
          aria-label="Aged Ebony Collection Home"
        >
          <div className="w-8 h-8 rounded-full border border-[#c6a779]/60 flex items-center justify-center bg-black/40 shadow-inner group-hover:border-[#c6a779] transition-colors">
            <span className="font-cinzel text-xs font-semibold tracking-widest text-[#d4af37]">Æ</span>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.22em] text-[#ece4d8] uppercase leading-tight">
              {language === 'en' ? 'Aged Ebony' : 'Ébano'}
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#c6a779] uppercase font-light">
              {language === 'en' ? 'Atelier Maison' : 'Ateliê Maison'}
            </span>
          </div>
        </a>

        {/* Right Action Icons: Language, Sound, Cart, Menu */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Flame Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`min-w-[44px] min-h-[44px] px-2.5 rounded-full flex items-center justify-center gap-1.5 text-xs transition-colors border ${
              isPlayingSound
                ? 'bg-[#c6a779]/20 text-[#f5e5c9] border-[#c6a779]/60 shadow-[0_0_12px_rgba(212,175,55,0.35)]'
                : 'bg-black/30 text-[#ece4d8]/70 border-white/10 hover:text-[#ece4d8]'
            }`}
            title={isPlayingSound ? 'Mute flame sound' : 'Listen to wood wick crackle'}
            aria-label="Toggle ambient flame crackle audio"
          >
            {isPlayingSound ? (
              <>
                <Volume2 className="w-4 h-4 text-[#d4af37] animate-pulse" />
                <span className="text-[10px] hidden sm:inline tracking-wider font-medium text-[#d4af37]">CRACKLE</span>
              </>
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Bilingual Switcher */}
          <button
            onClick={() => onLanguageChange(language === 'en' ? 'pt' : 'en')}
            className="min-w-[44px] min-h-[44px] px-2.5 rounded-full flex items-center justify-center gap-1 text-xs font-cinzel tracking-widest text-[#ece4d8] bg-black/30 border border-white/10 hover:border-[#c6a779]/40 transition-colors"
            aria-label={`Switch language to ${language === 'en' ? 'Portuguese' : 'English'}`}
          >
            <Globe className="w-3.5 h-3.5 text-[#c6a779]" />
            <span className="font-semibold text-[11px]">{language === 'en' ? 'PT' : 'EN'}</span>
          </button>

          {/* Shopping Bag Button */}
          <button
            onClick={onOpenCart}
            className="min-w-[44px] min-h-[44px] px-2.5 rounded-full flex items-center justify-center relative bg-black/30 border border-white/10 hover:border-[#c6a779]/50 transition-colors text-[#ece4d8]"
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <ShoppingBag className="w-4 h-4 text-[#ece4d8]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#c6a779] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* Navigation Drawer Button */}
          <button
            onClick={onOpenMenu}
            className="min-w-[44px] min-h-[44px] p-2.5 rounded-full flex items-center justify-center text-[#ece4d8] bg-black/30 border border-white/10 hover:border-[#c6a779]/50 transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
