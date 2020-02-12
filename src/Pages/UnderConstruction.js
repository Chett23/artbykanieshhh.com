import React from "react";

import { MainCol, LogoRow } from "../Components/Styling/Containers";
import { Title, Text } from "../Components/Styling/Content";
import { FaceBook, Instagram } from "../Components/Logos";
import { ThemeSub2 } from "../Components/Styling/Theme";

export default function Portfolio() {
  return (
    <MainCol alignItems="center" justifyContent="space-around">
      <Title title="logo goes here." size="3em">
          Art By Kanieshhh!
        </Title>
        <br/>
      <Title>Gone Hiking...</Title>
      <Text>This site is still being made. Please check back soon.</Text>
      <LogoRow width={'25%'}>
        <a
          href="https://www.facebook.com/artbykanieshhh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaceBook color={ThemeSub2}/>
        </a>
        <a
          href="https://www.instagram.com/artbykanieshhh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram color={ThemeSub2}/>
        </a>
      </LogoRow>
    </MainCol>
  );
}
