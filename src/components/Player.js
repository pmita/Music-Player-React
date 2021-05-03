/*Shows song, artist, and time*/
import React, {useEffect} from 'react';
//Let's import everything Fontawesome related
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'; //imports fa-icons

const Player = ({audioRef, currentSong, setCurrentSong, isPlaying, setIsPlaying, setSongInfo, songInfo, songs, setSongs}) =>{
    //UseEffect section
    useEffect( () => {
        const newSongs = songs.map( song => {
            if (song.id === currentSong.id){
                return {...song,active: true};
            } else {
                return {...song,active: false};
            }
        });
        setSongs(newSongs);
    }, [currentSong]);
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
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward'){
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]); //To reset once we reach the last array cell
        }
        if(direction === 'skip-back'){
            if((currentIndex -1) % songs.length === -1){
                await setCurrentSong( songs.length -1 );
                if (isPlaying) { audioRef.current.play();}
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]); //To reset once we reach the first array cell
        }
        if (isPlaying) { audioRef.current.play();}
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
                <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
            </div>

            <div className="play-icon">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>


        </div>
    );
};

export default Player;