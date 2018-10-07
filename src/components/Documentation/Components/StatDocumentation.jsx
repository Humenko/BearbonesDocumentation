import React, { Component } from 'react';
import Highlight from 'react-highlight';
import DocumentationVariabes from '../../Shared/DocumentationVariables';

export default class PaginationDocumentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">Stat</h1>
              <p className="subtitle">
                This component is used to empathise both the label and value for
                an attribute.
              </p>
              <Highlight className="js">
                {'import "../bearbones/sass/components/stat/all"'}
              </Highlight>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Basic</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="doc-content">
                    <div className="bb-stat">
                      <p className="value">20,000</p>
                      <p className="label">Polar Bears</p>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="bb-stat">
                      <p className="label">Polar Bears</p>
                      <p className="value">20,000</p>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-stat">
  <p class="value">20,000</p>
  <p class="label">Polar Bears</p>  
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-stat">
  <p class="label">Polar Bears</p>
  <p class="value">20,000</p>
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
                  <div className="doc-content">
                    <div className="bb-stat primary">
                      <p className="value text-primary">20,000</p>
                      <p className="label">Polar Bears</p>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="bb-stat secondary">
                      <p className="value text-secondary">20,000</p>
                      <p className="label">Polar Bears</p>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="bb-stat positive">
                      <p className="value text-positive">20,000</p>
                      <p className="label">Polar Bears</p>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="bb-stat negative">
                      <p className="value text-negative">20,000</p>
                      <p className="label">Polar Bears</p>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-stat primary">
  <p class="value">20,000</p>
  <p class="label">Polar Bears</p>  
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-stat secondary">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-stat positive">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-stat negative">
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
              <h4 className="title">Sizes</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="doc-content">
                    <div className="bb-stat xs">
                      <p className="value">20,000</p>
                      <p className="label">Polar Bears</p>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="bb-stat sm">
                      <p className="value">20,000</p>
                      <p className="label">Polar Bears</p>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="bb-stat">
                      <p className="value">20,000</p>
                      <p className="label">Polar Bears</p>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="bb-stat lg">
                      <p className="value">20,000</p>
                      <p className="label">Polar Bears</p>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="bb-stat xl">
                      <p className="value">20,000</p>
                      <p className="label">Polar Bears</p>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-stat xs">
  <p class="value">20,000</p>
  <p class="label">Polar Bears</p>  
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-stat sm">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-stat">
  ... 
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-stat lg">
  ... 
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-stat xl">
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
                  <div className="doc-content">
                    <div className="bb-stat">
                      <p className="value text">
                        Twenty
                        <br />
                        Thousand
                      </p>
                      <p className="label">Polar Bears</p>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-stat">
  <p class="value text">
    Twenty<br />Thousand
  </p>
  <p class="label">Downloads</p>
</div>`}
                  </Highlight>
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
                    <div className="bb-stat horizontal">
                      <p className="value">20,000</p>
                      <p className="label">Polar Bears</p>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-stat horizontal">
  <p class="value">20,000</p>
  <p class="label">Polar Bears</p>  
</div>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h3 className="title">Stat Groups</h3>
              <Highlight className="js">
                {'import "../bearbones/sass/components/stat-group/all"'}
              </Highlight>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Basic</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="doc-content">
                    <div className="bb-stats">
                      <div className="bb-stat">
                        <p className="value">20,000</p>
                        <p className="label">Polar Bears</p>
                      </div>
                      <div className="bb-stat">
                        <p className="label">Polar Bears</p>
                        <p className="value">20,000</p>
                      </div>
                      <div className="bb-stat">
                        <p className="value text">
                          Twenty
                          <br />
                          Thousand
                        </p>
                        <p className="label">Polar Bears</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-stats">
  <div class="bb-stat">
    <p class="value">20,000</p>
    <p class="label">Polar Bears</p>
  </div>
  <div class="bb-stat">
    <p class="label">Polar Bears</p>
    <p class="value">20,000</p>
  </div>
  <div class="bb-stat">
    <p class="value text">
      Twenty<br />Thousand
    </p>
    <p class="label">Polar Bears</p>
  </div>
</div>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Vertical</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="doc-content">
                    <div className="bb-stats vertical">
                      <div className="bb-stat">
                        <p className="value">20,000</p>
                        <p className="label">Polar Bears</p>
                      </div>
                      <div className="bb-stat">
                        <p className="label">Polar Bears</p>
                        <p className="value">20,000</p>
                      </div>
                      <div className="bb-stat">
                        <p className="value text">
                          Twenty
                          <br />
                          Thousand
                        </p>
                        <p className="label">Polar Bears</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-stats vertical">
  <div class="bb-stat">
    <p class="value">20,000</p>
    <p class="label">Polar Bears</p>
  </div>
  <div class="bb-stat">
    <p class="label">Polar Bears</p>
    <p class="value">20,000</p>
  </div>
  <div class="bb-stat">
    <p class="value text">
      Twenty<br />Thousand
    </p>
    <p class="label">Polar Bears</p>
  </div>
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
                name: '$stat-value-font-family',
                value: '$heading-font-family'
              },
              { name: '$stat-value-font-weight', value: '400' },
              { name: '$stat-value-font-size', value: '3rem' },
              { name: '$stat-value-text-transform', value: 'uppercase' },
              {
                name: '$stat-label-font-family',
                value: '$heading-font-family'
              },
              { name: '$stat-label-font-weight', value: '600' },
              {
                name: '$stat-label-font-size',
                value: '$stat-value-font-size / 4'
              },
              { name: '$stat-label-text-transform', value: 'uppercase' },
              { name: '$stat-text-font-weight', value: '600' },
              {
                name: '$stat-text-font-size',
                value: '$stat-value-font-size / 2'
              },
              { name: '$stat-line-height', value: '1em' },
              {},
              { name: '$stat-spacing', value: '1rem' },
              {},
              {
                name: '$stat-value-font-size-xs',
                value: '$stat-value-font-size - 1.5rem'
              },
              {
                name: '$stat-value-font-size-sm',
                value: '$stat-value-font-size - .75rem'
              },
              {
                name: '$stat-value-font-size-lg',
                value: '$stat-value-font-size + .75rem'
              },
              {
                name: '$stat-value-font-size-xl',
                value: '$stat-value-font-size + 1.5rem'
              }
            ]}
          />
        </div>
      </div>
    );
  }
}
