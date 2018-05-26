import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DocumentationBox extends Component {
  render() {
    return (
      <Link className="doc-box" to={`/documentation/${this.props.link}`}>
        <h4 className="text-secondary">{this.props.title}</h4>
        <p className="text-lg">{this.props.subTitle}</p>
      </Link>
    );
  }
}

DocumentationBox.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};
