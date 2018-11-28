import React, { Component } from 'react';
import Code from '../../Shared/Code';
import DocumentationVariabes from '../../Shared/DocumentationVariables';

export default class FooterDocumentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">Footer</h1>
              <p className="subtitle">
                This component is widely used as a source of navigation on the
                bottom of webpages.
              </p>
              <Code language="js">
                {'import "../bearbones/sass/components/footer/all"'}
              </Code>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Basic</h4>
              <div className="bb-box example full-x">
                <div className="doc-preview">
                  <div className="doc-content">
                    <footer className="bb-footer">
                      <div className="container text-center">
                        <p>
                          <strong>Bearbones</strong> by{' '}
                          <a className="link" href="#example">
                            Daniel Humenko
                          </a>
                          .
                        </p>
                        <p>
                          Code licensed{' '}
                          <a className="link" href="#example">
                            MIT
                          </a>
                          .
                        </p>
                      </div>
                    </footer>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Code language="markup">
                    {`<footer class="bb-footer">
  <div class="container text-center">
    <p>
        <strong>Bearbones</strong> by <a href="#example">Daniel Humenko</a>.
    </p>
    <p>
      Code licensed <a href="#example">MIT</a>.
    </p>
  </div>
</footer>`}
                  </Code>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Colour</h4>
              <div className="bb-box example full-x">
                <div className="doc-preview">
                  <div className="doc-content">
                    <footer className="bb-footer invert">
                      <div className="container text-center">
                        <p>
                          <strong>Bearbones</strong> by{' '}
                          <a className="link" href="#example">
                            Daniel Humenko
                          </a>
                          .
                        </p>
                        <p>
                          Code licensed{' '}
                          <a className="link" href="#example">
                            MIT
                          </a>
                          .
                        </p>
                      </div>
                    </footer>
                  </div>
                  <div className="doc-content">
                    <footer className="bb-footer primary">
                      <div className="container text-center">
                        <p>
                          <strong>Bearbones</strong> by{' '}
                          <a href="#example">Daniel Humenko</a>.
                        </p>
                        <p>
                          Code licensed <a href="#example">MIT</a>.
                        </p>
                      </div>
                    </footer>
                  </div>
                  <div className="doc-content">
                    <footer className="bb-footer secondary">
                      <div className="container text-center">
                        <p>
                          <strong>Bearbones</strong> by{' '}
                          <a href="#example">Daniel Humenko</a>.
                        </p>
                        <p>
                          Code licensed <a href="#example">MIT</a>.
                        </p>
                      </div>
                    </footer>
                  </div>
                  <div className="doc-content">
                    <footer className="bb-footer positive">
                      <div className="container text-center">
                        <p>
                          <strong>Bearbones</strong> by{' '}
                          <a href="#example">Daniel Humenko</a>.
                        </p>
                        <p>
                          Code licensed <a href="#example">MIT</a>.
                        </p>
                      </div>
                    </footer>
                  </div>
                  <div className="doc-content">
                    <footer className="bb-footer negative">
                      <div className="container text-center">
                        <p>
                          <strong>Bearbones</strong> by{' '}
                          <a href="#example">Daniel Humenko</a>.
                        </p>
                        <p>
                          Code licensed <a href="#example">MIT</a>.
                        </p>
                      </div>
                    </footer>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Code language="markup">
                    {`<footer class="bb-footer invert">
  <div class="container text-center">
    <p>
      <strong>Bearbones</strong> by <a href="#example">Daniel Humenko</a>.
    </p>
    <p>
      Code licensed <a href="#example">MIT</a>.
    </p>
  </div>
</footer>`}
                  </Code>
                  <Code language="markup">
                    {`<footer class="bb-footer primary">
  ...
</footer>`}
                  </Code>
                  <Code language="markup">
                    {`<footer class="bb-footer secondary">
  ...
</footer>`}
                  </Code>
                  <Code language="markup">
                    {`<footer class="bb-footer positive">
  ...
</footer>`}
                  </Code>
                  <Code language="markup">
                    {`<footer class="bb-footer negative">
  ...
</footer>`}
                  </Code>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <DocumentationVariabes
            variables={[
              {
                name: '$footer-variant-background',
                value: '$lighter-grey'
              },
              { name: '$footer-variant-color', value: '$base-color' },
              {},
              {
                name: '$footer-box-shadow',
                value: '0 0 1.5rem 0 rgba(10, 10, 10, .1)'
              },
              {},
              {
                name: '$footer-spacing',
                value: '3rem $layout-spacing-x 6rem $layout-spacing-x'
              }
            ]}
          />
        </div>
      </div>
    );
  }
}
