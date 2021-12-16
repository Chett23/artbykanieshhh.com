import React, { useState, useEffect } from "react";
import { useFetch } from "../Utils/useFetch";
import InstagramEmbed from "react-instagram-embed";

import RequestForm from "../Components/RequestForm";
import {
	MainCol,
	FavoritePostsRow,
	ReturnToTopCont,
	TitleRow,
	NavLink,
	LogoRow,
	TopBar
} from "../Components/Styling/Containers";
import { Arrow, FaceBook, Instagram } from "../Components/Logos";
import { MainLogo, LogoButton, Text } from "../Components/Styling/Content";
import logoMain from "../Resourses/logo_main.png";
import logoLetters from "../Resourses/logo_letters.png";


export default function Main() {
	const [postData, setPostData] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [scrolled, setScrolled] = useState(false)
	// const { data, loading, error } = useFetch(
	// 	`https://graph.instagram.com/me/media?fields=id,username,permalink,media_url&access_token=${process.env.REACT_APP_Access_token}`
	// );


	const listenScrollEvent = () => {
		if (window.scrollY > 100) {
			setScrolled(true)
		} else {
			setScrolled(false)
		}
	}

	useEffect(() => {
		// let tempFavs;
		// if (!loading && !error && data && !data.error) {
		// 	tempFavs = data.filter(
		// 		(post) =>
		// 			post.id === "17852373274839570" ||
		// 			post.id === "17862358330647480" ||
		// 			post.id === "17842116844910981"
		// 	);
		// 	setPostData(data);
		// 	setFavorites(tempFavs);
		// }

		window.addEventListener('scroll', listenScrollEvent)

		return () => window.addEventListener('scroll', listenScrollEvent)
	}, []);
	// }, [data, loading, error, postData]);

	return (
		<MainCol>

			<TopBar scrolled={scrolled}>
				<MainLogo src={scrolled ? logoLetters : logoMain} scrolled={scrolled} alt="" />
			</TopBar>

			{scrolled && <ReturnToTopCont
				onClick={e => {
					e.stopPropagation();
					window.scrollTo({
						top: 0,
						behavior: 'smooth' // for smoothly scrolling
				   });
				}}
			>
				<Arrow />
			</ReturnToTopCont>}

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
