import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../App/AuthProvider";

function Header() {
    // On consomme le contexte AuthContext pour récupérer l'objet user afin d'utiliser la propriété isLogged pour gérer dynamiquement l'affichage du menu de navigation
	const { user } = useContext(AuthContext);

	return (
		<header>
			<nav>
				<NavLink to="/" end>
					Home
				</NavLink>
				{user.isLogged ? (
					<>
						<NavLink to="dashboard" end>
							dashboard
						</NavLink>
						<button>logout</button>
					</>
				) : (
					<NavLink to="auth/login" end>
						signin
					</NavLink>
				)}
			</nav>
		</header>
	);
}

export default Header;
