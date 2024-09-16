import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	email: "",
	phone: "",
	language: {
		language: "English",
		code :'en'
	}, 
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateUser: (state, action) => {
			return { ...state, ...action.payload };
		},
		updateLanguage: (state, action) => {
			state.language = action.payload;
		},
	},
});

export const { updateUser, updateLanguage } = userSlice.actions; // Export updateLanguage
export default userSlice.reducer;
