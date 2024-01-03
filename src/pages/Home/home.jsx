import { useLoaderData } from "react-router";
import { isLoggedIn } from "../../utils/Auth";

export async function homeLoader({ request }) {
	await isLoggedIn(request);
	console.log("Fetch Intialiazed!");
	return "THIS IS HOME PAGE";
}

export default function Home() {
	const loaderData = useLoaderData();
	return <>{loaderData}</>;
}
