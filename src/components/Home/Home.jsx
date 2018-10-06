import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IllustrationPainter from '../Shared/IllustrationPainter';
import IllustrationRubble from '../Shared/IllustrationRubble';

class Home extends Component {
  constructor(props) {
    super(props);
    this.maxNumber = 3;
    this.randomNumber = () => Math.ceil(Math.random() * this.maxNumber);
    this.imgNameHead = `bb-head-${this.randomNumber()}.svg`;
    this.imgNameBody = `bb-body-${this.randomNumber()}.svg`;
    this.imgNameLegs = `bb-legs-${this.randomNumber()}.svg`;
  }

  render() {
    return (
      <section>
        <div className="hero full-y">
          <div className="body">
            <div className="container full-x">
              <div className="bb-grid lg align-items-center">
                <div className="column column-6 column-offset-1">
                  <div className="bb-body-parts">
                    <img
                      className="body-part head"
                      id="bb-head"
                      alt="Placeholder"
                      src={`/static/media/${this.imgNameHead}`}
                    />
                    <img
                      className="body-part torso"
                      id="bb-body"
                      alt="Placeholder"
                      src={`/static/media/${this.imgNameBody}`}
                    />
                    <img
                      className="body-part legs"
                      id="bb-legs"
                      alt="Placeholder"
                      src={`/static/media/${this.imgNameLegs}`}
                    />
                  </div>
                </div>
                <div className="column column-6 column-offset-1 text-center intro">
                  <h1 className="title">Bearbones</h1>
                  <p className="subtitle lg">
                    One of the world‘s most{' '}
                    <span className="font-weight-bold">customisable</span> CSS
                    frameworks.
                  </p>
                  <div className="column m-t-3">
                    {/* <a className="bb-btn icon primary lg" id="cta-view-docs">
                      Get started
                      <span>
                        <i className="fal fa-chevron-down" />
                      </span>
                    </a> */}
                    <Link
                      to="/documentation"
                      className="bb-btn icon primary lg outline hidden-lg-down"
                    >
                      Documentation
                      <span className="p-l-2">
                        <i className="fal fa-file-alt" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section primary" id="navbar-display">
          <div className="body">
            <div className="container">
              <div className="bb-grid md">
                <div className="column column-6 column-offset-5">
                  <IllustrationRubble />
                </div>
              </div>
              <div className="bb-grid md">
                <div className="column text-center">
                  <h2 className="title">
                    Wanting to develop with a CSS framework without the worry of
                    it looking like everyone elses?
                  </h2>
                </div>
              </div>
              <div className="bb-grid lg m-t-5">
                <div className="column one-third text-center-lg text-right">
                  <p>
                    <i className="fal fa-cogs fa-5x text-secondary m-b-3" />
                  </p>
                  <h3 className="text-secondary title">Customisable.</h3>
                  <p className="subtitle lg">
                    The ability to personalise any components is something that
                    we are truly proud of.
                  </p>
                </div>
                <div className="column one-third text-center-lg">
                  <p>
                    <i className="fab fa-css3 fa-5x text-secondary m-b-3" />
                  </p>
                  <h3 className="text-secondary title">Contemporary.</h3>
                  <p className="subtitle lg">
                    Built using the latest and greatest tech including Flexbox,
                    Sass and{' '}
                    <a href="https://fontawesome.com/" target="blank">
                      Font Awesome 5
                    </a>
                    .
                  </p>
                </div>
                <div className="column one-third text-center-lg text-right">
                  <p>
                    <i className="fal fa-thumbs-up fa-5x text-secondary m-b-3" />
                  </p>
                  <h3 className="text-secondary title">Completely Free.</h3>
                  <p className="subtitle lg">
                    Open source, surely there is nothing that developers love
                    more than that?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="body">
            <div className="container">
              <div className="bb-grid md align-items-center">
                <div className="column column-sm">
                  <h2 className="title text-primary">
                    Bearbones gives you the headstart.
                  </h2>
                  <p className="subtitle lg text-primary">
                    The components are already built, the documentation is{' '}
                    <Link
                      to="/documentation"
                      className="link text-primary text-underline"
                    >
                      here
                    </Link>
                    . All you need to do is edit the variables. So, what are you
                    waiting for?
                  </p>
                </div>
                <div className="column column-6 column-offset-3-lg">
                  <IllustrationPainter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
