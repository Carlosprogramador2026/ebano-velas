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
          style={{
            objectPosition: 'center 38%',
          }}
        />

        {/* Realistic candle flame ambient glow overlay aligned with the candle wick in portrait */}
        <div
          className="absolute top-[35%] sm:top-[37%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 sm:w-56 h-44 sm:h-56 rounded-full pointer-events-none mix-blend-screen opacity-75 animate-flicker"
          style={{
            background:
              'radial-gradient(circle, rgba(255,190,85,0.75) 0%, rgba(220,130,30,0.35) 45%, rgba(0,0,0,0) 70%)',
          }}
        />
      </div>

      {/* Hero Overlay with subtle vignette and rich contrast */}
      <div
        ref={overlayRef}
        className="hero-overlay absolute inset-0 pointer-events-none transition-colors duration-300"
        style={{
          background:
            'radial-gradient(circle at 50% 38%, rgba(0,0,0,0.2) 0%, rgba(10,9,8,0.68) 72%, rgba(10,9,8,0.94) 100%)',
        }}
      />

      {/* Hero Content Layer */}
      <div
        ref={contentRef}
        className="hero-content relative z-10 w-full h-full flex flex-col justify-between px-4 sm:px-6 max-w-4xl mx-auto"
        style={{
          paddingTop: 'max(env(safe-area-inset-top, 20px) + 56px, 72px)',
          paddingBottom: 'max(env(safe-area-inset-bottom, 20px) + 16px, 28px)',
        }}
      >
        {/* Top: Editorial Title & Subtitle block */}
        <div className="flex flex-col items-center text-center w-full max-w-sm sm:max-w-md mx-auto">
          {/* Eyebrow */}
          <span
            ref={eyebrowRef}
            className="hero-eyebrow font-cinzel text-[11px] sm:text-xs tracking-[0.35em] text-[#c6a779] uppercase font-semibold mb-1 block drop-shadow-md"
          >
            {language === 'en' ? 'AGED' : 'COLEÇÃO'}
          </span>

          {/* Main Headline with clamp() */}
          <h1
            ref={headingRef}
            className="font-cinzel font-bold tracking-[0.12em] sm:tracking-[0.14em] text-[#f2ebe1] uppercase leading-[1.05] drop-shadow-lg w-full"
            style={{
              fontSize: 'clamp(2.1rem, 9.5vw, 4.25rem)',
              textShadow: '0 2px 20px rgba(0,0,0,0.9)',
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
          <div className="mt-2 sm:mt-2.5 flex flex-col items-center max-w-[90%]">
            <p
              ref={paragraphRef}
              className="font-cormorant italic text-base sm:text-xl md:text-2xl text-[#d5b58c] tracking-wide font-normal drop-shadow leading-tight"
            >
              {language === 'en' ? 'beauty that transforms spaces' : 'beleza que transforma ambientes'}
            </p>
            <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c6a779]/80 to-transparent mt-2" />
          </div>
        </div>

        {/* Center Stone Badges (Plant-Based Wax & Long-Lasting) - Mobile vertical stacked / side-by-side */}
        <div
          ref={badgesRef}
          className="my-auto w-full flex items-center justify-center gap-2.5 sm:gap-4 max-w-sm sm:max-w-md mx-auto pt-16 sm:pt-28 pb-4 px-1"
        >
          {/* Badge 1: Plant-Based Wax */}
          <div className="flex-1 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-2.5 rounded-2xl border border-[#c6a779]/35 shadow-lg text-left min-h-[44px]">
            <div className="text-[#d4af37] flex-shrink-0">
              <LeafCircleIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-cinzel text-[9px] sm:text-[11px] tracking-wider text-[#f3ece2] font-semibold uppercase leading-tight truncate">
                {language === 'en' ? 'PLANT-BASED' : 'CERA VEGETAL'}
              </span>
              <span className="text-[8px] sm:text-[9px] text-[#c6a779] tracking-wide leading-tight truncate">
                {language === 'en' ? 'clean & pure burn' : 'queima limpa'}
              </span>
            </div>
          </div>

          {/* Badge 2: Long-Lasting */}
          <div className="flex-1 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-2.5 rounded-2xl border border-[#c6a779]/35 shadow-lg text-left min-h-[44px]">
            <div className="text-[#d4af37] flex-shrink-0">
              <ClockCircleIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-cinzel text-[9px] sm:text-[11px] tracking-wider text-[#f3ece2] font-semibold uppercase leading-tight truncate">
                {language === 'en' ? 'LONG-LASTING' : 'LONGA DURAÇÃO'}
              </span>
              <span className="text-[8px] sm:text-[9px] text-[#c6a779] tracking-wide leading-tight truncate">
                {language === 'en' ? '60+ hour ritual' : '60h+ de queima'}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Hero Actions & Indicators */}
        <div className="w-full flex flex-col items-center gap-3 sm:gap-4 mt-auto">
          {/* Actions: Primary CTA and Secondary */}
          <div
            ref={actionsRef}
            className="hero-actions w-full flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 max-w-sm sm:max-w-md mx-auto"
          >
            <button
              onClick={onOpenQuickBuy}
              className="w-full min-h-[50px] px-6 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c6a779] to-[#b38e4a] text-[#0a0908] font-cinzel text-xs sm:text-sm font-bold tracking-[0.16em] uppercase flex items-center justify-center gap-2 shadow-[0_4px_24px_rgba(212,175,55,0.45)] active:scale-[0.98] transition-transform cursor-pointer"
            >
              <span>{language === 'en' ? 'ACQUIRE PIECE — $68' : 'ADQUIRIR PEÇA — R$ 280'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExplore}
              className="w-full min-h-[46px] px-5 py-2.5 rounded-full bg-black/65 backdrop-blur-md border border-[#c6a779]/50 text-[#f3ece2] font-cinzel text-xs font-semibold tracking-[0.14em] uppercase flex items-center justify-center gap-2 active:scale-[0.98] transition-transform cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{language === 'en' ? 'AFTER USE (5 WAYS)' : 'PÓS USO (5 FORMAS)'}</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div
            ref={indicatorRef}
            className="hero-scroll-indicator flex flex-col items-center gap-1 text-[#c6a779]/85 cursor-pointer pt-0.5 min-h-[44px] justify-center"
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
