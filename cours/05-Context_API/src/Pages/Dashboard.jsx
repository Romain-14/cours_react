import { useContext, useState } from "react";
import { AuthContext } from "../App/AuthProvider";

// ce composant est en mode "controlled component" car on utilise le hook useState pour gérer le nouvel état du nom d'utilisateur

function Dashboard() {
    // On consomme le contexte AuthContext pour récupérer l'objet user et la fonction updateUsername
	const { user, updateUsername } = useContext(AuthContext);
    // On utilise le hook useState pour gérer le nouvel état du nom d'utilisateur et on initialise la valeur avec le nom d'utilisateur actuel
	const [newUsername, setNewUsername] = useState(user.username);

    // On définit la fonction submitHandler pour gérer la soumission du formulaire
	function submitHandler(e) {
		e.preventDefault();
		updateUsername(newUsername);
		console.log("form submitted");
	}

	return (
		<main id="dashboard">
			<aside>
				<h2>Do you want to change your username ?</h2>

				<form onSubmit={submitHandler}>
					<input
						type="text"
						placeholder="New username"
						value={newUsername}
						onChange={(e) => setNewUsername(e.target.value)}
					/>
					<button type="submit">Change</button>
				</form>
			</aside>
		</main>
	);
}

export default Dashboard;
