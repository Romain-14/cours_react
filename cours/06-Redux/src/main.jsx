import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// le composant Provider permet de fournir le store à l'application
import { Provider } from "react-redux";
// import du store de l'application pour le passer au Provider
import store from "./app/store";

createRoot(document.getElementById("root")).render(
    // Il englobe l'application pour lui fournir le store
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
