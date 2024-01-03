export default function Features() {
	const featuresData = [
		{
			title: "Multiple Categories",
			description: "Choose from a wide range of categories for your quiz.",
		},
		{
			title: "Leaderboard",
			description:
				"Compete with players from around the world and climb the leaderboard.",
		},
		{
			title: "Quiz Generation",
			description:
				"Import quizzes from PDF and TXT files, and generate quizzes based on specific topics.",
		},
		{
			title: "Custom Quizzes",
			description:
				"Create personalized quizzes using Gemini-pro API. Include answers for a comprehensive quiz experience.",
		},
		{
			title: "Difficulty Levels",
			description: "Choose from different difficulty levels based on content.",
		},
		{
			title: "Customization",
			description:
				"Personalize your experience with custom avatars and themes.",
		},
	];

	return (
		<section className="w-full py-5 md:py-10 lg:py-20 bg-gray-100 dark:bg-gray-250">
			<div className="container px-1 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-gray-100 text-sm dark:bg-gray-250">
							Key Features
						</div>
						<h2 className="text-3xl font-bold  sm:text-5xl">
							Why TriviaGenius?
						</h2>
						<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							TriviaGenius offers a unique and engaging way to test your
							knowledge across a wide range of topics. Here's why you'll love
							it.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-6xl items-center gap-6 py-8 lg:gap-6">
					<div className="flex flex-col justify-center space-y-7">
						{featuresData.map((feature, index) => (
							<Feature
								key={index}
								title={feature.title}
								description={feature.description}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
function Feature({ title, description }) {
	return (
		<div className="grid gap-1">
			<h3 className="text-xl font-bold">{title}</h3>
			<p className="text-gray-500 dark:text-gray-400">{description}</p>
		</div>
	);
}
