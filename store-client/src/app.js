import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/layout/header.component';
import Home from './components/home.component';
import SignIn from './components/auth/sign-in.component';
import SignUp from './components/auth/sign-up.component';

import './app.scss';

const App = ({ currentUser }) => {
  return (
    <div className="app">
      <Header />
      <div>
        <Switch>
          <Route exact path="/sign-in" render={() => currentUser ? <Redirect to="/" /> : <SignIn />} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps)(App);
