import React, { Component } from 'react';
import Breadcrumbs from 'react-router-dynamic-breadcrumbs';

const routes = {
  '/': 'Home',
  '/documentation/components': null,
  '/documentation/layout': null,
  '/documentation/helper': null
};

export default class DocumentationNavigation extends Component {
  render() {
    return (
      <div className="section p-b-0 invisible-lg-down">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <Breadcrumbs
                WrapperComponent={props => (
                  <nav className="bb-breadcrumb">
                    <ul>{props.children}</ul>
                  </nav>
                )}
                ActiveLinkComponent={props => (
                  <li className="breadcrumb-item active">{props.children}</li>
                )}
                LinkComponent={props => (
                  <li className="breadcrumb-item">{props.children}</li>
                )}
                mappedRoutes={routes}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
