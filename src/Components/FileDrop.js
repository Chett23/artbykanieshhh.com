import React, { useCallback } from "react";
import { CloudUpload } from "./Logos";
import { useDropzone } from "react-dropzone";

const App = ({ onFilesAdded }) => {
	const maxSize = 1048576;

	const onDrop = useCallback(acceptedFiles => {
		onFilesAdded(acceptedFiles);
	}, []);

	const {
		isDragActive,
		getRootProps,
		getInputProps,
		isDragReject,
		acceptedFiles,
		rejectedFiles
	} = useDropzone({
		onDrop,
		accept: ["image/png", "image/jpg", "image/jpeg", "image/heic"],
		minSize: 0,
		maxSize
	});

	const isFileTooLarge =
		rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

	return (
		<div {...getRootProps()} className="Dropzone">
			<CloudUpload />
			<input {...getInputProps()} />
			{!isDragActive && "Click here or drop a file to upload"}
			{isDragActive && !isDragReject && "Drop it like it's hot!"}
			{isDragReject && "File type not accepted, sorry!"}
			{isFileTooLarge && (
				<div className="text-danger mt-2">File is too large.</div>
			)}
		</div>
	);
};

export default App;
