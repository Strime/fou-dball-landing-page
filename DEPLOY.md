# 🚀 Guide de déploiement - Fou d'Ball Landing Page

## 📋 Prérequis
- Repository GitHub configuré
- Node.js installé
- Git configuré

## 🌐 Option 1: GitHub Pages (Recommandé)

### 1. Déploiement automatique
```bash
npm run deploy
```

### 2. Configuration GitHub
1. Va sur ton repo GitHub
2. Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: `gh-pages`
5. Folder: `/ (root)`

### 3. URL finale
Ta landing page sera disponible sur :
`https://strime.github.io/fou-dball-landing-page/`

## ⚡ Option 2: Netlify (Alternative)

### 1. Build de production
```bash
npm run build
```

### 2. Déploiement Netlify
1. Va sur [netlify.com](https://netlify.com)
2. "New site from Git"
3. Connecte ton repo GitHub
4. Build command: `npm run build`
5. Publish directory: `dist`

### 3. Configuration personnalisée
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `18`

## 🔧 Option 3: Vercel

### 1. Via CLI
```bash
npx vercel
```

### 2. Via interface web
1. [vercel.com](https://vercel.com)
2. "New Project"
3. Import ton repo GitHub
4. Auto-détection des settings React

## 📝 Notes importantes

### Assets
- Tous les assets sont dans `/assets/`
- Ta photo `me.jpg` est incluse
- Images optimisées automatiquement

### Configuration
- Base URL configurée pour GitHub Pages
- Responsive design mobile/desktop
- SEO optimisé

### Performance
- Bundle optimisé avec Vite
- Images lazy loading
- CSS minifié

## 🚀 Commandes utiles

```bash
# Développement local
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Déployer sur GitHub Pages
npm run deploy
```

## 🎯 Résultat final
- Landing page moderne et responsive
- Footer avec tes liens professionnels
- Design optimisé pour mobile
- Performance excellente

---
Développé avec ❤️ par Gaëtan Sancassani