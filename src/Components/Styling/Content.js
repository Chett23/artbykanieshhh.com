import styled from "styled-components";
import { ThemeSub2 } from './Theme'

export const Title = styled.h1`
  font-size: ${props => props.size || '2em'}
  margin: ${props => props.margin || '0.67em 0 '}
  color: ${props => props.color || ThemeSub2}
  font-weight: ${props => props.weight || 'bold'}
  text-align: center;
`;