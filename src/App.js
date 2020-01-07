import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';

import {MainCont} from './Components/Containers'
import Main from './Pages/Main'

function App() {
  return (
    <MainCont>
     <Switch>
       <Route exact path='/' component={Main} />
     </Switch>
    </MainCont>
  );
}

export default App;
