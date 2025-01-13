import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


	function submitHandler(e) {
		e.preventDefault();
		console.log("form submitted");
        // vérification en BDD des informations de l'utilisateur
        // ...
        // Si tout est OK on passe à la mise à jour de l'état de connexion pour notre interface dynamique
        dispatch(login(username));
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
