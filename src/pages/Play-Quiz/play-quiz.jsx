import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useFile } from "../../FileContext";
import Card from "../../components/card";
import { isLoggedIn } from "../../utils/Auth";
import { genQuiz } from "../../utils/GenQuiz";

export async function loader(url) {
	await isLoggedIn(url.request);
	sessionStorage.setItem("correctAnswersCount", 0);
	sessionStorage.setItem("unAnswersCount", 0);
	return "";
}

export default function PlayQuiz() {
	const [qCounter, setQCounter] = useState(0);
	const navigate = useNavigate();
	const [qstring, setQstring] = useState();
	const [loading, setLoading] = useState(false);

	const { fileDataURL } = useFile();

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const data = await genQuiz(fileDataURL);
			setLoading(false);
			setQstring(data);
		}

		fetchData();
	}, []);

	function handleNextQuestion() {
		setQCounter((prevCounter) => prevCounter + 1);
	}

	function extractQuestions(qstring) {
		qstring = qstring.replace("**", "");
		const ques = qstring.split("\n\n\n");
		const set = [];
		for (let i = 0; i < ques.length; i++) {
			let data = ques[i];
			data = data.replace("**", "");
			data = data.replace("\n\n", "\n");
			const questionArray = data.split("\n");
			const question = questionArray[0];
			let answerOptions, correctAnswer;
			if (questionArray[questionArray.length - 1] === "") {
				answerOptions = questionArray.slice(1, questionArray.length - 2);
				correctAnswer = questionArray[questionArray.length - 2];
			} else {
				answerOptions = questionArray.slice(1, questionArray.length - 2);
				correctAnswer = questionArray[questionArray.length - 1];
			}
			correctAnswer = correctAnswer.replace("Answer: ", "");
			const obj = {
				ques: question,
				options: answerOptions,
				correctAnswer: correctAnswer,
			};

			set.push(obj);
		}
		return set;
	}

	function renderCards() {
		if (qstring) {
			const questions = extractQuestions(qstring);
			console.log(questions);
			if (qCounter < questions.length) {
				return (
					<Card
						question={questions[qCounter]}
						setQCounter={setQCounter}
						qCounter={qCounter}
						handleNextQuestion={handleNextQuestion}
					/>
				);
			} else {
				//! Handle end of quiz : NAVIGATE TO RESULTS PAGE
				return navigate("/home/result");
			}
		}
	}

	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-r from-[#f9b726] via-[#f5823a,#f25742,#ee4556] to-[#ec4787] items-center justify-center ">
			{loading ? (
				<h1 style={{ fontSize: "3rem" }}>Generating Quiz...</h1>
			) : (
				renderCards()
			)}
		</div>
	);
}

function Loader() {
	return (
		<div className="spinner-container1">
			<div className="spinner1"></div>
		</div>
	);
}
