import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Code from '../../Shared/Code';
import Heading from '../../Shared/DocumentationHeading';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import BearbonesLogo from '../../Shared/Logo/BearbonesLogo';
import MetaTags from '../../Shared/MetaTags';

export default class NavbarDocumentation extends Component {
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
      <div>
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="section p-t-0 p-b-0">
          <div className="container">
            <Heading
              title={this.props.heading}
              subTitle={this.props.subTitle}
              code='import "/bearbones/scss/components/navbar/all"'
            />
            <div className="bb-alert warning m-b-3">
              Bearbones <strong>does not</strong> implement any Javascript.
              Therefore you need to toggle the <code>.active</code> class on the
              element <code>.items</code> to hide and display the navbar menu.
            </div>
          </div>
        </div>
        <div className="section lg p-t-0">
          <div className="container">
            <div className="bb-grid md">
              <div className="column column-16">
                <SubHeading title="Basic" />
                <nav className="bb-navbar">
                  <div className="brand">
                    <Link to="/" aria-label="home" className="item">
                      <div className="logo">
                        <BearbonesLogo />
                      </div>
                    </Link>
                    <a className="toggle" onClick={this.handleNavbar}>
                      <span aria-hidden="true" />
                      <span aria-hidden="true" />
                      <span aria-hidden="true" />
                    </a>
                  </div>

                  <div
                    className={`items ${
                      this.state.navbarIsOpen ? 'active' : ''
                    }`}
                  >
                    <div className="left">
                      <a className="item" href="#">
                        Home
                      </a>

                      <a className="item" href="#">
                        Documentation
                      </a>

                      <div className="item bb-dropdown hover">
                        <a className="link">About</a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item">Lorem ipsum</a>
                          <a className="dropdown-item">Lorem ipsum</a>
                          <hr className="bb-divider secondary" />
                          <a className="dropdown-item">Lorem ipsum</a>
                        </div>
                      </div>
                    </div>

                    <div className="right">
                      <div className="item">
                        <a className="bb-btn primary outline">Lorem</a>
                        <a className="bb-btn positive m-l-2">Ipsum</a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="bb-grid md">
              <div className="column column-16">
                <DocumentationHelper
                  className="full-x"
                  code={
                    <Code language="markup">{`<nav class="bb-navbar">
  <div class="brand">
    <a class="item" href="#">
    </a>
    <a class="toggle">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class="items">
    <div class="left">
      <a class="item" href="#">Home</a>
      <a class="item" href="#">Documentation</a>
      <div class="item bb-dropdown hover">
        <a class="link">About</a>
        <div class="dropdown-menu">
          <a class="dropdown-item">Lorem ipsum</a>
          <a class="dropdown-item">Lorem ipsum</a>
          <hr class="bb-divider secondary">
          <a class="dropdown-item">Lorem ipsum</a>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="item">
        <a class="bb-btn primary outline">Lorem</a>
        <a class="bb-btn positive m-l-2">Ipsum</a>
      </div>
    </div>
  </div>
</nav>`}</Code>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
