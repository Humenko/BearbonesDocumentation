import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class MetaTags extends Component {
  render() {
    return (
      <Helmet>
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.subTitle} />
      </Helmet>
    );
  }
}
MetaTags.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};
