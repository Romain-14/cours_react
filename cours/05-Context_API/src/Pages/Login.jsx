import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App/AuthProvider";

// Formulaire de connexion en mode "controlled component"
// Pour un formulaire de connexion il est fort possible d'utiliser un mode "uncontrolled component" car on n'a pas besoin de gérer l'état du formulaire
function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


	function submitHandler(e) {
		e.preventDefault();
		console.log("form submitted");
        // vérification en BDD des informations de l'utilisateur
        // ...
        // Si tout est OK on passe à la mise à jour de l'état de connexion pour notre interface dynamique
        login(username);
        // et on redirige
        navigate("/");
	}


	return (
		<main>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					name="username"
					placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
				/>

				<input
					type="password"
					name="password"
					placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
				/>

				<button type="submit">Login</button>
			</form>
		</main>
	);
}

export default Login;
