import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

class TelaPomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    console.log(props);
  }

  // let [countTrabalho, setCountTrabalho] = useState(25);
  // let [countPausa, setCountPausa] = useState(5);
  // let [countSessoes, setCountSessoes] = useState(3);
  render() {
    return (
      <h1> pomodoro</h1>
      // <div className='colMaster'>
      //   <div className='rowNav'>
      //     <h1 className='textNav'>Pomodoro</h1>
      //     <button
      //       className='btnHome'
      //       onClick={() => {
      //         navigate("/");
      //       }}
      //     >
      //       Início
      //     </button>
      //   </div>
      //   <div className='rowPomodoro'>
      //     <div className='colPomodoroLeft'>
      //       <div className='circleOut'>
      //         <div className='circleIn'>{countTrabalho}</div>
      //       </div>
      //     </div>
      //     <div className='colPomodoroRight'>
      //       <p>trabalho</p>
      //       {isPlay ? (
      //         <button
      //           className='btnPlay'
      //           onClick={() => {
      //             isPlay = true;
      //             pauseCount(countTrabalho);
      //           }}
      //         >
      //           <FontAwesomeIcon className='iconPause' icon={faPause} />
      //         </button>
      //       ) : (
      //         <button
      //           className='btnPlay'
      //           onClick={() => {
      //             isPlay = true;
      //             startCount(countTrabalho);
      //           }}
      //         >
      //           <FontAwesomeIcon className='iconPlay' icon={faPlay} />
      //         </button>
      //       )}
      //     </div>
      //   </div>
      //   <h1>
      //     countTrabalho: {countTrabalho}, countPausa: {countPausa},
      //     countSessoes: {countSessoes}
      //   </h1>
      // </div>
    );
  }
}

function startCount(countTrabalho) {
  let duration = 60 * countTrabalho;

  let timer = duration,
    minutes,
    seconds;
  setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector(".circleIn").textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      // isPlay = false;
    }
  }, 1000);
}

function pauseCount(countTrabalho) {}

export default TelaPomodoro;
