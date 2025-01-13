import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Header from "./Layout/Header";
import Dashboard from "./Pages/Dashboard";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="auth/login" element={<Login />} />
				<Route path="dashboard" element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
