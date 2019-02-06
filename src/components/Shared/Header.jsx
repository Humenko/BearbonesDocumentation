import { faGithubAlt, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import BearbonesLogo from './Logo/BearbonesLogo';

export default function Header() {
  return (
    <div className="container">
      <nav className="bb-navbar display fixed" id="top-navbar">
        <div className="brand justify-content-between">
          <Link to="/" aria-label="home" className="item">
            <div className="logo">
              <BearbonesLogo />
            </div>
          </Link>
          <div className="item">
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
            {/* <div className="item hidden-lg-down">
                <a href="/404" className="bb-btn positive">
                  Download
                </a>
              </div> */}
          </div>
        </div>
        <div className="items">
          {/* <div className="right">
              <div className="item bb-dropdown hover">
                <div className="bb-btn link icon">
                  <FontAwesomeIcon
                    className="m-r-3"
                    icon={['fas', 'palette']}
                  />
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
            </div> */}
        </div>
      </nav>
    </div>
  );
}
