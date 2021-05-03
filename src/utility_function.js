import React from 'react';

//We can do specific export instead of exporting everything by default
export const playAudio = (isPlaying, audioRef) => {
    if( isPlaying ){
        const playPromise = audioRef.current.play();
        if(playPromise !== undefined){
            playPromise.then( audio => {
                audioRef.current.play();
            })
        }
    }
}
