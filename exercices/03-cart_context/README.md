
# Exercice : Gestion du Panier d'Achats avec React Context

## Objectif

L'objectif de cet exercice est de comprendre comment utiliser le **React Context API** pour gérer un panier d'achats dans une application React. Vous allez créer un **contexte** pour le panier, gérer l'ajout et la suppression de produits, et synchroniser l'état du panier avec le **localStorage**.

## Contexte

Dans cet exercice, vous travaillez sur une application de boutique en ligne qui permet aux utilisateurs d'ajouter ou de supprimer des produits dans leur panier.
Les produits sont identifiés par un `id`, un `label` et ont un `price`.
Le panier doit être stocké dans le `localStorage` pour que les informations soient persistantes entre les sessions de l'utilisateur.

## Données

Utilisez les données ci-dessous ou une api pour simuler les produits à acheter.

```jsx

const products = [
    {
        id: 1,
        label: "Ballon",
        price: 10,
    },
    {
        id: 2,
        label: "Raquette",
        price: 15,
    },
    {
        id: 3,
        label: "Chaussures",
        price: 20,
    },
    {
        id: 4,
        label: "Filet",
        price: 25,
    },
    {
        id: 5,
        label: "Chaussettes",
        price: 5,
    },
    {
        id: 6,
        label: "Short",
        price: 10,
    },
    {
        id: 7,
        label: "T-shirt",
        price: 10,
    },
    {
        id: 8,
        label: "Casquette",
        price: 5,
    },
    {
        id: 9,
        label: "Sac de sport",
        price: 20,
    },
    {
        id: 10,
        label: "Gourde",
        price: 5,
    },    
];
```

## Partie 1 : Configuration du Contexte

1. **Création du Contexte** :
   - Créez un fichier `CartContext.js` dans lequel vous allez définir le **contexte** du panier d'achats. Ce fichier doit également exporter un `CartProvider` qui enveloppera les composants enfants.
   - Le `CartProvider` doit contenir l'état local du panier (initialisé à partir du `localStorage` ou d'un tableau vide s'il n'y a rien dans le `localStorage`).

2. **Définition des Fonctions de Gestion du Panier** :
   - Créez une fonction `addToCart` qui permet d'ajouter un produit au panier. Si le produit existe déjà, la quantité doit être augmentée. Sinon, le produit doit être ajouté avec une quantité de 1.
   - Créez une fonction `removeFromCart` qui permet de supprimer un produit du panier.

3. **Synchronisation avec `localStorage`** :
   - Utilisez `useEffect` pour sauvegarder le panier dans le `localStorage` chaque fois que l'état du panier change.

## Partie 2 : Intégration dans l'Application

1. **Utilisation du Contexte dans un Composant** :
   - Dans le composant `Cart` de votre choix, utilisez le **`CartContext`** pour afficher le contenu du panier.
   - Affichez le nom et la quantité de chaque produit ajouté au panier.
   - Implémentez un bouton qui appelle `removeFromCart` pour supprimer un produit du panier.
   - Calculez le montant de la commande et de chaque produit (selon la quantité)
   - Dans la navigation pour la page cart, afficher le nombre de produit différent dans le panier

2. **Tester l'Application** :
   - Ajoutez quelques produits au panier et assurez-vous que la quantité des produits est mise à jour correctement.
   - Testez la suppression de produits et vérifiez que l'état du panier et le `localStorage` sont bien mis à jour.

## Consignes

- Utilisez `useState` pour gérer l'état local du panier.
- Utilisez `localStorage` pour persister l'état du panier.
- Gérez les interactions de manière claire et intuitive, avec des fonctions distinctes pour ajouter et supprimer des produits.
- Ne pas perdre du temps sur le design, concentrez-vous sur la logique du panier.
- Assurez-vous que toutes les données sont bien synchronisées entre l'état et le `localStorage`.
