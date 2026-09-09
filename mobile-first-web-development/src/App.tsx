import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CorePillars } from './components/CorePillars';
import { RepurposeShowcase } from './components/RepurposeShowcase';
import { PosterInfographicSection } from './components/PosterInfographicSection';
import { VesselsCollection } from './components/VesselsCollection';
import { OlfactoryPyramid } from './components/OlfactoryPyramid';
import { BurnRitual } from './components/BurnRitual';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { QuickBuyModal } from './components/QuickBuyModal';
import { NavigationDrawer } from './components/NavigationDrawer';
import { Language, VESSELS, VesselVariant } from './data/candleData';
import { candleSound } from './utils/audio';

export function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { vessel: VESSELS[0], quantity: 1 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuickBuyOpen, setIsQuickBuyOpen] = useState(false);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  // Cart operations
  const handleAddToCart = (vessel: VesselVariant) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.vessel.id === vessel.id);
      if (existing) {
        return prev.map((item) =>
          item.vessel.id === vessel.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { vessel, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (vesselId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.vessel.id === vesselId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (vesselId: string) => {
    setCartItems((prev) => prev.filter((item) => item.vessel.id !== vesselId));
  };

  const handleToggleSound = () => {
    const active = candleSound.toggle();
    setIsPlayingSound(active);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="relative min-h-screen bg-[#0a0908] text-[#ede5da] overflow-x-hidden selection:bg-[#c6a779] selection:text-black">
      {/* Fixed Header */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section with GSAP ScrollTrigger */}
        <HeroSection
          language={language}
          onExplore={() => scrollToSection('repurpose-section')}
          onOpenQuickBuy={() => setIsQuickBuyOpen(true)}
        />

        {/* Core Pillars Bar (Fragrance, Minimalist Design, Perfect Gift, Handmade) */}
        <CorePillars language={language} />

        {/* The Signature Poster (Exact recreation of the reference artwork with interactive elements) */}
        <PosterInfographicSection
          language={language}
          onOpenQuickBuy={() => setIsQuickBuyOpen(true)}
        />

        {/* After Candle Use (5 Ways: Decor, Jewelry, Objects, Small Items, Plant) */}
        <RepurposeShowcase
          language={language}
          onOpenQuickBuy={() => setIsQuickBuyOpen(true)}
        />

        {/* The Three Silhouettes / Vessels Selector */}
        <VesselsCollection
          language={language}
          onAddToCart={handleAddToCart}
        />

        {/* Olfactory Architecture Section */}
        <div id="olfactory-section">
          <OlfactoryPyramid language={language} />
        </div>

        {/* The Artisan Burn Ritual & Care */}
        <div id="ritual-section">
          <BurnRitual language={language} />
        </div>
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Mobile Fixed Bottom Action Bar */}
      <MobileBottomBar
        language={language}
        onQuickBuy={() => setIsQuickBuyOpen(true)}
        onExploreRepurposing={() => scrollToSection('repurpose-section')}
        featuredVessel={VESSELS[0]}
      />

      {/* Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        language={language}
      />

      <QuickBuyModal
        isOpen={isQuickBuyOpen}
        onClose={() => setIsQuickBuyOpen(false)}
        language={language}
        onAddToCart={handleAddToCart}
      />

      <NavigationDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        language={language}
        onLanguageChange={setLanguage}
        isPlayingSound={isPlayingSound}
        onToggleSound={handleToggleSound}
        onNavigate={scrollToSection}
      />
    </div>
  );
}

export default App;
