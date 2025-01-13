// import de la fonction qui permet de configurer les différents reducers du slice auth
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	username: "",
	isLogged: false,
};

const authSlice = createSlice({
	name: "auth", // nom du slice qui permettra à redux de le retrouver
	initialState, // état initial du slice
	reducers: { // fonctions qui permettent de mettre à jour l'état du slice
        // state est l'état actuel du slice
        // action est l'action qui est envoyée par le composant (via le dispatch), la donnée se trouve dans action.payload
		login(state, action) {
            // action.payload = "John";
            // RTK utilise immer pour gérer l'immuabilité de l'état on peut donc modifier l'état directement
			state.username = action.payload; // setUsername(action.payload)
			state.isLogged = true;
		},
		logout(state) {
			state.username = "";
			state.isLogged = false;
		},
		updateUsername(state, action) {
			console.log(state);
			state.username = action.payload;
		},
	},
});

// export des actions reducers pour pouvoir les utiliser dans les composants
export const { login, logout, updateUsername } = authSlice.actions;
// export du reducer pour pouvoir le combiner avec les autres reducers dans le store
export default authSlice.reducer;
