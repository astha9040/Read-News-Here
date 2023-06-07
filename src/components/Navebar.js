import React, { Component } from 'react';
// import PropTypes from 'prop-types'
export class Navebar extends Component {
  // static defaultProps = {
  //   color : 'white',
  //   backgroundColor : 'black'
  // }
  // static PropType = {
  //   color : PropTypes.string,
  //   backgroundColor : PropTypes.string,
  // }
  
  render() {
    
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`} 
        >
          <div className="container-fluid" style={{color: this.props.mode===`light`?'black ':'white'}}>
            <a className="navbar-brand" href="/">
              NewsMonkey
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/business">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/entertainment">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/health">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"
                    href="/science">Science</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sports">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/technology">
                    Technology
                  </a>
                </li>
              </ul>
              <div className="form-check form-switch " style={{color: this.props.mode===`light`?'black ':'white'}}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={this.props.toggleMode}
                />
                <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">
                  {this.props.mode === 'dark' ? ' Disable dark Mode' : 'Enable Dark Mode'}
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navebar






