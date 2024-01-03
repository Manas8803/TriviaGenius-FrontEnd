import axios from "axios";
import { redirect } from "react-router-dom";

//! Deployed Auth Service URL :
const baseUrl = "https://triviageniusauth.onrender.com";

export async function isLoggedIn(request) {
	const isLoggedIn = localStorage.getItem("token");
	const pathname = new URL(request.url).pathname;

	if (!isLoggedIn) {
		throw redirect(
			`/login?message=You must log in first!!&redirectTo=${pathname}`
		);
	}
}

//! CHANGE THIS AFTER GETTING DEPLOYED LINK
export async function loginUser(user) {
	const { data } = await axios.post(`${baseUrl}/Auth/Login`, user);
	const { token } = data;

	localStorage.setItem("token", token); //! SET Token to token(variable) here.
	return data; //! RETURN DATA(Variable)
}

export async function registerUser(user) {
	const { data } = await axios.post(`${baseUrl}/Auth/Register`, user);
	const { token } = data;
	localStorage.setItem("token", token); //! SET Token to token(variable) here.
	return data; //! RETURN DATA(Variable)
}
//!
