import styled from "styled-components";
import { ThemeSub2 } from "./Theme";

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
  color: ${ThemeSub2}
`;

export const InputField = styled.input`
	height: 30px;
	border-radius: 3px;
	border: none;
	margin: 5px;
	padding: 5px 10px;
`;

export const TextAreaField = styled.textarea`
	border-radius: 3px;
	border: none;
  margin: 5px;
  width: calc(100%-30px);
  height: 155px;
  padding: 5px 10px;
  resize: none;
`;
