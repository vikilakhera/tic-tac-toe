import { Link } from "react-router-dom";

function Modal(props: Props) {
  return (
    <div className='winner-modal' id="modal-1">
      <div className="modal-content">
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
}

export default Modal;