import React, { useState, useRef } from "react";
import ReactLoading from "react-loading";
import DropZone from "./DropZone";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import {
	RequestCont,
	Row,
	InputCol,
	SuccessfulReq,
	LoaderCont,
	ErrorReq,
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
	Button,
} from "./Styling/Content";
import { ThemeAccent, ErrorColor, ThemeSub2, ThemeSub } from "./Styling/Theme";

export default function RequestForm() {
	const twoWeekMin = new Date(Date.now() + 12096e5); //new date 14 days from current date
	const formData = new FormData();
	const requestRef = useRef();
	const nameRef = useRef();
	const dateRef = useRef();
	const sizeRef = useRef({});
	const [required, setRequired] = useState(false);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [showSizeMenu, setShowSizeMenu] = useState(false);
	const [selectedSize, setSelectedSize] = useState(undefined);
	const [selectedDate, setSelectedDate] = useState(undefined);
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		description: "",
	});

	const datePickerStyle = {
		height: "30px",
		maxWidth: nameRef.current && nameRef.current.offsetWidth + "px",
		borderRadius: "3px",
		backgroundColor: ThemeAccent,
		border: `1px solid ${
			required && selectedDate === undefined ? ErrorColor : ThemeSub
		}`,
		margin: "5px",
		padding: "5px 10px",
		color: ThemeSub2,
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		let key = process.env.REACT_APP_Trello_key;
		let token = process.env.REACT_APP_Trello_token;
		let idList = process.env.REACT_APP_Trello_idList;
		let name = inputs.name;
		let url = `https://api.trello.com/1/cards?key=${key}&token=${token}&idList=${idList}&pos=top`;
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
		if (name) {
			url += `&name=${name}`;
		}
		if (desc) {
			url += `&desc=${desc}`;
		}
		if (inputs.name && inputs.email && selectedDate && selectedSize) {
			fetch(url, {
				method: "POST",
			})
				.then((data) => data.json())
				.then((response) => {
					if (formData.get("file")) {
						let url = `https://api.trello.com/1/cards/${response.id}/attachments?key=${key}&token=${token}`;
						fetch(url, {
							method: "POST",
							body: formData,
						})
							.then((data) => data.json)
							.then(() => {
								setLoading(false);
								setSuccess(true);
							});
					}
				})
				.catch((error) => {
					console.log(error);
					setError(true);
				});
		} else {
			setLoading(false);
			setRequired(true);
		}
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
			<Text align={"center"}>
				Thank you so much for your request, We will contact you shortly to
				confirm details. Have a great day!
			</Text>
			<Button
				onClick={() => {
					setSelectedDate(undefined);
					setSelectedSize(undefined);
					setSuccess(false);
				}}
			>
				Make a new Request
			</Button>
		</SuccessfulReq>
	) : error ? (
		<ErrorReq>
			<Title color={ErrorColor}>Error</Title>
			<Text color={ErrorColor} align={"center"}>
				Something went wrong, please try again.
			</Text>
			<Button
				onClick={() => {
					setSelectedDate(undefined);
					setSelectedSize(undefined);
					setError(false);
				}}
			>
				Make a new Request
			</Button>
		</ErrorReq>
	) : (
		<div>
			{loading && (
				<LoaderCont
					top={() =>
						requestRef.current && requestRef.current.getBoundingClientRect().top
					}
				>
					<ReactLoading
						type={"bars"}
						color={ThemeAccent}
						height={50}
						width={50}
					/>
				</LoaderCont>
			)}
			<RequestCont
				onSubmit={(e) => handleSubmit(e)}
				onClick={() => setShowSizeMenu(false)}
				ref={requestRef}
			>
				<Title>Contact us</Title>
				<Row justifyContent={"space-around"}>
					<InputCol>
						<Label>Name</Label>
						<InputField
							type="text"
							name="name"
							placeholder={required && inputs.name === "" ? "Required" : "Name"}
							required={required && inputs.name === ""}
							onChange={(e) => handleChange(e.target)}
						/>
					</InputCol>
					<InputCol>
						<Label>Email</Label>
						<InputField
							type="email"
							name="email"
							ref={nameRef}
							placeholder={
								required && inputs.email === "" ? "Required" : "Email"
							}
							required={required && inputs.email === ""}
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
							required={required && selectedSize === undefined}
							onClick={(e) => {
								e.stopPropagation();
								setShowSizeMenu(!showSizeMenu);
							}}
						>
							{required && selectedSize === undefined
								? "Required"
								: selectedSize || "Size"}
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
						<DatePickerField
							name="date"
							ref={dateRef}
							placeholderText={
								required && selectedDate === undefined
									? "Required"
									: "Click to select a date"
							}
							required={required && selectedDate === undefined}
							minDate={twoWeekMin}
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
		</div>
	);
}
