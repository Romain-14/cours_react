# instructions

Créer un `projet` de base react en s'aidant :

- des cours live et des cours écrit vu sur cette première journée.

## étape 1

Créer les composants suivants :

- un `header`
  - un h1 dans le header
- une base de page `home`
  - un paragraphe
- un `footer`
  - le copyright

Ces composants vont aller dans un dossier `Pages` à la racine de `src`.

## étape 2

Installer le package `sass`

```bash
npm install sass
```

- créer un dossier `style` à la racine de `src`
- créer le fichier `index.scss`
  - rajouter quelques lignes de `css`
- importer ce fichier dans le fichier `main.jsx`

## étape 3

Récupérer des données sur une API :
[https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20]
Ou sur
[https://github.com/public-apis/public-apis]

Implémenter le fetch dans le composant `Home`.

## étape 4

Mise en place d'un router, permettant la navigation entre les composants de page `home - login - register`.

Créer les pages :

- `Home`
- `Login` et `Register`
  - leur formulaire distinct

1. Faire fonctionner le router entre ces composants
2. Mettre en place et manipuler les formulaires
