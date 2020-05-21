import React from "react";

import logoMain from "../Resourses/logo_main.png";

import { MainCol, LogoRow, TitleRow } from "../Components/Styling/Containers";
import { Title, Text, MainLogo } from "../Components/Styling/Content";
import { FaceBook, Instagram } from "../Components/Logos";
import { ThemeSub2 } from "../Components/Styling/Theme";

export default function UnderConstruction() {
  return (
    <MainCol alignItems="center" justifyContent="space-around">
			<TitleRow>
				<MainLogo src={logoMain} alt="" />
			</TitleRow>

      <br />
      <Title>Gone Hiking...</Title>
      <Text>This site is still being made. Please check back soon.</Text>
      <LogoRow width={"25%"}>
        <a
          href="https://www.facebook.com/artbykanieshhh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaceBook color={ThemeSub2} />
        </a>
        <a
          href="https://www.instagram.com/artbykanieshhh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram color={ThemeSub2} />
        </a>
      </LogoRow>
    </MainCol>
  );
}
