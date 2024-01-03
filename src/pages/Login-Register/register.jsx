import {
	Link,
	redirect,
	useActionData,
	useNavigate,
	useNavigation,
} from "react-router-dom";
import "./register.css";

import { useEffect } from "react";
import { isLoggedIn, registerUser } from "../../utils/Auth";
import LoginForm from "../../components/form";
import img from "../../assets/Images/Signup.jpg";
export async function action({ request }) {
	const data = await request.formData();
	const user = {
		email: data.get("email"),
		password: data.get("password"),
		//! ADD OTHER DETAILS
	};

	try {
		await registerUser(user);
	} catch (error) {
		console.log(error);
		const {
			status,
			statusText,
			data: { msg: msg },
		} = error.response;

		return { status, msg, statusText };
	}
	//* You need to set this as dynamic, it should navigate the user to the page they came from.
	return redirect("/home");
}

export function Register() {
	const navigate = useNavigate();
	const status = useNavigation().state;

	//! EDIT THIS AFTERWARDS :
	// useEffect(() => {
	// 	if (isLoggedIn) return navigate(-1);
	// });
	//!

	const message = useActionData();
	return (
		<div className="box">
			<div className="container">
				<div className="img-c">
					<img src={img} className="img" alt="To be loaded" />
				</div>
				<div className="login-container">
					<h1>Register</h1>
					{message && (
						<div>
							<span>
								<strong>{message.statusText}</strong> :{" "}
							</span>
							<span>{message.msg}</span>
							<pre>
								<strong>Status Code</strong> : {message.status}
							</pre>
						</div>
					)}
					<LoginForm loginOrRegister={"Register"} status={status} />
					<div>
						<span className="text">Already have an account? </span>
						<Link to="/register">
							<strong style={{ textDecoration: "underline" }}>Sign in</strong>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
