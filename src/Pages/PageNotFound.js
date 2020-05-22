import React from "react";
import logoMain from "../Resourses/logo_main.png";

import { MainCol, TitleRow, LogoLink } from "../Components/Styling/Containers";
import { Title, MainLogo, Text } from "../Components/Styling/Content";

export default function Portfolio() {
	return (
		<MainCol alignItems="center" justifyContent="space-around">
			<TitleRow>
				<LogoLink to='/'>
					<MainLogo src={logoMain} alt="" width={"250px"} />
				</LogoLink>
			</TitleRow>
			<Title size="4em">Oops</Title>
			<Text>Looks like that page wasnt valid. Please try again.</Text>
		</MainCol>
	);
}
