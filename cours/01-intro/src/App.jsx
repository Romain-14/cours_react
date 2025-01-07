import { useState } from "react";
import Header from "./Components/Header"
import Button from "./Components/Button";
import { useEffect } from "react";

// Composant App principal rendu/monté dans la div id "root"
function App() {
    // Utilisation d'un hook state pour avoir un rendu dynamique (à importer de react)
    // count est la donnée, setCount est la fonction pour la mise à jour qui provoquera un re-rendu du composant
    const [count, setCount] = useState(123);
    const [count2, setCount2] = useState(9999);
    console.log("body", count);


  
    useEffect(()=>{
      console.log("useEffect -> à chaque montage du composant");
    });
    
    useEffect(()=>{
      console.log("useEffect -> 1er montage du composant");
    }, []);
    
    useEffect(()=>{
      console.log("useEffect -> à chaque mise à jour du state count");
    }, [count]);

    useEffect(()=>{
      console.log("useEffect -> à chaque mise à jour du state count2");
    }, [count2]);

    return (

    <>
        <Header />
        {console.log("return", count)}
        {console.log("return", count2)}

        <main>
            <h1>Introduction to react</h1>

            <p>Counter : {count}</p>
            
            {/* Appel d'un composant enfant */}
            {/* on peut personnaliser la sortie en envoyant des props à ce composant */}
            {/* dans le composant enfant on aura un objet 'props' dans lequel sera créé la clé type et setCount ici, avec leur valeur respective cf. composant Button */}
            <Button type={"increment"} setCount={setCount}/>
            <Button type={"decrement"} setCount={setCount}/>
            <Button type={"toto"} />

        </main>

        <footer>
            <p>&copy; - Romain Fournier - 2025</p>
        </footer>
    </>  

    )
}

export default App
