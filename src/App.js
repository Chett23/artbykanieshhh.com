import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main'
import Portfolio from './Pages/Portfolio'
import Request from './Pages/Request'
import Pricing from './Pages/Pricing'
import { MainCont, MenuButtonCont } from './Components/Styling/Containers'
import { Hamburger } from './Components/Logos';

function App() {
  return (
    <MainCont>
      <MenuButtonCont>
        <Hamburger />
      </MenuButtonCont>
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
