import PropTypes from "prop-types";

// Lors de l'utilisation d'un props, il faut passer par une validation des données afin de s'assurer en mode "développement de l'intégrité des données (bon type, bonne structure)
// on a de cette façon un retour direct dans la console

function Card(props) {
	return (
		<article>
			<p>title : {props.data.title}</p>
		</article>
	);
}

// Définition des PropTypes pour le composant Card
Card.propTypes = {
	data: PropTypes.shape({		
		title: PropTypes.string.isRequired, // title est requis et doit être une chaîne
	}).isRequired,
};

export default Card;
