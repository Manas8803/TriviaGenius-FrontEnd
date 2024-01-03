import { Link } from "react-router-dom";
import CurvedlineChart from "../../../components/curved-linechart";

export default function Hero() {
	return (
		<section className="w-full py-8 sm:py-18 md:py-28 lg:py-18 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl">
								Test Your Knowledge
							</h1>
							<p className="max-w-[600px] text-lg text-white md:text-xl">
								Dive into our fun and challenging quizzes. Learn something new
								every day!
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Link
								className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
								to="/home"
							>
								Start Playing
							</Link>
						</div>
					</div>
					<div className="mx-auto aspect-video rounded-xl sm:w-full lg:order-last">
						<CurvedlineChart className="w-full aspect-[4/3]" />
					</div>
				</div>
			</div>
		</section>
	);
}
