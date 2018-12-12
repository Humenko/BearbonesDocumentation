import React, { Component } from 'react';
import Copy from 'react-copy';

export default class DocumentationHelper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showResults: false
    };

    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy() {
    this.setState({
      showResults: true
    });
    setTimeout(() => {
      this.setState({
        showResults: false
      });
    }, 2000);
  }

  render() {
    return (
      <div
        className={`bb-box example ${
          this.props.className ? this.props.className : ''
        }`}
      >
        {this.props.content && (
          <div className="doc-preview">{this.props.content}</div>
        )}
        <div className="doc-snippet">
          <Copy textToBeCopied={this.props.code} onCopy={this.handleCopy}>
            <button
              className={`bb-btn primary doc-copy sm ${
                this.state.showResults ? 'positive' : 'primary'
              }`}
            >
              {this.state.showResults ? 'Copied' : 'Copy'}
            </button>
          </Copy>
        </div>
      </div>
    );
  }
}
