import axios from "axios";

const baseUrl = "https://trivia-bckend.onrender.com";
export async function genQuiz(file) {
	const formData = new FormData();
	formData.append("pdfFile", file);

	const axiosConfig = {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	};

	const data = axios
		.post(`${baseUrl}/api/v1/ai`, formData, axiosConfig)
		.then((response) => response.data)
		.catch((error) => console.log("Error:", error));

	return data;
}
