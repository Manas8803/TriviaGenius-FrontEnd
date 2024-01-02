import axios from "axios";
import { redirect } from "react-router-dom";

//! Deployed Auth Service URL :
const baseUrl = "";

export async function isLoggedIn() {
	const isAuthenticated = localStorage.getItem("token");
	if (!isAuthenticated) throw redirect("/login");
}

//! CHANGE THIS AFTER GETTING DEPLOYED LINK
export async function loginUser(user) {
	// const { data } = await axios.post(`${baseUrl}authentication/login`, user);
	// const { token } = data;

	localStorage.setItem("token", "test"); //! SET Token to token(variable) here.
	return "data"; //! RETURN DATA(Variable)
}

export async function registerUser(user) {
	// const { data } = await axios.post(`${baseUrl}authentication/register`, user);
	// const { token } = data;
	localStorage.setItem("token", token); //! SET Token to token(variable) here.
	return "data"; //! RETURN DATA(Variable)
}
//!
