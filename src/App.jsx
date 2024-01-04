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
import Layout from "./layout/Layout";
import Home, { homeLoader } from "./pages/Home/home";
import Landing from "./pages/Landing/landing";
import {
	Login,
	action as loginAction,
	loginLoader,
} from "./pages/Login-Register/login";
import {
	Register,
	action as registerAction,
} from "./pages/Login-Register/register";
import GenQuiz from "./pages/pdfquiz/genquiz";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Landing />} />
			<Route
				path="/login"
				element={<Login />}
				action={loginAction}
				loader={loginLoader}
			/>
			<Route path="/register" element={<Register />} action={registerAction} />
			<Route path="/home" element={<Layout />}>
				<Route index element={<Home />} loader={homeLoader} />
				<Route path="gen-quiz" element={<GenQuiz />} />
				<Route path="create-quiz" element={<GenQuiz />} />
			</Route>
		</>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
