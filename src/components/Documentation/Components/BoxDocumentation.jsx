import React, { Component } from 'react';
import Highlight from 'react-highlight';
import DocumentationVariabes from '../../Shared/DocumentationVariables';

export default class BoxDocumentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">Box</h1>
              <p className="subtitle">
                This component is used as a basic container that full widths to
                any element it is within.
              </p>
              <Highlight className="js">
                {'import "../bearbones/sass/components/box/all"'}
              </Highlight>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Basic</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="doc-content">
                    <div className="column column-10">
                      <div className="bb-box">
                        <h4 className="title">
                          The giant panda is actually a bear.
                        </h4>
                        <p className="subtitle">
                          The giant panda also known as panda bear or simply
                          panda, is a bear native to south central China.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-box">
  <h4 class="title">
    The giant panda is actually a bear.
  </h4>
  <p class="subtitle">
    The giant panda also known as panda bear or simply
    panda, is a bear native to south central China.
  </p>
</div>`}
                  </Highlight>
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
                  <div className="column column-10">
                    <div className="bb-box primary">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box secondary">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box positive">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box negative">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box invert">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-box primary">
  <h4 class="title">
    The giant panda is actually a bear.
  </h4>
  <p class="subtitle">
    The giant panda also known as panda bear or simply
    panda, is a bear native to south central China.
  </p>
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-box secondary">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-box positive">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-box negative">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-box invert">
  ...
</div>`}
                  </Highlight>
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
                  <div className="column column-10">
                    <div className="bb-box outline">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box outline primary">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box outline secondary">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box outline positive">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box outline negative">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                  <div className="column column-10">
                    <div className="bb-box outline invert">
                      <h4>The giant panda is actually a bear.</h4>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-box outline">
  <h4 class="title">
    The giant panda is actually a bear.
  </h4>
  <p class="subtitle">
    The giant panda also known as panda bear or simply
    panda, is a bear native to south central China.
  </p>
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-box outline primary">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-box outline secondary">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-box outline positive">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-box outline negative">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-box outline invert">
  ...
</div>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <DocumentationVariabes
            variables={[
              {
                name: '$box-variant-background',
                value: '$base-variant-background'
              },
              { name: '$box-variant-color', value: '$base-variant-color' },
              { name: '$box-variant-border', value: '$base-variant-border' },
              {},
              { name: '$box-border-radius', value: '$border-radius' },
              { name: '$box-border-style', value: '$border-style' },
              { name: '$box-border-width', value: '$border-width' },
              {},
              { name: '$box-spacing-x', value: '1rem' },
              { name: '$box-spacing-y', value: '1.5rem' }
            ]}
          />
        </div>
      </div>
    );
  }
}
