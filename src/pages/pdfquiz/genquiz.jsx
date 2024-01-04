/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BcDZRiJx4ra
 */
import { Link } from "react-router-dom";

// Your GenQuiz component

import React from "react";
import FileUploadButton from "./button";

export default function GenQuiz() {
  const handleFileUpload = (file) => {
    // Perform any logic with the uploaded file
    console.log("File uploaded:", file);
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

// Your Icon components (BrainIcon, UploadIcon, UserIcon)

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
