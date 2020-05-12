import React from "react";

import logoMain from "../Resourses/logo_main.png";
import { MainCol, LogoRow, TitleRow } from "../Components/Styling/Containers";
import { Title, MainLogo, LogoButton } from "../Components/Styling/Content";
import { FaceBook, Instagram } from "../Components/Logos";

export default function Portfolio() {
	return (
		<MainCol alignItems="center" justifyContent="space-around">
			<TitleRow>
				<MainLogo src={logoMain} alt="" />
			</TitleRow>
			<Title>Pricing</Title>
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
					href="https://www.instagram.com/artbykanieshhh/"
					target="_blank"
					rel="noopener"
					title="@artbykanieshhh on instagram"
				>
					<Instagram />
				</LogoButton>
			</LogoRow>
		</MainCol>
	);
}
