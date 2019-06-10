import { faGithubAlt, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BearbonesLogo from './Logo/BearbonesLogo';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarIsOpen: false
    };

    this.handleNavbar = this.handleNavbar.bind(this);
  }

  handleNavbar() {
    this.setState({
      navbarIsOpen: !this.state.navbarIsOpen
    });
  }
  render() {
    return (
      <div className="container">
        <nav className="bb-navbar shadow doc fixed" id="top-navbar">
          <div className="brand">
            <Link to="/" aria-label="home" className="item">
              <div className="logo">
                <BearbonesLogo />
              </div>
            </Link>
            <Link
              to="/documentation"
              aria-label="documentation"
              className="item"
            >
              Documentation
            </Link>
            <a
              className="item"
              href={process.env.REACT_APP_GITHUB_URL}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="github"
            >
              <FontAwesomeIcon icon={faGithubAlt} size="lg" />
            </a>
            <a
              className="item"
              href={process.env.REACT_APP_TWITTER_URL}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="twitter"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
