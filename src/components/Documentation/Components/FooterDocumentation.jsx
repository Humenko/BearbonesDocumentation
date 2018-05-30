import React, { Component } from 'react';
import Highlight from 'react-highlight';

export default class FooterDocumentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h2 className="title">Footer</h2>
              <p className="subtitle">
                This component is widely used on websites.
              </p>
              <Highlight className="js">
                {'import "../bearbones/sass/components/footer/all"'}
              </Highlight>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Basic</h4>
              <div className="bb-box example full-x">
                <div className="doc-preview">
                  <div className="content">
                    <footer className="bb-footer">
                      <div className="container">
                        <div className="text-center">
                          <p className="text-doc m-b-3">
                            <strong>Bearbones</strong> by{' '}
                            <a className="link" href="#example">
                              Daniel Humenko
                            </a>.
                          </p>
                        </div>
                        <p className="text-doc text-center">
                          Code licensed{' '}
                          <a className="link" href="#example">
                            MIT
                          </a>.
                        </p>
                      </div>
                    </footer>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<footer className="bb-footer">
  <div className="container">
    <div className="text-center">
      <p className="m-b-3">
        <strong>Bearbones</strong> by <a href="#example">Daniel Humenko</a>.
      </p>
    </div>
    <p className="text-center">
      Code licensed <a href="#example">MIT</a>.
    </p>
  </div>
</footer>`}
                  </Highlight>
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
                  <div className="content">
                    <footer className="bb-footer invert">
                      <div className="container">
                        <div className="text-center">
                          <p className="m-b-3">
                            <strong>Bearbones</strong> by{' '}
                            <a className="link" href="#example">
                              Daniel Humenko
                            </a>.
                          </p>
                        </div>
                        <p className="text-center">
                          Code licensed{' '}
                          <a className="link" href="#example">
                            MIT
                          </a>.
                        </p>
                      </div>
                    </footer>
                  </div>
                  <div className="content">
                    <footer className="bb-footer primary">
                      <div className="container">
                        <div className="text-center">
                          <p className="m-b-3">
                            <strong>Bearbones</strong> by{' '}
                            <a href="#example">Daniel Humenko</a>.
                          </p>
                        </div>
                        <p className="text-center">
                          Code licensed <a href="#example">MIT</a>.
                        </p>
                      </div>
                    </footer>
                  </div>
                  <div className="content">
                    <footer className="bb-footer secondary">
                      <div className="container">
                        <div className="text-center">
                          <p className="m-b-3">
                            <strong>Bearbones</strong> by{' '}
                            <a href="#example">Daniel Humenko</a>.
                          </p>
                        </div>
                        <p className="text-center">
                          Code licensed <a href="#example">MIT</a>.
                        </p>
                      </div>
                    </footer>
                  </div>
                  <div className="content">
                    <footer className="bb-footer positive">
                      <div className="container">
                        <div className="text-center">
                          <p className="m-b-3">
                            <strong>Bearbones</strong> by{' '}
                            <a href="#example">Daniel Humenko</a>.
                          </p>
                        </div>
                        <p className="text-center">
                          Code licensed <a href="#example">MIT</a>.
                        </p>
                      </div>
                    </footer>
                  </div>
                  <div className="content">
                    <footer className="bb-footer negative">
                      <div className="container">
                        <div className="text-center">
                          <p className="m-b-3">
                            <strong>Bearbones</strong> by{' '}
                            <a href="#example">Daniel Humenko</a>.
                          </p>
                        </div>
                        <p className="text-center">
                          Code licensed <a href="#example">MIT</a>.
                        </p>
                      </div>
                    </footer>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<footer className="bb-footer invert">
  <div className="container">
    <div className="text-center">
      <p className="m-b-3">
        <strong>Bearbones</strong> by <a className="link" href="#example">Daniel Humenko</a>.
      </p>
    </div>
    <p className="text-center">
      Code licensed <a className="link" href="#example">MIT</a>.
    </p>
  </div>
</footer>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<footer className="bb-footer primary">
  <div className="container">
    <div className="text-center">
      <p className="m-b-3">
        <strong>Bearbones</strong> by <a className="link" href="#example">Daniel Humenko</a>.
      </p>
    </div>
    <p className="text-center">
      Code licensed <a className="link" href="#example">MIT</a>.
    </p>
  </div>
</footer>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<footer className="bb-footer secondary">
  <div className="container">
    <div className="text-center">
      <p className="m-b-3">
        <strong>Bearbones</strong> by <a className="link" href="#example">Daniel Humenko</a>.
      </p>
    </div>
    <p className="text-center">
      Code licensed <a className="link" href="#example">MIT</a>.
    </p>
  </div>
</footer>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<footer className="bb-footer positive">
  <div className="container">
    <div className="text-center">
      <p className="m-b-3">
        <strong>Bearbones</strong> by <a className="link" href="#example">Daniel Humenko</a>.
      </p>
    </div>
    <p className="text-center">
      Code licensed <a className="link" href="#example">MIT</a>.
    </p>
  </div>
</footer>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<footer className="bb-footer negative">
  <div className="container">
    <div className="text-center">
      <p className="m-b-3">
        <strong>Bearbones</strong> by <a className="link" href="#example">Daniel Humenko</a>.
      </p>
    </div>
    <p className="text-center">
      Code licensed <a className="link" href="#example">MIT</a>.
    </p>
  </div>
</footer>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
