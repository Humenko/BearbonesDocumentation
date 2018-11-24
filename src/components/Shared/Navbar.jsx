import { faFileAlt, faHome } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav
          className="bb-navbar fixed bottom shadow doc-navbar display hidden-lg-up"
          id="bottom-navbar"
        >
          <div className="bb-btns full-x no-border-radius">
            <Link to="/" className="bb-btn icon">
              <span>
                <FontAwesomeIcon icon={faHome} />
              </span>
              Home
            </Link>
            <Link to="/documentation" className="bb-btn icon">
              <span>
                <FontAwesomeIcon icon={faFileAlt} />
              </span>
              Docs
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
