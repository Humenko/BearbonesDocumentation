import { faGithubAlt, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bb-footer">
      <div className="container">
        <div className="bb-grid lg">
          <div className="column">
            <div className="text-center">
              <ul className="inline social-links">
                <li className="inline-item">
                  <a
                    className="item text-white"
                    href={process.env.REACT_APP_GITHUB_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="github"
                  >
                    <FontAwesomeIcon icon={faGithubAlt} size="lg" />
                  </a>
                </li>
                <li className="inline-item">
                  <a
                    className="item text-white"
                    href={process.env.REACT_APP_TWITTER_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="twitter"
                  >
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="text-center">
              <p className="m-b-3">
                <strong>Bearbones</strong> by{' '}
                <a
                 className="text-white"
                  href={process.env.REACT_APP_PERSONAL_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Daniel Humenko
                </a>
                .
              </p>
              <Link to="/" aria-label="home" className="item" />
            </div>
          </div>
          <div className="column">
            <p className="text-center">
              Code licensed{' '}
              <a
                className="text-white"
                href={`${process.env.REACT_APP_GITHUB_URL}/blob/master/LICENSE`}
                rel="noopener noreferrer"
                target="_blank"
              >
                MIT
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
