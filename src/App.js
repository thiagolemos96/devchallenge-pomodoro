import "./App.css";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDown,
  faCircleUp,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  let [isPlay, setIsPlay] = useState(false);
  let [isReset, setIsReset] = useState(true);
  let [display, setDisplay] = useState("00:00");
  let [countTrabalho, setCountTrabalho] = useState(25);
  let [countPausa, setCountPausa] = useState(5);
  let [countSessoes, setCountSessoes] = useState(3);
  let [id, setId] = useState();
  let [arraySessoes, setArraySessoes] = useState([
    { mostrar: true },
    { mostrar: true },
    { mostrar: true },
  ]);
  let [qtdSessoes, setqtdSessoes] = useState(3);
  let [isPauseScreen, setIsPauseScreen] = useState(false);

  return (
    <Routes>
      <Route exact path='/' element={<TelaInicial />} />
      <Route path='/pomodoro' element={<TelaPomodoro />} />
    </Routes>
  );

  function TelaInicial() {
    const navigate = useNavigate();

    return (
      <div className='colMaster'>
        <div className='rowHeader'>
          <h1>Pomodoro</h1>
        </div>

        <div className='rowBody'>
          <div className='colSquare'>
            <div className='rowSquare'>
              <div className='colSquareLeft'>
                <div className='rowUp'>
                  <button
                    className='buttonUp'
                    onClick={() =>
                      setCountTrabalho(
                        (prevCountTrabalho) => prevCountTrabalho + 1
                      )
                    }
                  >
                    <FontAwesomeIcon className='arrowUp' icon={faCircleUp} />
                  </button>
                </div>
                <div className='rowDown'>
                  <button
                    className='buttonDown'
                    onClick={() =>
                      setCountTrabalho((prevCountTrabalho) =>
                        prevCountTrabalho === 0
                          ? prevCountTrabalho
                          : prevCountTrabalho - 1
                      )
                    }
                  >
                    <FontAwesomeIcon
                      className='arrowDown'
                      icon={faCircleDown}
                    />
                  </button>
                </div>
              </div>
              <div className='colSquareRight'>
                <div className='square'>
                  <p className='counter'>{countTrabalho}</p>
                </div>
                <p className='text'>Trabalho</p>
              </div>
            </div>
          </div>
          <div className='colSquare'>
            <div className='rowSquare'>
              <div className='colSquareLeft'>
                <div className='rowUp'>
                  <button
                    className='buttonUp'
                    onClick={() =>
                      setCountPausa((prevCountPausa) => prevCountPausa + 1)
                    }
                  >
                    <FontAwesomeIcon className='arrowUp' icon={faCircleUp} />
                  </button>
                </div>
                <div className='rowDown'>
                  <button
                    className='buttonDown'
                    onClick={() =>
                      setCountPausa((prevCountPausa) =>
                        prevCountPausa === 0
                          ? prevCountPausa
                          : prevCountPausa - 1
                      )
                    }
                  >
                    <FontAwesomeIcon
                      className='arrowDown'
                      icon={faCircleDown}
                    />
                  </button>
                </div>
              </div>
              <div className='colSquareRight'>
                <div className='square'>
                  <p className='counter'>{countPausa}</p>
                </div>
                <p className='text'>Pausa</p>
              </div>
            </div>
          </div>
          <div className='colSquare'>
            <div className='rowSquare'>
              <div className='colSquareLeft'>
                <div className='rowUp'>
                  <button
                    className='buttonUp'
                    onClick={() => {
                      const array = arraySessoes;
                      array.push({ mostrar: true });
                      setArraySessoes((arraySessoes) => (arraySessoes = array));
                      setCountSessoes((countSessoes) => countSessoes + 1);
                    }}
                  >
                    <FontAwesomeIcon className='arrowUp' icon={faCircleUp} />
                  </button>
                </div>
                <div className='rowDown'>
                  <button
                    className='buttonDown'
                    onClick={() => {
                      const array = arraySessoes;
                      array.pop(true);
                      setArraySessoes((arraySessoes) => (arraySessoes = array));
                      setCountSessoes((countSessoes) =>
                        countSessoes === 0 ? countSessoes : countSessoes - 1
                      );
                    }}
                  >
                    <FontAwesomeIcon
                      className='arrowDown'
                      icon={faCircleDown}
                    />
                  </button>
                </div>
              </div>
              <div className='colSquareRight'>
                <div className='square'>
                  <p className='counter'>{countSessoes}</p>
                </div>
                <p className='text'>Sessões</p>
              </div>
            </div>
          </div>
        </div>
        <div className='rowFooter'>
          <button
            className='btnStart'
            onClick={() => {
              setqtdSessoes(countSessoes);
              navigate("/pomodoro");
            }}
          >
            Começar
          </button>
        </div>
      </div>
    );
  }

  function TelaPomodoro() {
    const navigate = useNavigate();

    if (isReset) {
      setIsReset(false);
      setDisplay(countTrabalho + ":00");
      if (countSessoes != arraySessoes.length) {
        let arrayClone = [];
        setqtdSessoes(countSessoes);
        for (var i = 0; i <= countSessoes; i++) {
          arrayClone[i] = { mostrar: true };
        }
        setArraySessoes(arrayClone);
      }

      if (!isPlay && qtdSessoes != countSessoes) {
        let arrayClone = arraySessoes;
        arrayClone[qtdSessoes].mostrar = false;
        setArraySessoes(arrayClone);
        setIsPlay(false);
        pauseCount();
      }
    }

    return (
      <div className='colMaster'>
        <div className='rowNav'>
          <h1 className='textNav'>Pomodoro</h1>
          <button
            className='btnHome'
            onClick={() => {
              setIsReset(true);
              setIsPlay(false);
              pauseCount();
              navigate("/");
            }}
          >
            Início
          </button>
        </div>
        <div>
          {qtdSessoes == 0 ? (
            <div className='rowPomodoro'>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                Parabéns você conseguiu manter o foco muito bem, para ativar o
                foco novamente basta clicar no botão a cima
              </p>
            </div>
          ) : (
            <div className='rowPomodoro'>
              <div className='colPomodoroLeft'>
                <div className='circleOut'>
                  {isPauseScreen ? (
                    <div
                      className='circleIn'
                      style={{
                        border: "5px solid #f2c94c",
                      }}
                    >
                      {display}
                    </div>
                  ) : (
                    <div
                      className='circleIn'
                      style={{
                        border: "5px solid #219653",
                      }}
                    >
                      {display}
                    </div>
                  )}
                </div>
              </div>
              <div className='colPomodoroRight'>
                {isPauseScreen ? (
                  <p
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      color: "#f2c94c",
                      margin: "0px",
                    }}
                  >
                    Pausa
                  </p>
                ) : (
                  <p
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      color: "#219653",
                      margin: "0px",
                    }}
                  >
                    Trabalho
                  </p>
                )}
                <div className='rowSessoes'>
                  {arraySessoes.map((sessao) => (
                    <div>
                      {sessao.mostrar ? (
                        <div>
                          {isPauseScreen ? (
                            <div
                              className='qtdSessoes'
                              style={{ backgroundColor: "#f2c94c" }}
                            ></div>
                          ) : (
                            <div
                              className='qtdSessoes'
                              style={{ backgroundColor: "#219653" }}
                            ></div>
                          )}
                        </div>
                      ) : (
                        <div
                          className='qtdSessoes'
                          style={{ backgroundColor: "#3c4262" }}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
                {isPlay ? (
                  <button
                    className='btnPlay'
                    onClick={() => {
                      setIsPlay(false);
                      pauseCount();
                    }}
                  >
                    <FontAwesomeIcon className='iconPause' icon={faPause} />
                  </button>
                ) : (
                  <button
                    className='btnPlay'
                    onClick={() => {
                      setIsPlay(true);
                      startCount(display, countTrabalho, countPausa);
                    }}
                  >
                    <FontAwesomeIcon className='iconPlay' icon={faPlay} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        {/* <h1>
          countTrabalho: {countTrabalho}, countPausa: {countPausa},
          countSessoes: {countSessoes}
        </h1> */}
      </div>
    );
  }

  function startCount(display, countTrabalho, countPausa) {
    let displaySplited = display.split(":");
    let displayMin = parseInt(displaySplited[0]);
    let displaySeg = parseInt(displaySplited[1]);
    let countTrabalhoClone =
      countTrabalho < 10 ? "0" + countTrabalho : countTrabalho;
    let countPausaClone = countPausa < 10 ? "0" + countPausa : countPausa;

    setId(
      setInterval(() => {
        if (parseInt(displaySeg) == 0) {
          parseInt(displayMin--);
          displaySeg = 59;
        } else {
          parseInt(displaySeg--);
        }

        displayMin =
          parseInt(displayMin) < 10
            ? "0" + parseInt(displayMin)
            : parseInt(displayMin);
        displaySeg =
          parseInt(displaySeg) < 10
            ? "0" + parseInt(displaySeg)
            : parseInt(displaySeg);

        let displayDuration = parseInt(displaySeg) - parseInt(displayMin);

        setDisplay(displayMin + ":" + displaySeg);

        if (displayDuration <= 0) {
          if (!isPauseScreen) {
            setqtdSessoes((qtdSessoes) =>
              qtdSessoes === 0 ? qtdSessoes : qtdSessoes - 1
            );
            setDisplay(countTrabalhoClone + ":" + displaySeg);
          }
          if (isPauseScreen) {
            setDisplay(countPausaClone + ":" + displaySeg);
          }

          setIsPlay(false);
          setIsReset(true);
          setIsPauseScreen((isPauseScreen) => (isPauseScreen ? false : true));
        }
      }, 1000)
    );
  }

  function pauseCount() {
    setDisplay(display);
    clearTimeout(id);
  }
}
