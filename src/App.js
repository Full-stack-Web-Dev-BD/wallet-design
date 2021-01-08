import React, { useState } from 'react'


// scss connect
import './assets/scss/main.scss'

const App = () => {
  const [toggle, setToggle] = useState(true)
  const [setBg, setSetBg] = useState(true)
  const [tggleInnerContant, setTggleInnerContant] = useState(false)
  const toggleSwitch = () => {
    const switchButtonContainer = document.getElementById('switch-button-container')
    setSetBg(!setBg)
  }
  return (
    <div>
      {/* <div className="form-group">
        <label className="toggle-switch">
          <input className="toggle-switch-check" type="checkbox" />
          <span aria-hidden="true" className="toggle-switch-bar">
            <span className="toggle-switch-handle">
              <span className="button-icon button-icon-on toggle-switch-icon">
              <i class="far fa-address-book"></i>
              </span>
              <span className="button-icon button-icon-off toggle-switch-icon">f
              </span>
            </span>
          </span>
        </label>
      </div> */}
      <div className="main-page ">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div id="switch-button-container" className="switch-button-container" onClick={() => { toggleSwitch() }}>
                <button style={setBg ? { color: 'white', backgroundColor: '#fa7f3d' } : { color: 'black', backgroundColor: 'transparent' }} className="btn active-switch-bg"> Trade </button>
                <button style={!setBg ? { color: 'white', backgroundColor: '#fa7f3d' } : { color: 'black', backgroundColor: 'transparent' }} className="btn">Liquidity</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="wallet-card-container">
                <div className="wallet-card">
                  {/* cart header */}
                  <div className="wallet-header">
                    <p>
                      <span className="first-icon"><i class="fab fa-bitcoin"></i></span>
                      <span className="txt">3X BITCOIN UP ( 3XBTCUP)</span>
                      <span className="secend-icon"><i class="fas fa-hat-cowboy"></i> </span>
                      <span className="arrow-botton"><i class="fas fa-caret-down"></i> </span>
                    </p>
                  </div>
                  {/* card content */}
                  {
                    toggle ?
                      <div className="wallet-box">
                        {
                          tggleInnerContant ?
                        <div className="wallet-trade">
                          <div className="wallet-balance balance-from">
                            <div className="row">
                              <div className="  col-md-6 text-left">
                                <span className="top-text ">From</span>
                                <input className="form-control" placeholder="0.000000000000" />
                              </div>
                              <div className="col-md-6 text-right">
                                <span className="top-text"> Balanch 0.00000</span> <br />
                                <span> <i class="fab fa-bitcoin"></i> 3XBTCUP</span>
                              </div>
                            </div>
                          </div>
                          <div className="wallet-transform">
                            <i onClick={() => { setToggle(!toggle) }} class="fas fa-exchange-alt"></i>
                          </div>
                          <div className="wallet-balance balance-to">
                            <div className="row">
                              <div className="  col-md-6 text-left">
                                <span className="top-text ">To</span>
                                <input className="form-control" placeholder="0.000000000000" />
                              </div>
                              <div className="col-md-6 text-right">
                                <span className="top-text"> Balanch 0.00000</span> <br />
                                <span> <i class="fab fa-gg-circle"></i> 3XBTCUP</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        :
                        <div className="wallet-Liquidity">

                        </div>
                        }
                      </div>
                      :
                      <div className="wallet-box">

                        <div className="wallet-balance balance-to">
                          <div className="row">
                            <div className="  col-md-6 text-left">
                              <span className="top-text ">To</span>
                              <input className="form-control" placeholder="0.000000000000" />
                            </div>
                            <div className="col-md-6 text-right">
                              <span className="top-text"> Balanch 0.00000</span> <br />
                              <span> <i class="fab fa-gg-circle"></i> 3XBTCUP</span>
                            </div>
                          </div>
                        </div>
                        <div className="wallet-transform">
                          <i onClick={() => { setToggle(!toggle) }} class="fas fa-exchange-alt"></i>
                        </div>
                        <div className="wallet-balance balance-from">
                          <div className="row">
                            <div className="  col-md-6 text-left">
                              <span className="top-text ">From</span>
                              <input className="form-control" placeholder="0.000000000000" />
                            </div>
                            <div className="col-md-6 text-right">
                              <span className="top-text"> Balanch 0.00000</span> <br />
                              <span> <i class="fab fa-bitcoin"></i> 3XBTCUP</span>
                            </div>
                          </div>
                        </div>
                      </div>
                  }
                  {/* card footer */}
                  <div className="wallet-footer mt-5">
                    <div className="row">
                      <div className="  col-md-6 text-left">
                        <span className="top-text ">Price </span> <br />
                        <span className="top-text ">Current Leverage:</span> <br />
                      </div>
                      <div className="col-md-6 text-right">
                        <span className="value"> 0.00 BNB PER 3XBTCUP</span> <br />
                        <span className="value">  2.50X</span>
                      </div>
                    </div>
                  </div>
                  <div className="connect-button">
                    <button className="btn">
                      <i class="fas fa-wallet"></i><span>Connect Wallet</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="text-center connect-wallet">
                <button className="btn">
                  <i class="fas fa-wallet"></i><span>Connect Wallet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
