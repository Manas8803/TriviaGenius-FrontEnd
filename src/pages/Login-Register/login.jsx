import { useEffect } from "react";
import {
	Link,
	redirect,
	useActionData,
	useLoaderData,
	useNavigate,
	useNavigation,
} from "react-router-dom";
import img from "../../assets/Images/Login.jpg";
import LoginForm from "../../components/form";
import { loginUser } from "../../utils/Auth";
import "./login.css";

export function loginLoader({ request }) {
	return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
	const data = await request.formData();
	const path = new URL(request.url).searchParams.get("redirectTo") || "/home";
	const user = {
		username: data.get("username"),
		password: data.get("password"),
	};

	try {
		await loginUser(user);
	} catch (error) {
		console.log(error);
		// const {
		// 	status,
		// 	statusText,
		// 	data: { msg: msg },
		// } = error.response;

		return "status";
	}

	return redirect(`${path}`);
}

export function Login() {
	const navigate = useNavigate();
	const status = useNavigation().state;

	// //! EDIT THIS AFTERWARDS :
	useEffect(() => {
		if (localStorage.getItem("token")) return navigate(-1);
	});
	// //!

	const errMsg = useActionData();
	const message = useLoaderData();
	return (
		<div className="box">
			<div className="container1">
				<div className="login-container">
					<h1>Login</h1>
					{message &&
						(message.startsWith("You") ? (
							<h3
								style={{ padding: "0", marginTop: "0", marginBottom: "1rem" }}
								className="red"
							>
								{message}
							</h3>
						) : (
							<h3
								style={{ padding: "0", marginTop: "0", marginBottom: "1rem" }}
								className="green"
							>
								{message}
							</h3>
						))}
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
					<LoginForm loginOrRegister={"Login"} status={status} />
					<div>
						<span className="text">Don't have an account? </span>
						<Link to="/register">
							<strong style={{ textDecoration: "underline" }}>Sign up</strong>
						</Link>
					</div>
				</div>
				<div className="img-c">
					<img src={img} className="img1" alt="To be loaded" />
				</div>
			</div>
		</div>
	);
}
