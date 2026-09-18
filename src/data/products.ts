export type ProductCategory = 'bath' | 'change' | 'hydration' | 'comfort' | 'lice' | 'travel';

/** A key selling point shown as an icon tile above the detail cards. */
export interface ProductHighlight {
  /** Name from the local icon set — see src/components/ui/Icon.astro. */
  icon: string;
  label: string;
}

export interface ProductGalleryImagePresentation {
  /** Multiplier for the image canvas inside the fixed product-gallery stage. */
  scale?: number;
  /** Small baseline compensation when the source canvas has uneven padding. */
  offsetY?: string;
}

/**
 * One product bundled inside a kit. Referenced by slug rather than by name so
 * the label always resolves through the referenced product's own translation.
 */
export interface KitItem {
  slug: string;
  size: string;
  /** Included at no extra cost — rendered with an "offert" badge. */
  free?: boolean;
}

export interface ProductTranslation {
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  highlights: ProductHighlight[];
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
  galleryImagePresentation?: Record<string, ProductGalleryImagePresentation>;
  relatedProducts?: string[];
  /**
   * Set only on bundle products. Its presence switches the detail page to the
   * kit layout: a composition list replaces the usage / ingredients / sizes
   * cards, which describe a single formula and are meaningless for a bundle.
   */
  kit?: KitItem[];
  /** INCI ingredient listing — language-neutral, not duplicated per locale. */
  ingredients: string;
  translations: {
    fr: ProductTranslation;
    /**
     * English product copy. Renders the same claims as `fr` — nothing is
     * added, strengthened or dropped, since these are cosmetic/dermatological
     * statements. Still `Partial`: any field left empty falls back to French
     * and surfaces the pending-review notice (see src/i18n/product.ts).
     */
    en: Partial<ProductTranslation>;
  };
}

export const products: Product[] = [
  {
    slug: 'shampoing-bebe-enfant-sans-sulfate-2en1',
    category: 'bath',
    featured: true,
    imageScale: 'small',
    images: [
      '/images/products/LE SHAMPOING BEBE ET ENFANT SANS SULFATE 2 EN 1/LE SHAMPOING BEBE ET ENFANT SANS SULFATE 2 EN 1.png',
      '/images/products/LE SHAMPOING BEBE ET ENFANT SANS SULFATE 2 EN 1/LE SHAMPOING BEBE ET ENFANT SANS SULFATE 2 EN 1-1.png',
    ],
    galleryImagePresentation: {
      '250 ml': { scale: 0.8, offsetY: '2px' },
      '400 ml': { scale: 1 },
    },
    sizes: ['250 ml', '400 ml'],
    ingredients: 'WATER, COCAMIDOPROPYL BETAINE, SODIUM LAUROYL SARCOSINATE, COCO-GLUCOSIDE, PEG-150 DISTEARATE, PROPYLENE GLYCOL, POLYQUATERNIUM-7, BENZOIC ACID, BENZYL ALCOHOL, DEHYDROACETIC ACID, FRAGRANCE.',
    translations: {
      fr: {
        name: 'Le Shampoing Bébé et Enfant Sans Sulfate "2 en 1"',
        shortDescription: 'Nettoie en douceur la peau et les cheveux du bébé en un seul geste, sans savon ni sulfate.',
        description: "Sans savon, sans sulfate ni sels. Ne pique pas les yeux et peut être utilisé quotidiennement. Il nettoie en un seul geste la peau et les cheveux du bébé et facilite le démêlage. Enrichi d’actifs naturels doux, il nettoie en douceur les cheveux fins et les fait briller tout en respectant au mieux la fibre capillaire, sans nuire à la peau fragile des bébés et des plus grands. Grâce à ses propriétés apaisantes et hydratantes, il favorise le maintien de l’hydratation de la peau particulièrement sensible chez les nourrissons.",
        benefits: [
          'Sans savon',
          'Ni sel ni sulfate',
          'Hypoallergénique',
          'Ne pique pas les yeux',
          'Usage quotidien possible',
          'Nettoie peau et cheveux en un seul geste',
          'Facilite le démêlage',
          'Enrichi d’actifs naturels doux',
        ],
        highlights: [
          { icon: 'circle-off', label: 'Ni sel ni sulfate' },
          { icon: 'shield-check', label: 'Hypoallergénique' },
          { icon: 'feather', label: 'Douceur naturelle' },
          { icon: 'droplet', label: 'Hydratant' },
          { icon: 'wind', label: 'Démêlant' },
        ],
        usage: 'Appliquer sur la peau et les cheveux mouillés et faire mousser. Rincer puis sécher.',
        precautions: '',
      },
      en: {
        name: 'Sulphate-Free Baby & Child Shampoo "2 in 1"',
        shortDescription: "Gently cleanses baby's skin and hair in a single step, with no soap and no sulphates.",
        description: "Free from soap, sulphates and salts. It does not sting the eyes and can be used every day. It cleanses baby's skin and hair in a single step and makes detangling easier. Enriched with gentle natural active ingredients, it softly cleanses fine hair and leaves it shining while respecting the hair fibre and the delicate skin of babies and older children. Its soothing and moisturising properties help maintain hydration in the particularly sensitive skin of infants.",
        benefits: [
          'Soap-free',
          'No salt or sulphates',
          'Hypoallergenic',
          'Does not sting the eyes',
          'Suitable for daily use',
          'Cleanses skin and hair in a single step',
          'Makes detangling easier',
          'Enriched with gentle natural active ingredients',
        ],
        highlights: [
          { icon: 'circle-off', label: 'No salt or sulphates' },
          { icon: 'shield-check', label: 'Hypoallergenic' },
          { icon: 'feather', label: 'Natural gentleness' },
          { icon: 'droplet', label: 'Moisturising' },
          { icon: 'wind', label: 'Detangling' },
        ],
        usage: 'Apply to wet skin and hair and lather. Rinse, then dry.',
        precautions: '',
      },
    },
  },
  {
    slug: 'eau-de-senteur',
    category: 'hydration',
    featured: true,
    images: ['/images/products/EAU DE SENTEUR/EAU DE SENTEUR.png'],
    sizes: ['250 ml'],
    ingredients: 'WATER, PEG-40 HYDROGENATED CASTOR OIL (AND) TRIDECETH-9 (AND) WATER, FRAGRANCE, PROPYLENE GLYCOL, BENZOIC ACID, BENZYL ALCOHOL, DEHYDROACETIC ACID.',
    translations: {
      fr: {
        name: 'Eau de senteur',
        shortDescription: 'Formule hypoallergénique, sans alcool et à pH physiologique pour préserver l’équilibre naturel.',
        description: "Sa formule hypoallergénique, sans alcool et au pH physiologique, préserve l’équilibre naturel du cuir chevelu et de l’épiderme. Elle est conçue spécialement pour maintenir la peau délicate des bébés bien hydratée. Son parfum doux et agréable apporte fraîcheur et bien-être aux bébés et aux enfants. Elle permet d’adoucir et d’assouplir l’épiderme, tout en facilitant le coiffage.",
        benefits: [
          'Hypoallergénique',
          'Sans alcool',
          'pH physiologique',
          'Coiffante & hydratante',
          'Hydratation douce pour la peau délicate',
          'Parfum doux et agréable',
          'Adoucit, assouplit et facilite le coiffage',
        ],
        highlights: [
          { icon: 'shield-check', label: 'Hypoallergénique' },
          { icon: 'circle-off', label: 'Sans alcool' },
          { icon: 'droplet', label: 'Coiffante & hydratante' },
          { icon: 'test-tube', label: 'pH physiologique' },
          { icon: 'sparkles', label: 'Parfum doux' },
        ],
        usage: 'Vaporiser sur la peau et les cheveux. Peut-être appliquée sur les vêtements et le linge.',
        precautions: '',
      },
      en: {
        name: 'Scented Water',
        shortDescription: "A hypoallergenic, alcohol-free formula with a physiological pH to preserve the skin's natural balance.",
        description: "Its hypoallergenic, alcohol-free formula and physiological pH preserve the natural balance of the scalp and the skin. It is designed specifically to keep babies' delicate skin well hydrated. Its soft, pleasant fragrance brings freshness and well-being to babies and children. It softens and smooths the skin and makes hair easier to style.",
        benefits: [
          'Hypoallergenic',
          'Alcohol-free',
          'Physiological pH',
          'Styling & moisturising',
          'Gentle hydration for delicate skin',
          'Soft, pleasant fragrance',
          'Softens and smooths the skin and makes styling easier',
        ],
        highlights: [
          { icon: 'shield-check', label: 'Hypoallergenic' },
          { icon: 'circle-off', label: 'Alcohol-free' },
          { icon: 'droplet', label: 'Styling & moisturising' },
          { icon: 'test-tube', label: 'Physiological pH' },
          { icon: 'sparkles', label: 'Soft fragrance' },
        ],
        usage: 'Spray onto the skin and hair. Can also be applied to clothing and linen.',
        precautions: '',
      },
    },
  },
  {
    slug: 'liniment-oleo-calcaire',
    category: 'change',
    featured: true,
    images: [
      '/images/products/LINIMENT OLEO CALCAIRE/LINIMENT OLEO CALCAIRE.png',
      '/images/products/LINIMENT OLEO CALCAIRE/LINIMENT OLEO CALCAIRE1.png',
    ],
    galleryImagePresentation: {
      '200 ml': { scale: 0.83, offsetY: '4px' },
      '400 ml': { scale: 1 },
    },
    sizes: ['200 ml', '400 ml'],
    ingredients: 'WATER, CALCIUM HYDROXIDE, OLEA EUROPAEA FRUIT OIL, GLYCERYL STEARATE SE, CERA ALBA, XANTHAN GUM, BENZOIC ACID, BENZYL ALCOHOL, DEHYDROACETIC ACID.',
    translations: {
      fr: {
        name: 'Liniment oléo-calcaire',
        shortDescription: 'Nettoie et protège le siège du bébé tout en laissant un film protecteur doux.',
        description: "Le Liniment oléo-calcaire LUCEAT® nettoie et protège le siège du bébé. Il nourrit l’épiderme fessier au quotidien et contribue à prévenir les rougeurs et les irritations en laissant un film protecteur contre les agressions extérieures irritantes (urines, selles, frottement des couches). Sa formule à base d’huile d’olive protège et nourrit l’épiderme du bébé. Grâce à sa composition naturelle, il constitue un nettoyant antiseptique et fongicide.",
        benefits: [
          'Nettoie et protège le siège du bébé',
          'Contribue à prévenir rougeurs et irritations',
          'Film protecteur contre les urines, selles et frottement des couches',
          'Formule à base d’huile d’olive nourrissante',
          'Nettoyant antiseptique',
          'Fongicide',
          'Ne nécessite pas de rinçage',
          'Douceur naturelle',
          'Hypoallergénique',
        ],
        highlights: [
          { icon: 'droplets', label: 'Nettoie et protège' },
          { icon: 'flask-conical', label: 'pH alcalin' },
          { icon: 'feather', label: 'Douceur naturelle' },
          { icon: 'bug', label: 'Antiseptique & fongicide' },
        ],
        usage: 'Appliquer à chaque change à l’aide d’un coton pour nettoyer le siège du bébé. Ne nécessite pas de rinçage.',
        precautions: '',
      },
      en: {
        name: 'Oleo-Calcareous Liniment',
        shortDescription: "Cleanses and protects baby's nappy area while leaving a gentle protective film.",
        description: "LUCEAT® Oleo-Calcareous Liniment cleanses and protects baby's nappy area. It nourishes the skin of the nappy area every day and helps prevent redness and irritation by leaving a protective film against external irritants such as urine, stools and nappy friction. Its olive-oil-based formula protects and nourishes baby's skin. Thanks to its natural composition, it acts as an antiseptic and antifungal cleanser.",
        benefits: [
          "Cleanses and protects baby's nappy area",
          'Helps prevent redness and irritation',
          'Protective film against urine, stools and nappy friction',
          'Nourishing olive-oil-based formula',
          'Antiseptic cleanser',
          'Antifungal',
          'No rinsing required',
          'Natural gentleness',
          'Hypoallergenic',
        ],
        highlights: [
          { icon: 'droplets', label: 'Cleanses & protects' },
          { icon: 'flask-conical', label: 'Alkaline pH' },
          { icon: 'feather', label: 'Natural gentleness' },
        
          { icon: 'bug', label: 'Antiseptic & antifungal' },
        ],
        usage: "Apply at every nappy change using a cotton pad to cleanse baby's nappy area. No rinsing required.",
        precautions: '',
      },
    },
  },
  {
    slug: 'creme-de-change',
    category: 'change',
    images: ['/images/products/CREME DE CHANGE/CREME DE CHANGE.jpg'],
    sizes: ['40 g'],
    ingredients: 'WATER, PETROLATUM, GLYCERYL OLEATE, LANOLIN ALCOHOL, MINERAL OIL (PARAFFINUM LIQUIDUM), OZOKERITE, ZINC OXIDE, PROPYLENE GLYCOL, PRUNUS AMYGDALUS DULCIS OIL, CALENDULA OFFICINALIS FLOWER EXTRACT, BENZOIC ACID, BENZYL ALCOHOL, DEHYDROACETIC ACID.',
    translations: {
      fr: {
        name: 'Crème de change',
        shortDescription: 'Crème protectrice riche en calendula, cire d’abeille et huile d’amande douce pour prévenir les irritations.',
        description: "Sa richesse en extrait de calendula, cire d’abeille et huile d’amande douce en fait un véritable remède dans la prévention des irritations et de l’érythème fessier, ainsi que dans la régénérescence de l’épiderme. Grâce à sa formule enrichie en oxyde de zinc, la crème de change LUCEAT® prévient les inflammations de la peau en l’isolant de toutes les substances irritantes (urine, selles…). Elle soulage et apaise dès la première utilisation, renforce le film protecteur naturel de l’épiderme et l’adoucit.",
        benefits: [
          'Extrait de calendula, cire d’abeille et huile d’amande douce',
          "Prévention des irritations et de l'érythème fessier",
          'Enrichie en oxyde de zinc',
          'Isole des substances irritantes (urine, selles)',
          'Soulage et apaise dès la première utilisation',
          'Renforce le film protecteur naturel',
          'Hypoallergénique',
          'Tube pratique de 40 g',
        ],
        highlights: [
  { icon: 'sparkles', label: 'Réparatrice' },
  { icon: 'shield-check', label: 'Protectrice' },
  { icon: 'leaf', label: 'Nourrissante' },
  { icon: 'droplets', label: 'Hydratante' },
  { icon: 'heart', label: 'Apaisante' },
],
        usage: 'Après nettoyage, appliquer en couches épaisses sur le siège sec.',
        precautions: '',
      },
      en: {
        name: 'Nappy Change Cream',
        shortDescription: 'A protective cream rich in calendula, beeswax and sweet almond oil to help prevent irritation.',
        description: 'Rich in calendula extract, beeswax and sweet almond oil, this cream acts as a true remedy in helping prevent irritation and nappy rash, while supporting the regeneration of the epidermis. Thanks to its zinc-oxide-enriched formula, LUCEAT® Nappy Change Cream helps prevent skin inflammation by isolating the skin from irritating substances such as urine and stools. It relieves and soothes from the very first use, reinforces the skin’s natural protective film and softens it.',
        benefits: [
          'Calendula extract, beeswax and sweet almond oil',
          'Helps prevent irritation and nappy rash',
          'Enriched with zinc oxide',
          'Isolates from irritating substances such as urine and stools',
          'Relieves and soothes from the very first use',
          'Reinforces the natural protective film',
          'Hypoallergenic',
          'Practical 40 g tube',
        ],
        highlights: [
  { icon: 'sparkles', label: 'Repairing' },
  { icon: 'shield-check', label: 'Protective' },
  { icon: 'leaf', label: 'Nourishing' },
  { icon: 'droplets', label: 'Moisturising' },
  { icon: 'heart', label: 'Soothing' },
],
        usage: 'After cleansing, apply a thick layer to the dry nappy area.',
        precautions: '',
      },
    },
  },
  {
    slug: 'lait-de-corps',
    category: 'hydration',
    images: ['/images/products/LAIT DE CORPS/LAIT DE CORPS.jpg'],
    sizes: ['200 ml'],
    ingredients: 'WATER, DIBUTYL ADIPATE, GLYCERYL STEARATE SE, PROPYLENE GLYCOL, PRUNUS AMYGDALUS DULCIS OIL, CERA ALBA, XANTHAN GUM, BENZOIC ACID, BENZYL ALCOHOL, DEHYDROACETIC ACID.',
    translations: {
      fr: {
        name: 'Lait de corps',
        shortDescription: 'Hydrate et nourrit la peau sensible des bébés et des enfants sans coller.',
        description: 'Le lait de corps LUCEAT® hydrate et nourrit la peau des bébés et des enfants. Sa formule à base de cire d’abeille et d’huile d’amande douce hydrate les peaux les plus sèches et renforce la barrière cutanée naturelle. Elle pénètre rapidement et ne colle pas.',
        benefits: [
          'Hydrate et nourrit la peau des bébés et des enfants',
          'Renforce la barrière cutanée naturelle',
          'Pénètre rapidement et ne colle pas',
          'Convient aux peaux les plus sèches',
          'Hypoallergénique',
          'Apaisant',
          'Disponible en flacon de 200 ml',
        ],
        highlights: [
          { icon: 'shield-check', label: 'Hypoallergénique' },
          { icon: 'droplet', label: 'Hydratant' },
          { icon: 'leaf', label: 'Nourrissant' },
          { icon: 'heart', label: 'Apaisant' },
        ],
        usage: 'Appliquer 1 à 2 fois par jour sur la peau nettoyée et sèche.',
        precautions: '',
      },
      en: {
        name: 'Body Lotion',
        shortDescription: 'Moisturises and nourishes babies’ and children’s sensitive skin without feeling sticky.',
        description: 'LUCEAT® Body Lotion moisturises and nourishes babies’ and children’s skin. Its beeswax and sweet almond oil formula moisturises even the driest skin and strengthens the natural skin barrier. It absorbs quickly and does not feel sticky.',
        benefits: [
          'Moisturises and nourishes babies’ and children’s skin',
          'Strengthens the natural skin barrier',
          'Absorbs quickly and does not feel sticky',
          'Suitable for the driest skin',
          'Hypoallergenic',
          'Soothing',
          'Available in a 200 ml bottle',
        ],
        highlights: [
          { icon: 'shield-check', label: 'Hypoallergenic' },
          { icon: 'droplet', label: 'Moisturising' },
          { icon: 'leaf', label: 'Nourishing' },
          { icon: 'heart', label: 'Soothing' },
        ],
        usage: 'Apply once or twice a day to clean, dry skin.',
        precautions: '',
      },
    },
  },
  {
    slug: 'lotion-anti-poux',
    category: 'lice',
    images: ['/images/products/LOTION ANTI POUX/LOTION ANTI POUX.png'],
    sizes: ['200 ml'],
    ingredients: 'DIBUTYL ADIPATE, LAVENDULA HYBRIDA OIL, CYMBOPOGON WINTERIANUS HERB OIL, TOCOPHEROL.',
    translations: {
      fr: {
        name: 'Lotion anti-poux',
        shortDescription: 'Lotion traitante sans silicone ni insecticides chimiques, à l’efficacité prouvée dès la première utilisation.',
        description: "La Lotion Traitante Anti-poux LUCEAT® élimine 100 % des poux et des lentes en une application. Sans silicone ni insecticides chimiques, elle est enrichie en vitamine E. Sa composition en huiles essentielles de citronnelle et de lavande permet à la fois la prévention, par la lutte contre une invasion de poux, ainsi que le traitement afin de freiner leur prolifération. Son efficacité est prouvée dès la première utilisation.",
        benefits: [
          'Élimine 100 % des poux et lentes en une application',
          'Sans silicone ni insecticides chimiques',
          'Curative',
          'Préventive',
          'Efficacité prouvée dès la première utilisation',
        ],
        highlights: [
          { icon: 'badge-check', label: 'Efficacité prouvée' },
          { icon: 'circle-off', label: 'Sans insecticides chimiques' },
          { icon: 'circle-off', label: 'Sans silicone' },
          { icon: 'shield-check', label: 'Curative' },
          { icon: 'zap', label: 'Préventive' },
        ],
        usage: 'S’applique sur cheveux secs comme un masque. Temps de pose de 20 à 30 minutes. Laver ensuite les cheveux avec le Shampoing Doux Assainissant LUCEAT®.',
        precautions: '',
      },
      en: {
        name: 'Anti-Lice Treatment Lotion',
        shortDescription: 'A treatment lotion that is silicone-free and free from chemical insecticides, with proven effectiveness from the very first use.',
        description: 'LUCEAT® Anti-Lice Treatment Lotion eliminates 100% of lice and nits in a single application. Silicone-free and free from chemical insecticides, it is enriched with vitamin E. Its composition of citronella and lavender essential oils supports prevention by helping fight lice infestation, as well as treatment by slowing their proliferation. Its effectiveness is proven from the very first use.',
        benefits: [
          'Eliminates 100% of lice and nits in one application',
          'Silicone-free and free from chemical insecticides',
          'Treatment',
          'Preventive',
          'Proven effective from the very first use',
        ],
        highlights: [
          { icon: 'badge-check', label: 'Proven effectiveness' },
          { icon: 'circle-off', label: 'Free from chemical insecticides' },
          { icon: 'circle-off', label: 'Silicone-free' },
          { icon: 'shield-check', label: 'Treatment' },
          { icon: 'zap', label: 'Preventive' },
        ],
        usage: 'Apply to dry hair like a mask. Leave on for 20 to 30 minutes. Then wash the hair with LUCEAT® Gentle Purifying Anti-Lice Shampoo.',
        precautions: '',
      },
    },
  },
  {
    slug: 'shampoing-anti-poux-assainissant',
    category: 'lice',
    images: ['/images/products/SHAMPOING ANTI POUX ASSAINISSANT/SHAMPOING ANTI POUX ASSAINISSANT.png'],
    sizes: ['250 ml'],
    ingredients: 'WATER, COCAMIDOPROPYL BETAINE, SODIUM LAUROYL SARCOSINATE, COCO-GLUCOSIDE, PEG-150 DISTEARATE, PROPYLENE GLYCOL, POLYQUATERNIUM-7, BENZOIC ACID, BENZYL ALCOHOL, DEHYDROACETIC ACID, LAVENDULA HYBRIDA OIL, CYMBOPOGON WINTERIANUS HERB OIL.',
    translations: {
      fr: {
        name: 'Shampoing anti-poux assainissant',
        shortDescription: 'Shampoing doux sans silicone ni insecticides chimiques pour assainir le cuir chevelu après la lotion anti-poux.',
        description: "Le Shampoing Doux Assainissant Anti-poux LUCEAT® assainit le cuir chevelu. Il facilite le décollement et l’élimination des lentes mortes résiduelles ainsi que le démêlage des cheveux. Il est particulièrement recommandé après le traitement antiparasitaire (Lotion LUCEAT®) pour compléter son action et rééquilibrer le cuir chevelu fragilisé par le grattage. Sans silicone ni insecticides chimiques, son efficacité est prouvée dès la première utilisation.",
        benefits: [
          'Assainit le cuir chevelu',
          'Facilite le décollement et l’élimination des lentes mortes résiduelles',
          'Démêlage facile',
          'Complète l’action de la Lotion LUCEAT®',
          'Sans silicone ni insecticides chimiques',
          'Efficacité prouvée dès la première utilisation',
        ],
        highlights: [
          { icon: 'shield-check', label: 'Cuir chevelu assaini' },
          { icon: 'circle-off', label: 'Sans silicone' },
          { icon: 'circle-off', label: 'Sans insecticides chimiques' },
        
          { icon: 'badge-check', label: 'Efficacité prouvée' },
        ],
        usage: 'Appliquer sur cheveux mouillés. Faire mousser environ 3 minutes. Peigner avec le peigne fin offert pour décoller les lentes, rincer abondamment puis sécher. Renouveler si nécessaire.',
        precautions: '',
      },
      en: {
        name: 'Gentle Purifying Anti-Lice Shampoo',
        shortDescription: 'A gentle shampoo, silicone-free and free from chemical insecticides, to purify the scalp after the anti-lice lotion.',
        description: 'LUCEAT® Gentle Purifying Anti-Lice Shampoo purifies the scalp. It makes it easier to loosen and remove remaining dead nits, while helping detangle the hair. It is particularly recommended after the antiparasitic treatment (LUCEAT® Anti-Lice Treatment Lotion) to complete its action and rebalance the scalp weakened by scratching. Silicone-free and free from chemical insecticides, its effectiveness is proven from the very first use.',
        benefits: [
          'Purifies the scalp',
          'Helps loosen and remove remaining dead nits',
          'Easy detangling',
          'Completes the action of LUCEAT® Anti-Lice Treatment Lotion',
          'Silicone-free and free from chemical insecticides',
          'Proven effective from the very first use',
        ],
        highlights: [
  { icon: 'shield-check', label: 'Cleansed scalp' },
  { icon: 'circle-off', label: 'Silicone-free' },
  { icon: 'circle-off', label: 'No chemical insecticides' },
  { icon: 'badge-check', label: 'Proven efficacy' },
],
        usage: 'Apply to wet hair. Lather for about 3 minutes. Comb through with the fine-tooth comb provided to loosen the nits, rinse thoroughly, then dry. Repeat if necessary.',
        precautions: '',
      },
    },
  },
  {
    slug: 'talc',
    category: 'change',
    images: ['/images/products/TALC/TALC.png'],
    sizes: ['100 g'],
    ingredients: 'MAGNESIUM SILICATE.',
    translations: {
      fr: {
        name: 'Talc',
        shortDescription: 'Aide à absorber l’excès d’humidité pour une peau fraîche et confortable.',
        description: "Aide à absorber l’excès d’humidité pour une peau fraîche et confortable.",
        benefits: [
          'Absorbe l’excès d’humidité',
          'Peau fraîche et confortable',
        ],
        highlights: [
          { icon: 'wind', label: 'Absorbe l’humidité' },
          { icon: 'sparkles', label: 'Peau fraîche' },
        ],
        usage: 'Appliquer sur une peau propre et sèche.',
        precautions: 'Tenir à l’écart du nez et de la bouche des enfants. Éviter l’inhalation et le contact avec les yeux. Usage externe uniquement. Ne pas utiliser sur les plaies. Conserver dans un endroit frais et sec.',
      },
      en: {
        name: 'Talc',
        shortDescription: 'Helps absorb excess moisture for fresh, comfortable skin.',
        description: 'Helps absorb excess moisture for fresh, comfortable skin.',
        benefits: [
          'Absorbs excess moisture',
          'Fresh, comfortable skin',
        ],
        highlights: [
          { icon: 'wind', label: 'Absorbs moisture' },
          { icon: 'sparkles', label: 'Fresh skin' },
        ],
        usage: 'Apply to clean, dry skin.',
        precautions: "Keep away from children's nose and mouth. Avoid inhalation and contact with the eyes. For external use only. Do not use on wounds. Store in a cool, dry place.",
      },
    },
  },
  {
    slug: 'trousse-bebe-3-2',
    category: 'travel',
    images: [
      '/images/products/TROUSSE BEBE 3+2/TROUSSE BEBE 3+2.png',
    ],
    sizes: ['coffret'],
    kit: [
      { slug: 'shampoing-bebe-enfant-sans-sulfate-2en1', size: '250 ml' },
      { slug: 'eau-de-senteur', size: '250 ml' },
      { slug: 'creme-de-change', size: '40 g' },
      { slug: 'savon-doux-hypoallergenique', size: '100 g', free: true },
    ],
    ingredients: 'Contient plusieurs produits, voir étiquettes individuelles.',
    translations: {
      fr: {
        name: 'Trousse bébé 3+2',
        shortDescription: 'Tous les indispensables d’hygiène bébé réunis dans une trousse pratique pour le voyage.',
        description: "Tous les indispensables pour effectuer les soins quotidiens d’hygiène de vos bien-aimés, réunis dans une seule trousse pour vous accompagner où que vous soyez.",
        benefits: [
          'Shampoing bébé enfant sans sulfate 250 ml inclus',
          'Eau de senteur sans alcool 250 ml incluse',
          'Crème de change 40 g incluse',
          'Savon doux hypoallergénique 100 g offert',
          'Trousse offerte',
        ],
        // No icon tiles: the kit layout leads with its composition list, which
        // already carries what the tiles would say for a bundle.
        highlights: [],
        usage: 'Transportez la trousse pour soigner bébé où que vous soyez, et utilisez les produits selon les besoins quotidiens.',
        precautions: '',
      },
      en: {
        name: 'Baby Kit 3+2',
        shortDescription: 'All the baby hygiene essentials gathered in one practical kit for travelling.',
        description: "All the essentials for your little one's daily hygiene routine, gathered in a single kit to go with you wherever you are.",
        benefits: [
          'Sulphate-Free Baby & Child Shampoo 250 ml included',
          'Alcohol-Free Scented Water 250 ml included',
          'Nappy Change Cream 40 g included',
          'Gentle Hypoallergenic Soap 100 g free',
          'Free kit bag',
        ],
        // Matches the French entry: the kit layout leads with its composition
        // list, so there are no icon tiles to translate.
        highlights: [],
        usage: 'Take the kit with you to care for your baby wherever you are, and use the products according to daily needs.',
        precautions: '',
      },
    },
  },
  {
    slug: 'savon-doux-hypoallergenique',
    category: 'bath',
    images: [
      '/images/products/SAVON DOUX HYPOALLERGENIQUE/SAVON DOUX HYPOALLERGENIQUE.png',
    ],
    sizes: ['100 g'],
    ingredients: 'SODIUM PALMITATE, SODIUM PALM KERNELATE, PRUNUS AMYGDALUS DULCIS OIL, GLYCERIN, WATER, TITANIUM DIOXIDE, FRAGRANCE.',
    translations: {
      fr: {
        name: 'Savon doux hypoallergénique',
        shortDescription: 'Nettoie en douceur le visage et le corps des tout-petits, dès la naissance.',
        description: "Le Savon doux LUCEAT® s’utilise quotidiennement pour nettoyer le visage et le corps des tout-petits efficacement et en douceur. Il convient dès la naissance aux nourrissons à peaux normales ou sensibles. Sa formule composée d’ingrédients d’origine naturelle est extrêmement douce afin de respecter l’équilibre de l’épiderme. Elle apaise, nourrit et hydrate la peau des bébés tout en la protégeant des agressions extérieures, en renforçant le film hydrolipidique. Son parfum délicat laisse un sillage doux mais bien présent.",
        benefits: [
          'Nettoie en douceur',
          'Hypoallergénique',
          'Convient dès la naissance',
          'Douceur naturelle',
          'Apaise, nourrit et hydrate',
          'Parfum délicat et sillage doux',
        ],
        highlights: [
          { icon: 'droplets', label: 'Nettoie en douceur' },
          { icon: 'shield-check', label: 'Hypoallergénique' },
          { icon: 'feather', label: 'Douceur naturelle' },
          { icon: 'baby', label: 'Dès la naissance' },
        ],
        usage: 'Se frotter les mains avec le savon, faire mousser sur le corps de bébé, puis rincer.',
        precautions: '',
      },
      en: {
        name: 'Gentle Hypoallergenic Soap',
        shortDescription: "Gently cleanses little ones' face and body, from birth.",
        description: "LUCEAT® Gentle Soap is used daily to cleanse little ones' face and body effectively and gently. It is suitable from birth for infants with normal or sensitive skin. Its formula, composed of ingredients of natural origin, is extremely gentle in order to respect the skin's balance. It soothes, nourishes and moisturises babies' skin while helping protect it from external aggressors by strengthening the hydrolipidic film. Its delicate fragrance leaves a soft but clearly present scent trail.",
        benefits: [
          'Gently cleanses',
          'Hypoallergenic',
          'Suitable from birth',
          'Natural gentleness',
          'Soothes, nourishes and moisturises',
          'Delicate fragrance with a soft trail',
        ],
        highlights: [
          { icon: 'droplets', label: 'Gently cleanses' },
          { icon: 'shield-check', label: 'Hypoallergenic' },
          { icon: 'feather', label: 'Natural gentleness' },
          { icon: 'baby', label: 'From birth' },
        ],
        usage: "Rub the soap between your hands, lather over baby's body, then rinse.",
        precautions: '',
      },
    },
  },
  {
    slug: 'huile-de-massage-anti-colique',
    category: 'comfort',
    featured: false,
    images: ['/images/products/COLLYSE® Huile de massage anti-colique/COLLYSE® Huile de massage anti-colique.png'],
    sizes: ['30 ml'],
    ingredients: 'PARAFFINUM LIQUIDUM, HELIANTHUS ANNUUS SEED OIL, PRUNUS AMYGDALUS DULCIS OIL, CALENDULA OFFICINALIS FLOWER EXTRACT, FOENICULUM VULGARE FRUIT EXTRACT, CHAMOMILLA RECUTITA EXTRACT, ORIGANUM MAJORANA LEAF EXTRACT, LAVANDULA ANGUSTIFOLIA EXTRACT, TOCOPHEROL.',
    translations: {
      fr: {
        name: 'COLLYSE® Huile de massage anti-colique',
        shortDescription: 'Aide à apaiser les coliques et à détendre le bébé dès la naissance.',
        description: "Apaisez naturellement les petits ventres grâce à COLLYSE®, formulée pour soulager les inconforts digestifs des bébés. Sa base d’huile d’amande douce et de tournesol, riche en oméga, nourrit, protège et adoucit la peau délicate, tandis que les extraits de calendula et de camomille apaisent et réduisent les rougeurs. L’extrait de marjolaine et l’extrait de fenouil sont reconnus pour leurs propriétés relaxantes et antispasmodiques, aidant à calmer les ballonnements et à favoriser la détente. Enrichie en vitamine E naturelle, cette synergie d’actifs aide votre bébé à se sentir mieux et à passer des nuits calmes et sereines après un massage apaisant, relaxant et réconfortant, idéal après les repas ou avant le coucher.",
        benefits: [
          'Formule douce à base d’huiles végétales et d’extraits naturels',
          'Aide à apaiser les coliques et à détendre le bébé dès la naissance',
          'Huile d’amande douce et huile de tournesol riche en oméga',
          'Calendula et camomille pour apaiser les rougeurs',
          'Marjolaine et fenouil aux propriétés relaxantes et antispasmodiques',
          'Vitamine E naturelle',
          '0 % huiles essentielles, 0 % parabène, 0 % alcool',
          'Usage externe uniquement',
        ],
        highlights: [
          { icon: 'feather', label: 'Douceur naturelle' },
          { icon: 'baby', label: 'Dès la naissance' },
          { icon: 'circle-off', label: 'Sans alcool' },
          { icon: 'heart', label: 'Confort digestif' },
          { icon: 'hand', label: 'Massage apaisant' },
        ],
        usage: 'Verser quelques gouttes dans la paume, chauffer doucement l’huile, puis masser délicatement le ventre du bébé en mouvements circulaires. Utiliser 1 à 2 fois par jour selon le besoin.',
        // Verified against the official COLLYSE flyer — the one product with
        // sourced precaution text; not extrapolated to the rest of the range.
        precautions: "Usage externe uniquement. Ne pas appliquer sur le visage. Éviter le contact avec les yeux et les muqueuses. Tenir hors de portée des enfants. En cas d'irritation, cesser l'utilisation et consulter un médecin.",
      },
      en: {
        name: 'COLLYSE® Anti-Colic Massage Oil',
        shortDescription: 'Helps soothe colic and relax baby from birth.',
        description: "Naturally soothe little tummies with COLLYSE®, formulated to relieve babies' digestive discomfort. Its base of sweet almond oil and sunflower oil, rich in omega, nourishes, protects and softens delicate skin, while calendula and chamomile extracts soothe and reduce redness. Marjoram extract and fennel extract are known for their relaxing and antispasmodic properties, helping calm bloating and promote relaxation. Enriched with natural vitamin E, this synergy of active ingredients helps your baby feel more comfortable and enjoy calm, peaceful nights after a soothing, relaxing and comforting massage, ideal after meals or before bedtime.",
        benefits: [
          'Gentle formula based on plant oils and natural extracts',
          'Helps soothe colic and relax baby from birth',
          'Sweet almond oil and omega-rich sunflower oil',
          'Calendula and chamomile to soothe redness',
          'Marjoram and fennel with relaxing and antispasmodic properties',
          'Natural vitamin E',
          '0% essential oils, 0% parabens, 0% alcohol',
          'External use only',
        ],
        highlights: [
          { icon: 'feather', label: 'Natural gentleness' },
          { icon: 'baby', label: 'From birth' },
          { icon: 'circle-off', label: 'Alcohol-free' },
          { icon: 'heart', label: 'Digestive comfort' },
          { icon: 'hand', label: 'Soothing massage' },
        ],
        usage: "Pour a few drops into your palm, warm the oil gently, then massage baby's tummy with circular movements. Use once or twice a day as needed.",
        // Mirrors the sourced French precaution text from the COLLYSE flyer.
        precautions: 'For external use only. Do not apply to the face. Avoid contact with the eyes and mucous membranes. Keep out of reach of children. If irritation occurs, stop using the product and consult a doctor.',
      },
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

// Display order for the "Nos produits" catalogue page only. The homepage
// keeps showing `products.filter(p => p.featured)` in the array's original
// declaration order above, so this list is intentionally kept separate and
// must not be used to reorder `products` itself.
const catalogueOrder: string[] = [
  'shampoing-bebe-enfant-sans-sulfate-2en1',
  'savon-doux-hypoallergenique',
  'eau-de-senteur',
  'creme-de-change',
  'liniment-oleo-calcaire',
  'huile-de-massage-anti-colique',
  'talc',
  'lait-de-corps',
  'shampoing-anti-poux-assainissant',
  'lotion-anti-poux',
  'trousse-bebe-3-2',
];

export function getCatalogueProducts(): Product[] {
  return [...products].sort((a, b) => catalogueOrder.indexOf(a.slug) - catalogueOrder.indexOf(b.slug));
}
