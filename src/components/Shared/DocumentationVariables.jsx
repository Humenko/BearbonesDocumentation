import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SubHeading from '../Shared/DocumentationSubHeading';

export default class DocumentationVariables extends Component {
  render() {
    return (
      <div className="column-16 m-y-5">
        <SubHeading title="Variables" />
        <p className="subtitle">
          You can use these variables below to personalise this element.
          <br />
          <a className="link secondary" href="/documentation/getting-started">
            Find out more here
          </a>
        </p>
        <div className="column scroll">
          <table className="bb-table full-x doc striped m-y-5">
            <tbody>
              <tr className="font-weight-bold text-sm">
                <td>Name</td>
                <td>Value</td>
              </tr>
              {this.props.variables.map((variable, i) => (
                <tr key={i}>
                  {variable.name ? (
                    <td>
                      <code>{variable.name}</code>
                    </td>
                  ) : (
                    <td className="invisible">-</td>
                  )}
                  {variable.value ? (
                    <td>
                      <code>{variable.value}</code>
                    </td>
                  ) : (
                    <td className="invisible">-</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
DocumentationVariables.propTypes = {
  variables: PropTypes.array.isRequired
};
