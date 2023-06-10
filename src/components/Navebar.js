import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
export class Navebar extends Component {


  render() {

    return (
      <div>
        <nav
          className={`navbar fixed-top navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}  
        >
          <div className="container-fluid" style={{color: this.props.mode === `light` ? 'black ' : 'white'}}>
            <Link  className="navbar-brand" to="/">
              NewsTime
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"
                    to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
              <div className="form-check form-switch " style={{ color: this.props.mode === `light` ? 'black ' : 'white' }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={this.props.toggleMode}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
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






