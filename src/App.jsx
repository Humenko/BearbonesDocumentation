import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Documentation from './components/Documentation/Documentation';
import PageNotFound from './components/Error/PageNotFound';
import Home from './components/Home/Home';
import BreadcrumbNavigation from './components/Shared/BreadcrumbNavigation';
import * as DocumentationRoutes from './components/Shared/DocumentationRoutes';
import PageLayout from './components/Shared/PageLayout';

export default function App() {
  return (
    <main>
      <PageLayout>
        <Route path="/documentation" component={BreadcrumbNavigation} />
        <Route
          render={({ location }) => (
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                    {...props}
                    component={Home}
                    title="Bearbones: one of the world‘s most customisable CSS frameworks."
                    subTitle="One of the world‘s most customisable CSS frameworks. It's customisable, contemporary and completely Free! Built using the latest and greatest tech including Flexbox, Scss and Font Awesome 5."
                  />
                )}
              />
              <>
                <TransitionGroup>
                  <CSSTransition
                    onEntering={() => window.scrollTo(0, 0)}
                    key={location.key}
                    classNames="doc-page-animation"
                    timeout={500}
                  >
                    <Switch location={location}>
                      <Route
                        exact
                        path="/documentation"
                        render={props => (
                          <Documentation
                            {...props}
                            documentationRoutes={DocumentationRoutes.routes}
                            component={Documentation}
                            title="Documentation - Bearbones"
                            subTitle="Bearbones is an open source CSS framework built using the latest and greatest tech including Flexbox, Scss and Font Awesome 5."
                          />
                        )}
                      />
                      {DocumentationRoutes.routes.map(route => (
                        <Route
                          exact
                          path={route.path}
                          key={route.path}
                          render={props => (
                            <route.component
                              {...props}
                              component={route.component}
                              title={route.title + ' - Bearbones'}
                              heading={route.title}
                              subTitle={route.subTitle}
                            />
                          )}
                        />
                      ))}
                      <Route component={PageNotFound} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </>
            </Switch>
          )}
        />
      </PageLayout>
    </main>
  );
}
