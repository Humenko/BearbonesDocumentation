import React, { Component } from 'react';
import MetaTags from '../../Shared/MetaTags';

export default class VisibilityDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">{this.props.heading}</h1>
              <p className="subtitle">
                Easily be able to toggle through the visibility of elements with
                these helper classes.
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
                    <td>Third</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-weight-bold">hidden</span>
                    </td>
                    <td>(all)</td>
                    <td>(all)</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-weight-bold">hidden</span>
                    </td>
                    <td>
                      <span className="font-weight-bold">-xs-</span>
                    </td>
                    <td>
                      <span className="font-weight-bold">down</span> (that width
                      and smaller)
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-sm-</span>
                    </td>
                    <td>
                      <span className="font-weight-bold">up</span> (that width
                      and larger)
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-md-</span>
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-lg-</span>
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-xl-</span>
                    </td>
                    <td />
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
