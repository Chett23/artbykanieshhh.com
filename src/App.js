import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

import { Switch, Route } from "react-router-dom";

import Main from "./Pages/Main";
import Portfolio from "./Pages/Portfolio";
import Request from "./Pages/Request";
import Pricing from "./Pages/Pricing";
import PageNotFound from "./Pages/PageNotFound";

import {
  MainCont,
  MenuButtonCont,
  SideBar,
  SideBarContentCont,
  Col,
  LogoRow,
  NavLink
} from "./Components/Styling/Containers";
import { Hamburger, FaceBook, Instagram } from "./Components/Logos";
import logoMain from "./Resourses/logo_main.png";

const NavMenuCol = styled(Col)`
  height: auto;
  align-items: center;
  padding-top: 25px;
`;

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <MainCont className="main" onClick={() => setShowSideBar(false)}>
      <MenuButtonCont
        showSideBar={showSideBar}
        onClick={e => {
          e.stopPropagation();
          setShowSideBar(!showSideBar);
        }}
      >
        <Hamburger />
      </MenuButtonCont>
      <SideBar showSideBar={showSideBar}>
        {showSideBar && (
          <SideBarContentCont>
            <NavMenuCol>
              <img src={logoMain} style={{ maxWidth: "200px", marginBottom: '15px' }} alt="" />
              <NavLink to="/">Home</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/request">Request a Portrait</NavLink>
              <NavLink to="/pricing">Pricing</NavLink>
            </NavMenuCol>
            <LogoRow>
              <a
                href="https://www.facebook.com/artbykanieshhh/"
                target="_blank"
                rel="@artbykanieshhh on facebook"
              >
                <FaceBook />
              </a>
              <a
                href="https://www.instagram.com/artbykanieshhh/"
                target="_blank"
                rel="@artbykanieshhh on instagram"
              >
                <Instagram />
              </a>
            </LogoRow>
          </SideBarContentCont>
        )}
      </SideBar>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/request" component={Request} />
        <Route path="/pricing" component={Pricing} />
        <Route component={PageNotFound} />
      </Switch>
    </MainCont>
  );
}

export default App;
