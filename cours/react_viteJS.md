# Initialiser un projet React avec l'outil viteJS

## 1. Télécharger la structure du projet

```bash
npm create vite@latest
```

## 2. Répondre au questionnaire

- le nom du projet
- la vue à utiliser ( React )
- type de package -> JavaScript + SWC (détail plus bas)

## 3. télécharger/Installer les packages

```bash
cd nomDuProjet
npm install
```

## 4. Executer le projet

```bash
npm run dev
```

## 5. Préparer votre structure

(voici une base)

- supprimer :
  - l'import du composant `<React.StrictMode>` dans le fichier main.jsx et son import
  - les fichiers CSS
  - les images dans les dossiers public et assets
  - le contenu du composant `<App/>`

- installer les packages :
  - `sass` -> préprocesseur CSS
<!-- on complétera cette section au fur et à mesure -->

### type de package lors de l'installation

- JavaScript + SWC (Speedy Web Compiler) car ce dernier permets de personnaliser la transpilation et d'utiliser du code moderne.
- JavaScript simple utilise le compilateur personnalisé de vite `esbuild` qui est aussi rapide, et peu suffire dans la plupart des projets surtout en débutant, mais n'a pas la personnalisation de SWC.
