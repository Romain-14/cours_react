// fonction qui permet de configurer le store de l'application
// permets de combiner les différents reducers de l'application
// et de les fournir à l'application
import { configureStore } from "@reduxjs/toolkit";
// import du reducer auth
import authReducer from "../features/authSlice";

// configuration du store qui combine les différents reducers et les fournit à l'application
const store = configureStore({
    // on fournit les différents reducers
	reducer: {
        // authReducer est le reducer du authSlice qui gère l'état de connexion de l'utilisateur
        // on lui donne un petit nom pour pouvoir le retrouver plus facilement
		auth: authReducer, 
	},
});

export default store;
