import AccordionDocumentation from '../Documentation/Components/AccordionDocumentation';
import AlertDocumentation from '../Documentation/Components/AlertDocumentation';
import AnimationDocumentation from '../Documentation/Components/AnimationDocumentation';
import BoxDocumentation from '../Documentation/Components/BoxDocumentation';
import BreadcrumbDocumentation from '../Documentation/Components/BreadcrumbDocumentation';
import ButtonDocumentation from '../Documentation/Components/ButtonDocumentation';
import CardDocumentation from '../Documentation/Components/CardDocumentation';
import DividerDocumentation from '../Documentation/Components/DividerDocumentation';
import DropdownDocumentation from '../Documentation/Components/DropdownDocumentation';
import FieldDocumentation from '../Documentation/Components/FieldDocumentation';
import FooterDocumentation from '../Documentation/Components/FooterDocumentation';
import MediaDocumentation from '../Documentation/Components/MediaDocumentation';
import NavbarDocumentation from '../Documentation/Components/NavbarDocumentation';
import PaginationDocumentation from '../Documentation/Components/PaginationDocumentation';
import StatDocumentation from '../Documentation/Components/StatDocumentation';
import TabDocumentation from '../Documentation/Components/TabDocumentation';
import TableDocumentation from '../Documentation/Components/TableDocumentation';
import ImportingDocumentation from '../Documentation/GettingStarted/ImportingDocumentation';
import InstallingDocumentation from '../Documentation/GettingStarted/InstallingDocumentation';
import DisplayDocumentation from '../Documentation/Helper/DisplayDocumentation';
import FlexDocumentation from '../Documentation/Helper/FlexDocumentation';
import ListDocumentation from '../Documentation/Helper/ListDocumentation';
import PositionDocumentation from '../Documentation/Helper/PositionDocumentation';
import SpacingDocumentation from '../Documentation/Helper/SpacingDocumentation';
import TypographyDocumentation from '../Documentation/Helper/TypographyDocumentation';
import VisibilityDocumentation from '../Documentation/Helper/VisibilityDocumentation';
import HeroDocumentation from '../Documentation/Layout/HeroDocumentation';

export const routes = [
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
    subTitle:
      'A relatively modern component that utilised to display content in a grouped entity',
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
    subTitle:
      'An essential component for any form, providing the user a simple way to fill in their data.',
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
    path: '/documentation/components/heading',
    title: 'Heading',
    subTitle: 'Coming soon...'
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
    subTitle:
      'An essential component for all sites, allowing customers to easily navigate.',
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
    subTitle:
      'Simple component that gives the user the ability to navigate via a horizontal navigation.',
    component: TabDocumentation
  },
  {
    section: 'Components',
    path: '/documentation/components/table',
    title: 'Table',
    subTitle:
      'This component is used to spruce up the HTML table we all know and hate.',
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
    subTitle:
      'Easily be able to create ordered and unordered lists with these simple classes.',
    component: ListDocumentation
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
      'Easily be able to set the margin and / or padding of various elements.',
    component: SpacingDocumentation
  },
  {
    section: 'Helper',
    path: '/documentation/helper/typography',
    title: 'Typography',
    subTitle:
      'Easily be able to use common text utilities to control alignment, styles, weight and wrapping.',
    component: TypographyDocumentation
  },
  {
    section: 'Helper',
    path: '/documentation/helper/visibility',
    title: 'Visibility',
    subTitle:
      'Easily be able to toggle through the visibility of elements with these helper classes.',
    component: VisibilityDocumentation
  }
];
