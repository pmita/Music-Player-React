import React, {useState} from 'react';
//Import styles
import './styles/app.scss';
//Importing components
import Player from './components/Player';
import Song from './components/Song';
//ImportUtility bd 
import data from './utility_db';

function App() {
  //Let's create our State
  const [songs, useSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={currentSong}/>
      <Player />
      
    </div>
  );
}

export default App;
