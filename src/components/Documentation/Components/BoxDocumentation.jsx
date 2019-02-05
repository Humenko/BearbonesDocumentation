import React, { Component } from 'react';
import Code from '../../Shared/Code';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import DocumentationVariables from '../../Shared/DocumentationVariables';
import MetaTags from '../../Shared/MetaTags';

export default class BoxDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">{this.props.heading}</h1>
              <p className="subtitle">
                This component is used as a basic container that full widths to
                any element it is within.
              </p>
              <Code language="js">
                {'import "../bearbones/sass/components/box/all"'}
              </Code>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Basic" />
              <DocumentationHelper
                content={
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
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-box">
  <h4 class="title">
    The giant panda is actually a bear.
  </h4>
  <p class="subtitle">
    The giant panda also known as panda bear or simply
    panda, is a bear native to south central China.
  </p>
</div>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Colours" />
              <DocumentationHelper
                content={
                  <>
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
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<div class="bb-box primary">
  <h4 class="title">
    The giant panda is actually a bear.
  </h4>
  <p class="subtitle">
    The giant panda also known as panda bear or simply
    panda, is a bear native to south central China.
  </p>
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-box secondary">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-box positive">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-box negative">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-box invert">
  ...
</div>`}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Styles" />
              <DocumentationHelper
                content={
                  <>
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
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<div class="bb-box outline">
  <h4 class="title">
    The giant panda is actually a bear.
  </h4>
  <p class="subtitle">
    The giant panda also known as panda bear or simply
    panda, is a bear native to south central China.
  </p>
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-box outline primary">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-box outline secondary">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-box outline positive">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-box outline negative">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-box outline invert">
  ...
</div>`}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <DocumentationVariables
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
