import React, { Component } from 'react';
import Code from '../../Shared/Code';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import DocumentationVariables from '../../Shared/DocumentationVariables';
import MetaTags from '../../Shared/MetaTags';

export default class BreadcrumbDocumentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">Breadcrumb</h1>
              <p className="subtitle">
                A simple component used to display basic navigational structure.
              </p>
              <Code language="js">
                {'import "../bearbones/sass/components/breadcrumb/all"'}
              </Code>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Basic" />
              <DocumentationHelper
                content={
                  <nav className="bb-breadcrumb">
                    <ul>
                      <li className="breadcrumb-item active">
                        <a href="#example">Carnivorans</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#example">Ursidae</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#example">Panda</a>
                      </li>
                    </ul>
                  </nav>
                }
                code={
                  <Code language="markup">
                    {`<nav class="bb-breadcrumb">
  <ul>
    <li class="breadcrumb-item active">
      <a href="#example">Carnivorans</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#example">Ursidae</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#example">Panda</a>
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
              <SubHeading title="Sizes" />
              <DocumentationHelper
                content={
                  <>
                    <nav className="bb-breadcrumb xs">
                      <ul>
                        <li className="breadcrumb-item active">
                          <a href="#example">Carnivorans</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#example">Ursidae</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#example">Panda</a>
                        </li>
                      </ul>
                    </nav>
                    <nav className="bb-breadcrumb sm">
                      <ul>
                        <li className="breadcrumb-item active">
                          <a href="#example">Carnivorans</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#example">Ursidae</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#example">Panda</a>
                        </li>
                      </ul>
                    </nav>
                    <nav className="bb-breadcrumb">
                      <ul>
                        <li className="breadcrumb-item active">
                          <a href="#example">Carnivorans</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#example">Ursidae</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#example">Panda</a>
                        </li>
                      </ul>
                    </nav>
                    <nav className="bb-breadcrumb lg">
                      <ul>
                        <li className="breadcrumb-item active">
                          <a href="#example">Carnivorans</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#example">Ursidae</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#example">Panda</a>
                        </li>
                      </ul>
                    </nav>
                    <nav className="bb-breadcrumb xl">
                      <ul>
                        <li className="breadcrumb-item active">
                          <a href="#example">Carnivorans</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#example">Ursidae</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#example">Panda</a>
                        </li>
                      </ul>
                    </nav>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<nav className="bb-breadcrumb xs">
  <ul>
    <li class="breadcrumb-item active">
      <a href="#example">Carnivorans</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#example">Ursidae</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#example">Panda</a>
    </li>
  </ul>
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-breadcrumb sm">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-breadcrumb">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-breadcrumb lg">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-breadcrumb xl">
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
              <SubHeading title="Scroll" />
              <DocumentationHelper
                content={
                  <nav className="bb-breadcrumb scroll">
                    <ul>
                      <li className="breadcrumb-item active">
                        <a href="#example">Carnivorans</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#example">Ursidae</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#example">Panda</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#example">Brown Bear</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#example">Polar Bear</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#example">Sloth Bear</a>
                      </li>
                    </ul>
                  </nav>
                }
                code={
                  <Code language="markup">
                    {`<nav class="bb-breadcrumb scroll">
  <ul>
    <li class="breadcrumb-item active">
      <a href="#example">Carnivorans</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#example">Ursidae</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#example">Panda</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#example">Brown Bear</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#example">Polar Bear</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#example">Sloth Bear</a>
    </li>
  </ul>
</nav>`}
                  </Code>
                }
              />
            </div>
          </div>
          <DocumentationVariables
            variables={[
              { name: '$breadcrumb-variant-background', value: 'transparent' },
              { name: '$breadcrumb-variant-color', value: '$base-color' },
              { name: '$breadcrumb-variant-active', value: '$secondary-color' },
              { name: '$breadcrumb-divider', value: '|' },
              { name: '$breadcrumb-variant-divider', value: '$base-color' },
              {},
              { name: '$breadcrumb-item-spacing', value: '1rem' },
              { name: '$breadcrumb-spacing', value: '1rem' }
            ]}
          />
        </div>
      </div>
    );
  }
}
