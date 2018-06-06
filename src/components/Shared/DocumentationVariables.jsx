import React, { Component } from 'react';

export default class DocumentationVariables extends Component {
  render() {
    return (
      <div className="column-16 m-y-5">
        <h4 className="title">Variables</h4>
        <p className="subtitle">
          You can use these variables below to personalise this element.
          <br />
          <a className="link secondary" href="/documentation/getting-started">
            Find out more here
          </a>
        </p>
        <div className="column scroll">
          <table className="bb-table doc striped m-t-3">
            <tbody>
              <tr className="font-weight-bold text-sm">
                <td>Name</td>
                <td>Value</td>
              </tr>
              {this.props.variables.map(v => (
                <tr>
                  {v.name ? (
                    <td>
                      <code>{v.name}</code>
                    </td>
                  ) : (
                    <td className="invisible">-</td>
                  )}
                  {v.value ? (
                    <td>
                      <code>{v.value}</code>
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
