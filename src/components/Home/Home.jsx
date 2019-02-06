import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import {
  faCogs,
  faFileAlt,
  faThumbsUp
} from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import IllustrationPainter from '../Shared/Illustrations/IllustrationPainter';
import IllustrationRubble from '../Shared/Illustrations/IllustrationRubble';
import MetaTags from '../Shared/MetaTags';
import Bear from './Bear/Bear';

let randomHead = 0;
let randomBody = 0;
let randomLegs = 0;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.maxNumber = 3;
  }

  componentWillMount() {
    randomHead = this.getRandomNumber();
    randomBody = this.getRandomNumber();
    randomLegs = this.getRandomNumber();
  }

  getRandomNumber() {
    this.randomNumber = () => Math.ceil(Math.random() * this.maxNumber);
    let random = this.randomNumber();
    return random;
  }

  render() {
    return (
      <section>
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="hero full-y m-t-5">
          <div className="body">
            <div className="container full-x">
              <div className="bb-grid lg align-items-center">
                <div className="column column-6 column-offset-1">
                  <Bear body={randomBody} head={randomHead} legs={randomLegs} />
                </div>
                <div className="column column-6 column-offset-1 text-center intro">
                  <h1 className="title">Bearbones</h1>
                  <p className="subtitle lg">
                    One of the world‘s most{' '}
                    <span className="font-weight-bold">customisable</span> CSS
                    frameworks.
                  </p>
                  <div className="column m-t-4">
                    <Link to="/documentation" className="bb-btn secondary lg">
                      Documentation
                      <span className="p-l-2">
                        <FontAwesomeIcon icon={faFileAlt} />
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
                  <h3 className="title">
                    Wanting to develop with a CSS framework without the worry of
                    it looking like everyone elses?
                  </h3>
                </div>
              </div>
              <div className="bb-grid lg m-t-5">
                <div className="column one-third text-center-lg text-right">
                  <p className="text-secondary m-b-3">
                    <FontAwesomeIcon icon={faCogs} size="5x" />
                  </p>
                  <h3 className="text-secondary title">Customisable.</h3>
                  <p className="subtitle lg">
                    The ability to personalise any components is something that
                    we are truly proud of.
                  </p>
                </div>
                <div className="column one-third text-center-lg">
                  <p className="text-secondary m-b-3">
                    <FontAwesomeIcon icon={faCss3} size="5x" />
                  </p>
                  <h3 className="text-secondary title">Contemporary.</h3>
                  <p className="subtitle lg">
                    Built using the latest and greatest tech including Flexbox,
                    Scss and{' '}
                    <a href="https://fontawesome.com/" target="blank">
                      Font Awesome 5
                    </a>
                    .
                  </p>
                </div>
                <div className="column one-third text-center-lg text-right">
                  <p className="text-secondary m-b-3">
                    <FontAwesomeIcon icon={faThumbsUp} size="5x" />
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
                    The components are already built,{' '}
                    <Link
                      to="/documentation"
                      className="link text-primary text-underline"
                    >
                      the documentation is here
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
        <Footer />
      </section>
    );
  }
}
