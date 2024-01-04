import React, { useState } from "react";
import PropTypes from "prop-types";

const FileUploadButton = ({ label, onFileUpload }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleFileUpload = (event) => {
    // Perform any necessary file upload logic here
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
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>
              &times;
            </span>
            <input type="file" onChange={handleFileUpload} />
          </div>
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
