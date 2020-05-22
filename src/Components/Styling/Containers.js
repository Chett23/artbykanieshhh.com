import styled from "styled-components";
import {
	ThemeMain,
	ThemeSub2,
	ThemeSub,
	ThemeAccent,
	ThemeAccent2,
} from "./Theme";
import { Link } from "react-router-dom";

export const MainCont = styled.div`
	background-color: ${ThemeMain};
	min-height: 100vh;
	width: 100vw;
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${(props) => props.justifyContent || "flex-start"};
	align-items: ${(props) => props.alignItems || "stretch"};
	max-width: ${(props) => props.width || "100%"};
	min-width: ${(props) => props.width || "100%"};
	max-height: ${(props) => props.height || "100%"};
	min-height: ${(props) => props.height || "100%"};
	overflow: ${(props) => props.overFlow || "visible"};
`;

export const InputCol = styled.div`
	display: flex;
	flex-direction: column;
	width: ${(props) => props.width || "45%"};
	max-width: 100%;
	max-height: "40px";
	overflow-y: visible;
	margin: 10px;
`;

export const MainCol = styled(Col)`
	overflow-y: auto;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: ${(props) => props.justifyContent || "flex-start"};
	align-items: ${(props) => props.alignItems || "stretch"};
	max-width: ${(props) => props.width || "100%"};
	min-width: ${(props) => props.width || "100%"};
	max-height: ${(props) => props.height || "100%"};
	min-height: ${(props) => props.height || "100%"};
`;

export const TitleRow = styled(Row)`
	justify-content: center;
	align-items: center;
	margin: 25px auto;
	${(props) => props.height && `height: ${props.height}`}
`;

export const LogoRow = styled(Row)`
	justify-content: center;
	height: auto;
	padding: 25px 0;
`;

export const FavoritePostsRow = styled.div`
	display: flex;
	max-width: 90%;
	place-self: center;
	justify-content: center;
	flex-wrap: wrap;

	@media screen and (max-width: 625px) {
		max-width: 75%;
		min-width: 75%;
		margin: 0;
	}
`;

export const MenuButtonCont = styled.form`
  border: 1px solid ${ThemeSub2}
  border-radius: 5px;
  width: 35px;
  height: 35px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  cursor: pointer;
  top: 25px;
  left: ${(props) => (props.showSideBar ? "275px" : "25px")};
  &:hover {
    background-color: ${ThemeSub}
  }
`;

export const SideBar = styled.div`
  position: fixed;
  z-index: 1000;
  width: ${(props) => (props.showSideBar ? "250px" : "0px")};
  height: 100vh;
  transition: width: 2s;
  background-color: ${ThemeSub};
  box-shadow: 2px 2px 15px ${ThemeSub2};
`;

export const SideBarContentCont = styled(Col)`
	justify-content: space-between;
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	font-weight: bold;
	font-size: 1.25em;
	margin: 15px 0;
	padding: 10px;
	color: ${ThemeAccent2};
	border-radius: 5px;
	&:hover {
		background-color: ${ThemeAccent};
	}
`;

export const LogoLink = styled(Link)`
	display: flex;
	justify-content: center;
`;

export const FeedRow = styled.div`
	width: 80%;
	max-width: 85%;
	min-height: 500px;
	overflow-x: auto;
	margin: 50px auto;
	display: flex;
	flex-direction: row;
`;

export const RequestCont = styled.form`
	width: 70%;
	max-width: 85%;
	min-height: 500px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;

export const PricingRow = styled(Row)`
	width: 70%;
	max-width: 70%;
	align-items: center;
	justify-content: space-around;

	@media screen and (max-width: 850px) {
		flex-direction: column;
	}
`;

export const PricingCol = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${(props) => props.justifyContent || "flex-start"};
	align-items: ${(props) => props.alignItems || "stretch"};
	width: 25%;
	min-width: 200px;
	background-color: ${ThemeAccent};
	border-radius: 5px;
	border: 1px solid ${ThemeSub};
	padding: 15px 3%;
	margin: 15px;
`;

export const SuccessfulReq = styled.div`
	width: 70%;
	max-width: 85%;
	min-height: 500px;
	margin: 50px auto;
	display: flex;
	flex-direction: column;
`;

export const ErrorReq = styled(SuccessfulReq)`
	width: 45%;
`;

export const PortfolioCont = styled.div`
	display: flex;
	width: 85%;
	flex-wrap: wrap;
	margin: 0 auto;
	justify-content: center;
`;

export const LoaderCont = styled.div`
	z-index: 1000;
	position: absolute;
	left: calc(50vw - 75px);
	top: ${(props) => props.top && `${props.top + 175}px`};
	background-color: ${ThemeSub};
	height: 50px;
	width: 150px;
	display: flex;
	place-content: center;
	border: 1px solid ${ThemeAccent};
	border-radius: 5px;
`;
