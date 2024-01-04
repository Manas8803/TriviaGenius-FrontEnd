import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/tailwind.css";
import { useNavigate } from "react-router";
import "./button.css";
import { genQuiz } from "../../utils/GenQuiz";
import { useFile } from "../../FileContext";

const FileUploadButton = ({ label }) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [isButtonHidden, setButtonHidden] = useState(false);
	const [file, setFile] = useState();

	const handleButtonClick = () => {
		setModalOpen(true);
		setButtonHidden(true);
	};

	const handleFileUpload = (event) => {
		const uploadedFile = event.target.files[0];
		setFile(uploadedFile);
	};

	const navigate = useNavigate();
	const { setFileData } = useFile();
	const redirectfile = () => {
		setButtonHidden(false); // Show the button again when redirecting
		setFileData(file);
		return navigate(`/home/play-quiz`);
	};

	return (
		<div className="button-box">
			<button
				className={`mt-4 label-but ${isButtonHidden ? "hidden" : ""}`}
				onClick={handleButtonClick}
			>
				{label}
			</button>

			{isModalOpen && (
				<>
					<div className="flex flex-row items-center justify-center select-cont">
						<span
							className="close flex input1"
							onClick={() => setModalOpen(false)}
						>
							&times;
						</span>
						<input
							type="file"
							className="flex input1"
							onChange={handleFileUpload}
						/>
					</div>
					<button className="create-but" onClick={redirectfile}>
						Create Quiz
					</button>
				</>
			)}
		</div>
	);
};

FileUploadButton.propTypes = {
	label: PropTypes.string.isRequired,
};

export default FileUploadButton;
