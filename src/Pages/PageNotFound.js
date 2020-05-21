import React from "react";
import logoMain from "../Resourses/logo_main.png";
import { Link } from "react-router-dom";

import { MainCol, TitleRow } from "../Components/Styling/Containers";
import { Title, MainLogo, Text } from "../Components/Styling/Content";

export default function Portfolio() {
	return (
		<MainCol alignItems="center" justifyContent="space-around">
			<TitleRow>
				<Link to='/'>
					<MainLogo src={logoMain} alt="" width={"250px"} />
				</Link>
			</TitleRow>
			<Title size="4em">Oops</Title>
			<Text>Looks like that page wasnt valid. Please try again.</Text>
		</MainCol>
	);
}
