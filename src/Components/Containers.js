import styled from "styled-components";

export const MainCont = styled.div`
  background-color: #F6B9B9;
  height: 100vh;
  width: 100vw;
`;

export const Col = styled.div.attrs(props => ({

}))`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div.attrs(props => ({

}))`
  display: flex;
  flex-direction: row;
`;
