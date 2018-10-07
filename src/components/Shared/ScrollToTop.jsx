import PropTypes from 'prop-types';
import { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    var scrollToTop = 0;
    if (this.props.location !== prevProps.location) {
      window.scrollTo(scrollToTop, scrollToTop);
    }
  }

  render() {
    return this.props.children;
  }
}
ScrollToTop.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};
export default withRouter(ScrollToTop);
