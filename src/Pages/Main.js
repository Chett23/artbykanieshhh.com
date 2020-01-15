import React, { useState, useEffect } from 'react'


import { MainCol, PictureMainCol, PictureMainRow, TitleRow, FeedRow, RequestCont } from '../Components/Styling/Containers'
import { Title } from '../Components/Styling/Content'

import { getIBDData } from '../Data/InstagramBasicDisplayFetch'





export default function Main() {
  const [pictureUrls, setPictureUrls] = useState([]);


  const getPictures = () => {
    getIBDData()
      .then(data => {
        setPictureUrls(data)
        console.log(data)
        console.log(pictureUrls)
      })
  }

  useEffect(() => {
    getPictures()
  }, []);

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
      <FeedRow>
        <PictureMainCol style={{ margin: '0 15px' }}>Picture</PictureMainCol>
        <PictureMainCol style={{ margin: '0 15px' }}>Picture</PictureMainCol>
        <PictureMainCol style={{ margin: '0 15px' }}>Picture</PictureMainCol>
        <PictureMainCol style={{ margin: '0 15px' }}>Picture</PictureMainCol>
        <PictureMainCol style={{ margin: '0 15px' }}>Picture</PictureMainCol>
        <PictureMainCol style={{ margin: '0 15px' }}>Picture</PictureMainCol>
        <PictureMainCol style={{ margin: '0 15px' }}>Picture</PictureMainCol>
        <PictureMainCol style={{ margin: '0 15px' }}>Picture</PictureMainCol>
        <PictureMainCol style={{ margin: '0 15px' }}>Picture</PictureMainCol>
        <PictureMainCol style={{ margin: '0 15px' }}>Picture</PictureMainCol>
        <PictureMainCol style={{ margin: '0 15px' }}>Picture</PictureMainCol>
        <PictureMainCol style={{ margin: '0 15px' }}>Picture</PictureMainCol>
        <PictureMainCol style={{ margin: '0 15px' }}>Picture</PictureMainCol>
        <PictureMainCol style={{ margin: '0 15px' }}>Picture</PictureMainCol>
        <PictureMainCol style={{ margin: '0 15px' }}>Picture</PictureMainCol>
        {/* <PictureMainCol style={{margin: '0 15px', backgroundColor: '#6B7D7D', boxShadow: '0 0 15px #E8EBE4'}}>Picture</PictureMainCol>
        <PictureMainCol style={{margin: '0 15px', backgroundColor: '#6B7D7D', boxShadow: '0 0 15px #E8EBE4'}}>Picture</PictureMainCol>
        <PictureMainCol style={{margin: '0 15px', backgroundColor: '#6B7D7D', boxShadow: '0 0 15px #E8EBE4'}}>Picture</PictureMainCol>
        <PictureMainCol style={{margin: '0 15px', backgroundColor: '#6B7D7D', boxShadow: '0 0 15px #E8EBE4'}}>Picture</PictureMainCol>
        <PictureMainCol style={{margin: '0 15px', backgroundColor: '#6B7D7D', boxShadow: '0 0 15px #E8EBE4'}}>Picture</PictureMainCol>
        <PictureMainCol style={{margin: '0 15px', backgroundColor: '#6B7D7D', boxShadow: '0 0 15px #E8EBE4'}}>Picture</PictureMainCol>
        <PictureMainCol style={{margin: '0 15px', backgroundColor: '#6B7D7D', boxShadow: '0 0 15px #E8EBE4'}}>Picture</PictureMainCol>
        <PictureMainCol style={{margin: '0 15px', backgroundColor: '#6B7D7D', boxShadow: '0 0 15px #E8EBE4'}}>Picture</PictureMainCol>
        <PictureMainCol style={{margin: '0 15px', backgroundColor: '#6B7D7D', boxShadow: '0 0 15px #E8EBE4'}}>Picture</PictureMainCol>
        <PictureMainCol style={{margin: '0 15px', backgroundColor: '#6B7D7D', boxShadow: '0 0 15px #E8EBE4'}}>Picture</PictureMainCol>
        <PictureMainCol style={{margin: '0 15px', backgroundColor: '#6B7D7D', boxShadow: '0 0 15px #E8EBE4'}}>Picture</PictureMainCol>
        <PictureMainCol style={{margin: '0 15px', backgroundColor: '#6B7D7D', boxShadow: '0 0 15px #E8EBE4'}}>Picture</PictureMainCol>
        <PictureMainCol style={{margin: '0 15px', backgroundColor: '#6B7D7D', boxShadow: '0 0 15px #E8EBE4'}}>Picture</PictureMainCol>
        <PictureMainCol style={{margin: '0 15px', backgroundColor: '#6B7D7D', boxShadow: '0 0 15px #E8EBE4'}}>Picture</PictureMainCol>
        <PictureMainCol style={{margin: '0 15px', backgroundColor: '#6B7D7D', boxShadow: '0 0 15px #E8EBE4'}}>Picture</PictureMainCol> */}
      </FeedRow>
      <RequestCont>

      </RequestCont>

    </MainCol>
  )
}
