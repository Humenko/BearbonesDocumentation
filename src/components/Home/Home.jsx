import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IllustrationPainter from '../Shared/IllustrationPainter';
import IllustrationRubble from '../Shared/IllustrationRubble';
import Body1 from './Bear/Body/Body1';
import Body2 from './Bear/Body/Body2';
import Body3 from './Bear/Body/Body3';
import Head1 from './Bear/Head/Head1';
import Head2 from './Bear/Head/Head2';
import Head3 from './Bear/Head/Head3';
import Legs1 from './Bear/Legs/Legs1';
import Legs2 from './Bear/Legs/Legs2';
import Legs3 from './Bear/Legs/Legs3';

class Home extends Component {
  constructor(props) {
    super(props);
    this.maxNumber = 3;
  }

  componentDidUpdate() {
    this.getRandomNumber();
  }

  getRandomNumber() {
    this.randomNumber = () => Math.ceil(Math.random() * this.maxNumber);
    // let random = this.randomNumber();
    let random = 2;

    return random;
  }

  render() {
    let randomHead = this.getRandomNumber();
    let randomBody = this.getRandomNumber();
    let randomLegs = this.getRandomNumber();

    return (
      <section>
        <div className="hero full-y">
          <div className="body">
            <div className="container full-x">
              <div className="bb-grid lg align-items-center">
                <div className="column column-6 column-offset-1">
                  <div className="bb-body-parts">
                    <div className="body-part head" id="bb-head">
                      {randomHead === 1 ? <Head1 /> : null}
                      {randomHead === 2 ? <Head2 /> : null}
                      {randomHead === 3 ? <Head3 /> : null}
                    </div>
                    <div className="body-part torso" id="bb-body">
                      {randomBody === 1 ? <Body1 /> : null}
                      {randomBody === 2 ? <Body2 /> : null}
                      {randomBody === 3 ? <Body3 /> : null}
                    </div>
                    <div className="body-part legs" id="bb-legs">
                      {randomLegs === 1 ? <Legs1 /> : null}
                      {randomLegs === 2 ? <Legs2 /> : null}
                      {randomLegs === 3 ? <Legs3 /> : null}
                    </div>
                  </div>
                </div>
                <div className="column column-6 column-offset-1 text-center intro">
                  <h1 className="title">Bearbones</h1>
                  <p className="subtitle lg">
                    One of the world‘s most{' '}
                    <span className="font-weight-bold">customisable</span> CSS
                    frameworks.
                  </p>
                  <div className="column m-t-4">
                    <Link to="/documentation" className="bb-btn positive lg">
                      Documentation
                      <span className="p-l-2">
                        <FontAwesomeIcon icon={['fal', 'file-alt']} />
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
                  <p className="text-secondary m-b-3">
                    <FontAwesomeIcon icon={['fal', 'cogs']} size="5x" />
                  </p>
                  <h3 className="text-secondary title">Customisable.</h3>
                  <p className="subtitle lg">
                    The ability to personalise any components is something that
                    we are truly proud of.
                  </p>
                </div>
                <div className="column one-third text-center-lg">
                  <p className="text-secondary m-b-3">
                    <FontAwesomeIcon icon={['fab', 'css3']} size="5x" />
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
                  <p className="text-secondary m-b-3">
                    <FontAwesomeIcon icon={['fal', 'thumbs-up']} size="5x" />
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
                    The components are already built,
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
      </section>
    );
  }
}

export default Home;
