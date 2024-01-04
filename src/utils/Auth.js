import axios from "axios";
import { redirect } from "react-router-dom";

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

export async function loginUser(user) {
	const { data } = await axios.post(`${baseUrl}/Auth/Login/`, user);
	const { token } = data;

	localStorage.setItem("token", token);
	return data;
}

export async function registerUser(user) {
	const { data } = await axios.post(`${baseUrl}/Auth/Register/`, user);
	return data;
}
