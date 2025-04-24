# CONTEXT API

Le `Contexte` dans React désigne une interface avec des méthodes spécifiques permettant de gérer des états au niveau global de l'application, ce qui évite le problème du `props drilling` et du `lifting state up`.
Ce mécanisme fonctionne en englobant des composants dans un composant responsable de la gestion des états, qui va hydrater ces composants avec les états ou les fonctions de mise à jour de ces états.
Les composants vont `consommer` le Context, dans lequel on pourra `s'abonner` pour pouvoir utiliser ces états et fonctions.

On peut mettre en place plusieurs `Context`, pour séparer la logique de partage des données.

## Exemple

Mettons en place un `Context` pour la gestion dynamique de l'interface pour un utilisateur connecté.

1. Avoir un projet en place ou en créer un.
2. Le Context API étant natif, il n'y pas installer de module supplémentaire.
3. Dans `src`, créer un dossier `App` qui sera notre `store`.
4. Dans `App`, créer un composant `AuthProvider`.
5. Y placer le code suivant :

    ```jsx
    import { createContext, useState, useContext } from 'react';

    // Create a Context
    const AuthContext = createContext();

    const Provider = ({ children }) => {
        const [isLogged, setIsLogged] = useState(false);

        return (
            <AuthContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
            </AuthContext.Provider>
        );
    };

    export default Provider;
    ```

6. Dans `main.jsx`, englober le composant `App` par le composant `Provider`

```jsx

import AuthProvider from "../store/context/auth";
// ...
  <AuthProvider>
    <App />
  </AuthProvider>
// ...
```

7. Consommer le `Context` dans un Composant, utiliser le Hook `useContext()`

```jsx
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // Bien spécifier en paramètre du Hook, quel context on veut "consommer"
    const { isLogged, setIsLogged } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleSubmit(e) {
         e.preventDefault();
        // Algo de connexion
        // ...

        // Mise à jour de l'état global via le Context
        setIsLogged(true);
        
        // Redirection vers la page d'accueil ou une autre page après la connexion
        navigate("/"); 
    };

    return (
        <>
        <form handleSubmit={handleSubmit}>
            {/* ... */}

        </form>
        </>
    );
};

```

## Résumé

Voici les étapes clés pour utiliser le Context API  :

1. Créer un `Context` avec `createContext()`.
2. Créer un `Provider` qui contient l'état global (par exemple, isLogged) et les fonctions pour le manipuler.
3. Englobez les composants nécessaires avec ce `Provider`.
4. Utilisez `useContext()` dans les composants qui ont besoin d'accéder à cet état.
5. Mettre en place des composants dynamiques en fonction de l'état global (par exemple, un formulaire de connexion et un bouton de déconnexion).
6. Lors de la mise à jour de l'état via le `Context`, assurez-vous que les autres composants peuvent `consommer` cet état à jour et réagir en conséquence (ex : redirection après la connexion).
