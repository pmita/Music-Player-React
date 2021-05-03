/*Shows song, artist, and time*/
import React from 'react';
//Import utilify function
import {playAudio} from '../utility_function';

const LibrarySong = ({audioRef, songs,song,setCurrentSong, id, isPlaying, setSongs}) =>{
    /*------------Event Hndleres---------*/
    const songSelectHandler = () => {
        setCurrentSong(song);
        const newSongs = songs.map( song => {
            if (song.id === id){
                return {...song,active: true};
            } else {
                return {...song,active: false};
            }
        });
        setSongs(newSongs);
        //audioRef.current.play();
        playAudio(isPlaying, audioRef);
        if( isPlaying ){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then( audio => {
                    audioRef.current.play();
                })
            }
        }
    }
    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`} >
            <img src={song.cover} alt={song.name}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;