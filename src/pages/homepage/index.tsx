import React from 'react';
import { Link } from 'react-router-dom';
import tic1 from '../../images/tic1.png';
import tic2 from '../../images/tic-tac-toe.png';
import './home.css';
import withWaypoint from '../../common/withWayPoint';

function Home(props:Props) {
  return (
    <div className='home-wrapper'>
      <div className='home-content'>
        <div className={props.fade ? 'tic-tac-toe zoom-in-zoom-out' : 'tic-tac-toe'}> 
          Tic Tac Toe 
        </div>
        <div className='img-wrapper'>
          <img 
            className={props.fade ? 'tic1 zoom-in-zoom-out' : 'tic1'} 
            src={tic1} 
            alt="tic-tac-toe" 
          />
          <img 
            className={props.fade ? 'tic2 fadeInUp' : 'tic2'} 
            src={tic2} 
            alt="tic-tac-toe" 
          />
        </div>
        <Link className={props.fade ? 'link zoom-in-zoom-out' : 'link'} to="/enter-name">
          <button className='play-btn'>
            <p className='btn-text'> Play </p>
          </button>
        </Link>
      </div>
    </div>
  );
}

type Props = {
  fade: boolean;
}

export default withWaypoint(Home);