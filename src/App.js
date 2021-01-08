import React, { useState } from 'react'


// scss connect
import './assets/scss/main.scss'

const App = () => {
  const [toggle, setToggle] = useState(true)
  const [setBg, setSetBg] = useState(true)
  const [tggleInnerContant, setTggleInnerContant] = useState(true)
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  const toggleSwitch = () => {
    const switchButtonContainer = document.getElementById('switch-button-container')
    setSetBg(!setBg)
    setTggleInnerContant(!tggleInnerContant)
  }
  const toggleSelect = () => {
    alert('done')
    setIsOpenDropdown(true)
  }
  return (
    <div>








      <div className="main-page " >
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
                  <div className="wallet-header" >
                    <p onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
                      <span className="first-icon"><i class="fab fa-bitcoin"></i></span>
                      <span className="txt">3X BITCOIN UP ( 3XBTCUP)</span>
                      <span className="secend-icon"><i class="fas fa-hat-cowboy"></i> </span>
                      <span className="arrow-botton"><i class="fas fa-caret-down"></i> </span>
                    </p>
                    {
                      isOpenDropdown ?

                        <div className="wallet-drop-down">


                          <p>
                            <div className="row">
                              <div className="col-8">
                              </div>
                              {/* custom switch  */}
                              <div className="col-4 text-right">
                                <div className="form-group">
                                  <label className="toggle-switch">
                                    <input className="toggle-switch-check" type="checkbox" />
                                    <span aria-hidden="true" className="toggle-switch-bar">
                                      <span className="toggle-switch-handle">
                                        <span className="button-icon button-icon-on toggle-switch-icon">
                                        <i   className="fab fa-bitcoin bit-icon"></i>
                                        </span>
                                        <span className="button-icon button-icon-off toggle-switch-icon">
                                          <i className="fab fa-gg-circle"></i>
                                        </span>
                                      </span>
                                    </span>
                                  </label>
                                </div>

                              </div>
                            </div>
                          </p>
                          <p>
                            <div className="row">
                              <div className="col-9">
                                <span className="first-icon"><i class="fab fa-bitcoin"></i></span>
                                <span className="txt">3X BITCOIN UP ( 3XBTCUP)</span>
                              </div>
                              <div className="col-3">
                                <span className="secend-icon"><i class="fas fa-hat-cowboy"></i> </span>

                              </div>
                            </div>
                          </p>
                          <p>
                            <div className="row">
                              <div className="col-9">
                                <span className="first-icon"><i class="fab fa-bitcoin"></i></span>
                                <span className="txt">3X BITCOIN UP ( 3XBTCUP)</span>
                              </div>
                              <div className="col-3">
                                <span className="secend-icon"><i class="fas fa-hat-cowboy"></i> </span>

                              </div>
                            </div>
                          </p>
                          <p>
                            <div className="row">
                              <div className="col-9">
                                <span className="first-icon"><i class="fab fa-bitcoin"></i></span>
                                <span className="txt">3X BITCOIN UP ( 3XBTCUP)</span>
                              </div>
                              <div className="col-3">
                                <span className="secend-icon"><i class="fas fa-hat-cowboy"></i> </span>

                              </div>
                            </div>
                          </p>
                          <p>
                            <div className="row">
                              <div className="col-9">
                                <span className="first-icon"><i class="fab fa-bitcoin"></i></span>
                                <span className="txt">3X BITCOIN UP ( 3XBTCUP)</span>
                              </div>
                              <div className="col-3">
                                <span className="secend-icon"><i class="fas fa-hat-cowboy"></i> </span>

                              </div>
                            </div>
                          </p>
                          <p>
                            <div className="row">
                              <div className="col-9">
                                <span className="first-icon"><i class="fab fa-bitcoin"></i></span>
                                <span className="txt">3X BITCOIN UP ( 3XBTCUP)</span>
                              </div>
                              <div className="col-3">
                                <span className="secend-icon"><i class="fas fa-hat-cowboy"></i> </span>

                              </div>
                            </div>
                          </p>
                        </div>
                        : ''
                    }
                  </div>
                  {/* card content */}
                  {
                    setTggleInnerContant ?
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
                              <div className="wallet-Liquidity-balance">
                                <div className="row">
                                  <div className="  col-md-6 text-left">
                                    <span >0.000000</span>
                                  </div>
                                  <div className="col-md-6 text-right">
                                    <span >  <i class="fab fa-gg-circle"></i> BNB</span>
                                  </div>
                                </div>
                                <hr />

                                <div className="row">
                                  <div className="col-md-12 text-right">
                                    <span >   LPT</span>
                                  </div>
                                </div>
                              </div>

                              <div className="wallet-Liquidity-balance mt-4">
                                <div className="row">
                                  <div className="  col-md-6 text-left">
                                    <span >0.000000</span>
                                  </div>
                                  <div className="col-md-6 text-right">
                                    <span >  LPT</span>
                                  </div>
                                </div>
                                <hr />

                                <div className="row">
                                  <div className="col-md-12 text-right">
                                    <span >  <i class="fab fa-gg-circle"></i> BNB</span>
                                  </div>
                                </div>
                              </div>
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
                    {
                      tggleInnerContant ?
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
                        :
                        <div className="row">
                          <div className="  col-md-6 text-left">
                            <span className="top-text ">Price Per LPT</span> <br />
                            <span className="top-text ">LPT Balance:</span> <br />
                            <span className="top-text ">Your Liquidity:</span> <br />
                          </div>
                          <div className="col-md-6 text-right">
                            <span className="value"> 5 BNB</span> <br />
                            <span className="value"> 2.00</span> <br />
                            <span className="value"> 10 BNB</span>
                          </div>
                        </div>
                    }
                  </div>
                  <div className="connect-button">
                    <button className="btn" data-toggle="modal" data-target="#exampleModalCenter">
                      <i class="fas fa-wallet"></i><span>Connect Wallet</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="text-center connect-wallet">
                <button className="btn" data-toggle="modal" data-target="#exampleModalCenter">
                  <i class="fas fa-wallet"></i><span>Connect Wallet</span>
                </button>

                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="connect-card">
                        <div class="connection-container">
                          <button className="btn connection-text" >
                            <img src="/images/mask.png" /> <span>Connect with metamask</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
