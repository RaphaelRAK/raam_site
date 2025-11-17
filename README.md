# Flut Budget - Site Web

Site web promotionnel pour l'application Flut Budget, développé avec Next.js 14, TypeScript et Tailwind CSS.

## 🚀 Démarrage Rapide

### Installation

```bash
npm install
```

### Développement

Lancez le serveur de développement :

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de Production

```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
.
├── app/
│   ├── layout.tsx          # Layout principal avec metadata
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Styles globaux
│   └── help/
│       └── page.tsx        # Page d'aide
├── components/
│   ├── Header.tsx          # En-tête avec navigation
│   ├── Hero.tsx            # Section hero
│   ├── Features.tsx         # Section fonctionnalités
│   ├── Screenshots.tsx      # Section captures d'écran
│   ├── Security.tsx         # Section sécurité
│   ├── WhyChoose.tsx        # Section avantages
│   ├── Download.tsx         # Section téléchargement
│   └── Footer.tsx           # Pied de page
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Animations fluides avec Framer Motion
- ✅ Navigation intuitive
- ✅ Sections complètes pour présenter l'application
- ✅ Page d'aide avec FAQ
- ✅ Optimisé pour le SEO
- ✅ Mode sombre/clair pour les captures d'écran

## 🛠️ Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **Framer Motion** - Animations

## 📝 Personnalisation

### Modifier les liens de téléchargement

Éditez les composants `Hero.tsx` et `Download.tsx` pour mettre à jour les liens vers Google Play et App Store.

### Ajouter des captures d'écran

Remplacez les placeholders dans `Screenshots.tsx` par vos vraies captures d'écran.

### Modifier les couleurs

Éditez `tailwind.config.ts` pour personnaliser la palette de couleurs.

## 📄 Licence

Tous droits réservés © 2024 Flut Budget

