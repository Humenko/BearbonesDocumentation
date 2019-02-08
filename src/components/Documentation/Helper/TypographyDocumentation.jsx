import React, { Component } from 'react';
import Code from '../../Shared/Code';
import Heading from '../../Shared/DocumentationHeading';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import MetaTags from '../../Shared/MetaTags';

export default class TypographyDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <Heading title={this.props.heading} subTitle={this.props.subTitle} />
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Colours" />
              <DocumentationHelper
                content={
                  <>
                    <p className="text-primary">Primary</p>
                    <p className="text-secondary">Secondary</p>
                    <p className="text-positive">Positive</p>
                    <p className="text-negative">Negative</p>
                    <p className="text-invert">Invert</p>
                    <p className="text-white">White</p>
                    <p className="text-light-grey">Light Grey</p>
                    <p className="text-lighter-grey">Lighter Grey</p>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<p class="text-primary">Primary</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-secondary">Secondary</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-positive">Positive</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-negative">Negative</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-invert">Invert</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-white">White</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-light-grey">Light Grey</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-lighter-grey">Lighter Grey</p>'}
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
                    <p className="text-xs">Extra small</p>
                    <p className="text-sm">Small</p>
                    <p className="text-md">Medium</p>
                    <p className="text-lg">Large</p>
                    <p className="text-xl">Extra large</p>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<p class="text-xs">Extra small</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-sm">Small</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-md">Medium</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-lg">Large</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-xl">Extra large</p>'}
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
                    <p className="text-left">Left</p>
                    <p className="text-center">Center</p>
                    <p className="text-right">Right</p>
                    <p className="text-justify">Justified</p>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<p class="text-left">Left</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-center">Center</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-right">Right</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-justify">Justified</p>'}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Transform" />
              <DocumentationHelper
                content={
                  <>
                    <p className="text-capitalize">Capitalize</p>
                    <p className="text-lowercase">Lowercase</p>
                    <p className="text-uppercase">Uppercase</p>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<p class="text-capitalize">Capitalize</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-lowercase">Lowercase</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-uppercase">Uppercase</p>'}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Decoration" />
              <DocumentationHelper
                content={
                  <>
                    <p className="text-overline">Overline</p>
                    <p className="text-line-through">Line through</p>
                    <p className="text-underline">Underline</p>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<p class="text-overline">Overline</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-line-through">Line through</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="text-underline">Underline</p>'}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Style" />
              <DocumentationHelper
                content={<p className="text-italic">Italic</p>}
                code={
                  <Code language="markup">
                    {'<p class="text-italic">Italic</p>'}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Font Family" />
              <DocumentationHelper
                content={
                  <>
                    <p className="font-family-body">Body</p>
                    <p className="font-family-heading">Heading</p>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<p class="font-family-body">Body</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="font-family-heading">Heading</p>'}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Weight" />
              <DocumentationHelper
                content={
                  <>
                    <p className="font-weight-light">Light</p>
                    <p className="font-weight-normal">Normal</p>
                    <p className="font-weight-bold">Bold</p>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<p class="font-weight-light">Body</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="font-weight-normal">Heading</p>'}
                    </Code>
                    <Code language="markup">
                      {'<p class="font-weight-bold">Bold</p>'}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
