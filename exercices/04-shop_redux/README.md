# Boutique en ligne avec Redux

## Objectif principal

L'objectif de cet exercice est de créer une **boutique en ligne** fonctionnelle avec **React** et **Redux** pour la gestion de l'état, en réutilisant les concepts appris dans les exercices précédents (02-fil_rouge et 03-cart_context).

Vous allez construire une boutique où les utilisateurs peuvent :

- S'inscrire, se connecter, et accéder à leur **dashboard** personnel.
- Ajouter des produits à leur panier, accéder à leur panier et modifier/supprimer des articles.

## Fonctionnalités principales

1. **Authentification** :
   - Créer un formulaire de **connexion** et de **création de compte**.
   - Les informations de l'utilisateur sont stockées dans le `localStorage`.
   - Implémenter une **page de profil** où l'utilisateur peut consulter ses informations.
   - Utiliser **Redux** pour gérer l'état de l'utilisateur.

2. **Dashboard** :
   - Une fois connecté, l'utilisateur peut accéder à un **dashboard** qui présente ses informations et un récapitulatif de son panier (nombre d'articles, total).

3. **Gestion du Panier** :  
   - Utiliser **Redux** pour gérer l'ajout et la suppression des produits dans le panier.
   - Le panier doit être persisté dans le `localStorage`.
   - Afficher le panier avec le nombre d'articles, les quantités et le prix total.
   - Afficher dynamiquement dans le menu de navigation le nombre d'articles différents dans le panier.

### Mise en place de Redux

1. **Installation de Redux** :
   - Installez `Redux Toolkit`, et `React-Redux` (cours `06-ReduxToolKit`) pour connecter l'état global de Redux à votre application.
2. **Configuration des slices Redux** :
   - Créer un `authSlice` pour gérer l'état de l'utilisateur (connexion, déconnexion, mise à jour des informations).
   - Créer un `cartSlice` pour gérer l'état du panier (ajout, suppression des produits, modification ...).
   - Autres slices ...

## Données de produits

Les produits sont définis comme suit :

```jsx
const products = [
    { id: 1, label: "Ballon", price: 10 },
    { id: 2, label: "Raquette", price: 15 },
    { id: 3, label: "Chaussures", price: 20 },
    { id: 4, label: "Filet", price: 25 },
    { id: 5, label: "Chaussettes", price: 5 },
    { id: 6, label: "Short", price: 10 },
    { id: 7, label: "T-shirt", price: 10 },
    { id: 8, label: "Casquette", price: 5 },
    { id: 9, label: "Sac de sport", price: 20 },
    { id: 10, label: "Gourde", price: 5 },
];
```

## Résumé

- Optimisation de l'interface avec un menu responsive (un burger menu).
- Mise à jour dynamique du title des pages au montage des composants.
- Ajout d'une favicon.
- Utilisation de `react-router-dom` pour gérer les routes de manière dynamique.
- Gestion de state global avec `Redux ToolKit`
