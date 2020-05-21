import React, { useState, useEffect } from "react";
import { useFetch } from "../Utils/useFetch";
import InstagramEmbed from "react-instagram-embed";

import RequestForm from "../Components/RequestForm";
import {
	MainCol,
	FavoritePostsRow,
	TitleRow,
	LogoRow,
} from "../Components/Styling/Containers";
import { FaceBook, Instagram } from "../Components/Logos";
import { MainLogo, LogoButton, Text } from "../Components/Styling/Content";
import logoMain from "../Resourses/logo_main.png";

export default function Main() {
	const [postData, setPostData] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const { data, loading, error } = useFetch(
		`https://graph.instagram.com/me/media?fields=id,username,permalink,media_url&access_token=${process.env.REACT_APP_Access_Token}`
	);

	useEffect(() => {
		let tempFavs;
		if (!loading && !error && data && !data.error) {
			tempFavs = data.filter(
				(post) =>
					post.id === "17900327341417651" ||
					post.id === "17862358330647480" ||
					post.id === "17842116844910981"
			);
			setPostData(data);
			setFavorites(tempFavs);
		}
	}, [data, loading, error, postData]);

	return (
		<MainCol>
			<TitleRow>
				<MainLogo src={logoMain} alt="" />
			</TitleRow>
			<FavoritePostsRow>
				{loading ? (
					<Text>Loading . . .</Text>
				) : (
					favorites.map((fav) => (
						<InstagramEmbed
							key={fav.id}
							style={{ padding: "15px" }}
							url={fav.permalink}
							maxWidth={400}
						/>
					))
				)}
			</FavoritePostsRow>
			<RequestForm />
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
					rel="noopener"
					href="https://www.instagram.com/artbykanieshhh/"
					target="_blank"
					title="@artbykanieshhh on instagram"
				>
					<Instagram />
				</LogoButton>
			</LogoRow>
		</MainCol>
	);
}
