import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 h1>Hello React!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code>を編集したら保存する。
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
