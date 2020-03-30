import React, { useState, useRef } from "react";
// import FileDrop from "./FileDrop";
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
	SizeMenuItem,
	DropDownFieldDiv
} from "./Styling/Content";

export default function RequestForm() {
	const twoWeekMin = new Date(Date.now() + 12096e5); //new date 14 days from current date
	const formData = new FormData();
	const [showSizeMenu, setShowSizeMenu] = useState(false);
	const [selectedSize, setSelectedSize] = useState(undefined);
	const [selectedDate, setSelectedDate] = useState(undefined);
	const sizeRef = useRef({});

	const handleSubmit = e => {
		e.preventDefault();
		fetch(process.env.REACT_APP_server_DEV, {
			method: "POST",
			body: formData
		})
			.then(data => data.json())
			.then(success => console.log(success));
	};

	const handleChange = target => {
		if (formData.get(target.name)) {
			formData.set(target.name, target.value);
		} else {
			formData.append(target.name, target.value);
		}
	};

	const handleFileAdded = e => {
		let file = e.target.files[0];
		console.log(e.target.files);
		formData.append("file", file);
		fetch(process.env.REACT_APP_server_DEV, {
			method: "POST",
			body: formData
		})
			.then(data => data.json())
			.then(success => console.log(success));
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
					<InputField type="text" name="name" placeholder="Name" />
				</InputCol>
				<InputCol>
					<Label>Email</Label>
					<InputField type="email" name="email" placeholder="Email" />
				</InputCol>
			</Row>
			<Row justifyContent={"space-around"} height={"100px"}>
				<InputCol>
					<Label>Size</Label>
					<DropDownFieldDiv
						name="size"
						ref={sizeRef}
						placeholder="Size"
						onClick={e => {
							e.stopPropagation();
							setShowSizeMenu(!showSizeMenu);
						}}
					>
						{selectedSize || "Size"}
					</DropDownFieldDiv>
					{showSizeMenu && (
						<SizeMenu width={sizeRef.current && sizeRef.current.offsetWidth}>
							<SizeMenuItem onClick={() => setSelectedSize("5 X 7")}>
								5 X 7
							</SizeMenuItem>
							<SizeMenuItem onClick={() => setSelectedSize("8 X 10")}>
								8 X 10
							</SizeMenuItem>
							<SizeMenuItem onClick={() => setSelectedSize("9 X 12")}>
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
						selected={selectedDate}
						onChange={date => setSelectedDate(date)}
					/>
				</InputCol>
			</Row>
			<Row justifyContent={"space-around"}>
				<InputCol width={"95%"}>
					<Label>Description</Label>
					<TextAreaField
						name="description"
						placeholder="Please tell us more . . ."
					/>
				</InputCol>
			</Row>
			<Row justifyContent={"space-around"}>
				<InputCol width={"95%"}>
					<DropZone onChange={e => handleFileAdded(e)} />
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
