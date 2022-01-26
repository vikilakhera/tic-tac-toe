import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getId, gridMap, winningCombosMap } from '.';
import player1img from '../../images/player1.png';
import player2img from '../../images/player2.png';
import "./game.css";
import Modal from './modal';
import withWaypoint from '../../common/withWayPoint';

function Game(props:Props) {
  const location:any = useLocation();
  let iconHandler;
  let divHandler;

  const playerName1:string = location?.state?.playerName1 || 'Billy';
  const playerName2:string = location?.state?.playerName2 || 'Mandy';

  const player1 = useRef<number[]>([]);
  const player2 = useRef<number[]>([]);
  const [checkTurn, setCheckTurn] = useState<boolean>(true);
  const [winner, setWinner] = useState<string>("");

  const handleCheckTurn = (index:number) => {
    if(checkTurn){
      checkTurnConditions(index, player1.current, "times");
    }else{
      checkTurnConditions(index, player2.current, "circle");
    }
  }

  const checkTurnConditions = (index:number, playerArr:number[], iconClass:string) => {
    playerArr.push(index);
    iconHandler = getId(`${iconClass}-${index}`);
    iconHandler!.style.opacity = "1";
    setCheckTurn(prevItem => (!prevItem));
  }

  const checkWinner = () => {
    const hasWinner = winningCombosMap.some(item => {
      if(item.every(e => player1.current.includes(e))){
        setTimeout(() => setWinner(`${playerName1} is winner`), 300);
        return true;
      }
      else if(item.every(e => player2.current.includes(e))){
        setTimeout(() => setWinner(`${playerName2} is winner`), 300);
        return true;
      }
      return false
    })
    if(!hasWinner && player1.current.length >= 5){
      setTimeout(() => setWinner("It's a draw!!!"), 300);
    }
  }

  const handleDisableDiv = (index:number, action:string) => {
    divHandler = getId(`grid-${index}`);
    divHandler!.style.pointerEvents = `${action}`;
  }

  const playAgain = () => {
    clearGrid();
    player1.current = [];
    player2.current = [];
    setWinner('');
    setCheckTurn(true);
  }

  const clearGrid = () => {
    player1.current.map(item => {
      iconHandler = getId(`times-${item}`);
      iconHandler!.style.opacity = "0";
      handleDisableDiv(item, "auto");
    })
    player2.current.map(item => {
      iconHandler = getId(`circle-${item}`);
      iconHandler!.style.opacity = "0";
      handleDisableDiv(item, "auto");
    })
  }

  const handleGridClick = (index:number) => {
    handleCheckTurn(index);
    checkWinner();
    handleDisableDiv(index, "none");
  }

  return (
    <>
      <div className='game-wrapper'>
        <div className='child-1 side-child'>
          <div className='child-1-content side-child-content'>
            <div className={props.fade ? 'player-name fadeRight' : 'player-name'} >
              {playerName1} 
            </div>
            <img 
              className={!checkTurn ? "player1-img" : "player1-img hide-player1-img fast-zoom"}
              src={player1img} 
              alt={`${playerName1} image`} 
            />
          </div>
        </div>
        <div className='child-2'>
          <div className='child-2-content'>
            {
              checkTurn ? (
                <div className={props.fade ? 'turn fadeInUp' : 'turn'} > 
                  {playerName1}'s turn 
                </div>
              ):(
                <div className={props.fade ? 'turn fadeInUp' : 'turn'}> 
                  {playerName2}'s turn 
                </div>
              )
            }
            <div className='grid'>
            {
              gridMap.map((item, index) => (
                <div 
                  key={item}
                  className={props.fade ? 'grid-item zoom-in-zoom-out' : 'grid-item'} 
                  id={`grid-${index}`}
                  onClick={() => handleGridClick(index)}
                >
                  <i id={`times-${item}`} className="fas fa-times"></i>
                  <i id={`circle-${item}`} className="far fa-circle"></i>
                </div>
              ))
            }
            </div>
            <Link className={props.fade ? 'homepage-btn-wrapper fadeInUp':'homepage-btn-wrapper'} to="/">
              <button className="play-btn-name">Quit</button>
            </Link>
          </div>
        </div>
        <div className='child-3 side-child'>
          <div className='child-3-content side-child-content'>
            <div className={props.fade ? 'player-name fadeLeft' : 'player-name'}> 
              {playerName2} 
            </div>
            <img 
              className={checkTurn ? "player2-img" : "player2-img hide-player2-img fast-zoom"}
              src={player2img} 
              alt={`${playerName2} image`} 
            />
          </div>
        </div>
        {
          winner.length ? (
            <Modal winner={winner} playAgain={playAgain} fade={props.fade} />
          ):(
            <></>
          )
        }
      </div>
    </>
  );
}

type Props = {
  fade: boolean
}

export default withWaypoint(Game);