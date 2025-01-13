import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../features/authSlice";

// ce composant est en mode "controlled component" car on utilise le hook useState pour gérer le nouvel état du nom d'utilisateur
function Dashboard() {
	const dispatch = useDispatch();
	const { username } = useSelector((state) => state.auth);

	// On utilise le hook useState pour gérer le nouvel état du nom d'utilisateur et on initialise la valeur avec le nom d'utilisateur actuel
	const [newUsername, setNewUsername] = useState(username);

	// On définit la fonction submitHandler pour gérer la soumission du formulaire
	function submitHandler(e) {
		e.preventDefault();
		dispatch(updateUsername(newUsername));
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
