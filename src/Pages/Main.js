import React, { useState, useEffect } from "react";
import { useFetch } from "../Utils/useFetch";

import {
  MainCol,
  PictureMainCont,
  PictureMainRow,
  TitleRow,
  FeedRow,
  RequestCont
} from "../Components/Styling/Containers";
import logoMain from "../Resourses/logo_main.png";

export default function Main() {
  const [postData, setPostData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const { data, loading, error } = useFetch(
    "https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,thumbnail_url,timestamp,children&access_token=IGQVJYWjNhUTViX0Y0dzE0N0x4TDh0c0ltUTlxUUU2MUMyZAzdUaVR4OEVzMDdLSFJ2Ul9EdWZAzXzBjRzZA3UEFFdmZAYUXJQSTNiWlRfY0hSR0RmV1kzWXVDTGZAaMnJ0QXNqM0F1aU9n"
  );

  useEffect(() => {
    let tempFavs;
    if (!loading && !error && !data.error) {
      tempFavs = data.data.filter(
        post =>
          post.id === "17900327341417651" ||
          post.id === "17862358330647480" ||
          post.id === "17842116844910981"
      );
      setPostData(data.data);
      setFavorites(tempFavs);
    }
  }, [data, loading, error]);

  return (
    <MainCol>
      <TitleRow>
        <img src={logoMain} alt="" />
      </TitleRow>
      <PictureMainRow>
        {favorites.map(fav => (
          <PictureMainCont>
            <div
              style={{
                backgroundColor: "#fff",
                color: "#6B7D7D",
                fontSize: ".5em"
              }}
            >
              <h5>@artbykanieshh</h5>
            </div>
            <img style={{ maxWidth: "75%" }} src={fav.media_url} alt="" />
          </PictureMainCont>
        ))}
      </PictureMainRow>
      <FeedRow>
        {postData.map(post => {
          if (post.children) {
            fetch(
              `https://graph.instagram.com/17900327341417651/children?fields=id,media_url&access_token=IGQVJYWjNhUTViX0Y0dzE0N0x4TDh0c0ltUTlxUUU2MUMyZAzdUaVR4OEVzMDdLSFJ2Ul9EdWZAzXzBjRzZA3UEFFdmZAYUXJQSTNiWlRfY0hSR0RmV1kzWXVDTGZAaMnJ0QXNqM0F1aU9n`,
              {
                method: "GET"
              }
            ).then(data => {
              console.log(data.body);
              Array.isArray(data) &&
                data.map(post => (
                  <PictureMainCont>
                    <img
                      style={{ maxWidth: "100%" }}
                      src={post.media_url}
                      alt=""
                    />
                  </PictureMainCont>
                ));
            });
          }
          return (
            <PictureMainCont key={post.id}>
              <img style={{ maxWidth: "100%" }} src={post.media_url} alt="" />
            </PictureMainCont>
          );
        })}
      </FeedRow>
      <RequestCont></RequestCont>
    </MainCol>
  );
}
