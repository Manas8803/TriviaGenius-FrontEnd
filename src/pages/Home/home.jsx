import { Link } from "react-router-dom";
import FileIcon from "../../components/file-icon";
import PencilIcon from "../../components/pencil-icon";
import "../../styles/tailwind.css";
import { isLoggedIn } from "../../utils/Auth";

export async function homeLoader({ request }) {
	await isLoggedIn(request);
	return "";
}

export default function Home() {
	return (
		<div
			key="1"
			className="flex flex-col min-h-screen bg-gradient-to-r from-[#f9b726] via-[#f5823a,#f25742,#ee4556] to-[#ec4787]"
		>
			<main className="flex-1 flex flex-col items-center justify-center text-center p-4 lg:p-6">
				<h1 className="text-4xl font-bold text-white mb-6">
					Welcome to Trivia Genius
				</h1>
				<p className="text-lg font-medium text-white mb-12">
					Choose your way to create a quiz
				</p>
				<div className="flex flex-col sm:flex-row gap-6">
					<Link
						className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg text-center text-black"
						to="gen-quiz"
						relative
					>
						<FileIcon className="h-12 w-12 mb-4 " />
						<h2 className="text-2xl font-bold mb-2 ">Generate Quiz from PDF</h2>
						<p className="text-base font-medium ">
							Upload a PDF and we'll generate a quiz for you.
						</p>
					</Link>
					<Link
						className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg text-center text-black"
						href="create-quiz"
						relative
					>
						<PencilIcon className="h-12 w-12 mb-4" />
						<h2 className="text-2xl font-bold mb-2">Create Custom Quiz</h2>
						<p className="text-base font-medium">
							Create your own quiz on any topic.
						</p>
					</Link>
				</div>
				<div className="mt-12">
					<h2 className="text-2xl font-bold text-white mb-6">
						Popular Quizzes
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white rounded-lg shadow-lg">
							<div className="p-4">
								<h3 className="text-xl font-bold">Science Quiz</h3>
							</div>
							<div className="p-4">
								<p className="text-base font-medium">
									Test your knowledge in various science topics.
								</p>
							</div>
						</div>
						<div className="bg-white rounded-lg shadow-lg">
							<div className="p-4">
								<h3 className="text-xl font-bold">History Quiz</h3>
							</div>
							<div className="p-4">
								<p className="text-base font-medium">
									How well do you know your history?
								</p>
							</div>
						</div>
						<div className="bg-white rounded-lg shadow-lg">
							<div className="p-4">
								<h3 className="text-xl font-bold">Geography Quiz</h3>
							</div>
							<div className="p-4">
								<p className="text-base font-medium">
									Explore the world with this geography quiz.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
			<footer className="px-4 lg:px-6 h-14 flex items-center justify-center text-white">
				<p className="text-sm font-medium">
					© 2024 Trivia Genius. All rights reserved.
				</p>
			</footer>
		</div>
	);
}

function Card() {
	return <></>;
}
