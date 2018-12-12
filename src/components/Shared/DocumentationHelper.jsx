import React, { Component } from 'react';
import Copy from 'react-copy';

export default class DocumentationHelper extends Component {
  render() {
    return (
      <div className={`bb-box example ${this.props.className}`}>
        {this.props.content && (
          <div className="doc-preview">{this.props.content}</div>
        )}
        <div className="doc-snippet">
          <Copy textToBeCopied={this.props.code}>
            <button className="bb-btn primary doc-copy sm">Copy</button>
          </Copy>
        </div>
      </div>
    );
  }
}
DocumentationHelper.propTypes = {};
