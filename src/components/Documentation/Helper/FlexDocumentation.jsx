import React, { Component } from 'react';
import Heading from '../../Shared/DocumentationHeading';
import MetaTags from '../../Shared/MetaTags';

export default class FlexDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <Heading title={this.props.heading} subTitle={this.props.subTitle} />
          <div className="bb-grid md">
            <div className="column column-8 scroll">
              <table className="bb-table striped full-x">
                <tbody>
                  <tr className="primary font-weight-bold">
                    <td>Name</td>
                    <td>Value</td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>flex-first</code>
                      </span>
                    </td>
                    <td>
                      <span>order: -1</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>flex-last</code>
                      </span>
                    </td>
                    <td>
                      <span>order: 1</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>flex-unordered</code>
                      </span>
                    </td>
                    <td>
                      <span>order: 0</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>flex-row</code>
                      </span>
                    </td>
                    <td>
                      <span>flex-direction: row</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>flex-column</code>
                      </span>
                    </td>
                    <td>
                      <span>flex-direction: column</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>flex-row-reverse</code>
                      </span>
                    </td>
                    <td>
                      <span>flex-direction: row-reverse</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>flex-column-reverse</code>
                      </span>
                    </td>
                    <td>
                      <span>flex-direction: column-reverse</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>flex-wrap</code>
                      </span>
                    </td>
                    <td>
                      <span>flex-wrap: wrap</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>flex-nowrap</code>
                      </span>
                    </td>
                    <td>
                      <span>flex-wrap: nowrap</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>flex-wrap-reverse</code>
                      </span>
                    </td>
                    <td>
                      <span>flex-wrap: wrap-reverse</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>flex-1</code>
                      </span>
                    </td>
                    <td>
                      <span>flex: 1</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>justify-content-start</code>
                      </span>
                    </td>
                    <td>
                      <span>justify-content: flex-start</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>justify-content-end</code>
                      </span>
                    </td>
                    <td>
                      <span>justify-content: flex-end</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>justify-content-center</code>
                      </span>
                    </td>
                    <td>
                      <span>justify-content: center</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>justify-content-between</code>
                      </span>
                    </td>
                    <td>
                      <span>justify-content: space-between</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>justify-content-around</code>
                      </span>
                    </td>
                    <td>
                      <span>justify-content: space-around</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-items-start</code>
                      </span>
                    </td>
                    <td>
                      <span>align-items: flex-start</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-items-end</code>
                      </span>
                    </td>
                    <td>
                      <span>align-items: flex-end</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-items-center</code>
                      </span>
                    </td>
                    <td>
                      <span>align-items: center</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-items-baseline</code>
                      </span>
                    </td>
                    <td>
                      <span>align-items: baseline</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-items-stretch</code>
                      </span>
                    </td>
                    <td>
                      <span>align-items: stretch</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-content-start</code>
                      </span>
                    </td>
                    <td>
                      <span>align-content: flex-start</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-content-end</code>
                      </span>
                    </td>
                    <td>
                      <span>align-content: flex-end</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-content-center</code>
                      </span>
                    </td>
                    <td>
                      <span>align-content: center</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-content-between</code>
                      </span>
                    </td>
                    <td>
                      <span>align-content: space-between</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-content-around</code>
                      </span>
                    </td>
                    <td>
                      <span>align-content: space-around</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-content-stretch</code>
                      </span>
                    </td>
                    <td>
                      <span>align-content: stretch</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-self-auto</code>
                      </span>
                    </td>
                    <td>
                      <span>align-self: auto</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-self-start</code>
                      </span>
                    </td>
                    <td>
                      <span>align-self: flex-start</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-self-end</code>
                      </span>
                    </td>
                    <td>
                      <span>align-self: flex-end</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-self-center</code>
                      </span>
                    </td>
                    <td>
                      <span>align-self: center</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-self-baseline</code>
                      </span>
                    </td>
                    <td>
                      <span>align-self: baseline</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <code>align-self-stretch</code>
                      </span>
                    </td>
                    <td>
                      <span>align-self: stretch</span>
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
