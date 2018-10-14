import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BearbonesLogo from '../../images/bb-logo.svg';

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="bb-navbar display fixed" id="top-navbar">
          <div className="brand justify-content-between">
            <Link to="/" className="item">
              <img src={BearbonesLogo} alt="Bearbones logo" />
            </Link>
            <div className="item">
              <a
                className="item"
                href="https://github.com/humenko"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github-alt text-xl" aria-hidden="true" />
              </a>
              <a
                className="item"
                href="https://twitter.com/humenko8"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-twitter text-xl" aria-hidden="true" />
              </a>
              <div className="item hidden-lg-down">
                <a href="/404" className="bb-btn positive">
                  Download
                </a>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="right">
              <div className="item bb-dropdown hover">
                <div className="bb-btn link icon">
                  <i className="fas fa-palette m-r-2" />
                  Themes
                </div>
                <div className="dropdown-menu">
                  <a href="#example" className="dropdown-item">
                    Normal
                  </a>
                  <a href="#example" className="dropdown-item">
                    Dark
                  </a>
                  <a href="#example" className="dropdown-item">
                    Retro
                  </a>
                  <a href="#example" className="dropdown-item">
                    Material
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
