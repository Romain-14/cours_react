# Redux Toolkit Query

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
