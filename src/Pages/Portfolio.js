import React from 'react'


import { MainCol, PictureMainCol, PictureMainRow } from '../Components/Styling/Containers'
import { Title } from '../Components/Styling/Content'



export default function Portfolio() {
  return (
    <MainCol alignItems='center' justifyContent='space-around'>
      <Title>Portfolio</Title>
      <PictureMainRow>
        <PictureMainCol>Picture</PictureMainCol>
        <PictureMainCol>Picture</PictureMainCol>
        <PictureMainCol>Picture</PictureMainCol>
      </PictureMainRow>
    </MainCol>
  )
}
