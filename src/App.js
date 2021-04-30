import React from 'react';
//Import styles
import './styles/app.scss';
//Importing components
import Player from './components/Player';
import Song from './components/Song';

function App() {
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song />
      <Player />
      
    </div>
  );
}

export default App;
