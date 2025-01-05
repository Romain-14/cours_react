# instructions

## étape 1

Installer un projet react en suivant le tutoriel/démo' , nettoyage compris.

Créer sous forme de composant :

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

On a besoin :

- d'un état (useState) permettant d'indiquer un changement dans l'interface lorsque les données seront récupérés
- d'un effet de bord (useEffect) qui va s'executer après le 1er rendu du composant, mettre à jour notre state et re-rendre l'affichage avec notre donnée

On gère l'affichage avec une expression ternaire :

- si les données ne sont pas là on affiche le message "Loading..."

- Si les données sont récupérés et notre state à jour, il va falloir boucler (en react boucle map)

```js
// dans le useEffect
fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20")
        .then(res => res.json())
        .then(res => setDatas(res) )
        .catch(err => console.log(err))
```

```jsx
// dans le return du composant qui doit afficher les données
{
    !datas ?
    <p>Loading ...</p>

    : 
    datas.map((data, index) => (
        <article key={data.id}>
            <p>index : {index}</p>
            <p>data.id : {data.id}</p>
            <p>title : {data.title}</p>

        </article>
    ))
    
}
```

`map` s'utilise sur un Array
prends en paramètre une callback qui récupérer jusqu'à 2 données, la 1ère est l'élément en cours d'itération, la 2ème (optionnel dans de nombreux cas) qui est un id généré.

React a besoin d'une props clé (key) pour savoir qu'elle élément subit une interaction.

Et on affiche les données avec l'évaluation de l'expression en jsx grace aux accolades `{}`

## étape 4

Mise en place d'un router, permettant la navigation entre les composants de page `home - login - register`.

Créer les pages :

- `Home`
- `Login` et `Register`
  - leur formulaire distinct (s'aider du cours 3wa)

1. Faire fonctionner le router entre ces composants
2. Mettre en place et manipuler les formulaires
