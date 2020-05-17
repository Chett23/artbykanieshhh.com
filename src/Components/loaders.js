import React from "react";
import ReactLoading from "react-loading";

export const FullPageLoader = ({ type, color }) => (
	<div
		style={{
			zIndex: 1000,
			backgroundColor: "#E8EBE4",
			height: "100vh",
			width: "100vw",
			opacity: 0.4,
			display: "flex",
			placeItems: "center",
		}}
	>
		<ReactLoading type={type} color={color} height={667} width={375} />
	</div>
);
