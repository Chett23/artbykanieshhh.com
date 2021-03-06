import React from "react";

import logoMain from "../Resourses/logo_main.png";
import {
	MainCol,
	TitleRow,
	LogoRow,
	LogoLink,
} from "../Components/Styling/Containers";
import { FaceBook, Instagram } from "../Components/Logos";
import { MainLogo, LogoButton } from "../Components/Styling/Content";

import RequestForm from "../Components/RequestForm";

export default function Portfolio() {
	return (
		<MainCol>
			<TitleRow>
				<LogoLink to="/">
					<MainLogo src={logoMain} alt="" width={"250px"} />
				</LogoLink>
			</TitleRow>
			<RequestForm />
			<LogoRow>
				<LogoButton
					rel="noopener"
					href="https://www.facebook.com/artbykanieshhh/"
					target="_blank"
					title="@artbykanieshhh on facebook"
				>
					<FaceBook />
				</LogoButton>
				<LogoButton
					rel="noopener"
					href="https://www.instagram.com/artbykanieshhh/"
					target="_blank"
					title="@artbykanieshhh on instagram"
				>
					<Instagram />
				</LogoButton>
			</LogoRow>
		</MainCol>
	);
}
