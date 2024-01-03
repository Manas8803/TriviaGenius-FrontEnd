import { Link } from "react-router-dom";
import LightbulbIcon from "../../components/lightbulb-icon";

export default function Header() {
	// function deleteToken() {
	// 	localStorage.removeItem("token");
	// }
	return (
		<header className="px-4 lg:px-6 h-16 flex items-center">
			<Link className="flex items-center justify-center" to="#">
				<LightbulbIcon className="h-6 w-6 text-yellow-500" />
				<span className="ml-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
					TriviaGenius
				</span>
				{/* <div className="ml-auto ">
					<button onClick={deleteToken}>DELETE</button>
				</div> */}
			</Link>
		</header>
	);
}
