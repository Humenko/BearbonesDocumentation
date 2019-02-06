import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
import ImportingDocumentation from './components/Documentation/GettingStarted/ImportingDocumentation';
import InstallingDocumentation from './components/Documentation/GettingStarted/InstallingDocumentation';
import DisplayDocumentation from './components/Documentation/Helper/DisplayDocumentation';
import FlexDocumentation from './components/Documentation/Helper/FlexDocumentation';
import PositionDocumentation from './components/Documentation/Helper/PositionDocumentation';
import SpacingDocumentation from './components/Documentation/Helper/SpacingDocumentation';
import VisibilityDocumentation from './components/Documentation/Helper/VisibilityDocumentation';
import HeroDocumentation from './components/Documentation/Layout/HeroDocumentation';
import Home from './components/Home/Home';
import BreadcrumbNavigation from './components/Shared/BreadcrumbNavigation';
import PageLayout from './components/Shared/PageLayout';

const documentationRoutes = [
  {
    section: 'Getting Started',
    path: '/documentation/getting-started/installation',
    title: 'Installation',
    subTitle: 'How to get up and running with Bearbones.',
    component: InstallingDocumentation
  },
  {
    path: '/documentation/getting-started/importing',
    section: 'Getting Started',
    title: 'Importing',
    subTitle: 'Import what you need, when you need it.',
    component: ImportingDocumentation
  },
  {
    path: '/documentation/getting-started',
    section: 'Getting Started',
    title: 'Variables',
    subTitle: 'Coming soon...'
  },
  {
    section: 'Components',
    path: '/documentation/components/accordion',
    title: 'Accordion',
    subTitle:
      'A collapsible component which allows the user to show and hide content to meet their needs.',
    component: AccordionDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/alert',
    title: 'Alert',
    subTitle: 'This component is used to provide feedback messages for users.',
    component: AlertDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/animation',
    title: 'Animation',
    subTitle: 'Coming soon...',
    component: AnimationDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/box',
    title: 'Box',
    subTitle:
      'This component is used as a basic container that full widths to any element it is within.',
    component: BoxDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/breadcrumb',
    title: 'Breadcrumb',
    subTitle:
      'A simple component used to display basic navigational structure.',
    component: BreadcrumbDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/button',
    title: 'Button',
    subTitle:
      'An essential component for any design, providing the user a simple way to trigger an event.',
    component: ButtonDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/card',
    title: 'Card',
    subTitle: 'Coming soon...',
    component: CardDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/divider',
    title: 'Divider',
    subTitle:
      'This component is used to visually separate content for the user.',
    component: DividerDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/dropdown',
    title: 'Dropdown',
    subTitle: 'Coming soon...',
    component: DropdownDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/field',
    title: 'Field',
    subTitle: 'Coming soon...',
    component: FieldDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/footer',
    title: 'Footer',
    subTitle:
      'This component is widely used as a source of navigation on the bottom of webpages.',
    component: FooterDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/media',
    title: 'Media',
    subTitle:
      'This component is used to create repetitive elements where content is positioned with some imagery.',
    component: MediaDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/navbar',
    title: 'Navbar',
    subTitle: 'Coming soon...',
    component: NavbarDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/pagination',
    title: 'Pagination',
    subTitle:
      'This component is used to display grouped content existing between multiple pages.',
    component: PaginationDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/stat',
    title: 'Stat',
    subTitle:
      'This component is used to empathise both the label and value for an attribute.',
    component: StatDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/tab',
    title: 'Tab',
    subTitle: 'Coming soon...',
    component: TabDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/table',
    title: 'Table',
    subTitle:
      'his component is used to spruce up the HTML table we all know and hate.',
    component: TableDocumentation
  },
  {
    section: 'Layout',
    path: '/documentation/layout/basic',
    title: 'Basic',
    subTitle: 'Coming soon...'
  },
  {
    section: 'Layout',
    path: '/documentation/layout/grid',
    title: 'Grid',
    subTitle: 'Coming soon...'
  },
  {
    section: 'Layout',
    path: '/documentation/layout/family-grid',
    title: 'Family Grid',
    subTitle: 'Coming soon...'
  },
  {
    section: 'Layout',
    path: '/documentation/layout/hero',
    title: 'Hero',
    subTitle:
      'A component which extends to the whole horizontal viewport, used to showcase key messaging.',
    component: HeroDocumentation
  },
  {
    section: 'Helper',
    path: '/documentation/helper/display',
    title: 'Display',
    subTitle:
      'Easily be able to toggle through display properties with these helper classes.',
    component: DisplayDocumentation
  },
  {
    section: 'Helper',
    path: '/documentation/helper/flex',
    title: 'Flex',
    subTitle:
      'Easily be able to toggle through flex properties with these helper classes.',
    component: FlexDocumentation
  },
  {
    section: 'Helper',
    path: '/documentation/helper/list',
    title: 'List',
    subTitle: 'Coming soon...',
    component: SpacingDocumentation
  },
  {
    section: 'Helper',
    path: '/documentation/helper/position',
    title: 'Position',
    subTitle:
      'Easily be able to toggle through position properties with these helper classes.',
    component: PositionDocumentation
  },
  {
    section: 'Helper',
    path: '/documentation/helper/spacing',
    title: 'Spacing',
    subTitle:
      'Easily be able to seet the margin and / or padding of various elements.',
    component: SpacingDocumentation
  },
  {
    section: 'Helper',
    path: '/documentation/helper/typography',
    title: 'Typography',
    subTitle: 'Coming soon...',
    component: SpacingDocumentation
  },
  {
    section: 'Helper',
    path: '/documentation/helper/visibility',
    title: 'Visbility',
    subTitle:
      'Easily be able to toggle through the visibility of elements with these helper classes."',
    component: VisibilityDocumentation
  }
];

export default function App() {
  return (
    <>
      <main>
        <PageLayout>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                component={Home}
                title="Bearbones: one of the world‘s most customisable CSS frameworks."
                subTitle="One of the world‘s most customisable CSS frameworks. It's customisable, contemporary and completely Free!"
              />
            )}
          />
          <Route path="/documentation" component={BreadcrumbNavigation} />
          <Route
            render={({ location }) => (
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
                          documentationRoutes={documentationRoutes}
                          component={Documentation}
                          title="Documentation - Bearbones"
                          subTitle="Bearbones is an open source CSS framework built using the latest and greatest tech including Flexbox, Scss and Font Awesome 5."
                        />
                      )}
                    />
                    {documentationRoutes.map(route => (
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
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </PageLayout>
      </main>
    </>
  );
}
