import { useSelector } from "react-redux";



function Home() {
    const user = useSelector((state) => state.auth);

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
