import './App.css';
import React from 'react';
import Board from './components/board';
import Game from './components/game';
import Sqaure from './components/square';


function App() {
  return (
    <div className='backgroundImage'>
      <header className="backgroundImage-header">
        <div>
        <a>Tic Tac Toe</a>
        </div>
      </header>
      <br/>
      <br/>
      <div className ="gameWrapper">
        <Game/>
      </div>
    </div>
  );
}

export default App;
