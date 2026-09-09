export type Language = 'en' | 'pt';

export interface RepurposeItem {
  id: string;
  name: { en: string; pt: string };
  desc: { en: string; pt: string };
  image: string;
  tip: { en: string; pt: string };
}

export interface VesselVariant {
  id: string;
  name: { en: string; pt: string };
  subtitle: { en: string; pt: string };
  burnTime: string;
  weight: string;
  price: number;
  image: string;
  badge: { en: string; pt: string };
  description: { en: string; pt: string };
}

export const REPURPOSE_ITEMS: RepurposeItem[] = [
  {
    id: 'decor',
    name: { en: 'DECOR', pt: 'DECORAÇÃO' },
    desc: {
      en: 'Vase for dried golden florals, twigs, and botanical accents.',
      pt: 'Vaso para arranjos florais secos, galhos e toques botânicos.',
    },
    image: '/images/repurpose-decor.jpg',
    tip: {
      en: 'Clean remaining wax with warm water and soft cloth before styling.',
      pt: 'Remova resíduos de cera com água morna e flanela antes de decorar.',
    },
  },
  {
    id: 'jewelry',
    name: { en: 'JEWELRY HOLDER', pt: 'PORTA-JÓIAS' },
    desc: {
      en: 'Bedside sanctuary for rings, cuff bracelets, and necklaces.',
      pt: 'Bandeja nobre para anéis, alianças, brincos e correntes.',
    },
    image: '/images/repurpose-jewelry.jpg',
    tip: {
      en: 'The soft matte ceramic protects delicate metals and stones from scratches.',
      pt: 'A cerâmica fosca protege peças de ouro e prata contra riscos.',
    },
  },
  {
    id: 'object',
    name: { en: 'OBJECT HOLDER', pt: 'PORTA-OBJETOS' },
    desc: {
      en: 'Catchall dish for timepiece, brass pens, and daily keys.',
      pt: 'Organizador para relógios, canetas finas e chaves diárias.',
    },
    image: '/images/repurpose-objects.jpg',
    tip: {
      en: 'Ideal for entryway console tables and executive work desks.',
      pt: 'Ideal para consoles de entrada e mesas executivas de trabalho.',
    },
  },
  {
    id: 'small-items',
    name: { en: 'SMALL ITEM HOLDER', pt: 'APOIO PARA PEQUENOS ITENS' },
    desc: {
      en: 'Minimalist container for vanity essentials & cotton swabs.',
      pt: 'Compartimento requintado para hastes flexíveis e acessórios.',
    },
    image: '/images/repurpose-items.jpg',
    tip: {
      en: 'Moisture resistant ceramic perfectly suited for master bathrooms.',
      pt: 'Cerâmica resistente à umidade, perfeita para lavabos refinados.',
    },
  },
  {
    id: 'plant',
    name: { en: 'PLANT', pt: 'PLANTINHA' },
    desc: {
      en: 'Architectural planter for succulents, echeverias, and moss.',
      pt: 'Vaso contemporâneo para suculentas, cactos e musgos nobres.',
    },
    image: '/images/repurpose-plant.jpg',
    tip: {
      en: 'Add a small gravel drainage base before adding succulent soil mix.',
      pt: 'Coloque pedriscos no fundo para drenagem ideal da raiz.',
    },
  },
];

export const VESSELS: VesselVariant[] = [
  {
    id: 'fluted-pillar',
    name: { en: 'Fluted Column Vessel', pt: 'Vaso Coluna Canelada' },
    subtitle: { en: 'Signature Scalloped Silhouette', pt: 'Silhueta Ondulada Assinatura' },
    burnTime: '65–75 hrs',
    weight: '380g (13.4 oz)',
    price: 68,
    image: '/images/hero-candle.jpg',
    badge: { en: 'Iconic Design', pt: 'Design Ícone' },
    description: {
      en: 'Sculptural fluted ceramic vessel finished in deep aged ebony matte glaze. Poured with 100% natural coconut-soy wax and natural cotton wick.',
      pt: 'Cerâmica escultural canelada com acabamento em esmalte fosco ébano profundo. Vertida com cera 100% vegetal de coco e soja com pavio puro.',
    },
  },
  {
    id: 'shallow-tart',
    name: { en: 'Scalloped Tart Bowl', pt: 'Prato Canelado Baixo' },
    subtitle: { en: 'Wide Low-Profile Basin', pt: 'Bacia Larga Perfil Baixo' },
    burnTime: '55–65 hrs',
    weight: '420g (14.8 oz)',
    price: 74,
    image: '/images/candle-shallow.jpg',
    badge: { en: 'Statement Piece', pt: 'Destaque de Centro' },
    description: {
      en: 'Architectural low rim dish inspired by classical pastry fluting. Wide wax pool yields an intense hot scent throw and doubles as an exceptional jewelry platter.',
      pt: 'Prato baixo arquitetônico com borda ondulada. Ampla piscina de cera que perfuma rapidamente e se torna uma magnífica travessa de joias.',
    },
  },
  {
    id: 'midnight-glass',
    name: { en: 'Midnight Amber Jar', pt: 'Copo Vidro Âmbar Noite' },
    subtitle: { en: 'Gilded Foil Monogram', pt: 'Monograma em Ouro Fosco' },
    burnTime: '50–60 hrs',
    weight: '320g (11.2 oz)',
    price: 54,
    image: '/images/candle-glass.jpg',
    badge: { en: 'Limited Edition', pt: 'Edição Limitada' },
    description: {
      en: 'Heavy-base smoked amber crystal glass with hot-stamped gold typography. Evokes the warmth of private library hearths.',
      pt: 'Vidro cristal fumê espesso com detalhes em folha de ouro prensada a quente. Evoca o calor de bibliotecas particulares e lareiras.',
    },
  },
];

export const FRAGRANCE_NOTES = {
  name: { en: 'Midnight Smoked Oud & Golden Amber', pt: 'Oud Defumado & Âmbar Dourado' },
  top: { en: 'Crushed Cardamom, Bergamot Peel, Black Peppercorn', pt: 'Cardamomo Tostado, Raspas de Bergamota, Pimenta Preta' },
  heart: { en: 'Aged Ebony Wood, Smoked Incense, Wild Cistus', pt: 'Madeira de Ébano Envelhecido, Incenso Defumado, Cistus Selvagem' },
  base: { en: 'Dark Amber, Bourbon Vanilla, Haitian Vetiver', pt: 'Âmbar Escuro, Fava de Baunilha Bourbon, Vetiver do Haiti' },
  intensity: '4.8 / 5.0',
};
