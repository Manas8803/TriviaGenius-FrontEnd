import { Link } from "react-router-dom";
import BrainIcon from "./brain-icon";
import UserIcon from "./user-icon";

export default function NavBar() {
	return (
		<header className="px-4 lg:px-6 h-14 flex items-center bg-[#354a60] text-white">
			<Link className="flex items-center justify-center" href="#">
				<BrainIcon className="h-6 w-6" />
				<span className="ml-2 text-lg font-semibold">Trivia Genius</span>
			</Link>
			<nav className="ml-auto flex gap-4 sm:gap-6">
				<Link
					className="text-sm font-medium hover:underline underline-offset-4"
					href="#"
				>
					Home
				</Link>
				<Link
					className="text-sm font-medium hover:underline underline-offset-4"
					href="#"
				>
					About Us
				</Link>
				<Link className="ml-4" href="#">
					<UserIcon className="h-6 w-6" />
				</Link>
			</nav>
		</header>
	);
}
