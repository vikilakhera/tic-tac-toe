import { Link } from "react-router-dom";

function Modal(props: Props) {
  return (
    <div className={props.fade ? 'winner-modal zoom-in-zoom-out' : 'winner-modal'} >
      <div className={props.fade ? 'modal-content zoom-in-zoom-out' : 'modal-content'}>
        <div className='winning-msg'> {props.winner} </div>
        <div className="modal-btns">
          <Link className="homepage-btn-wrapper" to="/">
            <button className="play-btn-name">Go to Homepage</button>
          </Link>
          <div className="play-again-btn-wrapper">
            <button className="play-btn-name" onClick={props.playAgain} >Play Again</button>
          </div>
        </div>
      </div>
    </div>
  )
}

type Props = {
  winner: string;
  playAgain: () => void;
  fade: boolean;
}

export default Modal;