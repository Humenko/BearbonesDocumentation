import React, { Component } from 'react';
import Heading from '../../Shared/DocumentationHeading';
import SubHeading from '../../Shared/DocumentationSubHeading';
import DocumentationVariables from '../../Shared/DocumentationVariables';
import MetaTags from '../../Shared/MetaTags';

export default class SpacingDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <Heading title={this.props.heading} subTitle={this.props.subTitle} />
          <div className="bb-grid md">
            <div className="column column-8">
              <SubHeading title="Basic" />
              <p className="subtitle sm">
                <ul>
                  <li>
                    The first section specifies whether you’re targeting the
                    margin or padding.
                  </li>
                  <li>
                    The second section specifies the direction of the spacing.
                  </li>
                  <li>
                    The third section specifies the amount of spacing, relative
                    to the initial variable.
                  </li>
                </ul>
              </p>
            </div>
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
                      <span className="font-weight-bold">m</span> (margin)
                    </td>
                    <td>
                      <span className="font-weight-bold">-</span> (all)
                    </td>
                    <td>
                      <span className="font-weight-bold">0</span> (none)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-weight-bold">p</span> (padding)
                    </td>
                    <td>
                      <span className="font-weight-bold">-t-</span> (top)
                    </td>
                    <td>
                      <span className="font-weight-bold">1</span> (initial -
                      .5rem)
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-r-</span> (right)
                    </td>
                    <td>
                      <span className="font-weight-bold">2</span> (initial -
                      .25rem)
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-b-</span> (bottom)
                    </td>
                    <td>
                      <span className="font-weight-bold">3</span> (initial)
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-l-</span> (left)
                    </td>
                    <td>
                      <span className="font-weight-bold">4</span> (initial +
                      .25rem)
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-x-</span> (horizontal)
                    </td>
                    <td>
                      <span className="font-weight-bold">5</span> (initial +
                      .5rem)
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <span className="font-weight-bold">-y-</span> (vertical)
                    </td>
                    <td>
                      <span className="font-weight-bold">auto</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <DocumentationVariables
            variables={[{ name: '$spacer', value: '1rem' }]}
          />
        </div>
      </div>
    );
  }
}
