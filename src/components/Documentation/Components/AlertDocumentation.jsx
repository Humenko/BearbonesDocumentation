import React, { Component } from 'react';
import Code from '../../Shared/Code';
import Heading from '../../Shared/DocumentationHeading';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import DocumentationVariables from '../../Shared/DocumentationVariables';
import MetaTags from '../../Shared/MetaTags';

export default class AlertDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <Heading
            title={this.props.heading}
            subTitle={this.props.subTitle}
            code='@import "/bearbones/scss/components/alert/all"'
          />
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Basic" />
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <div className="bb-alert">
                      <p>
                        <strong>Alert,</strong> only 8 species of bears are
                        extant.
                      </p>
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-alert">
  <p><strong>Alert,</strong> only 8 species of bears are extant.</p>
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
                    <div className="doc-content">
                      <div className="bb-alert primary">
                        <p>
                          <strong>Alert,</strong> only 8 species of bears are
                          extant.
                        </p>
                      </div>
                    </div>
                    <div className="doc-content">
                      <div className="bb-alert secondary">
                        <p>
                          <strong>Alert,</strong> only 8 species of bears are
                          extant.
                        </p>
                      </div>
                    </div>
                    <div className="doc-content">
                      <div className="bb-alert positive">
                        <p>
                          <strong>Alert,</strong> only 8 species of bears are
                          extant.
                        </p>
                      </div>
                    </div>
                    <div className="doc-content">
                      <div className="bb-alert negative">
                        <p>
                          <strong>Alert,</strong> only 8 species of bears are
                          extant.
                        </p>
                      </div>
                    </div>
                    <div className="doc-content">
                      <div className="bb-alert invert">
                        <p>
                          <strong>Alert,</strong> only 8 species of bears are
                          extant.
                        </p>
                      </div>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<div class="bb-alert primary">
  <p><strong>Alert,</strong> only 8 species of bears are extant.</p>
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-alert secondary">
  <p><strong>Alert,</strong> only 8 species of bears are extant.</p>
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-alert positive">
  <p><strong>Alert,</strong> only 8 species of bears are extant.</p>
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-alert negative">
  <p><strong>Alert,</strong> only 8 species of bears are extant.</p>
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-alert invert">
  <p><strong>Alert,</strong> only 8 species of bears are extant.</p>
</div>`}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Close" />
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <div className="bb-alert">
                      <p>
                        <strong>Alert,</strong> only 8 species of bears are
                        extant.
                      </p>
                      <div className="close" />
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-alert">
  <p><strong>Alert,</strong> only 8 species of bears are extant.</p>
  <div class="close"></div>                        
</div>`}
                  </Code>
                }
              />
            </div>
          </div>
          <DocumentationVariables
            variables={[
              {
                name: '$alert-variant-background',
                value: '$base-variant-background'
              },
              { name: '$alert-variant-color', value: '$base-variant-color' },
              { name: '$alert-variant-border', value: '$base-variant-border' },
              {},
              { name: '$alert-border-radius', value: '$border-radius' },
              { name: '$alert-border-style', value: '$border-style' },
              { name: '$alert-border-width', value: '$border-width' },
              {},
              { name: '$alert-spacing', value: '1rem' }
            ]}
          />
        </div>
      </div>
    );
  }
}
