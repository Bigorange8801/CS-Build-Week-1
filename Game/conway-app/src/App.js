import React from 'react';
import Game from './components/Game';
import Description from './components/Description';
import Rules from './components/Rules';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1 style={{color:"palegoldenrod"}}>Conway's Game of Life</h1>
      <div className="topHalf">
      <div className="gameDiv">
      <Game />
      </div>
      <div className="ruleDiv">
        <Rules />
      </div>
      </div>
      <div className="descripDiv">
        <Description />
      </div>
    </div>

  );
}

export default App;