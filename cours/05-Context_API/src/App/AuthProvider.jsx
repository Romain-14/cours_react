import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

// Création d'un objet INITIAL_STATE pour initialiser le state de l'utilisateur pour gérer facilement la session de l'utilisateur
const INITIAL_STATE = {
	username: "",
	isLogged: false,
};

function AuthProvider(props) {
	// Déclaration d'un state user pour gérer la session de l'utilisateur
	const [user, setUser] = useState(INITIAL_STATE);
	// Déclaration de la fonction login pour mettre à jour les données de l'utilisateur lorsqu'il se connecte
	function login(username) {
		setUser({
			username,
			isLogged: true,
		});
	}
	// Déclaration de la fonction updateUsername pour mettre à jour le nom d'utilisateur
	function updateUsername(newUsername) {
        // utiliser le spread operator pour ne pas perdre les autres valeurs du state et faciliter la maintenabilité du code
		setUser({
			...user,
			username: newUsername,
		});
	}
	// Déclaration de la fonction logout pour déconnecter l'utilisateur
	function logout() {
		// On réinitialise le state de l'utilisateur en utilisant la valeur INITIAL_STATE
		setUser(INITIAL_STATE);
	}

	return (
        // Utilisation de la méthode .Provider de l'objet AuthContext pour fournir les données de l'utilisateur à tous les composants enfants
		<AuthContext.Provider value={{ user, login, logout, updateUsername }}>
			{props.children}
		</AuthContext.Provider>
	);
}

// Utilisation de PropTypes pour définir le type de propriété children
AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export { AuthContext };
export default AuthProvider;
