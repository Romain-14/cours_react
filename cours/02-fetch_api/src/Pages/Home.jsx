import { useEffect, useState } from "react";


function Home() {
    const [datas, setDatas] = useState(null);
    console.log("body component");

    // fetch fantasy
    useEffect(() => {
        console.log("useEffect component");
        fetch("https://openlibrary.org/search.json?q=fantasy&limit=1&offset=0")
        .then(res => res.json())
        .then(res => setDatas(res))
        .catch(err => console.log(err))
        
    }, []);

    return (
        <main id="home">
            {
                console.log("return component" )
            }
            <h2>Soon du contenu</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, error. Velit deleniti iure natus modi ea perspiciatis neque iusto vel doloremque quam quaerat aspernatur eius corrupti commodi repellat aperiam, facere, earum ducimus labore officia! Hic laborum praesentium deserunt eius ad?</p>

            <section>
                <h2>Les données récupérées de jsonplaceholder :</h2>

                {
                    !datas ?
                    <p>Loading ...</p>

                    : 
                    datas.map((data, index) => (
                        <article key={data.id}>
                            <p>index : {index}</p>
                            <p>data.id : {data.id}</p>
                            <p>title : {data.full_url}</p>

                        </article>
                    ))
                   
                }
                
            </section>

        </main>
    )
}

export default Home