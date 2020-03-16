import React, { useState, useRef } from "react";
import FileDrop from "./FileDrop";
import DropZone from "./DropZone";

import "react-datepicker/dist/react-datepicker.css";

import { RequestCont, Row, InputCol } from "./Styling/Containers";
import {
	InputField,
	Title,
	Label,
	TextAreaField,
	DatePickerField,
	SizeMenu,
	SizeMenuItem
} from "./Styling/Content";

export default function RequestForm() {
	const twoWeekMin = new Date(Date.now() + 12096e5); //new date 14 days from current date
	// const twoWeekMin = new Date(Date.now() + 12096e5).toISOString().split("T")[0]; //new date 14 days from current date
	// const formData = useRef({});
	const formData = new FormData();
	const [showSizeMenu, setShowSizeMenu] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		fetch("http://localhost:8000/upload", {
			method: "POST",
			body: formData
		})
			.then(data => data.json())
			.then(success => console.log(success));
	};

	const handleChange = target => {
		console.log(target);
		if (formData.get(target.name)) {
			console.log(formData.get(target.name));
			formData.set(target.name, target.value);
		} else {
			formData.append(target.name, target.value);
		}
	};

	const handleFileAdded = e => {
		let file = e.target.files[0];
		FormData.append("file", file);
		// let files = formData.current.files || [];
		// files.push(file);
		// console.log(files);
		// formData.current = { ...formData.current, files };
		// console.log(formData.current);
		// formData.current = { ...formData.current, files };
	};

	return (
		<RequestCont
			onSubmit={e => handleSubmit(e)}
			onClick={() => setShowSizeMenu(false)}
		>
			<Title>Contact us</Title>
			<Row justifyContent={"space-around"}>
				<InputCol>
					<Label>Name</Label>
					<InputField
						type="text"
						name="name"
						placeholder="Name"
						value={formData.get("name")}
						onChange={e => handleChange(e.target)}
					/>
				</InputCol>
				<InputCol>
					<Label>Email</Label>
					<InputField
						type="email"
						name="email"
						placeholder="Email"
						value={formData.get("email")}
						onChange={e => handleChange(e.target)}
					/>
				</InputCol>
			</Row>
			<Row justifyContent={"space-around"}>
				<InputCol>
					<Label>Size</Label>
					<InputField
						name="size"
						placeholder="Size"
						value={formData.get("size")}
						onClick={e => {
							e.stopPropagation();
							setShowSizeMenu(!showSizeMenu);
						}}
					/>
					{showSizeMenu && (
						<SizeMenu>
							<SizeMenuItem
								onClick={() => handleChange({ name: "size", value: "5 X 7" })}
							>
								5 X 7
							</SizeMenuItem>
							<SizeMenuItem
								onClick={() => handleChange({ name: "size", value: "8 X 10" })}
							>
								8 X 10
							</SizeMenuItem>
							<SizeMenuItem
								onClick={() => handleChange({ name: "size", value: "9 X 12" })}
							>
								9 X 12
							</SizeMenuItem>
						</SizeMenu>
					)}
				</InputCol>
				<InputCol>
					<Label>Date needed</Label>
					{/* <InputField name="date" type="date" minDate={twoWeekMin} /> */}
					<DatePickerField
						name="date"
						minDate={twoWeekMin}
						placeholderText="Click to select a date"
						calendarClassName="calendarClass"
						selected={formData.get("date")}
						onChange={date => handleChange({ name: "date", value: date })}
					/>
				</InputCol>
			</Row>
			<Row justifyContent={"space-around"}>
				<InputCol width={"95%"}>
					<Label>Description</Label>
					<TextAreaField
						name="description"
						value={formData.get("description")}
						placeholder="Please tell us more . . ."
					/>
				</InputCol>
			</Row>
			<Row justifyContent={"space-around"}>
				<InputCol width={"95%"}>
					<Label>Upload a Picture</Label>
					<DropZone onChange={e => handleFileAdded(e)} />
					{/* <FileDrop onFilesAdded={data => handleFileAdded(data)} /> */}
				</InputCol>
			</Row>
			<Row justifyContent={"center"}>
				<InputCol width={"95%"}>
					<InputField type="submit" />
				</InputCol>
			</Row>
		</RequestCont>
	);
}
