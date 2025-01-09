# Utilisation de FETCH

Le fetch est le même qu'en natif, mais au vu des mécaniques de react, il ya quelques subtilités pour intégrer des données récupérées

Pour ce cours, je vais utiliser les données sur l'API `jsonplaceholder` :
[https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20]

On a besoin :

- d'un état (useState) permettant d'indiquer un changement dans l'interface lorsque les données seront récupérés
- d'un hook gérant les effets de bord (useEffect) qui va s'executer après le 1er rendu du composant, mettre à jour notre state et re-rendre l'affichage avec notre donnée

On gère l'affichage avec une expression ternaire :

- si les données ne sont pas là on affiche le message "Loading..."

- Si les données sont récupérés et notre state à jour, il va falloir boucler (en react boucle map)

```js
import { useState, useEffect } from "react";

function Home(){
    // un state qui vaut null pour afficher dans l'interface que la données est en cours de récupération
    // ce state va se faire mettre à jour via le fetch dans le useEffect
    const [datas, setDatas] = useState(null);
    // state pour gérer l'erreur
    const [error, setError] = useState(null);

    // dans le useEffect version avec then
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20")
        .then((res) => res.json()) // converti les données JSON en JS manipulable
        .then((res) => setDatas(res)) // mets à jour le state datas et va provoquer un re-rendu du composant
        .catch((err) => setError("Fetch failed. Try again."));
    }, []);

    // version async/await (moderne)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20");
                const data = await response.json();
                setDatas(data);
            } catch (err) {
                setError("Fetch failed. Try again.");
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {error && <p>{error}</p>}
            {!datas && !error ? (
                <p>Loading ...</p>
            ) : (
                datas.map((data, index) => (
                    <article key={data.id}>
                        <p>index : {index}</p>
                        <p>data.id : {data.id}</p>
                        <p>title : {data.title}</p>
                    </article>
                ))
            )}
        </>
    );

}
```

`map` s'utilise sur un Array
prends en paramètre une callback qui récupère jusqu'à 2 données, la 1ère est l'élément en cours d'itération, la 2ème (optionnel dans de nombreux cas) qui est un identifiant de Array (commence donc à zéro).

React a besoin d'une props clé (key) pour savoir qu'elle élément subit une interaction.

Et on affiche les données avec l'évaluation de l'expression en jsx grace aux accolades `{}`
