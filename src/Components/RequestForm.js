import React from "react";

import { RequestCont, Row, InputCol } from "./Styling/Containers";
import { InputField, Label, TextAreaField } from "./Styling/Content";

export default function RequestForm() {
  const twoWeekMin = new Date(Date.now() + 12096e5).toISOString().split("T")[0]; //new date 14 days from current date


	const handleSubmit = (e) => {
		e.preventDefault()
	}

  return (
    <RequestCont onSubmit={e => handleSubmit(e)}>
      <h2>Contact us</h2>
      <Row justifyContent={"space-around"}>
        <InputCol>
          <Label>Name</Label>
          <InputField type="text" name="name" placeholder="Name" />
        </InputCol>
        <InputCol>
          <Label>Email</Label>
          <InputField type="text" name="email" placeholder="Email" />
        </InputCol>
      </Row>
      <Row justifyContent={"space-around"}>
        <InputCol>
          <Label>Size</Label>
          <InputField type="text" name="size" placeholder="Size" />
        </InputCol>
        <InputCol>
          <Label>Date needed</Label>
          <InputField
            type="date"
            name="date"
            placeholder="mm/dd/yyyy"
            min={twoWeekMin}
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
			<InputField type="submit" />
    </RequestCont>
  );
}
