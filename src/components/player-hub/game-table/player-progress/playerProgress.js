import { pick } from 'lodash';
import React from 'react';
import './playerProgress.scss';
let id = Math.random(Math.ceil() * 100);

function PlayerProgress(props) {
  console.log('players in room', props.localGameState);
  // console.log(pick(props.localGameState, ['userName', 'level']));
  return (
    <>
      <div id="">
      {
      props.currentPlayers.map((player) =>
      <li key={id}>{player.username}</li>
      ) 
      }
      </div>
    </>
  );
}

export default PlayerProgress;

