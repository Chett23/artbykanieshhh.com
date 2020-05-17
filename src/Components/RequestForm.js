import React, { useState, useRef } from "react";
// import SmtpService from "../Utils/smtpService";
import DropZone from "./DropZone";

import "react-datepicker/dist/react-datepicker.css";

import { FullPageLoader } from "./loaders";
import {
	RequestCont,
	Row,
	InputCol,
	SuccessfulReq,
	LoadingCont,
} from "./Styling/Containers";
import {
	InputField,
	Title,
	Label,
	TextAreaField,
	DatePickerField,
	SizeMenu,
	SizeMenuItem,
	Text,
	DropDownFieldDiv,
} from "./Styling/Content";
import { ThemeAccent } from "./Styling/Theme";

export default function RequestForm() {
	const twoWeekMin = new Date(Date.now() + 12096e5); //new date 14 days from current date
	const formData = new FormData();
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [inputs, setInputs] = useState({});
	const [showSizeMenu, setShowSizeMenu] = useState(false);
	const [selectedSize, setSelectedSize] = useState(undefined);
	const [selectedDate, setSelectedDate] = useState(undefined);
	const sizeRef = useRef({});

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		//
		// On submit post to trello api to create new card
		// Display success notification.
		//
		let key = process.env.REACT_APP_Trello_key;
		let token = process.env.REACT_APP_Trello_token;
		let idList = process.env.REACT_APP_Trello_idList;
		let name = inputs.name;
		let desc =
			"Email: " +
			inputs.email +
			"%0D" +
			"Date: " +
			selectedDate +
			"%0D" +
			"Size: " +
			selectedSize +
			"%0D" +
			"More Info: " +
			inputs.description;
		let pos = "top";
		fetch(
			`https://api.trello.com/1/cards?key=${key}&token=${token}&idList=${idList}&name=${name}&desc=${desc}&pos=${pos}`,
			{
				method: "POST",
			}
		)
			.then((data) => data.json())
			.then((response) => {
				let url = `https://api.trello.com/1/cards/${response.id}/attachments?key=${key}&token=${token}`;
				fetch(url, {
					method: "POST",
					body: formData,
				})
					.then((data) => data.json)
					.then((response) => {
						setLoading(false);
						setSuccess(true);
					});
			});
	};

	const handleChange = (target) => {
		let newInputs = inputs;
		newInputs[target.name] = target.value;
		setInputs(newInputs);
	};

	const handleFileAdded = async (e) => {
		for (let i = 0; i <= e.target.files.length - 1; i++) {
			formData.append(`file`, e.target.files[i]);
		}
	};

	return success ? (
		<SuccessfulReq>
			<Title>Success</Title>
			<Text>
				Thank you so much for your request, We will contact you shortly to
				confirm details. Have a great day!
			</Text>
			<InputField
				onClick={() => {
					setSelectedDate(undefined);
					setSelectedSize(undefined);
					setSuccess(false);
				}}
				placeholder={"Make a new request"}
			/>
		</SuccessfulReq>
	) : (
		<div>
			{loading ? (
				<FullPageLoader type={"balls"} color={ThemeAccent} />
			) : (
				<RequestCont
					onSubmit={(e) => handleSubmit(e)}
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
								onChange={(e) => handleChange(e.target)}
							/>
						</InputCol>
						<InputCol>
							<Label>Email</Label>
							<InputField
								type="email"
								name="email"
								placeholder="Email"
								onChange={(e) => handleChange(e.target)}
							/>
						</InputCol>
					</Row>
					<Row justifyContent={"space-around"} height={"100px"}>
						<InputCol>
							<Label>Size</Label>
							<DropDownFieldDiv
								name="size"
								ref={sizeRef}
								placeholder="Size"
								onClick={(e) => {
									e.stopPropagation();
									setShowSizeMenu(!showSizeMenu);
								}}
							>
								{selectedSize || "Size"}
							</DropDownFieldDiv>
							{showSizeMenu && (
								<SizeMenu
									width={sizeRef.current && sizeRef.current.offsetWidth}
								>
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
							<DatePickerField
								name="date"
								minDate={twoWeekMin}
								placeholderText="Click to select a date"
								calendarClassName="calendarClass"
								selected={selectedDate}
								onChange={(date) => setSelectedDate(date)}
							/>
						</InputCol>
					</Row>
					<Row justifyContent={"space-around"}>
						<InputCol width={"95%"}>
							<Label>Description</Label>
							<TextAreaField
								name="description"
								placeholder="Please tell us more . . ."
								onChange={(e) => handleChange(e.target)}
							/>
						</InputCol>
					</Row>
					<Row justifyContent={"space-around"}>
						<InputCol width={"95%"}>
							<DropZone onChange={(e) => handleFileAdded(e)} />
						</InputCol>
					</Row>
					<Row justifyContent={"center"}>
						<InputCol width={"95%"}>
							<InputField type="submit" />
						</InputCol>
					</Row>
				</RequestCont>
			)}
		</div>
	);
}
