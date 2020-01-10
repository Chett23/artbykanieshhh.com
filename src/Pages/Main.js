import React from 'react'


import { Row, Col, MainCol, PictureMainCol, PictureMainRow, TitleRow } from '../Components/Styling/Containers'
import { Title } from '../Components/Styling/Content'



export default function Main() {
  return (
    <MainCol>
      <TitleRow>
        <Title title='logo goes here.' size='3em'>Art By Kanieshhh!</Title>
      </TitleRow>
      <PictureMainRow>
        <PictureMainCol>Picture</PictureMainCol>
        <PictureMainCol>Picture</PictureMainCol>
        <PictureMainCol>Picture</PictureMainCol>
      </PictureMainRow>
    </MainCol>
  )
}
