# Gestion des formulaires

Il y a 2 approches pour gérer les formulaires en react via des Hooks.

- **Controlled Component** avec **useState** (*recommandation de la Team React*)
- **Uncontrolled Component** avec**useRef**

## State

La gestion d'un `state` et sa mise à jour déclenche un re-rendu du composant, donc on l'utilise à parti du moment où l'on veut un affichage dynamique dû à la mise à jour de cet `état`.

- **Avantages :**
  - Réactif : Permet de réagir aux changements de champs (par exemple, afficher un message d'erreur immédiatement).
  - Contrôlé : Les valeurs des champs sont toujours synchronisées avec l'état.
  - Flexible : Facile à utiliser avec des validations, transformations, ou un stockage temporaire des données.

- **Inconvénients :**
  - Peut devenir verbeux pour des formulaires très longs (chaque champ nécessite un onChange).

```jsx

function Register(){

    const [alias, setAlias] = useState("");
    const [error, setError] = useState("");
    
    function handleChange(e){
        setAlias(e.target.value)
    }

    function handleSubmit(e){        
        e.preventDefault();
        if(!alias || alias.length <3) {
            setError("3 caractères minimum");
            return;
        }
        // ici on peut envoyer les données
        // ...
        // rediriger vers la page Login ..
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="alias"
                value={alias}
                onChange={handleChange}
                placeholder="Entrer votre alias"
            />
            {error && <p>{error}</p>}
            <button type="submit">Créer le compte</button>
        </form>
  );
}
```

## Ref

Une `ref` (via useRef), est ne déclenche pas de re-rendu de l'interface.
Il permets d'accéder à un élément du DOM (*un peu comme un querySelector*) et à leurs valeurs.

- **Avantages :**
  - Simple : Pas besoin de maintenir un état, donc moins de code.
  - Performant : Pas de re-rendus liés aux changements de champ.
  - Direct : Idéal pour des formulaires courts et sans logique complexe.

- **Inconvénients :**
  - Moins flexible si vous devez afficher des erreurs ou valider en temps réel.
  - Les champs ne sont pas contrôlés par React (risque de désynchronisation entre le DOM et l'état).

---

Même si React recommande l'approche avec un state, pour optimiser le rendu dynamique, il faut prendre en compte certains cas, pourquoi utiliser un state ou une ref.

Pour des formulaires lié à l'authentification :

- **Connexion** : Utilisez useRef si le formulaire est simple (email + mot de passe, sans validation).
  - Rendra le code plus léger et performant.
- **Création de compte** : Utilisez useState pour gérer la validation en temps réel (e.g., vérifier les champs obligatoires, afficher des erreurs).
  - Garantit une meilleure expérience utilisateur.

```jsx

function Login(){

    const aliasRef = useRef();
    
     function handleSubmit(e){        
        e.preventDefault();
        // attention ici avec les ref, les valeurs se trouvent dans une propriété "current" !!
        const alias = aliasRef.current.value;
        // on peut combiner avec un state pour afficher un message d'erreur si le champs est vide
        // ou avec la réponse de la BDD ( pas d'utilisateur avec cet alias)
        // vérifier en BDD / LS et rediriger vers le Home/dashboard ..
        // ...
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                ref={aliasRef}
                placeholder="Entrer votre alias"
            />
            {error && <p>{error}</p>}
            <button type="submit">Se connecter</button>
        </form>
  );
}
```
