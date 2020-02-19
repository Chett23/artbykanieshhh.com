import React from "react";

import { RequestCont, Row, InputCol } from "./Styling/Containers";
import { InputField, Label, TextAreaField } from "./Styling/Content";

export default function RequestForm() {
	return (
		<RequestCont>
			<h2>Contact us</h2>
			<Row justifyContent={"space-around"}>
				<InputCol>
					<Label>Name</Label>
					<InputField type="text" name="name" placeholder="Name" />
				</InputCol>
				<InputCol>
					<Label>Email</Label>
					<InputField type="text" name="name" placeholder="Email" />
				</InputCol>
			</Row>
			<Row justifyContent={"space-around"}>
				<InputCol>
					<Label>Size</Label>
					<InputField type="text" name="name" placeholder="Size" />
				</InputCol>
				<InputCol>
					<Label>Date needed</Label>
					<InputField type="text" name="name" placeholder="Date needed" />
				</InputCol>
			</Row>
			<Row justifyContent={"space-around"}>
				<InputCol width={'95%'}>
					<Label>Description</Label>
					<TextAreaField name="description" placeholder="Please tell us more . . ."/>
				</InputCol>
			</Row>
		</RequestCont>
	);
}
