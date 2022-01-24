import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import withWaypoint from '../../common/withWayPoint';
import player1 from '../../images/player1.png';
import player2 from '../../images/player2.png';
import versus from '../../images/vs.png';
import './name.css';

function Name(props:Props) {
  const [playerName1, setPlayerName1] = useState<string>('');
  const [playerName2, setPlayerName2] = useState<string>('');

  return (
    <div className='name-wrapper'>
      <div className='name-content'>
        <div className='child left-child'>
          <div className='child-content left-child-content'>
            <div className={props.fade ? 'name-heading fadeInUp' : 'name-heading'}>
              Player 1
            </div>
            <input 
              className={props.fade ? 'left-input fadeRight' : 'left-input'}
              type='text' 
              placeholder='Enter Your Name' 
              onChange={(e) => setPlayerName1(e.target.value)}
            />
          </div>
          <img 
            className={props.fade ? 'player-img1 zoom-in-zoom-out' : 'player-img1'} 
            src={player1} alt="player-cartoon" 
          />
        </div>
        <div className='child right-child'>
          <div className='child-content right-child-content'>
            <div className={props.fade ? 'name-heading fadeInUp' : 'name-heading'}>
              Player 2
            </div>
            <input 
              className={props.fade ? 'right-input fadeLeft' : 'right-input'}
              type='text' 
              placeholder='Enter Your Name' 
              onChange={(e) => setPlayerName2(e.target.value)}
            />
          </div>
          <img 
            className={props.fade ? 'player-img2 zoom-in-zoom-out' : 'player-img1'} 
            src={player2} alt="player-cartoon" 
          />
        </div>
        <div className='versus-img-wrapper'>
          <img 
            className={props.fade ? 'versus-img zoom-in-zoom-out' : 'versus-img'} 
            src={versus} 
            alt="versus" 
          />
        </div>
        <Link 
          to="/game"
          state={{
            playerName1,
            playerName2
          }}
          className={props.fade ? 'to-game fadeInUp' : 'to-game'}
        >
          <button className='play-btn-name'> Play </button>
        </Link>
      </div>
    </div>
  );
}

type Props = {
  fade: boolean;
}

export default withWaypoint(Name);