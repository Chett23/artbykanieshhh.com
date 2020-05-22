import React from "react";

import logoMain from "../Resourses/logo_main.png";
import {
	MainCol,
	LogoRow,
	TitleRow,
	Row,
	Col,
	LogoLink,
	PricingRow,
	PricingCol,
} from "../Components/Styling/Containers";
import {
	Title,
	MainLogo,
	LogoButton,
	PricingText,
	Text,
} from "../Components/Styling/Content";
import { FaceBook, Instagram } from "../Components/Logos";

export default function Portfolio() {
	return (
		<MainCol alignItems="center" justifyContent="space-around">
			<TitleRow>
				<LogoLink to="/" >
					<MainLogo src={logoMain} alt="" width={"250px"} />
				</LogoLink>
			</TitleRow>
			<PricingRow>
				<PricingCol width="30%">
					<Title>Sizing</Title>
					<Col>
						<Row justifyContent={"space-between"}>
							<PricingText>5 X 7</PricingText>
							<PricingText>$40</PricingText>
						</Row>
						<Row justifyContent={"space-between"}>
							<PricingText>8 X 10</PricingText>
							<PricingText>$50</PricingText>
						</Row>
						<Row justifyContent={"space-between"}>
							<PricingText>9 X 12</PricingText>
							<PricingText>$60</PricingText>
						</Row>
					</Col>
					<Text size={".5em"} align="center">
						prices start for 2 people
					</Text>
				</PricingCol>
				<PricingCol width="30%">
					<Title>Add-ons</Title>
					<Col>
						<Row justifyContent={"space-between"}>
							<PricingText>Each additional person</PricingText>
							<PricingText>$5</PricingText>
						</Row>
						<Row justifyContent={"space-between"}>
							<PricingText>Background</PricingText>
							<PricingText>$10</PricingText>
						</Row>
						<Row justifyContent={"space-between"}>
							<PricingText>Something else in mind?</PricingText>
							<PricingText>Contact us</PricingText>
						</Row>
					</Col>
				</PricingCol>
			</PricingRow>
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
