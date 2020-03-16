import React, { useRef } from "react";
import { CloudUpload } from "./Logos";

export default function DropZone({ onChange }) {
	const fileInput = useRef();
	// const onChangeHandler = event => {
	// 	const data = new FormData();
	// 	data.append("file", event.target.files[0]);
	// 	console.log(data);
	// 	fetch("http://localhost:8000/upload", {
	// 		method: "POST",
	// 		body: data
	// 	}).then(res => {
	// 		// then print response status
	// 		// console.log(res.statusText);
	// 	});
	// };

	const openFileInput = () => {
		fileInput.current.click();
	};

	return (
		<div className="Dropzone" onClick={() => openFileInput()}>
			<CloudUpload />
			<input
				ref={fileInput}
				type="file"
				name="file"
				className="FileInput"
				multiple
				onChange={event => onChange(event)}
			/>
		</div>
	);
}
