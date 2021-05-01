/*Shows song, artist, and time*/
import React, {useRef, useState} from 'react'
//Let's import everything Fontawesome related
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'; //imports fa-icons

const Player = ({currentSong, isPlaying, setIsPlaying}) =>{
    //We need the html reference to our audio
    const audioRef = useRef(null);
    //Event Handleres
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }
    }

    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration});
    }

    //State
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null
    })
    return(
        <div className="player">
            <h1>Player</h1>

            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>

            <div className="play-icon">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay}/>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>

            <audio 
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler} 
                ref={audioRef} 
                src={currentSong.audio}
            ></audio>

        </div>
    );
};

export default Player;