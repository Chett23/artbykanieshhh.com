import React, { useState, useEffect } from "react";
import { useFetch } from "../Utils/useFetch";
import InstagramEmbed from "react-instagram-embed";

import RequestForm from "../Components/RequestForm";
import {
	MainCol,
	FavoritePostsRow,
	TitleRow,
	NavLink,
	LogoRow,
	TopBar
} from "../Components/Styling/Containers";
import { FaceBook, Instagram } from "../Components/Logos";
import { MainLogo, LogoButton, Text } from "../Components/Styling/Content";
import logoMain from "../Resourses/logo_main.png";
import logoLetters from "../Resourses/logo_letters.png";


export default function Main() {
	const [postData, setPostData] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [lockedLogo, setLockedLogo] = useState(false)
	const { data, loading, error } = useFetch(
		`https://graph.instagram.com/me/media?fields=id,username,permalink,media_url&access_token=${process.env.REACT_APP_Access_token}`
	);


	const listenScrollEvent = () => {
		if (window.scrollY > 100) {
			setLockedLogo(true)
		} else {
			setLockedLogo(false)
		}
	}

	useEffect(() => {
		let tempFavs;
		if (!loading && !error && data && !data.error) {
			tempFavs = data.filter(
				(post) =>
					post.id === "17852373274839570" ||
					post.id === "17862358330647480" ||
					post.id === "17842116844910981"
			);
			setPostData(data);
			setFavorites(tempFavs);
		}

		window.addEventListener('scroll', listenScrollEvent)

		return () => window.addEventListener('scroll', listenScrollEvent)
	}, [data, loading, error, postData]);

	return (
		<MainCol>

			{
				lockedLogo ?
					<TopBar height={'85px'}>
						<MainLogo src={lockedLogo ? logoLetters : logoMain} alt="" />
					</TopBar> :
					<TitleRow>
						<MainLogo src={lockedLogo ? logoLetters : logoMain} alt="" />
					</TitleRow>
			}

			<TitleRow>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/portfolio">Portfolio</NavLink>
				<NavLink to="/request">Request a Portrait</NavLink>
				<NavLink to="/pricing">Pricing</NavLink>
			</TitleRow>
			<div style={{ height: '2000px' }}></div>
		</MainCol>
	);
}
