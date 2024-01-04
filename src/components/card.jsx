export default function Card({ question, qCounter, handleNextQuestion }) {
	const { ques, options, correctAnswer } = question;
	// console.log(ques);
	// console.log(correctAnswer);

	const handleNext = () => {
		//* Check the selected answer
		const selectedAnswer = document.querySelector(
			'input[name="answer"]:checked'
		)?.value;

		//* Unchecking all the radio buttons
		const radioButtons = document.querySelectorAll('input[name="answer"]');
		radioButtons.forEach((button) => (button.checked = false));

		//* Increment on correct answer
		if (correctAnswer.includes(selectedAnswer)) {
			const correctAnswersCount =
				parseInt(sessionStorage.getItem("correctAnswersCount")) || 0;
			sessionStorage.setItem("correctAnswersCount", correctAnswersCount + 1);
		}
		if (selectedAnswer == undefined || !selectedAnswer) {
			const unAnswersCount =
				parseInt(sessionStorage.getItem("unAnswersCount")) || 0;
			sessionStorage.setItem("unAnswersCount", unAnswersCount + 1);
		}
		handleNextQuestion();
	};

	return (
		<main className="container mx-auto px-4 md:px-6">
			<div className="bg-white rounded-lg shadow-lg p-8 md:p-12 lg:p-16">
				<div className="mb-8">
					<h2 className="text-2xl font-bold">Question {qCounter + 1}</h2>
					<p className="mt-2 text-gray-600">{ques}</p>
				</div>
				<form className="space-y-4">
					{options.map((option, index) => (
						<Option key={index} option={option} />
					))}
				</form>
				<div className="mt-8">
					<p className="mt-2 text-sm text-gray-500">
						Question {qCounter + 1} of 10
					</p>
				</div>
				<div className="mt-8">
					<button
						className="w-full py-2 px-4 bg-blue-500 text-white rounded-md"
						onClick={handleNext}
					>
						Next Question
					</button>
				</div>
			</div>
		</main>
	);
}

function Option({ option }) {
	return (
		<div className="flex items-center">
			<input
				className="mr-2"
				id="option1"
				name="answer"
				type="radio"
				value={option}
			/>
			<label
				className="w-full py-2 px-4 border border-gray-300 rounded-md text-left"
				htmlFor="option1"
			>
				{option}
			</label>
		</div>
	);
}
