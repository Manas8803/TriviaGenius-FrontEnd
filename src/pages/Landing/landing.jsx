import React from "react";
import Footer from "./footer";
import Header from "./header";
import Features from "./sections/features";
import Hero from "./sections/hero";
import SampleQuiz from "./sections/sample-quiz";

export default function Landing() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
			<Header />
			<main className="flex-1">
				<Hero />
				<Features />
				<SampleQuiz />
			</main>
			<Footer />
		</div>
	);
}
