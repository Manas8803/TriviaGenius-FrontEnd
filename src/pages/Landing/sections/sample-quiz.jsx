import { Link } from "react-router-dom";

export default function SampleQuiz() {
	return (
		<section className="w-full py-5 md:py-10 lg:py-20">
			<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-6">
				<div className="space-y-2">
					<h2 className="text-3xl font-bold tracking-tighter text-gray-300 md:text-4xl/tight">
						Sample Quiz Questions
					</h2>
					<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						Get a taste of the TriviaGenius experience with these sample
						questions.
					</p>
				</div>
				<div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
					<Link
						className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
						to="/home"
					>
						Try Sample Quiz
					</Link>
				</div>
			</div>
		</section>
	);
}