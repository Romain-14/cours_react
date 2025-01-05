import { useEffect, useState } from "react";

import Card from "./Components/Card";

function Home() {
	const [datas, setDatas] = useState(null);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20")
			.then((res) => res.json())
			.then((res) => setDatas(res))
			.catch((err) => console.error(err));
	}, []);

	return (
		<main id="home">
			<section>
				<h1>Les données récupérées de jsonplaceholder :</h1>

				{!datas ? (
					<p>Loading ...</p>
				) : (
					datas.map((data) => <Card key={data.id} data={data} />)
				)}
			</section>
		</main>
	);
}

export default Home;
