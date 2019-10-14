import React from 'react';

import Auth from './components/auth/auth.component';

import './app.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        Liquid Store
      </header>
      <div>
        <Auth />
      </div>
    </div>
  );
};

export default App;
