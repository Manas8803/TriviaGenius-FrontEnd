import React, { createContext, useContext, useState } from "react";

const FileContext = createContext();

export const FileProvider = ({ children }) => {
	const [fileDataURL, setFileDataURL] = useState(null);

	const setFileData = (dataURL) => {
		setFileDataURL(dataURL);
	};

	return (
		<FileContext.Provider value={{ fileDataURL, setFileData }}>
			{children}
		</FileContext.Provider>
	);
};

export const useFile = () => {
	const context = useContext(FileContext);
	if (!context) {
		throw new Error("useFile must be used within a FileProvider");
	}
	return context;
};
