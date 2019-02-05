import React, { Component } from 'react';
import MetaTags from '../../Shared/MetaTags';

export default class DisplayDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">Display</h1>
              <p className="subtitle">
                Easily be able to toggle through display properties with these
                helper classes.
              </p>
            </div>
          </div>
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
                      <span className="font-weight-bold">d</span>
                    </td>
                    <td>
                      <span className="font-weight-bold">-none</span>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-block</span>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-inline-block</span>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-flex</span>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-inline-flex</span>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-inline</span>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-table</span>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-table-cell</span>
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
