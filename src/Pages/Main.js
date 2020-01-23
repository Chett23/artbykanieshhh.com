import React, { useState, useEffect } from 'react'
import { useFetch } from '../Utils/useFetch'


import { MainCol, PictureMainCol, PictureMainRow, TitleRow, FeedRow, RequestCont } from '../Components/Styling/Containers'
import { Title } from '../Components/Styling/Content'






export default function Main() {
  const [postData, setPostData] = useState([]);
  const { data, loading, error } = useFetch('https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,thumbnail_url,timestamp,children&access_token=IGQVJYWjNhUTViX0Y0dzE0N0x4TDh0c0ltUTlxUUU2MUMyZAzdUaVR4OEVzMDdLSFJ2Ul9EdWZAzXzBjRzZA3UEFFdmZAYUXJQSTNiWlRfY0hSR0RmV1kzWXVDTGZAaMnJ0QXNqM0F1aU9n')

  useEffect(() => {
    error && console.log(error)
    !loading && !error && setPostData(data.data)
  }, [data, loading]);

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
        {
          postData.map(post => {
            if (post.children) {
              fetch(`https://graph.instagram.com/17900327341417651/children?fields=id,media_url&access_token=IGQVJYWjNhUTViX0Y0dzE0N0x4TDh0c0ltUTlxUUU2MUMyZAzdUaVR4OEVzMDdLSFJ2Ul9EdWZAzXzBjRzZA3UEFFdmZAYUXJQSTNiWlRfY0hSR0RmV1kzWXVDTGZAaMnJ0QXNqM0F1aU9n`, {
                method: 'GET'
              })
              .then(data => {
                console.log(data.body)
                Array.isArray(data) && data.map(post => <PictureMainCol><img style={{maxWidth: '100%'}} src={post.media_url} alt='' /></PictureMainCol>)
              })
            }
            return <PictureMainCol key={post.id}><img style={{maxWidth: '100%'}} src={post.media_url} alt='' /></PictureMainCol>
          })
        }
      </FeedRow>
      <RequestCont>

      </RequestCont>

    </MainCol>
  )
}
