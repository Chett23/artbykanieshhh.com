import React, { useState, useEffect } from 'react'
import { useFetch } from '../Utils/useFetch'


import { MainCol, PictureMainCol, PictureMainRow, TitleRow, FeedRow, RequestCont } from '../Components/Styling/Containers'
import { Title } from '../Components/Styling/Content'

import { getIBDData } from '../Data/InstagramBasicDisplayFetch'





export default function Main() {
  const [pictureUrls, setPictureUrls] = useState([]);
  const { data, loading } = useFetch('https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=IGQVJVbUxVNVFVdFVqMVhQMlVOZA2l6UEJtanh4M3lxb1NOZAHgtUHlvaTUwYkwweHRnRGdreHR3amZAOblhaY2hNcDBxcXFNakh4bHBXYXIyMlhOMGFzZAWFiSGw0cUQ5S0dSMy1MUkln', {})

  useEffect(() => {
    console.log(data)
  }, [data]);

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
