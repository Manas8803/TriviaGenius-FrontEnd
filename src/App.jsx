//* Library :
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

//* CSS :
import "./App.css";

//* Components :
import Landing from "./pages/Landing/landing";
import Home from "./pages/Home/home";
import { Login, action as loginAction } from "./pages/Login-Register/login";
import {
	Register,
	action as registerAction,
} from "./pages/Login-Register/register";
import Layout from "./layout/Layout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Landing />} />
			<Route path="/login" element={<Login />} action={loginAction} />
			<Route path="/register" element={<Register />} action={registerAction} />
			<Route path="/home" element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
		</>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
