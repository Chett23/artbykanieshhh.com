import React, { useRef } from "react";

import { CloudUpload } from "../Components/Logos";

export default function FileDrop(props) {
	const fileInputRef = useRef();

	const onFilesAdded = evt => {
		if (props.disabled) return;
		const files = evt.target.files;
		if (props.onFilesAdded) {
			const array = fileListToArray(files);
			props.onFilesAdded(array);
		}
	};

	const fileListToArray = list => {
		const array = [];
		for (var i = 0; i < list.length; i++) {
			array.push(list.item(i));
		}
		return array;
	};

	const openFileDialog = () => {
		if (props.disabled) return;
		fileInputRef.current.click();
	};

	return (
		<div
			className="Dropzone"
			onClick={openFileDialog}
			style={{ cursor: props.disabled ? "default" : "pointer" }}
		>
			<CloudUpload />
			<input
				ref={fileInputRef}
				className="FileInput"
				type="file"
				multiple
				onChange={onFilesAdded}
			/>
			<span>Upload Files</span>
		</div>
	);
}
