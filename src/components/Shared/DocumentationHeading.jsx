import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Code from '../Shared/Code';

export default class Heading extends Component {
  render() {
    return (
      <div className="bb-grid md">
        <div className="column column-16">
          <h1 className="title">{this.props.title}</h1>
          <p className="subtitle">{this.props.subTitle}</p>
          {this.props.code ? (
            <Code language="js">{`${this.props.code}`}</Code>
          ) : null}
        </div>
      </div>
    );
  }
}
Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};
