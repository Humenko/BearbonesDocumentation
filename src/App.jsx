import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import About from './components/About/About';
import AccordionDocumentation from './components/Documentation/Components/AccordionDocumentation';
import AlertDocumentation from './components/Documentation/Components/AlertDocumentation';
import AnimationDocumentation from './components/Documentation/Components/AnimationDocumentation';
import BoxDocumentation from './components/Documentation/Components/BoxDocumentation';
import BreadcrumbDocumentation from './components/Documentation/Components/BreadcrumbDocumentation';
import ButtonDocumentation from './components/Documentation/Components/ButtonDocumentation';
import CardDocumentation from './components/Documentation/Components/CardDocumentation';
import DividerDocumentation from './components/Documentation/Components/DividerDocumentation';
import DropdownDocumentation from './components/Documentation/Components/DropdownDocumentation';
import FieldDocumentation from './components/Documentation/Components/FieldDocumentation';
import FooterDocumentation from './components/Documentation/Components/FooterDocumentation';
import MediaDocumentation from './components/Documentation/Components/MediaDocumentation';
import NavbarDocumentation from './components/Documentation/Components/NavbarDocumentation';
import PaginationDocumentation from './components/Documentation/Components/PaginationDocumentation';
import StatDocumentation from './components/Documentation/Components/StatDocumentation';
import TabDocumentation from './components/Documentation/Components/TabDocumentation';
import TableDocumentation from './components/Documentation/Components/TableDocumentation';
import Documentation from './components/Documentation/Documentation';
import DisplayDocumentation from './components/Documentation/Helper/DisplayDocumentation';
import PositionDocumentation from './components/Documentation/Helper/PositionDocumentation';
import SpacingDocumentation from './components/Documentation/Helper/SpacingDocumentation';
import HeroDocumentation from './components/Documentation/Layout/HeroDocumentation';
import PageNotFound from './components/Error/PageNotFound';
import Home from './components/Home/Home';
import DocumentationNavigation from './components/Shared/DocumentationNavigation';

export default class App extends Component {
  render() {
    return (
      <div>
        <main>
          <Route path="/documentation" component={DocumentationNavigation} />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="doc-page-animation"
                  timeout={500}
                >
                  <Switch location={location}>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route
                      exact
                      path="/documentation"
                      component={Documentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/accordion"
                      component={AccordionDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/alert"
                      component={AlertDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/animation"
                      component={AnimationDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/box"
                      component={BoxDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/breadcrumb"
                      component={BreadcrumbDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/button"
                      component={ButtonDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/card"
                      component={CardDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/divider"
                      component={DividerDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/dropdown"
                      component={DropdownDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/field"
                      component={FieldDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/footer"
                      component={FooterDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/media"
                      component={MediaDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/navbar"
                      component={NavbarDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/pagination"
                      component={PaginationDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/stat"
                      component={StatDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/tab"
                      component={TabDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/components/table"
                      component={TableDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/layout/hero"
                      component={HeroDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/helper/display"
                      component={DisplayDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/helper/position"
                      component={PositionDocumentation}
                    />
                    <Route
                      exact
                      path="/documentation/helper/spacing"
                      component={SpacingDocumentation}
                    />
                    <Route path="*" component={PageNotFound} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </main>
        {/* <Navbar />
        <Footer /> */}
      </div>
    );
  }
}
