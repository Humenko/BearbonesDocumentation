import React, { Component } from 'react';
import Code from '../../Shared/Code';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import DocumentationVariables from '../../Shared/DocumentationVariables';
import MetaTags from '../../Shared/MetaTags';

export default class FooterDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
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
              <SubHeading title="Basic" />
              <DocumentationHelper
                className="full-x"
                content={
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
                }
                code={
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
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Colours" />
              <DocumentationHelper
                className="full-x"
                content={
                  <>
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
                  </>
                }
                code={
                  <>
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
                  </>
                }
              />
            </div>
          </div>
          <DocumentationVariables
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
