import { faPaw } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class SubHeading extends Component {
  render() {
    return (
      <div className="media center m-b-3">
        <div className="media-left">
          <FontAwesomeIcon
            icon={this.props.icon ? this.props.icon : faPaw}
            size="lg"
            className="text-secondary"
          />
        </div>
        <div className="media-container">
          <div className="media-content">
            <h4>{this.props.title}</h4>
          </div>
        </div>
      </div>
    );
  }
}
SubHeading.propTypes = {
  title: PropTypes.string.isRequired
};
