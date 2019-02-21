import React, { Component } from 'react';
import Code from '../../Shared/Code';
import Heading from '../../Shared/DocumentationHeading';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import MetaTags from '../../Shared/MetaTags';

export default class TabDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <Heading
            title={this.props.heading}
            subTitle={this.props.subTitle}
            code='import "/bearbones/scss/components/tab/all"'
          />
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Basic" />
              <p className="subtitle p-b-2">
                To add a tab, you need to simply wrap a list inside a{' '}
                <code>.bb-tab</code> class.
              </p>
              <div className="bb-alert warning m-b-3">
                Bearbones <strong>does not</strong> implement any Javascript.
                Therefore you need to set the active tab with an{' '}
                <code>.active</code> class.
              </div>
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <nav className="bb-tab">
                      <ul>
                        <li className="active">
                          <a className="item" href="#example">
                            Lorem
                          </a>
                        </li>
                        <li>
                          <a className="item" href="#example">
                            Ipsum
                          </a>
                        </li>
                        <li>
                          <a className="item" href="#example">
                            Dolor
                          </a>
                        </li>
                        <li>
                          <a className="item" href="#example">
                            Sit
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<nav class="bb-tab"> 
  <ul>
    <li class="active">
      <a class="item" href="#example">
        Lorem
      </a>
    </li>
    <li>
      <a class="item" href="#example">
        Ipsum
      </a>
    </li>
    <li>
      <a class="item" href="#example">
        Dolor
      </a>
    </li>
    <li>
      <a class="item" href="#example">
        Sit
      </a>
    </li>
  </ul>
</nav>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Colours" />
              <p className="subtitle p-b-2">
                Colours within <code>.bb-tab</code> are simple to use, by adding
                the associated colour to the parent class.
              </p>
              <DocumentationHelper
                content={
                  <>
                    <div className="doc-content">
                      <nav className="bb-tab primary">
                        <ul>
                          <li className="active">
                            <a className="item" href="#example">
                              Lorem
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Ipsum
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Dolor
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Sit
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-tab secondary">
                        <ul>
                          <li className="active">
                            <a className="item" href="#example">
                              Lorem
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Ipsum
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Dolor
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Sit
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-tab positive">
                        <ul>
                          <li className="active">
                            <a className="item" href="#example">
                              Lorem
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Ipsum
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Dolor
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Sit
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>

                    <div className="doc-content">
                      <nav className="bb-tab negative">
                        <ul>
                          <li className="active">
                            <a className="item" href="#example">
                              Lorem
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Ipsum
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Dolor
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Sit
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>

                    <div className="doc-content">
                      <nav className="bb-tab invert">
                        <ul>
                          <li className="active">
                            <a className="item" href="#example">
                              Lorem
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Ipsum
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Dolor
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Sit
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<nav class="bb-tab primary"> 
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-tab secondary"> 
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-tab positive"> 
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-tab negative"> 
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-tab invert"> 
  ...
</nav>`}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Sizes" />
              <DocumentationHelper
                content={
                  <>
                    <div className="doc-content">
                      <nav className="bb-tab xs">
                        <ul>
                          <li className="active">
                            <a className="item" href="#example">
                              Lorem
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Ipsum
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Dolor
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Sit
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-tab sm">
                        <ul>
                          <li className="active">
                            <a className="item" href="#example">
                              Lorem
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Ipsum
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Dolor
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Sit
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-tab lg">
                        <ul>
                          <li className="active">
                            <a className="item" href="#example">
                              Lorem
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Ipsum
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Dolor
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Sit
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>

                    <div className="doc-content">
                      <nav className="bb-tab xl">
                        <ul>
                          <li className="active">
                            <a className="item" href="#example">
                              Lorem
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Ipsum
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Dolor
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Sit
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<nav class="bb-tab xs"> 
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-tab sm"> 
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-tab lg"> 
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-tab xl"> 
  ...
</nav>`}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Alignment" />
              <DocumentationHelper
                content={
                  <>
                    <div className="doc-content">
                      <nav className="bb-tab center">
                        <ul>
                          <li className="active">
                            <a className="item" href="#example">
                              Lorem
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Ipsum
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Dolor
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Sit
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-tab right">
                        <ul>
                          <li className="active">
                            <a className="item" href="#example">
                              Lorem
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Ipsum
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Dolor
                            </a>
                          </li>
                          <li>
                            <a className="item" href="#example">
                              Sit
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<nav class="bb-tab center"> 
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-tab right"> 
  ...
</nav>`}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Helper" />
              <h5 className="m-y-2">Full width</h5>
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <nav className="bb-tab full-x">
                      <ul>
                        <li className="active">
                          <a className="item" href="#example">
                            Lorem
                          </a>
                        </li>
                        <li>
                          <a className="item" href="#example">
                            Ipsum
                          </a>
                        </li>
                        <li>
                          <a className="item" href="#example">
                            Dolor
                          </a>
                        </li>
                        <li>
                          <a className="item" href="#example">
                            Sit
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<nav class="bb-tab full-x"> 
  ...
</nav>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Styles" />
              <h5 className="m-y-2">Naked</h5>
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <nav className="bb-tab naked">
                      <ul>
                        <li className="active">
                          <a className="item" href="#example">
                            Lorem
                          </a>
                        </li>
                        <li>
                          <a className="item" href="#example">
                            Ipsum
                          </a>
                        </li>
                        <li>
                          <a className="item" href="#example">
                            Dolor
                          </a>
                        </li>
                        <li>
                          <a className="item" href="#example">
                            Sit
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<nav className="bb-tab naked">
  ...
</nav>`}
                  </Code>
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
