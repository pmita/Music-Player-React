/*Shows song, artist, and time*/
import React from 'react';

const LibrarySong = ({audioRef, songs,song,setCurrentSong, id, isPlaying}) =>{
    /*------------Event Hndleres---------*/
    const songSelectHandler = () => {
        setCurrentSong(song);
        //audioRef.current.play();
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
        <div onClick={songSelectHandler} className="library-song">
            <img src={song.cover} alt={song.name}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;