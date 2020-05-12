import styled from "styled-components";
import DatePicker from "react-datepicker";
import { ThemeSub2, ThemeSub, ThemeAccent, ThemeAccent2 } from "./Theme";

export const Title = styled.h1`
  font-size: ${props => props.size || "2em"}
  margin: ${props => props.margin || "0.67em 0 "}
  color: ${props => props.color || ThemeSub2}
  font-weight: ${props => props.weight || "bold"}
  text-align: center;
`;

export const Text = styled.p`
	color: ${props => props.color || ThemeSub2};
	font-size: 1em;
`;

export const FileNameText = styled.p`
	color: ${props => props.color || ThemeSub2};
	font-size: 0.75em;
	font-weight: bold;
	margin: 1px;
`;

export const MainLogo = styled.img`
  min-width: ${props => props.width || "400px"}
  max-width: ${props => props.width || "500px"}
  margin: ${props => props.margin || "25px"};
  
  @media screen and (max-width: 625px) {
    max-width: 75%;
    min-width: 75%;
    margin: 0;
  }
`;

export const Label = styled.span`
	font-weight: bold;
	font-size: 1em;
	margin: 5px;
	color: ${ThemeSub2};
`;

export const InputField = styled.input`
	height: 30px;
	border-radius: 3px;
	border: none;
	margin: 5px;
	color: ${ThemeSub2};
	padding: 5px 10px;
	border: 1px solid ${ThemeAccent};
`;
export const DropDownFieldDiv = styled.div`
	height: 30px;
	min-height: 30px;
	max-height: 30px;
	border-radius: 3px;
	border: none;
	margin: 5px;
	padding: 5px 10px;
	background-color: #fff;
	color: ${ThemeSub2};
	font-size: 0.75em;
	display: flex;
	flex-direction: column;
	justify-content: center;
	cursor: pointer;
	border: 1px solid ${ThemeAccent};
`;

export const DatePickerField = styled(DatePicker)`
	height: 30px;
	width: 95%;
	max-width: 95%;
	border-radius: 3px;
	border: none;
	margin: 5px;
	padding: 5px 10px;
	color: ${ThemeSub2}
`;

export const TextAreaField = styled.textarea`
	border-radius: 3px;
	border: none;
	margin: 5px;
	width: calc(100%-30px);
	height: 155px;
	padding: 10px;
	resize: none;
`;

export const SizeMenu = styled.ul`
	background-color: #ffffff;
	color: ${ThemeSub2};
	width: ${props => props.width + "px"};
	margin: 0 auto;
  border: 1px solid ${ThemeAccent}
	border-radius: 3px;
	padding: 0;
	z-index: 100;
	box-shadow 7px 7px 20px ${ThemeSub2};
`;

export const SizeMenuItem = styled.li`
	list-style: none;
	padding: 10px 20px;
	font-weight: bold;
	font-size: 0.75em;
	&:hover {
		background-color: ${ThemeSub};
	}
`;

export const LogoButton = styled.a`
	margin: 15px;
`;
