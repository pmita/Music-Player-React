/*Shows song, artist, and time*/
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = () =>{
    return(
        <div className="player">
            <h1>Player</h1>

            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>

            <div className="play-icon">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play" size="2x" icon={faPlay}/>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>

        </div>
    );
};

export default Player;