import { redirect, useNavigate } from "react-router";
import FileUploadButton from "./button";
import { isLoggedIn } from "../../utils/Auth";
import UploadIcon from "../../components/upload-icon";

export async function loader({ request }) {
  await isLoggedIn(request);
  return "";
}

export default function GenQuiz() {
  const navigate = useNavigate();
  const handleFileUpload = (file) => {
    console.log("File uploaded:", file);
    if (!file) {
      alert("Please upload a file to continue");
      return;
    }
    localStorage.setItem("file", file);
  };

  return (
    <div
      key="1"
      className="flex flex-col min-h-screen bg-gradient-to-r from-[#f9b726] via-[#f5823a,#f25742,#ee4556] to-[#ec4787]"
    >
      <main className="flex-1 flex flex-col items-center justify-center text-center p-4 lg:p-6">
        <h1 className="text-4xl font-bold text-white mb-6">
          Generate Quiz from PDF
        </h1>
        <p className="text-lg font-medium text-white mb-12">
          Upload a PDF and we'll generate a quiz for you.
        </p>
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg text-center">
          <UploadIcon className="h-12 w-12 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Upload Your PDF</h2>
          <p className="text-base font-medium">
            Click the button below to upload your PDF.
          </p>
          <FileUploadButton
            label="Upload PDF"
            onFileUpload={handleFileUpload}
          />
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
