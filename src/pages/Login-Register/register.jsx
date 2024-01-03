import {
	Link,
	redirect,
	useActionData,
	useNavigate,
	useNavigation,
} from "react-router-dom";
import "./register.css";

import { useEffect } from "react";
import img from "../../assets/Images/Signup.jpg";
import LoginForm from "../../components/form";
import { registerUser } from "../../utils/Auth";

export async function action({ request }) {
	const data = await request.formData();
	const user = {
		email: data.get("email"),
		username: data.get("username"),
		password: data.get("password"),
	};

	try {
		await registerUser(user);
	} catch (error) {
		console.log(error);
		const msg = error.config.data;

		return { msg };
	}

	return redirect("/home");
}

export function Register() {
	const navigate = useNavigate();
	const status = useNavigation().state;

	// //! EDIT THIS AFTERWARDS :
	useEffect(() => {
		if (localStorage.getItem("token")) return navigate(-1);
	});
	// //!

	const errMsg = useActionData();
	return (
		<div className="box">
			<div className="container1">
				<div className="img-c">
					<img src={img} className="img" alt="To be loaded" />
				</div>
				<div className="login-container">
					<h1>Register</h1>
					{errMsg && (
						<div>
							{errMsg.statusText && (
								<span>
									<strong>{errMsg.statusText}</strong> :{" "}
								</span>
							)}
							<span>{errMsg.msg}</span>
							{errMsg.status && (
								<pre>
									<strong>Status Code</strong> : {errMsg.status}
								</pre>
							)}
						</div>
					)}
					<LoginForm loginOrRegister={"Register"} status={status} />
					<div>
						<span className="text">Already have an account? </span>
						<Link to="/login">
							<strong style={{ textDecoration: "underline" }}>Sign in</strong>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
