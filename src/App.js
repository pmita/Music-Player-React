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
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      
    </div>
  );
}

export default App;
