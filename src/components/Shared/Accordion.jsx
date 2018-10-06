import PropTypes from 'prop-types';
import * as React from 'react';

export class Accordion extends React.Component {
  render() {
    return (
      <div className={`bb-accordion ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}
Accordion.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export class AccordionItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accordionIsOpen: false
    };

    this.handleAccordion = this.handleAccordion.bind(this);
  }

  handleAccordion() {
    this.setState({
      accordionIsOpen: !this.state.accordionIsOpen
    });
  }

  render() {
    return (
      <div>
        <div
          className={`header
                ${this.state.accordionIsOpen ? 'active' : ''}`}
          onClick={this.handleAccordion}
        >
          {this.props.header}
          <span className="chevron" />
        </div>
        <div
          className={`content ${this.state.accordionIsOpen ? 'active' : ''}`}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
AccordionItem.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};
