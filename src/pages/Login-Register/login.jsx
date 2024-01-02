import {
	Link,
	redirect,
	useActionData,
	useNavigate,
	useNavigation,
} from "react-router-dom";

import { useEffect } from "react";
import { isLoggedIn, loginUser } from "../../utils/Auth";
import LoginForm from "../../components/form";

export async function action({ request }) {
	const data = await request.formData();
	const user = {
		email: data.get("email"),
		password: data.get("password"),
	};

	try {
		await loginUser(user);
	} catch (error) {
		console.log(error);
		const {
			status,
			statusText,
			data: { msg: msg },
		} = error.response;

		return { status, msg, statusText };
	}

	return redirect("/home");
}

export function Login() {
	const navigate = useNavigate();
	const status = useNavigation().state;

	//! EDIT THIS AFTERWARDS :
	// useEffect(() => {
	// 	if (isLoggedIn) return navigate(-1);
	// });
	//!

	const message = useActionData();
	return (
		<div className="login-container">
			<h1>Login</h1>
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
			<LoginForm loginOrRegister={"Login"} status={status} />
			<Link to="/register">Don't have an account?</Link>
		</div>
	);
}
