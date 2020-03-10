import React from "react";

import logoMain from "../Resourses/logo_main.png";
import { MainCol, TitleRow, LogoRow } from "../Components/Styling/Containers";
import { FaceBook, Instagram } from "../Components/Logos";
import { MainLogo, LogoButton } from "../Components/Styling/Content";

import RequestForm from "../Components/RequestForm";

export default function Portfolio() {
	return (
		<MainCol alignItems="center" justifyContent="space-around">
			<TitleRow>
				<MainLogo src={logoMain} alt="" />
			</TitleRow>
			<RequestForm />
			<LogoRow>
				<LogoButton
					href="https://www.facebook.com/artbykanieshhh/"
					target="_blank"
					rel="@artbykanieshhh on facebook"
				>
					<FaceBook />
				</LogoButton>
				<LogoButton
					href="https://www.instagram.com/artbykanieshhh/"
					target="_blank"
					rel="@artbykanieshhh on instagram"
				>
					<Instagram />
				</LogoButton>
			</LogoRow>
		</MainCol>
	);
}
