import React from 'react';
import { Scissors, Flame, Clock, RefreshCw } from 'lucide-react';
import { Language } from '../data/candleData';

interface BurnRitualProps {
  language: Language;
}

export const BurnRitual: React.FC<BurnRitualProps> = ({ language }) => {
  const steps = [
    {
      num: '01',
      icon: <Scissors className="w-5 h-5 text-[#d4af37]" />,
      title: language === 'en' ? 'Trim Wick to 5mm' : 'Apare o Pavio a 5mm',
      desc:
        language === 'en'
          ? 'Always trim the natural wick prior to every lighting to guarantee a smokeless, clean golden flame.'
          : 'Apare o pavio antes de cada queima para garantir uma chama límpida, sem fumaça escura.',
    },
    {
      num: '02',
      icon: <Flame className="w-5 h-5 text-[#d4af37]" />,
      title: language === 'en' ? 'The First Burn Memory' : 'Memória da Primeira Queima',
      desc:
        language === 'en'
          ? 'Allow the wax pool to reach the ceramic rim on your inaugural lighting (approx 2–3 hours) to prevent tunneling.'
          : 'Deixe a cera derreter até a borda na primeira vez (2 a 3 horas) para evitar a formação de túneis.',
    },
    {
      num: '03',
      icon: <Clock className="w-5 h-5 text-[#d4af37]" />,
      title: language === 'en' ? '4 Hours Maximum' : 'Máximo 4 Horas por Sessão',
      desc:
        language === 'en'
          ? 'Burn in sessions up to 4 hours to preserve the integrity of exquisite fragrance oils and vessel longevity.'
          : 'Queime por até 4 horas seguidas para preservar a riqueza dos óleos e a integridade da peça.',
    },
    {
      num: '04',
      icon: <RefreshCw className="w-5 h-5 text-[#d4af37]" />,
      title: language === 'en' ? 'Repurpose Forever' : 'Reutilize Eternamente',
      desc:
        language === 'en'
          ? 'When 1/2 inch of wax remains, easily cleanse with warm water and elevate your living room, desk or vanity.'
          : 'Quando restar 1cm de cera, limpe com água morna e dê um novo destino nobre em sua casa.',
    },
  ];

  return (
    <section className="relative w-full bg-[#0a0908] py-14 sm:py-20 border-t border-[#c6a779]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#c6a779] uppercase font-semibold">
            {language === 'en' ? 'CARE & LONGEVITY' : 'CUIDADO & LONGEVIDADE'}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-[0.14em] text-[#f2ebe1] uppercase mt-1">
            {language === 'en' ? 'THE ARTISAN RITUAL' : 'O RITUAL ARTESANAL'}
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#c6a779] mt-2">
            {language === 'en'
              ? 'Maximize every burn and honor the sculptural vessel for years to come.'
              : 'Maximize cada queima e honre sua peça escultórica por muitos anos.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-[#13120e] border border-[#c6a779]/20 flex flex-col justify-between hover:border-[#d4af37]/60 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-cinzel text-lg font-bold text-[#c6a779]/60 group-hover:text-[#d4af37] transition-colors">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-full bg-[#1b1915] border border-white/5">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#f2ebe1] uppercase mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#a89d8d] leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
