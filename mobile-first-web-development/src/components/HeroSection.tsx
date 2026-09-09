import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../data/candleData';
import { LeafCircleIcon, ClockCircleIcon } from './Icons';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  language: Language;
  onExplore: () => void;
  onOpenQuickBuy: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onExplore,
  onOpenQuickBuy,
}) => {
  const heroRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // In reduced motion mode: static, accessible, immediately visible without transforms
      if (mediaRef.current) gsap.set(mediaRef.current, { scale: 1, borderRadius: 0 });
      if (overlayRef.current) gsap.set(overlayRef.current, { opacity: 0.45 });
      if (contentRef.current) gsap.set(contentRef.current, { opacity: 1, y: 0 });
      return;
    }

    const mm = gsap.matchMedia();

    // Responsive setup with gsap.matchMedia
    mm.add(
      {
        isMobile: '(max-width: 767px)',
        isDesktop: '(min-width: 768px)',
      },
      (context) => {
        const { isMobile } = context.conditions as { isMobile: boolean; isDesktop: boolean };

        // Initial setup for entrance
        gsap.set(mediaRef.current, {
          scale: isMobile ? 1.08 : 1.1,
          borderRadius: 0,
          transformOrigin: 'center 45%',
        });
        gsap.set(overlayRef.current, {
          opacity: 0.32,
        });

        // Main cinematic scroll timeline
        const dynamicEnd = () => `+=${window.innerHeight * (isMobile ? 0.85 : 1.05)}`;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: dynamicEnd,
            pin: true,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Phase 2: Cinematic Scroll
        // 1. Slow, immersive zoom & slight vertical drift
        tl.to(
          mediaRef.current,
          {
            scale: isMobile ? 1.2 : 1.24,
            yPercent: isMobile ? -3.5 : -5,
            ease: 'none',
          },
          0
        );

        // 2. Overlay darkens to transition into subsequent narrative
        tl.to(
          overlayRef.current,
          {
            opacity: 0.72,
            backgroundColor: '#0a0908',
            ease: 'none',
          },
          0
        );

        // 3. Scroll indicator fades early
        tl.to(
          indicatorRef.current,
          {
            opacity: 0,
            y: -15,
            duration: 0.25,
            ease: 'power1.out',
          },
          0
        );

        // 4. Subtitle rises and vanishes first
        tl.to(
          paragraphRef.current,
          {
            y: isMobile ? -25 : -35,
            opacity: 0,
            duration: 0.45,
            ease: 'power1.out',
          },
          0.05
        );

        // 5. Badges subtly fade
        tl.to(
          badgesRef.current,
          {
            y: isMobile ? -20 : -30,
            opacity: 0,
            duration: 0.4,
            ease: 'power1.out',
          },
          0.08
        );

        // 6. Title rises discretely, keeping legibility
        tl.to(
          headingRef.current,
          {
            y: isMobile ? -35 : -50,
            opacity: 0.65,
            duration: 0.6,
            ease: 'none',
          },
          0.1
        );

        // 7. Eyebrow fades
        tl.to(
          eyebrowRef.current,
          {
            y: -20,
            opacity: 0,
            duration: 0.35,
            ease: 'power1.out',
          },
          0.15
        );

        // 8. CTA softens scale and opacity
        tl.to(
          actionsRef.current,
          {
            scale: isMobile ? 0.94 : 0.96,
            opacity: 0.55,
            y: -15,
            duration: 0.5,
            ease: 'none',
          },
          0.2
        );

        // Phase 3: Transition to next section
        tl.to(
          [headingRef.current, actionsRef.current],
          {
            y: -60,
            opacity: 0,
            duration: 0.35,
            ease: 'power2.in',
          },
          0.65
        );

        // Border radius gently applied at the end of the pin
        tl.to(
          mediaRef.current,
          {
            borderRadius: isMobile ? '20px' : '28px',
            scale: isMobile ? 1.25 : 1.3,
            duration: 0.35,
            ease: 'power2.out',
          },
          0.7
        );
      }
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      id="hero-section"
      ref={heroRef}
      className="relative w-full overflow-hidden bg-[#0a0908] select-none flex flex-col justify-between"
      style={{
        minHeight: '100svh',
        height: '100dvh',
      }}
    >
      {/* Cinematic Media Layer */}
      <div
        ref={mediaRef}
        className="hero-media absolute inset-0 w-full h-full overflow-hidden will-change-transform"
      >
        <img
          src="/images/hero-candle.jpg"
          alt="Aged Ebony Collection handcrafted luxury fluted black ceramic candle"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
          data-mobile-position="50% 36%"
          data-tablet-position="50% 40%"
          data-desktop-position="center"
          style={{
            objectPosition: 'center 42%',
          }}
        />

        {/* Realistic candle flame ambient glow overlay aligned with the candle wick */}
        <div
          className="absolute top-[37%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full pointer-events-none mix-blend-screen opacity-70 animate-flicker"
          style={{
            background:
              'radial-gradient(circle, rgba(255,190,85,0.7) 0%, rgba(220,130,30,0.35) 45%, rgba(0,0,0,0) 70%)',
          }}
        />
      </div>

      {/* Hero Overlay with subtle vignette and rich contrast */}
      <div
        ref={overlayRef}
        className="hero-overlay absolute inset-0 pointer-events-none transition-colors duration-300"
        style={{
          background:
            'radial-gradient(circle at 50% 42%, rgba(0,0,0,0.18) 0%, rgba(10,9,8,0.65) 75%, rgba(10,9,8,0.92) 100%)',
        }}
      />

      {/* Hero Content Layer */}
      <div
        ref={contentRef}
        className="hero-content relative z-10 w-full h-full flex flex-col justify-between px-5 sm:px-8 max-w-4xl mx-auto pt-20 sm:pt-24 pb-8"
        style={{
          paddingTop: 'max(env(safe-area-inset-top, 24px) + 64px, 80px)',
          paddingBottom: 'max(env(safe-area-inset-bottom, 20px) + 16px, 32px)',
        }}
      >
        {/* Top: Editorial Title & Subtitle block */}
        <div className="flex flex-col items-center text-center mt-1 sm:mt-2">
          {/* Eyebrow */}
          <span
            ref={eyebrowRef}
            className="hero-eyebrow font-cinzel text-xs sm:text-sm tracking-[0.35em] text-[#c6a779] uppercase font-semibold mb-1 sm:mb-2 block drop-shadow-md"
          >
            {language === 'en' ? 'AGED' : 'COLEÇÃO'}
          </span>

          {/* Main Headline */}
          <h1
            ref={headingRef}
            className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.14em] text-[#f2ebe1] uppercase leading-[1.08] drop-shadow-lg"
            style={{
              fontSize: 'clamp(2.15rem, 8.5vw, 4.25rem)',
              textShadow: '0 2px 20px rgba(0,0,0,0.85)',
            }}
          >
            {language === 'en' ? (
              <>
                <span className="block">EBONY</span>
                <span className="block text-[#ede4d8] font-extrabold">COLLECTION</span>
              </>
            ) : (
              <>
                <span className="block">ÉBANO</span>
                <span className="block text-[#ede4d8] font-extrabold">ENVELHECIDO</span>
              </>
            )}
          </h1>

          {/* Subtitle with decorative underline */}
          <div className="mt-2.5 sm:mt-3 flex flex-col items-center">
            <p
              ref={paragraphRef}
              className="font-cormorant italic text-base sm:text-xl md:text-2xl text-[#d5b58c] tracking-wide font-normal max-w-sm sm:max-w-md drop-shadow"
            >
              {language === 'en' ? 'beauty that transforms spaces' : 'beleza que transforma ambientes'}
            </p>
            <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c6a779]/80 to-transparent mt-2" />
          </div>
        </div>

        {/* Center Stone Badges (Plant-Based Wax & Long-Lasting) */}
        <div
          ref={badgesRef}
          className="my-auto w-full flex items-center justify-between sm:justify-around max-w-xs sm:max-w-md mx-auto pt-24 sm:pt-32 pb-4 px-2"
        >
          {/* Badge 1: Plant-Based Wax */}
          <div className="flex items-center gap-2.5 bg-black/45 backdrop-blur-sm px-3 py-2 rounded-full border border-[#c6a779]/30 shadow-lg text-left">
            <div className="text-[#d4af37] flex-shrink-0">
              <LeafCircleIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-[10px] sm:text-xs tracking-wider text-[#f3ece2] font-semibold uppercase leading-tight">
                {language === 'en' ? 'PLANT-BASED WAX' : 'CERA VEGETAL'}
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#c6a779] tracking-wide">
                {language === 'en' ? 'clean & sustainable' : 'queima limpa'}
              </span>
            </div>
          </div>

          {/* Badge 2: Long-Lasting */}
          <div className="flex items-center gap-2.5 bg-black/45 backdrop-blur-sm px-3 py-2 rounded-full border border-[#c6a779]/30 shadow-lg text-left">
            <div className="text-[#d4af37] flex-shrink-0">
              <ClockCircleIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-[10px] sm:text-xs tracking-wider text-[#f3ece2] font-semibold uppercase leading-tight">
                {language === 'en' ? 'LONG-LASTING' : 'LONGA DURAÇÃO'}
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#c6a779] tracking-wide">
                {language === 'en' ? 'moments endure' : 'momentos que duram'}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Hero Actions & Indicators */}
        <div className="w-full flex flex-col items-center gap-3.5 sm:gap-4 mt-auto">
          {/* Actions: Primary CTA and Secondary */}
          <div
            ref={actionsRef}
            className="hero-actions w-full flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 max-w-sm sm:max-w-md mx-auto"
          >
            <button
              onClick={onOpenQuickBuy}
              className="w-full sm:w-auto flex-1 min-h-[48px] px-6 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c6a779] to-[#b38e4a] text-[#0a0908] font-cinzel text-xs sm:text-sm font-bold tracking-[0.16em] uppercase flex items-center justify-center gap-2 shadow-[0_4px_24px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <span>{language === 'en' ? 'ACQUIRE PIECE — $68' : 'ADQUIRIR PEÇA — R$ 280'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExplore}
              className="w-full sm:w-auto min-h-[48px] px-5 py-3 rounded-full bg-black/55 backdrop-blur-md border border-[#c6a779]/50 text-[#f3ece2] font-cinzel text-xs font-semibold tracking-[0.14em] uppercase flex items-center justify-center gap-2 hover:bg-[#c6a779]/15 active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{language === 'en' ? 'AFTER USE (5 WAYS)' : 'PÓS USO (5 FORMAS)'}</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div
            ref={indicatorRef}
            className="hero-scroll-indicator flex flex-col items-center gap-1 text-[#c6a779]/80 cursor-pointer pt-1"
            onClick={onExplore}
          >
            <span className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-light">
              {language === 'en' ? 'Scroll to explore' : 'Deslize para descobrir'}
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#c6a779]" />
          </div>
        </div>
      </div>
    </section>
  );
};
