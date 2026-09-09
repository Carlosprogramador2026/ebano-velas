import React, { useState } from 'react';
import { Flame, Clock, Scale, ShoppingBag, Check } from 'lucide-react';
import { Language, VESSELS, VesselVariant } from '../data/candleData';

interface VesselsCollectionProps {
  language: Language;
  onAddToCart: (vessel: VesselVariant) => void;
}

export const VesselsCollection: React.FC<VesselsCollectionProps> = ({
  language,
  onAddToCart,
}) => {
  const [activeVesselId, setActiveVesselId] = useState<string>('fluted-pillar');
  const [addedId, setAddedId] = useState<string | null>(null);

  const activeVessel = VESSELS.find((v) => v.id === activeVesselId) || VESSELS[0];

  const handleAdd = (vessel: VesselVariant) => {
    onAddToCart(vessel);
    setAddedId(vessel.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="vessels-section" className="relative w-full bg-[#0d0c0a] py-14 sm:py-20 border-t border-[#c6a779]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#c6a779] uppercase font-semibold">
            {language === 'en' ? 'CURATED FORMS' : 'FORMAS CURADAS'}
          </span>
          <h2
            className="font-cinzel font-bold tracking-[0.14em] text-[#f2ebe1] uppercase mt-1"
            style={{ fontSize: 'clamp(1.5rem, 5.5vw, 2.5rem)' }}
          >
            {language === 'en' ? 'THE THREE SILHOUETTES' : 'AS TRÊS SILHUETAS'}
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#c6a779] mt-2">
            {language === 'en'
              ? 'Hand-cast ceramic and smoked crystal vessels designed for timeless rituals.'
              : 'Cerâmica moldada à mão e cristal fumê para rituais atemporais.'}
          </p>
        </div>

        {/* Vessel Tabs Switcher for Mobile and Desktop */}
        <div className="flex items-center justify-center gap-2 p-1.5 bg-[#14120f] border border-[#c6a779]/30 rounded-full max-w-lg mx-auto mb-10 overflow-x-auto no-scrollbar">
          {VESSELS.map((v) => {
            const isActive = v.id === activeVesselId;
            return (
              <button
                key={v.id}
                onClick={() => setActiveVesselId(v.id)}
                className={`min-h-[44px] px-4 sm:px-5 py-2 rounded-full font-cinzel text-xs sm:text-sm font-semibold tracking-wider transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#c6a779] text-[#0a0908] shadow-[0_2px_12px_rgba(198,167,121,0.4)]'
                    : 'text-[#ede4d8]/75 hover:text-[#ede4d8] hover:bg-white/5'
                }`}
              >
                {v.name[language]}
              </button>
            );
          })}
        </div>

        {/* Active Vessel Showcase Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#14120e] border border-[#c6a779]/25 rounded-2xl p-6 sm:p-10 shadow-2xl">
          {/* Left: Vessel Image */}
          <div className="md:col-span-6 relative aspect-square rounded-xl overflow-hidden border border-[#c6a779]/30 bg-black">
            <img
              src={activeVessel.image}
              alt={activeVessel.name[language]}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#c6a779]/40 text-[10px] font-cinzel tracking-widest text-[#d4af37] uppercase font-bold">
              {activeVessel.badge[language]}
            </div>
          </div>

          {/* Right: Specifications & CTA */}
          <div className="md:col-span-6 flex flex-col justify-center text-left">
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-cinzel text-xs tracking-[0.25em] text-[#c6a779] uppercase">
                {activeVessel.subtitle[language]}
              </span>
              <span className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#f3ece2]">
                ${activeVessel.price}
                <span className="text-xs text-[#a89d8d] font-normal ml-1">USD</span>
              </span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-[0.12em] text-[#f2ebe1] uppercase mb-4">
              {activeVessel.name[language]}
            </h3>

            <p className="text-sm sm:text-base text-[#d8cfc4] leading-relaxed mb-6 font-light">
              {activeVessel.description[language]}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#0d0c0a] border border-[#c6a779]/20 mb-6">
              <div className="flex flex-col items-center text-center">
                <Clock className="w-4 h-4 text-[#d4af37] mb-1" />
                <span className="text-[10px] uppercase tracking-wider text-[#a89d8d]">
                  {language === 'en' ? 'Burn Duration' : 'Duração'}
                </span>
                <span className="font-cinzel text-xs font-bold text-[#ede4d8]">
                  {activeVessel.burnTime}
                </span>
              </div>

              <div className="flex flex-col items-center text-center border-x border-[#c6a779]/20 px-2">
                <Scale className="w-4 h-4 text-[#d4af37] mb-1" />
                <span className="text-[10px] uppercase tracking-wider text-[#a89d8d]">
                  {language === 'en' ? 'Wax Weight' : 'Peso'}
                </span>
                <span className="font-cinzel text-xs font-bold text-[#ede4d8]">
                  {activeVessel.weight}
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <Flame className="w-4 h-4 text-[#d4af37] mb-1" />
                <span className="text-[10px] uppercase tracking-wider text-[#a89d8d]">
                  {language === 'en' ? 'Wick Type' : 'Pavio'}
                </span>
                <span className="font-cinzel text-xs font-bold text-[#ede4d8]">
                  {language === 'en' ? 'Braided Cotton' : 'Algodão Puro'}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => handleAdd(activeVessel)}
              className="w-full min-h-[50px] px-6 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c6a779] to-[#b38e4a] text-[#0a0908] font-cinzel text-xs sm:text-sm font-bold tracking-[0.16em] uppercase flex items-center justify-center gap-2 shadow-[0_4px_24px_rgba(212,175,55,0.35)] hover:brightness-110 active:scale-[0.98] transition-all"
            >
              {addedId === activeVessel.id ? (
                <>
                  <Check className="w-4 h-4 text-black" />
                  <span>{language === 'en' ? 'ADDED TO BAG' : 'ADICIONADO À SACOLA'}</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-black" />
                  <span>
                    {language === 'en'
                      ? `ADD TO BAG — $${activeVessel.price}`
                      : `ADICIONAR — R$ ${activeVessel.price * 4}`}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
