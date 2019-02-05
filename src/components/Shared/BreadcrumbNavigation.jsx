import React from 'react';
import Breadcrumbs from 'react-router-dynamic-breadcrumbs';

const routes = {
  '/documentation/getting-started': null,
  '/documentation/components': null,
  '/documentation/layout': null,
  '/documentation/helper': null
};

export default function DocumentationNavigation() {
  return (
    <div className="section p-b-0">
      <div className="container">
        <div className="bb-grid md">
          <div className="column column-16">
            <Breadcrumbs
              WrapperComponent={props => (
                <nav className="bb-breadcrumb doc">
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
