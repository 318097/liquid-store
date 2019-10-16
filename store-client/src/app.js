import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/layout/header.component';
import Home from './components/home.component';
import Auth from './components/auth/auth.component';

import './app.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Auth} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
