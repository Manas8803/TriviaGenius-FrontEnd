import React from "react";
import { Form } from "react-router-dom";
import "./form.css";

export default function LoginForm({ status, loginOrRegister }) {
	return (
		<Form className="login-form form" method="post" replace>
			{loginOrRegister === "Login" ? (
				<>
					<input
						type="name"
						name="username"
						placeholder="Username"
						className="inputF"
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						autoComplete="off"
						className="inputF"
					/>
				</>
			) : (
				<>
					<input
						type="text"
						name="username"
						placeholder="Full Name"
						className="inputF"
					/>
					<input
						type="email"
						name="email"
						placeholder="Email Address"
						className="inputF"
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						autoComplete="off"
						className="inputF"
					/>
				</>
			)}
			<button
				disabled={status === "submitting"}
				style={{ backgroundColor: status === "submitting" ? "grey" : "" }}
			>
				{status === "submitting" ? "Submitting..." : loginOrRegister}
			</button>
		</Form>
	);
}
