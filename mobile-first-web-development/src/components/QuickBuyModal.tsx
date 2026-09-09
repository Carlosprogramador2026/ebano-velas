import React, { useState } from 'react';
import { X, Check, ShoppingBag, Sparkles } from 'lucide-react';
import { Language, VESSELS, VesselVariant } from '../data/candleData';

interface QuickBuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onAddToCart: (vessel: VesselVariant) => void;
}

export const QuickBuyModal: React.FC<QuickBuyModalProps> = ({
  isOpen,
  onClose,
  language,
  onAddToCart,
}) => {
  const [selectedVessel, setSelectedVessel] = useState<VesselVariant>(VESSELS[0]);
  const [wickChoice, setWickChoice] = useState<'cotton' | 'wood'>('cotton');
  const [justAdded, setJustAdded] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onAddToCart(selectedVessel);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative w-full max-w-lg bg-[#12110e] border border-[#c6a779]/40 rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        style={{
          paddingBottom: 'max(env(safe-area-inset-bottom, 20px), 24px)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#c6a779]/20">
          <div>
            <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold">
              {language === 'en' ? 'LIMITED ATELIER EDITION' : 'EDIÇÃO LIMITADA DE ATELIÊ'}
            </span>
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#f2ebe1] uppercase">
              {language === 'en' ? 'ACQUIRE VESSEL' : 'SELECIONAR PEÇA'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-white/10 text-[#ede4d8]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Vessel Selection Cards */}
        <div className="mt-5 space-y-2.5">
          <label className="text-xs font-cinzel tracking-wider text-[#a89d8d] uppercase block">
            {language === 'en' ? 'Select Vessel Silhouette' : 'Escolha a Silhueta'}
          </label>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {VESSELS.map((v) => {
              const isSelected = v.id === selectedVessel.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setSelectedVessel(v)}
                  className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1e1c16] border-[#d4af37] ring-1 ring-[#d4af37]'
                      : 'bg-[#161410] border-white/10 hover:border-white/30'
                  }`}
                >
                  <img
                    src={v.image}
                    alt={v.name[language]}
                    className="w-full aspect-square object-cover rounded-lg mb-2"
                  />
                  <div className="font-cinzel text-[11px] font-bold text-[#f2ebe1] leading-tight line-clamp-1">
                    {v.name[language]}
                  </div>
                  <div className="text-xs font-bold text-[#d4af37] mt-1">${v.price}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Wick choice */}
        <div className="mt-5 space-y-2">
          <label className="text-xs font-cinzel tracking-wider text-[#a89d8d] uppercase block">
            {language === 'en' ? 'Wick Preference' : 'Tipo de Pavio'}
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setWickChoice('cotton')}
              className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                wickChoice === 'cotton'
                  ? 'bg-[#1e1c16] border-[#d4af37] text-[#f2ebe1]'
                  : 'bg-[#161410] border-white/10 text-[#a89d8d]'
              }`}
            >
              <div>
                <span className="font-bold block text-white font-cinzel">
                  {language === 'en' ? 'Braided Cotton' : 'Algodão Trançado'}
                </span>
                <span className="text-[10px] text-[#a89d8d]">
                  {language === 'en' ? 'Classic silent, steady flame' : 'Chama clássica constante'}
                </span>
              </div>
              {wickChoice === 'cotton' && <Check className="w-4 h-4 text-[#d4af37]" />}
            </button>

            <button
              onClick={() => setWickChoice('wood')}
              className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                wickChoice === 'wood'
                  ? 'bg-[#1e1c16] border-[#d4af37] text-[#f2ebe1]'
                  : 'bg-[#161410] border-white/10 text-[#a89d8d]'
              }`}
            >
              <div>
                <span className="font-bold block text-white font-cinzel">
                  {language === 'en' ? 'Artisan Wood Wick' : 'Madeira Natural'}
                </span>
                <span className="text-[10px] text-[#a89d8d]">
                  {language === 'en' ? 'Gentle fireside crackle' : 'Estalar suave de lareira'}
                </span>
              </div>
              {wickChoice === 'wood' && <Check className="w-4 h-4 text-[#d4af37]" />}
            </button>
          </div>
        </div>

        {/* Repurposing value note */}
        <div className="mt-4 p-3 rounded-xl bg-[#171510] border border-[#c6a779]/20 flex items-center gap-2.5 text-xs text-[#d5cbbe]">
          <Sparkles className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
          <span>
            {language === 'en'
              ? 'Includes lifetime repurposed vessel care certificate & dust cover.'
              : 'Acompanha certificado de longevidade para pós-uso e tampa protetora.'}
          </span>
        </div>

        {/* Confirmation CTA */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] text-[#a89d8d] uppercase tracking-wider block">
              {language === 'en' ? 'Total' : 'Total'}
            </span>
            <span className="font-cinzel text-xl font-bold text-[#f3ece2]">
              ${selectedVessel.price} USD
            </span>
          </div>

          <button
            onClick={handleConfirm}
            className="flex-1 min-h-[48px] px-6 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c6a779] to-[#b38e4a] text-black font-cinzel text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4 text-black" />
                <span>{language === 'en' ? 'ADDED TO BAG' : 'ADICIONADO!'}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-black" />
                <span>{language === 'en' ? 'ADD TO BAG' : 'ADICIONAR'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
