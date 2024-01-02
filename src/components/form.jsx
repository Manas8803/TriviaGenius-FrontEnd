import { Form } from "react-router-dom";

export default function LoginForm({ status, loginOrRegister }) {
	return (
		<>
			<Form className="login-form" method="post" replace>
				<input type="email" name="email" placeholder="Email Address" />
				<input
					type="password"
					name="password"
					placeholder="Password"
					autoComplete="off"
				/>
				<button
					disabled={status === "submitting"}
					style={{ backgroundColor: status === "submitting" ? "grey" : "" }}
				>
					{status === "submitting" ? "Submitting..." : loginOrRegister}
				</button>
			</Form>
		</>
	);
}
