import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/tailwind.css";

const FileUploadButton = ({ label, onFileUpload }) => {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleButtonClick = () => {
		setModalOpen(true);
	};

	const handleFileUpload = (event) => {
		const uploadedFile = event.target.files[0];
		onFileUpload(uploadedFile);
		setModalOpen(false);
	};

	return (
		<div>
			<button className="mt-4" onClick={handleButtonClick}>
				{label}
			</button>

			{isModalOpen && (
				<div className="flex flex-row items-center justify-center">
					<span
						className="close flex ml-auto"
						onClick={() => setModalOpen(false)}
					>
						&times;
					</span>
					<input
						type="file"
						className="flex ml-auto"
						onChange={handleFileUpload}
					/>
				</div>
			)}
		</div>
	);
};

FileUploadButton.propTypes = {
	label: PropTypes.string.isRequired,
	onFileUpload: PropTypes.func.isRequired,
};

export default FileUploadButton;
