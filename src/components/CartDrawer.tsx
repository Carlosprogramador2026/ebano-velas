import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, Gift, Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { Language, VesselVariant } from '../data/candleData';

export interface CartItem {
  vessel: VesselVariant;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (vesselId: string, delta: number) => void;
  onRemoveItem: (vesselId: string) => void;
  language: Language;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  language,
}) => {
  const [includeGiftWrap, setIncludeGiftWrap] = useState<boolean>(true);
  const [giftNote, setGiftNote] = useState<string>('');
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [checkoutComplete, setCheckoutComplete] = useState<boolean>(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.vessel.price * item.quantity, 0);
  const shipping = subtotal > 100 || items.length === 0 ? 0 : 9;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div
        className="relative w-full max-w-md bg-[#11100d] border-l border-[#c6a779]/30 h-full flex flex-col justify-between shadow-2xl z-10 overflow-hidden"
        style={{
          paddingTop: 'max(env(safe-area-inset-top, 16px), 16px)',
          paddingBottom: 'max(env(safe-area-inset-bottom, 16px), 16px)',
        }}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#c6a779]/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
            <h3 className="font-cinzel text-base font-bold tracking-widest text-[#f3ece2] uppercase">
              {language === 'en' ? 'YOUR ACQUISITION' : 'SUA SACOLA'}
            </h3>
            <span className="text-xs bg-[#1f1d18] text-[#c6a779] px-2 py-0.5 rounded-full font-mono">
              ({items.reduce((s, i) => s + i.quantity, 0)})
            </span>
          </div>

          <button
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-white/10 text-[#ede4d8] transition-colors"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {checkoutComplete ? (
          <div className="p-8 text-center flex-1 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37] mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-cinzel text-xl font-bold text-[#f3ece2] uppercase mb-2">
              {language === 'en' ? 'Order Confirmed' : 'Pedido Confirmado'}
            </h4>
            <p className="text-sm text-[#c6a779] max-w-xs mb-6">
              {language === 'en'
                ? 'Thank you for honoring our artisan atelier. Your numbered box and certificates are being prepared.'
                : 'Agradecemos por escolher nosso ateliê artesanal. Sua peça numerada já está sendo preparada.'}
            </p>
            <button
              onClick={() => {
                setCheckoutComplete(false);
                onClose();
              }}
              className="min-h-[44px] px-6 py-2.5 rounded-full bg-[#c6a779] text-black font-cinzel text-xs font-bold uppercase tracking-wider"
            >
              {language === 'en' ? 'Return to Atelier' : 'Voltar ao Ateliê'}
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="p-8 text-center flex-1 flex flex-col items-center justify-center">
            <ShoppingBag className="w-12 h-12 text-[#c6a779]/40 mb-3" />
            <p className="font-cinzel text-sm text-[#ede4d8] uppercase tracking-wider mb-2">
              {language === 'en' ? 'Your bag is empty' : 'Sua sacola está vazia'}
            </p>
            <p className="text-xs text-[#a89d8d] max-w-xs mb-6">
              {language === 'en'
                ? 'Choose your desired ceramic vessel to begin your home sensory ritual.'
                : 'Selecione seu vaso de cerâmica favorito para iniciar seu ritual sensorial.'}
            </p>
            <button
              onClick={onClose}
              className="min-h-[44px] px-6 py-2.5 rounded-full bg-[#c6a779] text-black font-cinzel text-xs font-bold uppercase tracking-wider"
            >
              {language === 'en' ? 'Explore Pieces' : 'Explorar Peças'}
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.map((item) => (
              <div
                key={item.vessel.id}
                className="p-3.5 rounded-xl bg-[#161410] border border-[#c6a779]/20 flex gap-3.5"
              >
                <img
                  src={item.vessel.image}
                  alt={item.vessel.name[language]}
                  className="w-20 h-20 rounded-lg object-cover border border-white/10 flex-shrink-0"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-cinzel text-xs sm:text-sm font-bold text-[#f2ebe1] uppercase truncate">
                        {item.vessel.name[language]}
                      </h4>
                      <span className="text-[10px] text-[#c6a779] tracking-wider block">
                        {item.vessel.weight}
                      </span>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.vessel.id)}
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#a89d8d] hover:text-red-400 active:bg-white/5 rounded-full"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="font-cinzel text-sm font-bold text-[#f3ece2]">
                      ${item.vessel.price * item.quantity}
                    </span>

                    <div className="flex items-center border border-[#c6a779]/30 rounded-full bg-[#0d0c0a] overflow-hidden">
                      <button
                        onClick={() => onUpdateQuantity(item.vessel.id, -1)}
                        className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#ede4d8] hover:text-[#d4af37] active:bg-white/10 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-5 text-center text-xs font-mono font-bold text-[#f2ebe1]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.vessel.id, 1)}
                        className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#ede4d8] hover:text-[#d4af37] active:bg-white/10 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Complimentary Gift Box Box */}
            <div className="p-3.5 rounded-xl bg-[#181611] border border-[#c6a779]/25">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeGiftWrap}
                  onChange={(e) => setIncludeGiftWrap(e.target.checked)}
                  className="rounded border-[#c6a779] text-[#c6a779] focus:ring-[#c6a779] bg-black"
                />
                <Gift className="w-4 h-4 text-[#d4af37]" />
                <span className="text-xs font-cinzel font-semibold text-[#f2ebe1] uppercase tracking-wider">
                  {language === 'en'
                    ? 'Complimentary Luxury Gift Box & Matchbox'
                    : 'Caixa de Presente de Luxo Gratuita & Fósforos'}
                </span>
              </label>

              {includeGiftWrap && (
                <input
                  type="text"
                  placeholder={
                    language === 'en'
                      ? 'Add handwritten note message (optional)...'
                      : 'Mensagem caligrafada para o cartão (opcional)...'
                  }
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  className="mt-2.5 w-full bg-[#0d0c0a] border border-[#c6a779]/30 rounded-lg px-3 py-2 text-xs text-[#ede4d8] placeholder:text-[#888] focus:outline-none focus:border-[#d4af37]"
                />
              )}
            </div>
          </div>
        )}

        {/* Footer Summary & Checkout */}
        {!checkoutComplete && items.length > 0 && (
          <div className="p-5 border-t border-[#c6a779]/20 bg-[#0d0c0a] space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#a89d8d]">
                <span>{language === 'en' ? 'Subtotal' : 'Subtotal'}</span>
                <span className="font-mono text-[#f3ece2]">${subtotal}</span>
              </div>
              <div className="flex justify-between text-[#a89d8d]">
                <span>{language === 'en' ? 'Insured Shipping' : 'Frete Seguro'}</span>
                <span className="font-mono text-[#f3ece2]">
                  {shipping === 0
                    ? language === 'en'
                      ? 'Complimentary'
                      : 'Grátis'
                    : `$${shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#f2ebe1] pt-1 border-t border-white/5">
                <span className="font-cinzel">{language === 'en' ? 'Total' : 'Total'}</span>
                <span className="font-mono text-[#d4af37] text-base">${total} USD</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full min-h-[50px] rounded-full bg-gradient-to-r from-[#d4af37] via-[#c6a779] to-[#b38e4a] text-[#0a0908] font-cinzel text-xs font-bold tracking-[0.16em] uppercase flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {isCheckingOut ? (
                <span>{language === 'en' ? 'PREPARING YOUR CERTIFICATE...' : 'PROCESSANDO...'}</span>
              ) : (
                <>
                  <span>{language === 'en' ? 'COMPLETE ACQUISITION' : 'CONCLUIR PEDIDO'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#a89d8d]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c6a779]" />
              <span>
                {language === 'en'
                  ? '30-Day Aesthetic Guarantee · Carbon Neutral Delivery'
                  : 'Garantia de Satisfação · Entrega com Neutralização de Carbono'}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
