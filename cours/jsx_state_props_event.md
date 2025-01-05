# Guide de base React : JSX, State, Props et Events

## JSX

JSX est une extension de syntaxe pour JavaScript qui permet d'écrire du HTML dans du JavaScript.

### Exemple de composant avec JSX

```jsx
function Welcome() {
  return (
    <header>
      <h1>Bienvenue sur React!</h1>
    </header>
  );
}
```

### Règles importantes

- Un composant doit retourner un seul élément parent.
- Utilisez les accolades `{}` pour insérer des expressions JavaScript dans du JSX.
- Les attributs en JSX utilisent le camelCase : `className` au lieu de `class`, `onClick` au lieu de `onclick`.

---

## State

Le state est une donnée propre à un composant qui peut changer au fil du temps.
**`useState` retourne un tableau avec deux éléments : la valeur actuelle du state et une fonction pour la mettre à jour.**
**L'appel de `setState` ou `setCount` déclenche un nouveau rendu du composant.**

### Déclaration avec `useState`

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Déclaration du state

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
}
```

## Props

Les props (propriétés) permettent de passer des données d'un composant parent à un composant enfant.
**Les props sont en lecture seule : elles ne peuvent pas être modifiées dans le composant enfant.**

### Exemple

```jsx
function Button(props) {
  return <button>{props.name}</button>;
}

function App() {
  return <Button name="Incrémenter" />;
}
```

## Gestion des événements

Les événements en React utilisent une syntaxe camelCase et des fonctions en tant que gestionnaires.

### Exemple de clic

```jsx
function Button() {

    function handleClick() {
        alert('Bouton cliqué !');
    }

    return (
        <button onClick={handleClick}>Cliquez-moi !!</button>
    );
}
```

### Points clés

- Les événements sont passés comme fonctions : `onClick={handleClick}`.
- Pour passer des arguments, utilisez une fonction anonyme :

```jsx
<button onClick={() => handleClick(arg)}>Cliquez-moi</button>
```

---

## Combiner state, props et événements

Voici un exemple combinant ces concepts :

```jsx
function App() {
  const [count, setCount] = useState(0);

    function handleClick(e) {
        switch (e.target.textContent) {
            case "increment":
                props.setCount((previousState) => previousState + 1);
                break;

            default:
                console.log("Not a real button");
                break;
        }
    }

  return (
    <>
        <p>{count}</p>
        <Button type={"increment"} handleClick={handleClick} />
    </>
  );
}

function Button(props) {
  return <button onClick={props.handleClick}>{props.type}</button>
}
```

---

## Résumé

- **JSX** : Syntaxe qui 'mélange' HTML et JavaScript.
- **State** : Données locales qui peuvent changer dans un composant (provoque un re-rendu du composant lors de sa mise à jour).
- **Props** : Données transmises d'un composant parent à un enfant.
- **Events** : Gestion des interactions utilisateur via des gestionnaires d'événements.

Ces concepts sont fondamentaux pour construire des interfaces réactives avec React.
