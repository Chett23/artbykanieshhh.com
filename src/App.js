import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components'


import { Switch, Route } from 'react-router-dom';

import Main from './Pages/Main'
import Portfolio from './Pages/Portfolio'
import Request from './Pages/Request'
import Pricing from './Pages/Pricing'
import { MainCont, MenuButtonCont, SideBar, SideBarContentCont, Col, Row, NavLink } from './Components/Styling/Containers'
import { Title } from './Components/Styling/Content'
import { Hamburger, FaceBook, Instagram } from './Components/Logos';


const LogoRow = styled(Row)`
  justify-content: space-around;
  height: auto;
  padding: 25px 0;
`;

const NavMenuCol = styled(Col)`
 height: auto;
 align-items: center;
 padding-top: 25px;
`;



function App() {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <MainCont class='main' onClick={() => setShowSideBar(false)}>
      <MenuButtonCont showSideBar={showSideBar} onClick={(e) => { e.stopPropagation(); setShowSideBar(!showSideBar) }}>
        <Hamburger />
      </MenuButtonCont>
      <SideBar showSideBar={showSideBar}>
        {showSideBar &&
          <SideBarContentCont>
            <NavMenuCol >
              <NavLink to=''><Title title='logo goes here.' size='1.5em'>Art By Kanieshhh!</Title></NavLink>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/portfolio'>Portfolio</NavLink>
              <NavLink to='/request'>Request a Portrait</NavLink>
              <NavLink to='/pricing'>Pricing</NavLink>
            </NavMenuCol>
            <LogoRow>
              <a href='https://www.facebook.com/artbykanieshhh/'target='_blank'><FaceBook /></a>
              <a href='https://www.instagram.com/artbykanieshhh/'target='_blank'><Instagram /></a>
            </LogoRow>
          </SideBarContentCont>
        }
      </SideBar>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/request' component={Request} />
        <Route path='/pricing' component={Pricing} />
      </Switch>
    </MainCont>
  );
}

export default App;
