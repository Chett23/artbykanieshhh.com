import React, { useEffect, useState } from "react";
import InstagramEmbed from "react-instagram-embed";

import logoMain from "../Resourses/logo_main.png";
import {
	MainCol,
	PortfolioCont,
	TitleRow,
	LogoRow
} from "../Components/Styling/Containers";
import { Title, MainLogo, LogoButton } from "../Components/Styling/Content";
import { FaceBook, Instagram } from "../Components/Logos";
import { useFetch } from "../Utils/useFetch";

export default function Portfolio() {
	const [postData, setPostData] = useState();
	const { data, loading, error } = useFetch(
		process.env.REACT_APP_MAIN_FETCH_URL
	);

	useEffect(() => {
		if (!loading && !error && !data.error) {
			setPostData(data);
		}
	}, [data, loading, error, postData]);

	return (
		<MainCol alignItems="center" justifyContent="space-around">
			<TitleRow>
				<MainLogo src={logoMain} alt="" />
			</TitleRow>
			<Title>Portfolio</Title>
			<PortfolioCont>
				{postData &&
					postData.map(post => (
						<InstagramEmbed
							key={post.id}
							style={{ padding: "15px" }}
							url={post.permalink}
							maxWidth={400}
						/>
					))}
			</PortfolioCont>
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
					href="https://www.instagram.com/artbykanieshhh/"
					target="_blank"
					rel="noopener"
					title="@artbykanieshhh on instagram"
				>
					<Instagram />
				</LogoButton>
			</LogoRow>
		</MainCol>
	);
}
