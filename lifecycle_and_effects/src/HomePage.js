import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Projects
        </p>
        <Link to="/timer" className="App-link">Timer</Link>
        <Link to="/chat" className="App-link">Chat</Link>
      </header>
    </div>
  );
}

export default HomePage;