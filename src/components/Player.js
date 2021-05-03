/*Shows song, artist, and time*/
import React from 'react'
//Let's import everything Fontawesome related
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'; //imports fa-icons

const Player = ({audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo}) =>{
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

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    }

    return(
        <div className="player">
            <h1>Player</h1>

            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    type="range" 
                    value={songInfo.currentTime} 
                    min={0} 
                    max={songInfo.duration || 0}
                    onChange={dragHandler}/>
                <p>{getTime(songInfo.duration)}</p>
            </div>

            <div className="play-icon">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>


        </div>
    );
};

export default Player;