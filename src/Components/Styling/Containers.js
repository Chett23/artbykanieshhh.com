import styled from "styled-components";
import { ThemeMain, ThemeSub2, ThemeSub } from './Theme'

export const MainCont = styled.div`
  background-color: ${ThemeMain};
  height: 100vh;
  width: 100vw;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${ props => props.justifyContent || 'flex-start'};
  align-items: ${ props => props.alignItems || 'stretch'};
  max-width: ${ props => props.width || '100%'};
  min-width: ${ props => props.width || '100%'};
  max-height: ${ props => props.height || '100%'}; 
  min-height: ${ props => props.height || '100%'}; 
  overflow: ${props => props.overFlow || 'visible'}
`;

export const MainCol = styled(Col)`
  overflow-y: auto;
`;
export const PictureMainCol = styled(Col)`
  min-width: 33%;
  min-height: 300px;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${ props => props.justifyContent || 'flex-start'};
  align-items: ${ props => props.alignItems || 'stretch'};
  max-width: ${ props => props.width || '100%'};
  min-width: ${ props => props.width || '100%'};
  max-height: ${ props => props.height || '100%'}; 
  min-height: ${ props => props.height || '100%'}; 
`;

export const TitleRow = styled(Row)`
  justify-content: center;
  align-items: center;
  min-height: 800px;
`;

export const PictureMainRow = styled(Row)`
  justify-content: space-around
`;

export const MenuButtonCont = styled.div`
  border: 1px solid ${ThemeSub2}
  border-radius: 5px;
  width: 35px;
  height: 35px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  cursor: pointer;
  top: 25px;
  left: 25px
  &:hover {
    background-color: ${ThemeSub}
  }
`;