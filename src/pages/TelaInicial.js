import { faCircleDown, faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./TelaInicial.css";

// let countTrabalho = 25;
// let countPausa = 5;
// let countSessoes = 3;
class TelaInicial extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countTrabalho: 25, countPausa: 5, countSessoes: 3 };
  }
  // let [countTrabalho, setCountTrabalho] = useState(25);
  // let [countPausa, setCountPausa] = useState(5);
  // let [countSessoes, setCountSessoes] = useState(3);

  render() {
    return (
      <div id='colMaster'>
        <div id='rowHeader'>
          <h1>Pomodoro</h1>
        </div>

        <div id='rowBody'>
          <div id='colTrabalho'>
            <div id='rowTrabalho'>
              <div id='colTrabalhoLeft'>
                <div id='rowPlus'>
                  <button
                    id='buttonPlus'
                    onClick={() =>
                      this.setState((state) => ({
                        countTrabalho: state.countTrabalho + 1,
                      }))
                    }
                  >
                    <FontAwesomeIcon className='arrowUp' icon={faCircleUp} />
                  </button>
                </div>
                <div id='rowMenus'>
                  <button
                    id='buttonMenus'
                    onClick={() =>
                      this.setState((state) => ({
                        countTrabalho:
                          state.countTrabalho <= 0
                            ? 0
                            : state.countTrabalho - 1,
                      }))
                    }
                  >
                    <FontAwesomeIcon
                      className='arrowDown'
                      icon={faCircleDown}
                    />
                  </button>
                </div>
              </div>
              <div id='colTrabalhoRight'>
                <div id='square'>
                  <p className='counter'>{this.state.countTrabalho}</p>
                </div>
                <p className='text'>Trabalho</p>
              </div>
            </div>
          </div>
          <div id='colTrabalho'>
            <div id='rowTrabalho'>
              <div id='colTrabalhoLeft'>
                <div id='rowPlus'>
                  <button
                    id='buttonPlus'
                    onClick={() =>
                      this.setState((state) => ({
                        countPausa: state.countPausa + 1,
                      }))
                    }
                  >
                    <FontAwesomeIcon className='arrowUp' icon={faCircleUp} />
                  </button>
                </div>
                <div id='rowMenus'>
                  <button
                    id='buttonMenus'
                    onClick={() =>
                      this.setState((state) => ({
                        countPausa:
                          state.countPausa <= 0 ? 0 : state.countPausa - 1,
                      }))
                    }
                  >
                    <FontAwesomeIcon
                      className='arrowDown'
                      icon={faCircleDown}
                    />
                  </button>
                </div>
              </div>
              <div id='colTrabalhoRight'>
                <div id='square'>
                  <p className='counter'>{this.state.countPausa}</p>
                </div>
                <p className='text'>Pausa</p>
              </div>
            </div>
          </div>
          <div id='colTrabalho'>
            <div id='rowTrabalho'>
              <div id='colTrabalhoLeft'>
                <div id='rowPlus'>
                  <button
                    id='buttonPlus'
                    onClick={() =>
                      this.setState((state) => ({
                        countSessoes: state.countSessoes + 1,
                      }))
                    }
                  >
                    <FontAwesomeIcon className='arrowUp' icon={faCircleUp} />
                  </button>
                </div>
                <div id='rowMenus'>
                  <button
                    id='buttonMenus'
                    onClick={() =>
                      this.setState((state) => ({
                        countSessoes:
                          state.countSessoes <= 0 ? 0 : state.countSessoes - 1,
                      }))
                    }
                  >
                    <FontAwesomeIcon
                      className='arrowDown'
                      icon={faCircleDown}
                    />
                  </button>
                </div>
              </div>
              <div id='colTrabalhoRight'>
                <div id='square'>
                  <p className='counter'>{this.state.countSessoes}</p>
                </div>
                <p className='text'>Sessões</p>
              </div>
            </div>
          </div>
        </div>
        <div className='rowFooter'>
          <Link to='/pomodoro' counters={this.state}>
            <button className='btnStart'>Começar</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default TelaInicial;
