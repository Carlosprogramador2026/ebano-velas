import React from 'react';
import { X, Globe, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { Language } from '../data/candleData';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isPlayingSound: boolean;
  onToggleSound: () => void;
  onNavigate: (id: string) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  language,
  onLanguageChange,
  isPlayingSound,
  onToggleSound,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const links = [
    { id: 'hero-section', label: language === 'en' ? 'Aged Ebony Vessel' : 'Vaso Ébano Envelhecido' },
    { id: 'repurpose-section', label: language === 'en' ? 'After Candle Use (5 Uses)' : 'Pós Uso da Vela (5 Usos)' },
    { id: 'vessels-section', label: language === 'en' ? 'The Three Silhouettes' : 'As Três Silhuetas' },
    { id: 'olfactory-section', label: language === 'en' ? 'Olfactory Architecture' : 'Pirâmide Olfativa' },
    { id: 'ritual-section', label: language === 'en' ? 'The Artisan Ritual' : 'O Ritual Artesanal' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-sm bg-[#0e0d0b] border-l border-[#c6a779]/25 h-full flex flex-col justify-between p-6 z-10 shadow-2xl"
        style={{
          paddingTop: 'max(env(safe-area-inset-top, 20px), 24px)',
          paddingBottom: 'max(env(safe-area-inset-bottom, 20px), 24px)',
        }}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-[#c6a779]/70 flex items-center justify-center bg-black/40">
                <span className="font-cinzel text-xs font-semibold text-[#d4af37]">Æ</span>
              </div>
              <span className="font-cinzel text-xs font-bold tracking-[0.2em] text-[#f2ebe1] uppercase">
                {language === 'en' ? 'AGED EBONY' : 'ÉBANO ENVELHECIDO'}
              </span>
            </div>

            <button
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-white/10 text-[#ede4d8]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-8 space-y-4">
            {links.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  onClose();
                }}
                className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-white/5 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-[#c6a779]/60 group-hover:text-[#d4af37]">
                    0{idx + 1}
                  </span>
                  <span className="font-cinzel text-sm tracking-wider text-[#ede4d8] group-hover:text-[#f3ece2]">
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#c6a779]/40 group-hover:text-[#d4af37] transition-transform group-hover:translate-x-0.5" />
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Options */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          {/* Language Switch */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#14120f] border border-white/5">
            <div className="flex items-center gap-2 text-xs text-[#a89d8d]">
              <Globe className="w-4 h-4 text-[#c6a779]" />
              <span>{language === 'en' ? 'Language / Idioma' : 'Idioma / Language'}</span>
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded text-xs font-cinzel font-bold ${
                  language === 'en' ? 'bg-[#c6a779] text-black' : 'text-[#a89d8d] hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('pt')}
                className={`px-2.5 py-1 rounded text-xs font-cinzel font-bold ${
                  language === 'pt' ? 'bg-[#c6a779] text-black' : 'text-[#a89d8d] hover:text-white'
                }`}
              >
                PT
              </button>
            </div>
          </div>

          {/* Sound toggle */}
          <button
            onClick={onToggleSound}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-[#14120f] border border-white/5 text-xs text-[#a89d8d] hover:text-white"
          >
            <div className="flex items-center gap-2">
              {isPlayingSound ? (
                <Volume2 className="w-4 h-4 text-[#d4af37]" />
              ) : (
                <VolumeX className="w-4 h-4 text-[#a89d8d]" />
              )}
              <span>{language === 'en' ? 'Wood Wick Flame Sound' : 'Som de Chama de Pavio'}</span>
            </div>
            <span
              className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                isPlayingSound ? 'bg-[#d4af37]/20 text-[#d4af37]' : 'text-gray-500'
              }`}
            >
              {isPlayingSound ? (language === 'en' ? 'Active' : 'Ligado') : (language === 'en' ? 'Muted' : 'Mudo')}
            </span>
          </button>

          <p className="font-cormorant italic text-xs text-[#c6a779] text-center pt-2">
            {language === 'en'
              ? 'Handcrafted in limited seasonal batches.'
              : 'Produção artesanal em tiragens limitadas.'}
          </p>
        </div>
      </div>
    </div>
  );
};
