import { Await, defer, redirect, useLoaderData } from "react-router";
import { isLoggedIn } from "../../utils/Auth";
import { genQuiz } from "../../utils/GenQuiz";
import { Suspense } from "react";

export async function loader({ request }) {
	await isLoggedIn(request);
	const file = localStorage.getItem("file");
	//! UNCOMMENT THIS CODE AFTERWARDS
	// if (!file) {
	// 	alert("Something went wrong. Please Try again later");
	// 	return redirect("/home/gen-quiz");
	// }
	//!
	localStorage.removeItem("file");
	return defer({ qstring: genQuiz(file) });
}

export default function PlayQuiz() {
	const questionsPromise = useLoaderData();
	function extractQuestions(qstring) {
		qstring = qstring.replace("**", "");

		const ques = qstring.split("\n\n\n");

		const set = [];
		for (let i = 0; i < ques.length; i++) {
			let data = ques[i];

			data = data.replace("**", "");
			data = data.replace("\n\n", "\n");
			const questionArray = data.split("\n");
			// console.log(questionArray);
			const question = questionArray[0];
			let answerOptions, correctAnswer;
			if (questionArray[questionArray.length - 1] === "") {
				answerOptions = questionArray.slice(1, questionArray.length - 2);
				correctAnswer = questionArray[questionArray.length - 2];
			} else {
				answerOptions = questionArray.slice(1, questionArray.length - 1);
				correctAnswer = questionArray[questionArray.length - 1];
			}

			const obj = {
				ques: question,
				ans: answerOptions,
				option: correctAnswer,
			};

			set.push(obj);
		}
		return set;
	}

	function renderCards(qstring) {
		const questions = extractQuestions(qstring);
		return (
			<main className="container mx-auto px-4 md:px-6">
				<div className="bg-white rounded-lg shadow-lg p-8 md:p-12 lg:p-16">
					<div className="mb-8">
						<h2 className="text-2xl font-bold">Question 1</h2>
						<p className="mt-2 text-gray-600">What is the capital of France?</p>
					</div>
					<form className="space-y-4">
						<div className="flex items-center">
							<input
								className="mr-2"
								id="option1"
								name="answer"
								type="radio"
								value="London"
							/>
							<label
								className="w-full py-2 px-4 border border-gray-300 rounded-md text-left"
								htmlFor="option1"
							>
								A. London
							</label>
						</div>
						<div className="flex items-center">
							<input
								className="mr-2"
								id="option2"
								name="answer"
								type="radio"
								value="Paris"
							/>
							<label
								className="w-full py-2 px-4 border border-gray-300 rounded-md text-left"
								htmlFor="option2"
							>
								B. Paris
							</label>
						</div>
						<div className="flex items-center">
							<input
								className="mr-2"
								id="option3"
								name="answer"
								type="radio"
								value="Rome"
							/>
							<label
								className="w-full py-2 px-4 border border-gray-300 rounded-md text-left"
								htmlFor="option3"
							>
								C. Rome
							</label>
						</div>
						<div className="flex items-center">
							<input
								className="mr-2"
								id="option4"
								name="answer"
								type="radio"
								value="Madrid"
							/>
							<label
								className="w-full py-2 px-4 border border-gray-300 rounded-md text-left"
								htmlFor="option4"
							>
								D. Madrid
							</label>
						</div>
					</form>
					<div className="mt-8">
						<p className="mt-2 text-sm text-gray-500">Question 1 of 4</p>
					</div>
					<div className="mt-8">
						<button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md">
							Next Question
						</button>
					</div>
				</div>
			</main>
		);
	}

	return (
		<div
			key="1"
			className="flex flex-row min-h-screen bg-gradient-to-r from-[#f9b726] via-[#f5823a,#f25742,#ee4556] to-[#ec4787] items-center"
		>
			<Suspense fallback={<Loader />}>
				<Await resolve={questionsPromise.qstring}>{renderCards}</Await>
				{/* This function will be called when the component first loads by default*/}
			</Suspense>
		</div>
	);
}

function Loader() {
	return (
		<div className="spinner-container">
			<div className="spinner"></div>
		</div>
	);
}
