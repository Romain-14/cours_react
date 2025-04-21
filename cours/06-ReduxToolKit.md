# Redux ToolKit + RTK Query

Redux est une bibliothèque de gestion d'état prédictible pour les applications JavaScript, souvent utilisée avec React pour partager des données entre les composants. Redux Toolkit (RTK) est une version simplifiée et moderne de Redux, qui réduit la complexité en fournissant des outils pour configurer le store, créer des reducers, et gérer l'état de manière efficace. RTK simplifie également l'intégration avec des API via **RTK Query**, qui facilite les appels API et leur gestion dans l'état global.

## Redux ToolKit

1. Démarrer un nouveau projet react vite JS + SWC

    ```bash
    npm create vite@latest nomProjet -- --template react-swc
    ```

2. Installer les dépendances RTK

    ```bash
    npm install react-redux @reduxjs/toolkit
    ```

3. Créer les dossiers `app` et `features` pour reproduire la structure ci-dessous

    ```txt
    src
    |___app
    |___assets
    |___features
    |___App.jsx
    |___main.jsx
    .gitignore
    ...
    ```

4. Créer le fichier `store.js` dans le dossier `app` avec le contenu suivant

    > configuration final et commentaires au point n°6

    ```js
    import { configureStore } from "@reduxjs/toolkit";

    const store = configureStore({
        reducer: {
            // on reviendra ici plus tard
        },
    });

    export default store;
    ```

5. Créer un `slice`, créer le fichier `authSlice.js` dans le dossier `features` avec le contenu suivant

    ```js
    // import de createSlice qui permet de configurer les différents reducers du slice auth en 
    // simplifiant leur création et actions associées.
    import { createSlice } from "@reduxjs/toolkit";

    // initialState définit l'état par défaut pour ce slice
    const initialState = {
        username: "",
        isLogged: false,
    };

    // Utiliser la fonction createSlice qui permet de définir directement l'état initial et de gérer les actions dans un seul objet
    const authSlice = createSlice({
        name: "auth", // nom du slice qui permettra à redux de le retrouver
        initialState, // état initial du slice
        reducers: {
            // fonctions qui permettent de mettre à jour l'état du slice
            // state est l'état actuel du slice
            // action est l'action qui est envoyée par le composant (via le dispatch), la donnée se trouve dans action.payload
            login(state, action) {
                // RTK utilise immer pour gérer l'immuabilité de l'état on peut donc modifier l'état directement
                state.username = action.payload;
                state.isLogged = true;
            },
        },
    });

    // export des actions reducers pour pouvoir les utiliser dans les composants
    export const { login, logout, updateUsername } = authSlice.actions;
    // export du reducer pour pouvoir le combiner avec les autres reducers dans le store
    export default authSlice.reducer;
    ```

6. Retournons dans le fichier `store.js` pour terminer la configuration du store, ajouter le slice `auth` aux `reducers`

    ```js
    // fonction qui permet de configurer le store de l'application
    // permets de combiner les différents reducers de l'application
    // et de les fournir à l'application
    import { configureStore } from "@reduxjs/toolkit";
    // import du reducer auth
    import authReducer from "../features/authSlice";

    // configuration du store qui combine les différents reducers et les fournit à l'application
    const store = configureStore({
        // on fournit les différents reducers
        reducer: {
            // authReducer est le reducer du authSlice qui gère l'état de connexion de l'utilisateur
            // on lui donne un petit nom pour pouvoir le retrouver plus facilement
            auth: authReducer,
        },
    });

    export default store;
    ```

7. Il faut maintenant englober notre application de notre `Provider` possédant la `source de vérité` unique contenant tous nos `reducers/slices`

    > Se rendre dans le fichier `main.jsx` et englober le composant `App` du composant `Provider` de Redux en transmettant notre `store`.

    ```jsx
    import { createRoot } from "react-dom/client";
    import { BrowserRouter } from "react-router-dom";
    import App from "./App.jsx";
    // Importer le composant Provider
    import { Provider } from "react-redux";
    // Import du store de l'application pour le passer au Provider
    import store from "./app/store";

    createRoot(document.getElementById("root")).render(
        // Le Provider permet de fournir à toute l'application l'accès au store Redux
        // Chaque composant qui utilise useSelector ou useDispatch peut accéder à l'état global de l'application
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
    ```

8. Récupérer une donnée d'un reducer

    ```jsx
    // Importer le useSelector pour accéder à un state du store
    // Il permet de "sélectionner" une portion de l'état du store pour l'utiliser dans un composant.
    import { useSelector } from "react-redux";
    import Card from "../UI/Card";

    function Header() {
        // Récupérer l'état de connexion correspondant à la clé "auth" dans le store
        // isLogged étant le nom de la propriété dans le state initial (slice auth)
        const { isLogged, username } = useSelector((state) => state.auth);
        // ...

        return (
            // ...
            <>{<p>Welcome {isLogged ? username : "Guest"}</p>}</>
        );
    }
    ```

9. Utiliser une fonction `reducer` du slice

    ```jsx
    // Importer le hook useDispatch
    // Permets d'envoyer des actions vers le store, de modifier un état en déclenchant une action d'un reducer
    import { useDispatch, useSelector } from "react-redux";
    // Importer la fonction 'reducer' du slice à utiliser
    import { logout } from "../features/authSlice";

    function Header() {
        // on créer l'objet dispatch pour l'utiliser   
        const dispatch = useDispatch();
        const { isLogged, username } = useSelector((state) => state.auth);
        // ...

        return (
            // ...
            <header>
                {/* ici on appelle la fonction logout pour déclencher son effet qui va réinitialisé la state du slice auth*/}
                <button onClick={() => dispatch(logout())}>
                    logout
                </button>
            </header>
        );
    }
    ```

### Résumé des fonctions

- `configureStore` : Permet de configurer un store Redux qui contient tous nos slices et configure les middleware comme Redux DevTools pour le débogage.
- `createSlice` : Permet de créer un slice, un objet qui contient l'état initial, les fonctions pour modifier cet état (reducers), et les actions associées automatiquement.
- `Provider` : Permet de rendre le store Redux accessible à tous les composants de l'application, en les connectant au store via le contexte de Redux, généralement placé au niveau supérieur de l'arborescence des composants.
- `useSelector` : Permet de lire (sélectionner) des données spécifiques depuis le store Redux, en accédant à l'état global.
- `useDispatch` : Permet d'envoyer (distribuer) des actions au store Redux depuis un composant React pour modifier l'état global de l'application.

## Redux Toolkit Query

RTK Query est un outil puissant de Redux Toolkit qui permet de simplifier la gestion des appels API dans les applications React. Il fournit un moyen facile et performant pour effectuer des requêtes HTTP et gérer les états de chargement, d'erreur, et de données dans le store global sans avoir à écrire des reducers ou gérer manuellement l'état des requêtes.

1. Installer RTK Query
Si vous utilisez déjà Redux Toolkit, RTK Query est intégré, mais vous devez ajouter un slice spécifique pour gérer les requêtes API. Installez @reduxjs/toolkit si ce n'est pas déjà fait :

    ```bash
    npm install @reduxjs/toolkit react-redux
    ```

2. Créer un service API avec RTK Query
RTK Query facilite la création de services API. Vous allez définir un "service" qui encapsule les appels à votre API dans un slice dédié. Créez un fichier apiSlice.js dans le dossier features :

    ```js
    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    // Définir l'API avec createApi
    const apiSlice = createApi({
    reducerPath: 'api',  // nom du slice API
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.exemple.com/' }), // URL de base de l'API
    endpoints: (builder) => ({
        // Définir une requête GET pour récupérer des utilisateurs
        getUsers: builder.query({
        query: () => 'users', // endpoint relatif pour la requête
        }),
        // Définir une requête POST pour ajouter un utilisateur
        addUser: builder.mutation({
        query: (newUser) => ({
            url: 'users',
            method: 'POST',
            body: newUser,  // données envoyées dans le corps de la requête
        }),
        }),
    }),
    });

    // Exporter les hooks générés automatiquement pour chaque requête/mutation
    export const { useGetUsersQuery, useAddUserMutation } = apiSlice;

    // Exporter le reducer API pour l'ajouter au store
    export default apiSlice.reducer;
    ```

3. Configurer le store avec RTK Query
Maintenant, vous devez ajouter ce service API à votre store Redux. Ouvrez le fichier store.js et ajoutez le apiSlice aux reducers de votre store.

    ```js
    import { configureStore } from '@reduxjs/toolkit';
    import authReducer from '../features/authSlice';
    import apiReducer from '../features/apiSlice';

    const store = configureStore({
    reducer: {
        auth: authReducer,
        api: apiReducer,  // Ajout du reducer de l'API
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),  // Ajout du middleware API
    });

    export default store;
    ```

4. Utiliser les hooks générés par RTK Query dans les composants
RTK Query génère automatiquement des hooks pour chaque endpoint que vous définissez. Vous pouvez les utiliser directement dans vos composants pour interagir avec l'API. Par exemple, pour récupérer des utilisateurs dans un composant :

    ```jsx
    import React from 'react';
    import { useGetUsersQuery } from '../features/apiSlice';

    function UsersList() {
    const { data, error, isLoading } = useGetUsersQuery();  // Utilisation du hook RTK Query pour récupérer les utilisateurs

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading users.</div>;

    return (
        <ul>
        {data.map(user => (
            <li key={user.id}>{user.name}</li>
        ))}
        </ul>
    );
    }

    export default UsersList;
    ```

5. Utiliser une mutation pour ajouter des données
RTK Query permet également de gérer des mutations (POST, PUT, DELETE, etc.). Voici comment vous pouvez ajouter un utilisateur :

    ```jsx
    import React, { useState } from 'react';
    import { useAddUserMutation } from '../features/apiSlice';

    function AddUser() {
    const [name, setName] = useState('');
    const [addUser, { isLoading, error }] = useAddUserMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addUser({ name });  // Appeler la mutation pour ajouter un utilisateur
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter user name"
            />
            <button type="submit" disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add User'}
            </button>
        </form>
        {error && <div>Error adding user.</div>}
        </div>
    );
    }

    export default AddUser;
    ```

6. Résumé des fonctions RTK Query

- `createApi` : Crée un service API qui définit les endpoints et gère les requêtes.
- `fetchBaseQuery` : Fournit une fonction de base pour envoyer des requêtes HTTP (comme fetch).

- `useGetUsersQuery` et `useAddUserMutation` : Des hooks générés automatiquement pour interagir avec les endpoints définis.

- `reducerPath` : Nom du slice qui stocke les résultats de l'API dans le store Redux.

- `middleware` : Ajoute le middleware RTK Query au store pour gérer les appels API et mettre en cache les réponses.
