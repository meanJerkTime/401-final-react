import React from 'react';
import './playerProgress.scss';



function PlayerProgress(props) {
  return (
    <>
      <div id="">
      {
      props.currentPlayers.map((player) =>
      <li>{player.username}</li>
      ) 
      }
      </div>
    </>
  );
}

export default PlayerProgress;

