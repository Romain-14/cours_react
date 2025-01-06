import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";


function App() {

	return (
        <>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                </nav>
            </header>

            {/* ROUTES */}
            <Routes>

                <Route path="/" element={<Home />} />

            </Routes>

            <footer>
                <p>&copy; Romain Fournier - 2025</p>
            </footer>
        
        </>
    )
}

export default App;
