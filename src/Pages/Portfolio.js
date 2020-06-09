import React, { useEffect, useState } from "react";
import InstagramEmbed from "react-instagram-embed";

import logoMain from "../Resourses/logo_main.png";
import {
	MainCol,
	PortfolioCont,
	TitleRow,
	LogoRow,
	LogoLink,
} from "../Components/Styling/Containers";
import { MainLogo, LogoButton } from "../Components/Styling/Content";
import { FaceBook, Instagram } from "../Components/Logos";
import { useFetch } from "../Utils/useFetch";

export default function Portfolio() {
	const [postData, setPostData] = useState();
	const { data, loading, error } = useFetch(
		`https://graph.instagram.com/me/media?fields=id,username,permalink,media_url&access_token=${process.env.REACT_APP_Access_token}`
	);

	useEffect(() => {
		if (!loading && !error && data && !data.error) {
			setPostData(data);
		}
	}, [data, loading, error, postData]);

	return (
		<MainCol alignItems="center" justifyContent="space-around">
			<TitleRow>
				<LogoLink to="/">
					<MainLogo src={logoMain} alt="" width={"250px"} />
				</LogoLink>
			</TitleRow>
			<PortfolioCont>
				{postData &&
					postData.map((post) => (
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
