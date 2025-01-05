import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<nav>
				<Link to={"/"}>Home</Link>
				<Link to={"auth/login"}>Login</Link>
			</nav>
		</header>
	);
}

export default Header;
