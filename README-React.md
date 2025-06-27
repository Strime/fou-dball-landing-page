# Fou d'Ball - Landing Page React

Landing page moderne et responsive pour l'application mobile Fou d'Ball.

## ✨ Fonctionnalités

- Design moderne avec gradient et glassmorphism
- One-page scroll avec sections dédiées
- Responsive (mobile, tablette, desktop)
- TypeScript + React
- Optimisée pour le SEO
- Liens directs vers App Store et Play Store

## 🚀 Démarrage rapide

### Prérequis
- Node.js (version 16+)
- npm ou yarn

### Installation
```bash
npm install
```

### Développement
```bash
npm run dev
```
Ouvre [http://localhost:5173](http://localhost:5173) dans ton navigateur.

### Build de production
```bash
npm run build
```
Les fichiers générés seront dans le dossier `dist/`.

### Prévisualisation
```bash
npm run preview
```

## 📁 Structure du projet

```
src/
├── App.tsx          # Composant principal
├── App.css          # Styles CSS
└── index.tsx        # Point d'entrée React

public/
├── index.html       # Template HTML
└── assets/          # Images (héritées du projet Jekyll)
```

## 🎨 Design

- **Couleurs principales**: Dégradé bleu-violet (#667eea → #764ba2)
- **Police**: System fonts (Apple, Segoe UI, Roboto)
- **Style**: Moderne, sobre, professionnel
- **Thème**: Sport/Football avec emojis intuitifs

## 📱 Sections

1. **Hero**: Titre, description, boutons téléchargement
2. **Fonctionnalités**: 3 features principales avec icônes
3. **Screenshot**: Aperçu de l'app
4. **Footer**: Contact et informations développeur

## 🔧 Personnalisation

Les contenus peuvent être modifiés dans `src/App.tsx`:
- Textes et descriptions
- Liens des stores
- Informations de contact
- Images (dans le dossier `public/assets/`)

## 🌐 Déploiement

### GitHub Pages
1. Build: `npm run build`
2. Copie le contenu de `dist/` vers ton dépôt GitHub Pages
3. Active GitHub Pages dans les paramètres du repo

### Netlify/Vercel
1. Connecte ton repo
2. Build command: `npm run build`
3. Publish directory: `dist`

---

Développé avec ❤️ pour Fou d'Ball