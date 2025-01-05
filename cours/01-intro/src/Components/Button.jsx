
// pour utiliser les données transmise depuis le composant "App" ill faut passer en paramètre 'prop'
function Button(props) {

    // une fonction pour gérer les actions des boutons
    // l'événement est transmis naturellement
	function handleClick(e) {
		
		switch (e.target.textContent) {
			case "increment":
				props.setCount((previousState) => previousState + 1);
				break;
			case "decrement":
				props.setCount((previousState) => previousState - 1);
				break;

			default:
				console.log("Not a real button");
				break;
		}
	}

	return (
		<>
			{/* l'attribut onClick est un attribut react pour la gestion d'événement au clic */}
			<button onClick={handleClick}>{props.type}</button>
		</>
	);
}

export default Button;
