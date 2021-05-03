import React, {useState, useRef} from 'react';
//Import styles
import './styles/app.scss';
//Importing components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
//ImportUtility bd 
import data from './utility_db';

function App() {
  //Let's create our State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
});
const [libraryStatus, setLibraryStatus] = useState(false);

/*Events*/
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration});
  }
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]); //To reset once we reach the last array cell
    if(isPlaying) { audioRef.current.play();}
  }
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player 
        audioRef={audioRef}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library 
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}/>
      
      <audio 
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler} 
          ref={audioRef} 
          src={currentSong.audio}
          onEnded={songEndHandler}
      ></audio>
      
    </div>
  );
}

export default App;
