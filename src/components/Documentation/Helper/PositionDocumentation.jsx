import React, { Component } from 'react';
import Heading from '../../Shared/DocumentationHeading';
import MetaTags from '../../Shared/MetaTags';

export default class PositionDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <Heading title={this.props.heading} subTitle={this.props.subTitle} />
          <div className="bb-grid md">
            <div className="column column-8">
              <table className="bb-table striped full-x">
                <tbody>
                  <tr className="primary font-weight-bold">
                    <td>First</td>
                    <td>Second</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-weight-bold">p</span>
                    </td>
                    <td>
                      <span className="font-weight-bold">-absolute</span>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-fixed</span>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-relative</span>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-static</span>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-sticky</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
