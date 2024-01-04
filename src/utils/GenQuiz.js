import axios from "axios";

const baseUrl = "https://dae5-59-96-107-31.ngrok-free.app";
export async function genQuiz(file) {
	const formData = new FormData();
	formData.append("pdfFile", file);

	const axiosConfig = {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	};

	console.log("Fetching.....");
	const data = axios
		.post(`${baseUrl}/api/v1/ai`, formData, axiosConfig)
		.then((response) => response.data)
		.catch((error) => console.log("Error:", error));

	console.log(data);
	return data;
}
