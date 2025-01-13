import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../features/authSlice";

function Header() {
    const dispatch = useDispatch(); 
    const {isLogged} = useSelector((state) => state.auth);
    
	return (
		<header>
			<nav>
				<NavLink to="/" end>
					home
				</NavLink>
				{isLogged ? (
					<>
						<NavLink to="dashboard" end>
							dashboard
						</NavLink>
						<button onClick={()=> dispatch(logout())}>logout</button>
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
