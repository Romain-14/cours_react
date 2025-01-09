# Tutoriel React Router DOM

React Router DOM est une bibliothèque permettant de gérer facilement la navigation entre les différentes pages d'une application React (SPA).

## 1. Installation de React Router DOM

Assure-toi d'avoir React installé. Puis installe React Router DOM via npm :

```bash
npm install react-router-dom
```

---

## 2. Configuration de base du routeur

Ce module utilise un composant `BrowserRouter` pour gérer les routes. Voici la structure de base :

```jsx
// importer les composants nécessaires
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                {/* si le paramètre url est "/" alors le composant Home est monté */}
                <Route path="/" element={<Home />} />
                {/* si le paramètre url est "/about" alors le composant Home est monté */}
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
```

### Explications

- **`BrowserRouter`** (alias `Router`) : Enveloppe principale pour activer les routes dans l'application.
- **`Routes`** : Conteneur des différentes routes.
- **`Route`** : Définit une correspondance entre un chemin (`path`) et un composant à afficher (`element`).

---

## 3. Ajout de liens de navigation

React Router DOM fournit les composants `NavLink` et `Link` pour naviguer entre les pages sans rechargement du navigateur :

```jsx
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">À propos</NavLink>
        </nav>
    );
}

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>

            <article>
                <h2>Poulet rôti</h2>
                <p>lorem ipsum dolor sit amet</p>
                <Link to={"/recipe/" + recipe.id} >Voir la recette</Link>
            </article>
        </Router>
    );
}
```

### Explications

- **`NavLink`** et **`Link`** remplace les balises `<a>` classiques pour éviter le rechargement complet de la page.
- la différence réside dans le fait que NavLink détecte la page en cours et lui applique la class `active`, pratique pour du style dynamique !
- Utilise l'attribut `to` pour spécifier l'URL cible.

---

## 4. Gestion d'une route 404 (Page non trouvée)

Pour gérer les URL inexistantes, ajoute une route "catch-all" avec `*` :

```jsx
function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
```

### Explications

- La route `path="*"` attrape toutes les URL qui ne correspondent pas aux autres chemins définis.
**à bien placer en dernier dans les routes !!**

---

## 5. Utilisation de paramètres de route

Les paramètres dynamiques dans les URL sont utiles, par exemple pour accéder au profil d'un utilisateur...
A combiner avec le hook `useParams`

### Exemple : Page avec un paramètre `id`

```jsx

function UserPage() {
    const { id } = useParams(); // Hook pour récupérer les paramètres de l'URL
    return <Profile id={id} />;
}

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:id" element={<UserPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
```

### Explications

- Le chemin `/user/:id` accepte un paramètre dynamique `id`.
- **`useParams`** est un hook fourni par React Router pour accéder aux paramètres de l'URL.

---

## 6. Navigation programmatique

Il est parfois nécessaire de naviguer sans `Link`, par exemple après un formulaire soumis avec succès.

### Exemple : Navigation avec `useNavigate`

```jsx
import { useNavigate } from 'react-router-dom';

function ContactForm() {
    const navigate = useNavigate(); // Hook pour la navigation

    const handleSubmit = (e) => {
        e.preventDefault();
        // Effectuer une action, puis rediriger :
        navigate('/about');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Votre nom" />
            <button type="submit">Envoyer</button>
        </form>
    );
}

```

### Explications

- **`useNavigate`** est un hook pour rediriger l'utilisateur vers une autre route de manière programmatique (redirection).

---
