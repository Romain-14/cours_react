import { useContext } from "react";
import { AuthContext } from "../App/AuthProvider";


function Home() {
	const { user } = useContext(AuthContext);

	return (
		<main id="home">
			<p>Hello { user.isLogged ? user.username : "guest"} !</p>

            <section>
                <h2>Products</h2>
              
                
            </section>
		</main>
	);
}

export default Home;
