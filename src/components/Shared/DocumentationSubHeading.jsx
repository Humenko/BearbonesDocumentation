import { faPaw } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class SubHeading extends Component {
  render() {
    return (
      <div className="media center title">
        <div className="media-left">
          <FontAwesomeIcon
            icon={this.props.icon ? this.props.icon : faPaw}
            size="2x"
            className="text-secondary"
          />
        </div>
        <div className="media-container">
          <div className="media-content">
            <h3>{this.props.title}</h3>
          </div>
        </div>
      </div>
    );
  }
}
SubHeading.propTypes = {
  title: PropTypes.string.isRequired
};
