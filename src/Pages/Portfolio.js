import React from 'react'


import { MainCol, PictureMainCont, PictureMainRow } from '../Components/Styling/Containers'
import { Title } from '../Components/Styling/Content'



export default function Portfolio() {
  return (
    <MainCol alignItems='center' justifyContent='space-around'>
      <Title>Portfolio</Title>
      <PictureMainRow>
        <PictureMainCont>Picture</PictureMainCont>
        <PictureMainCont>Picture</PictureMainCont>
        <PictureMainCont>Picture</PictureMainCont>
      </PictureMainRow>
    </MainCol>
  )
}
