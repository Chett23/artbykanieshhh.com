import React, { useRef, useState } from "react";
import { CloudUpload } from "./Logos";
import { Label, FileNameText } from "./Styling/Content";

export default function DropZone({ onChange }) {
	const [fileNames, setFileNames] = useState([]);
	const fileInput = useRef();

	const onChangeHandler = event => {
		let names = [...event.target.files].map(file => file.name);
		setFileNames([...fileNames, ...names]);
		onChange(event);
	};

	const openFileInput = () => {
		fileInput.current.click();
	};

	return (
		<div className="Dropzone" onClick={() => openFileInput()}>
			<Label>Click to upload your picture.</Label>
			<CloudUpload />
			<input
				ref={fileInput}
				type="file"
				name="file"
				className="FileInput"
				multiple
				onChange={event => onChangeHandler(event)}
			/>
			{fileNames.map(fileName => (
				<FileNameText key={fileName}>{fileName}</FileNameText>
			))}
		</div>
	);
}
