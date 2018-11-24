import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IllustrationMoon from '../Shared/IllustrationMoon';

class PageNotFound extends Component {
  constructor(props) {
    super(props);
    this.largeStars = 25;
    this.smallStars = 100;
  }

  render() {
    return (
      <section className="hero illustration space full-y">
        <div className="body">
          <div className="container">
            <div className="bb-grid lg">
              <div className="column-6">
                <h1 className="title text-white">404</h1>
                <p className="subtitle text-white p-y-5">
                  Houston, we have a problem!
                </p>
                <Link to="/" className="bb-btn invert outline xl full-x">
                  Return to home
                  <span className="p-l-2">
                    <FontAwesomeIcon icon={['fal', 'home']} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {[...Array(this.largeStars)].map((e, i) => (
          <span className="star lg" key={i} />
        ))}
        {[...Array(this.smallStars)].map((e, i) => (
          <span className="star" key={i} />
        ))}
        <div className="moon">
          <IllustrationMoon />
        </div>
      </section>
    );
  }
}

export default PageNotFound;
