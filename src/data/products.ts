export type ProductCategory = 'bath' | 'change' | 'hydration' | 'comfort' | 'lice' | 'travel';

export interface ProductTranslation {
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  usage: string;
  precautions: string;
}

export interface Product {
  slug: string;
  category: ProductCategory;
  images: string[];
  sizes: string[];
  featured?: boolean;
  imageScale?: 'small' | 'medium' | 'large' | 'wide';
  relatedProducts?: string[];
  /** INCI ingredient listing — language-neutral, not duplicated per locale. */
  ingredients: string;
  translations: {
    fr: ProductTranslation;
    /**
     * English product copy. Left empty on purpose: per the localization
     * brief, cosmetic/dermatological claims must not be auto-translated
     * without review. Consumers should fall back to `fr` (see
     * src/i18n/product.ts) and surface a pending-review notice.
     */
    en: Partial<ProductTranslation>;
  };
}

export const products: Product[] = [
  {
    slug: 'shampoing-bebe-enfant-sans-sulfate-2en1',
    category: 'bath',
    featured: true,
    images: [
      '/images/products/shampoing-bebe-enfant-sans-sulfate-2en1/11.png',
      '/images/products/shampoing-bebe-enfant-sans-sulfate-2en1/12.png',
    ],
    sizes: ['250ml', '400ml'],
    ingredients: 'WATER, COCAMIDOPROPYL BETAINE, SODIUM LAUROYL SARCOSINATE, COCO-GLUCOSIDE, PEG-150 DISTEARATE, PROPYLENE GLYCOL, POLYQUATERNIUM-7, BENZOIC ACID, BENZYL ALCOHOL, DEHYDROACETIC ACID, FRAGRANCE.',
    translations: {
      fr: {
        name: 'Le Shampoing Bébé et Enfant Sans Sulfate "2 en 1"',
        shortDescription: 'Nettoie en douceur la peau et les cheveux du bébé en un seul geste, sans savon ni sulfate.',
        description: "Sans savon, sans sulfate ni sels. Ne pique pas les yeux, peut être utilisé quotidiennement. Nettoie en un seul geste la peau et les cheveux du bébé et facilite le démêlage. Enrichi d'actifs naturels doux, il nettoie en douceur les cheveux fins et les fait briller tout en respectant au mieux la fibre capillaire et sans nuire à la peau fragile des bébés et des plus grands. Grâce à ses propriétés apaisantes et hydratantes, il favorise le maintien de l'hydratation de la peau particulièrement sensible chez les nourrissons.",
        benefits: [
          'Sans savon, sans sulfate ni sels',
          'Ne pique pas les yeux',
          'Usage quotidien possible',
          'Nettoie peau et cheveux en un seul geste',
          'Facilite le démêlage',
          "Enrichi d'actifs naturels doux",
        ],
        usage: 'Appliquer sur la peau et les cheveux mouillés et faire mousser. Rincer puis sécher.',
        precautions: '',
      },
      en: {},
    },
  },
  {
    slug: 'eau-de-senteur',
    category: 'hydration',
    images: ['/images/products/eau-de-senteur/2.png'],
    sizes: ['250ml'],
    ingredients: 'WATER, PEG-40 HYDROGENATED CASTOR OIL (AND) TRIDECETH-9 (AND) WATER, FRAGRANCE, PROPYLENE GLYCOL, BENZOIC ACID, BENZYL ALCOHOL, DEHYDROACETIC ACID.',
    translations: {
      fr: {
        name: 'Eau de senteur',
        shortDescription: 'Formule hypoallergénique, sans alcool et PH physiologique pour préserver l’équilibre naturel.',
        description: "Sa formule hypoallergénique et sans alcool et son PH physiologique préserve l'équilibre naturel du cuir chevelu et de l'épiderme. Elle est conçue spécialement pour maintenir la peau délicate des bébés bien hydratée. Son parfum doux et agréable apporte fraîcheur et bien-être pour les bébés et les enfants. Permet d'adoucir et d'assouplir l'épiderme et facilite le coiffage.",
        benefits: [
          'Hypoallergénique',
          'Sans alcool',
          'PH physiologique',
          'Hydratation douce pour la peau délicate',
          'Parfum doux et agréable',
          'Adoucit et facilite le coiffage',
        ],
        usage: 'Vaporiser sur la peau et les cheveux. Peut-être appliquée sur les vêtements et le linge.',
        precautions: '',
      },
      en: {},
    },
  },
  {
    slug: 'liniment-oleo-calcaire',
    category: 'change',
    images: [
      '/images/products/liniment-oleo-calcaire/31.png',
      '/images/products/liniment-oleo-calcaire/32.png',
    ],
    sizes: ['200ml', '400ml'],
    ingredients: 'WATER, CALCIUM HYDROXIDE, OLEA EUROPAEA FRUIT OIL, GLYCERYL STEARATE SE, CERA ALBA, XANTHAN GUM, BENZOIC ACID, BENZYL ALCOHOL, DEHYDROACETIC ACID.',
    translations: {
      fr: {
        name: 'Liniment oléo calcaire',
        shortDescription: 'Nettoie et protège le siège de bébé tout en laissant un film protecteur doux.',
        description: "Une formule naturelle à base d'huile d'olive qui nettoie, nourrit et protège l'épiderme délicat du siège du bébé. Elle contribue à prévenir les rougeurs et les irritations en formant un film protecteur contre les agressions extérieures irritantes.",
        benefits: [
          'Nettoie et protège le siège du bébé',
          'Contribue à prévenir rougeurs et irritations',
          "Formule à base d'huile d'olive nourrissante",
          'Ne nécessite pas de rinçage',
          'Nettoyant antiseptique et fongicide naturel',
        ],
        usage: 'Appliquer à chaque change à l’aide d’un coton pour nettoyer le siège du bébé. Ne nécessite pas de rinçage.',
        precautions: '',
      },
      en: {},
    },
  },
  {
    slug: 'creme-de-change',
    category: 'change',
    images: ['/images/products/creme-de-change/4.png'],
    sizes: ['40gr'],
    ingredients: 'WATER, PETROLATUM, GLYCERYL OLEATE, LANOLIN ALCOHOL, MINERAL OIL (PARAFFINUM LIQUIDUM), OZOKERITE, ZINC OXIDE, PROPYLENE GLYCOL, PRUNUS AMYGDALUS DULCIS OIL, CALENDULA OFFICINALIS FLOWER EXTRACT, BENZOIC ACID, BENZYL ALCOHOL, DEHYDROACETIC ACID.',
    translations: {
      fr: {
        name: 'Crème de change',
        shortDescription: 'Crème protectrice riche en calendula, cire d’abeille et huile d’amande douce pour prévenir les irritations.',
        description: "Sa formule enrichie en oxyde de zinc protège la peau des substances irritantes, soulage et apaise dès la première utilisation. Elle renforce le film protecteur naturel et participe à la régénération de l'épiderme.",
        benefits: [
          "Prévention des irritations et de l'érythème fessier",
          'Enrichie en oxyde de zinc',
          'Soulagée dès la première utilisation',
          'Renforce le film protecteur naturel',
          'Tube pratique de 40gr',
        ],
        usage: 'Après nettoyage, appliquer en couches épaisses sur le siège sec.',
        precautions: '',
      },
      en: {},
    },
  },
  {
    slug: 'lait-de-corps',
    category: 'hydration',
    images: ['/images/products/lait-de-corps/5.png'],
    sizes: ['200ml'],
    ingredients: 'WATER, DIBUTYL ADIPATE, GLYCERYL STEARATE SE, PROPYLENE GLYCOL, PRUNUS AMYGDALUS DULCIS OIL, CERA ALBA, XANTHAN GUM, BENZOIC ACID, BENZYL ALCOHOL, DEHYDROACETIC ACID.',
    translations: {
      fr: {
        name: 'Lait de corps',
        shortDescription: 'Hydrate et nourrit la peau sensible des bébés et des enfants sans coller.',
        description: "Sa formule à base de cire d'abeille et d'huile d'amande douce hydrate les peaux les plus sèches, renforce la barrière cutanée naturelle et pénètre rapidement sans film gras.",
        benefits: [
          'Hydrate et nourrit la peau des bébés et des enfants',
          'Renforce la barrière cutanée naturelle',
          'Pénètre rapidement et ne colle pas',
          'Convient aux peaux les plus sèches',
          'Disponible en flacon de 200ml',
        ],
        usage: 'Appliquer 1 à 2 fois par jour sur la peau nettoyée et sèche.',
        precautions: '',
      },
      en: {},
    },
  },
  {
    slug: 'lotion-anti-poux',
    category: 'lice',
    images: ['/images/products/lotion-anti-poux/6.png'],
    sizes: ['200ml'],
    ingredients: 'DIBUTYL ADIPATE, LAVENDULA HYBRIDA OIL, CYMBOPOGON WINTERIANUS HERB OIL, TOCOPHEROL.',
    translations: {
      fr: {
        name: 'Lotion anti-poux',
        shortDescription: 'Lotion traitante sans silicone ni insecticides chimiques, efficace dès la première application.',
        description: "La Lotion Traitante Anti-poux Lucéat® élimine 100% des poux et des lentes en une application. Enrichie en vitamine E et en huiles essentielles de citronnelle et lavande, elle prévient l'invasion de poux et freine leur prolifération.",
        benefits: [
          'Élimine 100% des poux et lentes en une application',
          'Sans silicone ni insecticides chimiques',
          'Contient vitamine E',
          'Prévention et traitement grâce aux huiles essentielles',
          'Efficacité prouvée dès la première utilisation',
        ],
        usage: 'S’applique sur cheveux secs comme un masque. Temps de pose de 20 à 30 minutes. Laver ensuite les cheveux avec le Shampoing Doux Assainissant Lucéat®.',
        precautions: '',
      },
      en: {},
    },
  },
  {
    slug: 'shampoing-anti-poux-assainissant',
    category: 'lice',
    images: ['/images/products/shampoing-anti-poux-assainissant/7.png'],
    sizes: ['250ml'],
    ingredients: 'WATER, COCAMIDOPROPYL BETAINE, SODIUM LAUROYL SARCOSINATE, COCO-GLUCOSIDE, PEG-150 DISTEARATE, PROPYLENE GLYCOL, POLYQUATERNIUM-7, BENZOIC ACID, BENZYL ALCOHOL, DEHYDROACETIC ACID, LAVENDULA HYBRIDA OIL, CYMBOPOGON WINTERIANUS HERB OIL.',
    translations: {
      fr: {
        name: 'Shampoing anti-poux assainissant',
        shortDescription: 'Shampoing doux sans silicone ni insecticides chimiques pour assainir le cuir chevelu après traitement anti-poux.',
        description: "Le Shampoing Doux Assainissant Anti Poux Lucéat® assainit le cuir chevelu, facilite le décollage des lentes mortes résiduelles et le démêlage. Recommandé après traitement anti-parasitaire pour rééquilibrer le cuir chevelu fragilisé.",
        benefits: [
          'Assainit le cuir chevelu',
          'Facilite l’élimination des lentes mortes résiduelles',
          'Démêle après traitement anti-poux',
          'Sans silicone ni insecticides chimiques',
          'Efficacité prouvée dès la première utilisation',
        ],
        usage: 'Appliquer sur cheveux mouillés. Faire mousser environ 3 minutes. Peigner avec le peigne fin offert pour décoller les lentes, rincer abondamment puis sécher. Renouveler si nécessaire.',
        precautions: '',
      },
      en: {},
    },
  },
  {
    slug: 'talc',
    category: 'change',
    images: ['/images/products/talc/8.png'],
    sizes: ['100g'],
    ingredients: 'MAGNESIUM SILICATE.',
    translations: {
      fr: {
        name: 'Talc',
        shortDescription: 'Aide à absorber l’excès d’humidité pour une peau fraîche et confortable.',
        description: "Le talc LUCEAT absorbe l'humidité et laisse une peau fraîche et confortable. Il est conçu pour un usage externe et aide à maintenir la peau sèche et apaisée.",
        benefits: [
          'Absorbe l’excès d’humidité',
          'Peau fraîche et confortable',
          'Usage externe seulement',
          'Ne pas utiliser sur les plaies',
        ],
        usage: 'Appliquer sur une peau propre et sèche en évitant le nez et la bouche des enfants.',
        precautions: '',
      },
      en: {},
    },
  },
  {
    slug: 'trousse-bebe-3-2',
    category: 'travel',
    images: ['/images/products/trousse-bebe-3-2/9.png'],
    sizes: ['coffret'],
    ingredients: 'Contient plusieurs produits, voir étiquettes individuelles.',
    translations: {
      fr: {
        name: 'Trousse bébé 3+2',
        shortDescription: 'Tous les indispensables d’hygiène bébé réunis dans une trousse pratique pour le voyage.',
        description: "Tous les indispensables pour effectuer les soins quotidiens d'hygiène de vos bien-aimés disponibles en une seule trousse, accompagnant vos déplacements.",
        benefits: [
          'Shampoing bébé enfant sans sulfate 250ml inclus',
          'Eau de senteur sans alcool 250ml incluse',
          'Crème de change 40gr incluse',
          'Savon doux hypoallergénique 100gr offert',
          'Trousse offerte',
        ],
        usage: 'Transportez la trousse pour soigner bébé où que vous soyez, et utilisez les produits selon les besoins quotidiens.',
        precautions: '',
      },
      en: {},
    },
  },
  {
    slug: 'savon-doux-hypoallergenique',
    category: 'bath',
    images: ['/images/products/savon-doux-hypoallergenique/10.png'],
    sizes: ['100g'],
    ingredients: 'SODIUM PALMITATE, SODIUM PALM KERNELATE, PRUNUS AMYGDALUS DULCIS OIL, GLYCERIN, WATER, TITANIUM DIOXIDE, FRAGRANCE.',
    translations: {
      fr: {
        name: 'Savon doux hypoallergénique',
        shortDescription: 'Savon doux hypoallergénique pour le visage et le corps des tout-petits, dès la naissance.',
        description: "Le Savon doux LUCEAT® nettoie quotidiennement en douceur le visage et le corps des nourrissons à peaux normales ou sensibles. Sa formule naturelle respecte l'équilibre de l'épiderme tout en apaisant, nourrissant et hydratant la peau.",
        benefits: [
          'Convient dès la naissance',
          "Formule très douce d'origine naturelle",
          'Apaise, nourrit et hydrate',
          'Protège le film hydrolipidique',
          'Parfum délicat et sillage doux',
        ],
        usage: 'Se frotter les mains avec le savon, faire mousser sur le corps de bébé, puis rincer.',
        precautions: '',
      },
      en: {},
    },
  },
  {
    slug: 'huile-de-massage-anti-colique',
    category: 'comfort',
    featured: false,
    images: ['/images/products/huile-de-massage-anti-colique/11.png'],
    sizes: ['30ml'],
    ingredients: 'PARAFFINUM LIQUIDUM, HELIANTHUS ANNUUS SEED OIL, PRUNUS AMYGDALUS DULCIS OIL, CALENDULA OFFICINALIS FLOWER EXTRACT, FOENICULUM VULGARE FRUIT EXTRACT, CHAMOMILLA RECUTITA EXTRACT, ORIGANUM MAJORANA LEAF EXTRACT, LAVANDULA ANGUSTIFOLIA EXTRACT, TOCOPHEROL.',
    translations: {
      fr: {
        name: 'COLLYSE® Huile de massage anti-colique',
        shortDescription: 'Huile de massage douce pour apaiser les coliques et détendre le bébé.',
        description: "COLLYSE® est une huile de massage anti-colique formulée pour soulager les inconforts digestifs du nourrisson. Sa formule douce à base d'huiles végétales et d'extraits naturels protège et nourrit la peau délicate tout en aidant à calmer les coliques.",
        benefits: [
          'Apaise les coliques et les inconforts digestifs',
          'Formule douce pour les nourrissons',
          'Convient dès la naissance',
          'Usage externe uniquement',
          'Sans huiles essentielles, sans parabène et sans alcool',
        ],
        usage: 'Verser quelques gouttes dans la paume, chauffer doucement l’huile, puis masser délicatement le ventre du bébé en mouvements circulaires. Utiliser 1 à 2 fois par jour selon le besoin.',
        // Verified against the official COLLYSE flyer — the one product with
        // sourced precaution text; not extrapolated to the rest of the range.
        precautions: "Usage externe uniquement. Ne pas appliquer sur le visage. Éviter le contact avec les yeux et les muqueuses. Tenir hors de portée des enfants. En cas d'irritation, cesser l'utilisation et consulter un médecin.",
      },
      en: {},
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
