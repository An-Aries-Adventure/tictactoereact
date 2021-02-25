import './App.css';
import React from 'react';
import Board from './components/board';
import Game from './components/game';
import Sqaure from './components/square';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <a>Tic Tac Toe</a>
        </div>
      </header>
      <br/>
      <div>
        <Game/>
      </div>
    </div>
  );
}

export default App;
