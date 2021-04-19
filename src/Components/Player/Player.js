import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import './Player.css';


const Player = (props) => {

    const { name, image, salary, specialty, team, teamLogo } = props.player;
    
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="team-player-container">
            <div className="team-player">
                <div>
                    <img className="img" src={image} alt={props.player} />
                </div>
                <div className="player-info">
                    <h3>{name}</h3>
                    <p>Team: {team}</p>
                    <img className="team-logo" src={teamLogo} alt=""/>
                    <p> Specialty: {specialty}</p>
                    <p>Salary: ${salary}</p>
                    <Button className="success" onClick={() => handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faHandPointRight} />Add Player</Button>
                </div>
            </div>
           
        </div>
    );
};

export default Player;