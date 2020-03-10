import React, { useState } from "react";
import FileDrop from "./FileDrop";

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
	const [formData, setFormData] = useState({});
	const [showSizeMenu, setShowSizeMenu] = useState(false);
	const handleSubmit = e => {
		e.preventDefault();
		console.log(formData);
	};

	const handleChange = target => {
		setFormData({ ...formData, [target.name]: target.value });
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
						onChange={e => handleChange(e.target)}
					/>
				</InputCol>
				<InputCol>
					<Label>Email</Label>
					<InputField
						type="email"
						name="email"
						placeholder="Email"
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
						value={formData.size}
						onClick={e => {
							e.stopPropagation();
							setShowSizeMenu(!showSizeMenu);
						}}
					/>
					{showSizeMenu && (
						<SizeMenu>
							<SizeMenuItem
								onClick={() => setFormData({ ...formData, size: "5 X 7" })}
							>
								5 X 7
							</SizeMenuItem>
							<SizeMenuItem
								onClick={() => setFormData({ ...formData, size: "8 X 10" })}
							>
								8 X 10
							</SizeMenuItem>
							<SizeMenuItem
								onClick={() => setFormData({ ...formData, size: "9 X 12" })}
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
						selected={formData.date}
						calendarClassName="calendarClass"
						onChange={date => handleChange({ name: "date", value: date })}
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
			<Row>
				<Label>Upload a Picture</Label>
				<FileDrop onFilesAdded={console.log} />
			</Row>
			<Row justifyContent={"center"}>
				<InputCol width={"95%"}>
					<InputField type="submit" />
				</InputCol>
			</Row>
		</RequestCont>
	);
}
