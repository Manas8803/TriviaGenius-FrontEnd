import { isLoggedIn } from "../../utils/Auth";

export async function loader({ request }) {
	await isLoggedIn(request);
	const data = "data"; //& API CALL
	console.log("HELL");
	console.log(localStorage.getItem("file"));
    return data;
}

export default function PlayQuiz() {
	return <>PLAYQUIZ</>;
}
