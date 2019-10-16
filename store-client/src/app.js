import React from 'react';

import Auth from './components/auth/auth.component';
import Header from './components/layout/header.component';

import './app.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div>
        <Auth />
      </div>
    </div>
  );
};

export default App;
