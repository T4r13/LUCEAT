export type ProductCategory = 'bath' | 'change' | 'hydration' | 'comfort' | 'lice' | 'travel';

/** A key selling point shown as an icon tile above the detail cards. */
export interface ProductHighlight {
  /** Name from the local icon set — see src/components/ui/Icon.astro. */
  icon: string;
  label: string;
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
        highlights: [
          { icon: 'droplets', label: 'Nettoie en douceur' },
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
          'Free from soap, sulphates and salts',
          'Does not sting the eyes',
          'Suitable for daily use',
          'Cleanses skin and hair in a single step',
          'Makes detangling easier',
          'Enriched with gentle natural active ingredients',
        ],
        highlights: [
          { icon: 'droplets', label: 'Gentle cleansing' },
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
    sizes: ['250ml'],
    ingredients: 'WATER, PEG-40 HYDROGENATED CASTOR OIL (AND) TRIDECETH-9 (AND) WATER, FRAGRANCE, PROPYLENE GLYCOL, BENZOIC ACID, BENZYL ALCOHOL, DEHYDROACETIC ACID.',
    translations: {
      fr: {
        name: 'Eau de senteur',
        shortDescription: 'Formule hypoallergénique, sans alcool et PH physiologique pour préserver l’équilibre naturel.',
        description: "Sa formule hypoallergénique, sans alcool et son PH physiologique préserve l'équilibre naturel du cuir chevelu et de l'épiderme. Elle est conçue spécialement pour maintenir la peau délicate des bébés bien hydratée. Son parfum doux et agréable apporte fraîcheur et bien-être pour les bébés et les enfants. Permet d'adoucir et d'assouplir l'épiderme et facilite le coiffage.",
        benefits: [
          'Hypoallergénique',
          'Sans alcool',
          'PH physiologique',
          'Hydratation douce pour la peau délicate',
          'Parfum doux et agréable',
          'Adoucit et facilite le coiffage',
        ],
        highlights: [
          { icon: 'shield-check', label: 'Nettoyant antiseptique' },
          { icon: 'bug', label: 'Fongicide' },
          { icon: 'leaf', label: 'Ingrédients naturels' },
          { icon: 'test-tube', label: 'PH alcalin' },
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
          'Gentle hydration for delicate skin',
          'Soft, pleasant fragrance',
          'Softens the skin and makes styling easier',
        ],
        highlights: [
          { icon: 'shield-check', label: 'Antiseptic cleanser' },
          { icon: 'bug', label: 'Antifungal' },
          { icon: 'leaf', label: 'Natural ingredients' },
          { icon: 'test-tube', label: 'Alkaline pH' },
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
        highlights: [
          { icon: 'droplets', label: 'Nettoie et protège' },
          { icon: 'shield-check', label: 'Anti-rougeurs' },
          { icon: 'leaf', label: 'Nourrissant naturel' },
          { icon: 'circle-off', label: 'Sans rinçage' },
        ],
        usage: 'Appliquer à chaque change à l’aide d’un coton pour nettoyer le siège du bébé. Ne nécessite pas de rinçage.',
        precautions: '',
      },
      en: {
        name: 'Oleo-Calcareous Liniment',
        shortDescription: "Cleanses and protects baby's nappy area while leaving a gentle protective film.",
        description: "A natural olive-oil-based formula that cleanses, nourishes and protects the delicate skin of baby's nappy area. It helps prevent redness and irritation by forming a protective film against external irritants.",
        benefits: [
          "Cleanses and protects baby's nappy area",
          'Helps prevent redness and irritation',
          'Nourishing olive-oil-based formula',
          'No rinsing required',
          'Natural antiseptic and antifungal cleanser',
        ],
        highlights: [
          { icon: 'droplets', label: 'Cleanses & protects' },
          { icon: 'shield-check', label: 'Soothes redness' },
          { icon: 'leaf', label: 'Naturally nourishing' },
          { icon: 'circle-off', label: 'No rinsing' },
        ],
        usage: "Apply at every nappy change using a cotton pad to cleanse baby's nappy area. No rinsing required.",
        precautions: '',
      },
    },
  },
  {
    slug: 'creme-de-change',
    category: 'change',
    images: ['/images/products/CREME DE CHANGE/CREME DE CHANGE.png'],
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
        highlights: [
          { icon: 'shield-check', label: 'Protectrice' },
          { icon: 'sparkles', label: 'Réparatrice' },
          { icon: 'droplet', label: 'Hydratante' },
          { icon: 'leaf', label: 'Nourrissante' },
          { icon: 'heart', label: 'Apaisante' },
        ],
        usage: 'Après nettoyage, appliquer en couches épaisses sur le siège sec.',
        precautions: '',
      },
      en: {
        name: 'Nappy Change Cream',
        shortDescription: 'A protective cream rich in calendula, beeswax and sweet almond oil to help prevent irritation.',
        description: 'Its zinc-oxide-enriched formula protects the skin from irritating substances, relieving and soothing from the very first use. It reinforces the natural protective film and supports the regeneration of the skin.',
        benefits: [
          'Helps prevent irritation and nappy rash',
          'Enriched with zinc oxide',
          'Relief from the very first use',
          'Reinforces the natural protective film',
          'Practical 40 g tube',
        ],
        highlights: [
          { icon: 'shield-check', label: 'Protective' },
          { icon: 'sparkles', label: 'Repairing' },
          { icon: 'droplet', label: 'Moisturising' },
          { icon: 'leaf', label: 'Nourishing' },
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
    images: ['/images/products/LAIT DE CORPS/LAIT DE CORPS.png'],
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
        highlights: [
          { icon: 'droplet', label: 'Hydratante' },
          { icon: 'leaf', label: 'Nourrissante' },
        ],
        usage: 'Appliquer 1 à 2 fois par jour sur la peau nettoyée et sèche.',
        precautions: '',
      },
      en: {
        name: 'Body Lotion',
        shortDescription: "Hydrates and nourishes babies' and children's sensitive skin without feeling sticky.",
        description: 'Its beeswax and sweet almond oil formula hydrates even the driest skin, strengthens the natural skin barrier and absorbs quickly without leaving a greasy film.',
        benefits: [
          "Hydrates and nourishes babies' and children's skin",
          'Strengthens the natural skin barrier',
          'Absorbs quickly and does not feel sticky',
          'Suitable for the driest skin',
          'Available in a 200 ml bottle',
        ],
        highlights: [
          { icon: 'droplet', label: 'Moisturising' },
          { icon: 'leaf', label: 'Nourishing' },
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
        highlights: [
          { icon: 'badge-check', label: 'Résultat garanti' },
          { icon: 'leaf', label: 'Ingrédients naturels' },
          { icon: 'sparkles', label: 'Soin vitaminé' },
          { icon: 'zap', label: 'Action immédiate' },
        ],
        usage: 'S’applique sur cheveux secs comme un masque. Temps de pose de 20 à 30 minutes. Laver ensuite les cheveux avec le Shampoing Doux Assainissant Lucéat®.',
        precautions: '',
      },
      en: {
        name: 'Anti-Lice Lotion',
        shortDescription: 'A treatment lotion free from silicones and chemical insecticides, effective from the very first application.',
        description: 'Lucéat® Anti-Lice Treatment Lotion eliminates 100% of lice and nits in a single application. Enriched with vitamin E and with citronella and lavender essential oils, it helps prevent infestation and slows their spread.',
        benefits: [
          'Eliminates 100% of lice and nits in one application',
          'Free from silicones and chemical insecticides',
          'Contains vitamin E',
          'Prevention and treatment thanks to essential oils',
          'Proven effective from the very first use',
        ],
        highlights: [
          { icon: 'badge-check', label: 'Guaranteed results' },
          { icon: 'leaf', label: 'Natural ingredients' },
          { icon: 'sparkles', label: 'Vitamin-enriched care' },
          { icon: 'zap', label: 'Immediate action' },
        ],
        usage: 'Apply to dry hair like a mask. Leave on for 20 to 30 minutes. Then wash the hair with Lucéat® Gentle Purifying Shampoo.',
        precautions: '',
      },
    },
  },
  {
    slug: 'shampoing-anti-poux-assainissant',
    category: 'lice',
    images: ['/images/products/SHAMPOING ANTI POUX ASSAINISSANT/SHAMPOING ANTI POUX ASSAINISSANT.png'],
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
        highlights: [
          { icon: 'zap', label: 'Action immédiate' },
          { icon: 'feather', label: 'Formule douce' },
          { icon: 'wind', label: 'Démêlage facile' },
          { icon: 'bug', label: 'Anti-lentes' },
        ],
        usage: 'Appliquer sur cheveux mouillés. Faire mousser environ 3 minutes. Peigner avec le peigne fin offert pour décoller les lentes, rincer abondamment puis sécher. Renouveler si nécessaire.',
        precautions: '',
      },
      en: {
        name: 'Purifying Anti-Lice Shampoo',
        shortDescription: 'A gentle shampoo, free from silicones and chemical insecticides, to purify the scalp after lice treatment.',
        description: 'Lucéat® Gentle Purifying Anti-Lice Shampoo purifies the scalp and makes it easier to loosen remaining dead nits and to detangle. Recommended after antiparasitic treatment to rebalance a weakened scalp.',
        benefits: [
          'Purifies the scalp',
          'Helps remove remaining dead nits',
          'Detangles after lice treatment',
          'Free from silicones and chemical insecticides',
          'Proven effective from the very first use',
        ],
        highlights: [
          { icon: 'zap', label: 'Immediate action' },
          { icon: 'feather', label: 'Gentle formula' },
          { icon: 'wind', label: 'Easy detangling' },
          { icon: 'bug', label: 'Removes nits' },
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
        highlights: [
          { icon: 'wind', label: 'Anti-humidité' },
          { icon: 'sparkles', label: 'Peau fraîche' },
          { icon: 'hand', label: 'Usage externe' },
          { icon: 'triangle-alert', label: 'Éviter les plaies' },
        ],
        usage: 'Appliquer sur une peau propre et sèche en évitant le nez et la bouche des enfants.',
        precautions: '',
      },
      en: {
        name: 'Talc',
        shortDescription: 'Helps absorb excess moisture for fresh, comfortable skin.',
        description: 'LUCEAT talc absorbs moisture and leaves the skin fresh and comfortable. It is intended for external use and helps keep the skin dry and soothed.',
        benefits: [
          'Absorbs excess moisture',
          'Fresh, comfortable skin',
          'External use only',
          'Do not use on broken skin',
        ],
        highlights: [
          { icon: 'wind', label: 'Absorbs moisture' },
          { icon: 'sparkles', label: 'Fresh skin' },
          { icon: 'hand', label: 'External use' },
          { icon: 'triangle-alert', label: 'Avoid broken skin' },
        ],
        usage: "Apply to clean, dry skin, keeping away from children's nose and mouth.",
        precautions: '',
      },
    },
  },
  {
    slug: 'trousse-bebe-3-2',
    category: 'travel',
    images: [
      '/images/products/TROUSSE BEBE 3+2/TROUSSE BEBE 3+2.png',
      '/images/products/TROUSSE BEBE 3+2/TROUSSE BEBE 3+2-1.png',
    ],
    sizes: ['coffret'],
    kit: [
      { slug: 'shampoing-bebe-enfant-sans-sulfate-2en1', size: '250ml' },
      { slug: 'eau-de-senteur', size: '250ml' },
      { slug: 'creme-de-change', size: '40gr' },
      { slug: 'savon-doux-hypoallergenique', size: '100gr', free: true },
    ],
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
        // No icon tiles: the kit layout leads with its composition list, which
        // already carries what the tiles would say for a bundle.
        highlights: [],
        usage: 'Transportez la trousse pour soigner bébé où que vous soyez, et utilisez les produits selon les besoins quotidiens.',
        precautions: '',
      },
      en: {
        name: 'Baby Kit 3+2',
        shortDescription: 'All the baby hygiene essentials gathered in one practical kit for travelling.',
        description: "Everything you need for your little one's daily hygiene routine, gathered in a single kit that travels with you.",
        benefits: [
          'Sulphate-free baby & child shampoo 250 ml included',
          'Alcohol-free scented water 250 ml included',
          'Nappy change cream 40 g included',
          'Gentle hypoallergenic soap 100 g free',
          'Kit bag included free',
        ],
        // Matches the French entry: the kit layout leads with its composition
        // list, so there are no icon tiles to translate.
        highlights: [],
        usage: 'Take the kit with you to care for baby wherever you are, and use each product as your daily routine requires.',
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
        highlights: [
          { icon: 'sparkles', label: 'Soin complet' },
          { icon: 'shield-check', label: 'Protection cutanée' },
          { icon: 'feather', label: 'Douceur naturelle' },
          { icon: 'baby', label: 'Dès la naissance' },
        ],
        usage: 'Se frotter les mains avec le savon, faire mousser sur le corps de bébé, puis rincer.',
        precautions: '',
      },
      en: {
        name: 'Gentle Hypoallergenic Soap',
        shortDescription: "A gentle hypoallergenic soap for little ones' face and body, from birth.",
        description: "LUCEAT® Gentle Soap softly cleanses infants' face and body every day, for normal and sensitive skin alike. Its natural formula respects the balance of the skin while soothing, nourishing and hydrating it.",
        benefits: [
          'Suitable from birth',
          'Very gentle formula of natural origin',
          'Soothes, nourishes and hydrates',
          'Protects the hydrolipidic film',
          'Delicate fragrance with a soft trail',
        ],
        highlights: [
          { icon: 'sparkles', label: 'Complete care' },
          { icon: 'shield-check', label: 'Skin protection' },
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
        highlights: [
          { icon: 'leaf', label: 'Ingrédients naturels' },
          { icon: 'baby', label: 'Dès la naissance' },
          { icon: 'feather', label: 'Douceur nourrisson' },
          { icon: 'heart', label: 'Confort digestif' },
        ],
        usage: 'Verser quelques gouttes dans la paume, chauffer doucement l’huile, puis masser délicatement le ventre du bébé en mouvements circulaires. Utiliser 1 à 2 fois par jour selon le besoin.',
        // Verified against the official COLLYSE flyer — the one product with
        // sourced precaution text; not extrapolated to the rest of the range.
        precautions: "Usage externe uniquement. Ne pas appliquer sur le visage. Éviter le contact avec les yeux et les muqueuses. Tenir hors de portée des enfants. En cas d'irritation, cesser l'utilisation et consulter un médecin.",
      },
      en: {
        name: 'COLLYSE® Anti-Colic Massage Oil',
        shortDescription: 'A gentle massage oil to soothe colic and help baby relax.',
        description: 'COLLYSE® is an anti-colic massage oil formulated to relieve digestive discomfort in infants. Its gentle formula, based on plant oils and natural extracts, protects and nourishes delicate skin while helping to calm colic.',
        benefits: [
          'Soothes colic and digestive discomfort',
          'Gentle formula for infants',
          'Suitable from birth',
          'External use only',
          'Free from essential oils, parabens and alcohol',
        ],
        highlights: [
          { icon: 'leaf', label: 'Natural ingredients' },
          { icon: 'baby', label: 'From birth' },
          { icon: 'feather', label: 'Infant-gentle' },
          { icon: 'heart', label: 'Digestive comfort' },
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
  'savon-doux-hypoallergenique',
  'eau-de-senteur',
  'huile-de-massage-anti-colique',
  'creme-de-change',
  'shampoing-bebe-enfant-sans-sulfate-2en1',
  'liniment-oleo-calcaire',
  'talc',
  'lait-de-corps',
  'shampoing-anti-poux-assainissant',
  'lotion-anti-poux',
  'trousse-bebe-3-2',
];

export function getCatalogueProducts(): Product[] {
  return [...products].sort((a, b) => catalogueOrder.indexOf(a.slug) - catalogueOrder.indexOf(b.slug));
}
