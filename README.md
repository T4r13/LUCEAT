# LUCEAT

Site vitrine statique développé avec Astro + Tailwind CSS, prévu pour un déploiement Vercel.

## Installation locale

```bash
npm install
npm run dev
```

Le site sera disponible sur http://localhost:4321.

## Déploiement Vercel

1. Connectez votre dépôt GitHub à Vercel.
2. Sélectionnez ce projet comme application Vercel.
3. Déployez avec la configuration par défaut.

## Structure principale

- `src/pages` : pages du site (accueil, produits, à propos, contact)
- `src/components` : composants réutilisables (navbar, footer, hero, cartes produits, galerie...)
- `src/components/ui` : primitives de design partagées (bouton, icônes, badges...)
- `src/data/products.json` : données produit centralisées
- `src/data/site.ts` : coordonnées LUCEAT centralisées (email, téléphone, adresse, réseaux) — à modifier ici uniquement, jamais en dur dans les pages
- `public/images` : logo, favicon, hero et images produits

## Remplacer les images

- Logo : `public/images/logo/logo-luceat.jpg`
- Favicon : `public/favicon-32.png` et `public/apple-touch-icon.png`
- Hero : `public/images/hero/acceuil-refined.jpg`
- Produits : `public/images/products/{slug}/*.png`

## Mettre à jour les coordonnées

Modifiez uniquement `src/data/site.ts` (email, téléphone, adresse, Facebook). Toutes les pages qui affichent ces informations (footer, page contact) l'importent depuis ce fichier.

## Ajouter un produit

Ajoutez un nouvel objet dans `src/data/products.json` avec les champs attendus. Le rendu se mettra à jour automatiquement sur les pages produits et détail.
