import React, { Component } from 'react';
import Code from '../../Shared/Code';
import DocumentationVariables from '../../Shared/DocumentationVariables';
import MetaTags from '../../Shared/MetaTags';

export default class TableDocumentaion extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">Table</h1>
              <p className="subtitle">
                This component is used to spruce up the HTML table we all know
                and <s>love</s> hate.
              </p>
              <Code language="js">
                {'import "../bearbones/sass/components/table/all"'}
              </Code>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Basic</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="doc-content">
                    <table className="bb-table">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Code language="markup">
                    {`<table class="bb-table">
  <tbody>
    <tr>
      <td>Brown Bear</td>
      <td>Polar Bear</td>
      <td>Black Bear</td>
    </tr>
    <tr>
      <td>Andean Bear</td>
      <td>Panda Bear</td>
      <td>Sloth bear</td>
    </tr>
    <tr>
      <td>Sun Bear</td>
      <td>Atlas Bear</td>
      <td>Grizzly Bear</td>
    </tr>
  </tbody>
</table>`}
                  </Code>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Colours</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="doc-content">
                    <table className="bb-table primary">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="doc-content">
                    <table className="bb-table secondary">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="doc-content">
                    <table className="bb-table positive">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="doc-content">
                    <table className="bb-table negative">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Code language="markup">
                    {`<table class="bb-table primary">
  <tbody>
    <tr>
      <td>Brown Bear</td>
      <td>Polar Bear</td>
      <td>Black Bear</td>
    </tr>
    <tr>
      <td>Andean Bear</td>
      <td>Panda Bear</td>
      <td>Sloth bear</td>
    </tr>
    <tr>
      <td>Sun Bear</td>
      <td>Atlas Bear</td>
      <td>Grizzly Bear</td>
    </tr>
  </tbody>
</table>`}
                  </Code>
                  <Code language="markup">
                    {`<table class="bb-table secondary">
  ...
</table>`}
                  </Code>
                  <Code language="markup">
                    {`<table class="bb-table positive">
  ...
</table>`}
                  </Code>
                  <Code language="markup">
                    {`<table class="bb-table negative">
  ...
</table>`}
                  </Code>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="doc-content">
                    <table className="bb-table">
                      <tbody>
                        <tr>
                          <td className="positive">Brown Bear</td>
                          <td>Polar Bear</td>
                          <td className="negative">Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td className="secondary">Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr className="primary">
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Code language="markup">
                    {`<table class="bb-table primary">
  <tbody>
    <tr>
      <td class="positive">Brown Bear</td>
      <td>Polar Bear</td>
      <td class="negative">Black Bear</td>
    </tr>
    <tr>
      <td>Andean Bear</td>
      <td class="secondary">Panda Bear</td>
      <td>Sloth bear</td>
    </tr>
    <tr class="primary">
      <td>Sun Bear</td>
      <td>Atlas Bear</td>
      <td>Grizzly Bear</td>
    </tr>
  </tbody>
</table>`}
                  </Code>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Styles</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="doc-content">
                    <table className="bb-table striped">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="doc-content">
                    <table className="bb-table primary striped">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="doc-content">
                    <table className="bb-table secondary striped">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="doc-content">
                    <table className="bb-table positive striped">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="doc-content">
                    <table className="bb-table negative striped">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Code language="markup">
                    {`<table class="bb-table striped">
  <tbody>
    <tr>
      <td>Brown Bear</td>
      <td>Polar Bear</td>
      <td>Black Bear</td>
    </tr>
    <tr>
      <td>Andean Bear</td>
      <td>Panda Bear</td>
      <td>Sloth bear</td>
    </tr>
    <tr>
      <td>Sun Bear</td>
      <td>Atlas Bear</td>
      <td>Grizzly Bear</td>
    </tr>
  </tbody>
</table>`}
                  </Code>
                  <Code language="markup">
                    {`<table class="bb-table primary striped">
  ...
</table>`}
                  </Code>
                  <Code language="markup">
                    {`<table class="bb-table secondary striped">
  ...
</table>`}
                  </Code>
                  <Code language="markup">
                    {`<table class="bb-table positive striped">
  ...
</table>`}
                  </Code>
                  <Code language="markup">
                    {`<table class="bb-table negative striped">
  ...
</table>`}
                  </Code>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="doc-content">
                    <table className="bb-table naked">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="doc-content">
                    <table className="bb-table primary naked">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="doc-content">
                    <table className="bb-table secondary naked">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="doc-content">
                    <table className="bb-table positive naked">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="doc-content">
                    <table className="bb-table negative naked">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Code language="markup">
                    {`<table class="bb-table naked">
  <tbody>
    <tr>
      <td>Brown Bear</td>
      <td>Polar Bear</td>
      <td>Black Bear</td>
    </tr>
    <tr>
      <td>Andean Bear</td>
      <td>Panda Bear</td>
      <td>Sloth bear</td>
    </tr>
    <tr>
      <td>Sun Bear</td>
      <td>Atlas Bear</td>
      <td>Grizzly Bear</td>
    </tr>
  </tbody>
</table>`}
                  </Code>
                  <Code language="markup">
                    {`<table class="bb-table primary naked">
  ...
</table>`}
                  </Code>
                  <Code language="markup">
                    {`<table class="bb-table secondary naked">
  ...
</table>`}
                  </Code>
                  <Code language="markup">
                    {`<table class="bb-table positive naked">
  ...
</table>`}
                  </Code>
                  <Code language="markup">
                    {`<table class="bb-table negative naked">
  ...
</table>`}
                  </Code>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">State</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="doc-content">
                    <table className="bb-table hover">
                      <tbody>
                        <tr>
                          <td className="positive">Brown Bear</td>
                          <td>Polar Bear</td>
                          <td className="negative">Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td className="secondary">Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr className="primary">
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Code language="markup">
                    {`<table class="bb-table hover">
  <tbody>
    <tr>
      <td class="positive">Brown Bear</td>
      <td>Polar Bear</td>
      <td class="negative">Black Bear</td>
    </tr>
    <tr>
      <td>Andean Bear</td>
      <td class="secondary">Panda Bear</td>
      <td>Sloth bear</td>
    </tr>
    <tr class="primary">
      <td>Sun Bear</td>
      <td>Atlas Bear</td>
      <td>Grizzly Bear</td>
    </tr>
  </tbody>
</table>`}
                  </Code>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="doc-content">
                    <table className="bb-table">
                      <tbody>
                        <tr>
                          <td className="positive selected">Brown Bear</td>
                          <td className="selected">Polar Bear</td>
                          <td className="negative selected">Black Bear</td>
                        </tr>
                        <tr>
                          <td className="selected">Andean Bear</td>
                          <td className="secondary selected">Panda Bear</td>
                          <td className="selected">Sloth bear</td>
                        </tr>
                        <tr className="primary selected">
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Code language="markup">
                    {`<table class="bb-table">
  <tbody>
    <tr>
      <td class="positive selected">Brown Bear</td>
      <td>Polar Bear</td>
      <td class="negative selected">Black Bear</td>
    </tr>
    <tr>
      <td>Andean Bear</td>
      <td class="secondary selected">Panda Bear</td>
      <td>Sloth bear</td>
    </tr>
    <tr class="primary selected">
      <td>Sun Bear</td>
      <td>Atlas Bear</td>
      <td>Grizzly Bear</td>
    </tr>
  </tbody>
</table>`}
                  </Code>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Helper</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="doc-content">
                    <table className="bb-table full-x">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Code language="markup">
                    {`<table class="bb-table full-x">
  <tbody>
    <tr>
      <td>Brown Bear</td>
      <td>Polar Bear</td>
      <td>Black Bear</td>
    </tr>
    <tr>
      <td>Andean Bear</td>
      <td>Panda Bear</td>
      <td>Sloth bear</td>
    </tr>
    <tr>
      <td>Sun Bear</td>
      <td>Atlas Bear</td>
      <td>Grizzly Bear</td>
    </tr>
  </tbody>
</table>`}
                  </Code>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="doc-content">
                    <table className="bb-table no-border-radius">
                      <tbody>
                        <tr>
                          <td>Brown Bear</td>
                          <td>Polar Bear</td>
                          <td>Black Bear</td>
                        </tr>
                        <tr>
                          <td>Andean Bear</td>
                          <td>Panda Bear</td>
                          <td>Sloth bear</td>
                        </tr>
                        <tr>
                          <td>Sun Bear</td>
                          <td>Atlas Bear</td>
                          <td>Grizzly Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Code language="markup">
                    {`<table class="bb-table no-border-radius">
  <tbody>
    <tr>
      <td>Brown Bear</td>
      <td>Polar Bear</td>
      <td>Black Bear</td>
    </tr>
    <tr>
      <td>Andean Bear</td>
      <td>Panda Bear</td>
      <td>Sloth bear</td>
    </tr>
    <tr>
      <td>Sun Bear</td>
      <td>Atlas Bear</td>
      <td>Grizzly Bear</td>
    </tr>
  </tbody>
</table>`}
                  </Code>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="doc-content">
                    <table className="bb-table">
                      <tbody>
                        <tr>
                          <td className="error">Brown Bear</td>
                          <td>Polar Bear</td>
                          <td className="success">Black Bear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Code language="markup">
                    {`<table class="bb-table">
  <tbody>
    <tr>
      <td class="error">Brown Bear</td>
      <td>Polar Bear</td>
      <td class="success">Black Bear</td>
    </tr>
  </tbody>
</table>`}
                  </Code>
                </div>
              </div>
            </div>
          </div>
          <DocumentationVariables
            variables={[
              { name: '$table-variant-background', value: ' $lighter-grey' },
              {
                name: '$table-variant-color',
                value: ' $base-variant-background'
              },
              {
                name: '$table-variant-border',
                value: ' darken($table-variant-background, 12%)'
              },
              {
                name: '$table-variant-hover',
                value: ' darken($table-variant-background, 12%)'
              },
              {
                name: '$table-variant-active',
                value: ' darken($table-variant-background, 12%)'
              },
              {},
              { name: '$table-border-radius', value: ' $border-radius * 2' },
              { name: '$table-border-style', value: ' $border-style' },
              { name: '$table-border-width', value: ' $border-width / 2' },
              {},
              { name: '$table-spacing-x', value: ' .75rem' },
              { name: '$table-spacing-y', value: ' .75rem' },
              {},
              {
                name: '$table-transition',
                value: ' all $transition-effect $transition-duration'
              }
            ]}
          />
        </div>
      </div>
    );
  }
}
