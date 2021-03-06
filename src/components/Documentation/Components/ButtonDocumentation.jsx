import { faPawClaws } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Code from '../../Shared/Code';
import Heading from '../../Shared/DocumentationHeading';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import DocumentationVariables from '../../Shared/DocumentationVariables';
import MetaTags from '../../Shared/MetaTags';

export default class ButtonDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <Heading
            title={this.props.heading}
            subTitle={this.props.subTitle}
            code='@import "/bearbones/scss/components/button/all"'
          />
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Basic" />
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <button className="bb-btn">Button</button>
                    <a href="#example" className="bb-btn m-x-2">
                      Anchor
                    </a>
                    <input className="bb-btn" type="submit" value="Input" />
                  </div>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<button class="bb-btn">Button</button>'}
                    </Code>
                    <Code language="markup">
                      {'<a class="bb-btn">Anchor</a>'}
                    </Code>
                    <Code language="markup">
                      {'<input class="bb-btn" type="submit" value="Input" />'}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Colours" />
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <button className="bb-btn primary">Primary</button>
                    <button className="bb-btn secondary m-x-2">
                      Secondary
                    </button>
                    <button className="bb-btn positive">Positive</button>
                    <button className="bb-btn negative m-x-2">Negative</button>
                    <button className="bb-btn invert">Invert</button>
                  </div>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<button class="bb-btn primary">Primary</button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn secondary">Secondary</button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn positive">Positive</button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn negative">Negative</button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn invert">Invert</button>'}
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
                      <button className="bb-btn xs">Extra small</button>
                    </div>
                    <div className="doc-content">
                      <button className="bb-btn sm">Small</button>
                    </div>
                    <div className="doc-content">
                      <button className="bb-btn">Medium</button>
                    </div>
                    <div className="doc-content">
                      <button className="bb-btn lg">Large</button>
                    </div>
                    <div className="doc-content">
                      <button className="bb-btn xl">Extra large</button>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<button class="bb-btn xs">Extra small</button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn sm">Small</button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn">Medium</button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn lg">Large</button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn xl">Extra large</button>'}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Styles" />
              <h5 className="m-y-2">Outline</h5>
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <button className="bb-btn outline">Default</button>
                    <button className="bb-btn outline primary m-x-2">
                      Primary
                    </button>
                    <button className="bb-btn outline secondary">
                      Secondary
                    </button>
                    <button className="bb-btn outline positive m-x-2">
                      Positive
                    </button>
                    <button className="bb-btn outline negative">
                      Negative
                    </button>
                    <button className="bb-btn outline invert m-l-2">
                      Invert
                    </button>
                  </div>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<button class="bb-btn outline">Default</button>'}
                    </Code>
                    <Code language="markup">
                      {
                        '<button class="bb-btn outline primary">Primary</button>'
                      }
                    </Code>
                    <Code language="markup">
                      {
                        '<button class="bb-btn outline secondary">Secondary</button>'
                      }
                    </Code>
                    <Code language="markup">
                      {
                        '<button class="bb-btn outline positive">Positive</button>'
                      }
                    </Code>
                    <Code language="markup">
                      {
                        '<button class="bb-btn outline negative">Negative</button>'
                      }
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn outline invert">Invert</button>'}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h5 className="m-y-2">Invert</h5>
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <button className="bb-btn inverted">Default</button>
                    <button className="bb-btn inverted primary m-x-2">
                      Primary
                    </button>
                    <button className="bb-btn inverted secondary">
                      Secondary
                    </button>
                    <button className="bb-btn inverted positive m-x-2">
                      Positive
                    </button>
                    <button className="bb-btn inverted negative">
                      Negative
                    </button>
                    <button className="bb-btn inverted invert m-l-2">
                      Invert
                    </button>
                  </div>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<button class="bb-btn inverted">Default</button>'}
                    </Code>
                    <Code language="markup">
                      {
                        '<button class="bb-btn inverted primary">Primary</button>'
                      }
                    </Code>
                    <Code language="markup">
                      {
                        '<button class="bb-btn inverted secondary">Secondary</button>'
                      }
                    </Code>
                    <Code language="markup">
                      {
                        '<button class="bb-btn inverted positive">Positive</button>'
                      }
                    </Code>
                    <Code language="markup">
                      {
                        '<button class="bb-btn inverted negative">Negative</button>'
                      }
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn inverted invert">Invert</button>'}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="State" />
              <h5 className="m-y-2">Loading</h5>
              <DocumentationHelper
                content={
                  <>
                    <div className="doc-content">
                      <button className="bb-btn loading">Loading</button>
                      <button className="bb-btn loading primary m-x-2">
                        Loading
                      </button>
                      <button className="bb-btn loading secondary">
                        Loading
                      </button>
                      <button className="bb-btn loading positive m-x-2">
                        Loading
                      </button>
                      <button className="bb-btn loading negative">
                        Loading
                      </button>
                      <button className="bb-btn loading invert m-l-2">
                        Loading
                      </button>
                    </div>
                    <div className="doc-content">
                      <button className="bb-btn loading outline">
                        Loading
                      </button>
                      <button className="bb-btn loading outline primary m-x-2">
                        Loading
                      </button>
                      <button className="bb-btn loading outline secondary">
                        Loading
                      </button>
                      <button className="bb-btn loading outline positive m-x-2">
                        Loading
                      </button>
                      <button className="bb-btn loading outline negative">
                        Loading
                      </button>
                      <button className="bb-btn loading outline invert m-l-2">
                        Loading
                      </button>
                    </div>
                  </>
                }
                code={
                  <Code language="markup">
                    {'<button class="bb-btn loading">Loading</button>'}
                  </Code>
                }
              />
            </div>
            <div className="column column-16">
              <h5 className="m-y-2">Disabled</h5>
              <DocumentationHelper
                content={
                  <>
                    <div className="doc-content">
                      <button disabled className="bb-btn disabled">
                        Disabled
                      </button>
                      <button
                        disabled
                        className="bb-btn disabled primary m-x-2"
                      >
                        Disabled
                      </button>
                      <button disabled className="bb-btn disabled secondary">
                        Disabled
                      </button>
                      <button
                        disabled
                        className="bb-btn disabled positive m-x-2"
                      >
                        Disabled
                      </button>
                      <button disabled className="bb-btn disabled negative">
                        Disabled
                      </button>
                      <button disabled className="bb-btn disabled invert m-l-2">
                        Disabled
                      </button>
                    </div>
                    <div className="doc-content">
                      <button disabled className="bb-btn disabled outline">
                        Disabled
                      </button>
                      <button
                        disabled
                        className="bb-btn disabled outline primary m-x-2"
                      >
                        Disabled
                      </button>
                      <button
                        disabled
                        className="bb-btn disabled outline secondary"
                      >
                        Disabled
                      </button>
                      <button
                        disabled
                        className="bb-btn disabled outline positive m-x-2"
                      >
                        Disabled
                      </button>
                      <button
                        disabled
                        className="bb-btn disabled outline negative"
                      >
                        Disabled
                      </button>
                      <button
                        disabled
                        className="bb-btn disabled outline invert m-l-2"
                      >
                        Disabled
                      </button>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<button class="bb-btn disabled">Disabled</button>'}
                    </Code>
                    <Code language="markup">
                      {'<button disabled class="bb-btn">Disabled</button>'}
                    </Code>
                  </>
                }
              />
            </div>
            <div className="column column-16">
              <h5 className="m-y-2">Active</h5>
              <DocumentationHelper
                content={
                  <>
                    <div className="doc-content">
                      <button className="bb-btn active">Active</button>
                      <button className="bb-btn active primary m-x-2">
                        Active
                      </button>
                      <button className="bb-btn active secondary">
                        Active
                      </button>
                      <button className="bb-btn active positive m-x-2">
                        Active
                      </button>
                      <button className="bb-btn active negative">Active</button>
                      <button className="bb-btn active invert m-l-2">
                        Active
                      </button>
                    </div>
                    <div className="doc-content">
                      <button className="bb-btn active outline">Active</button>
                      <button className="bb-btn active outline primary m-x-2">
                        Active
                      </button>
                      <button className="bb-btn active outline secondary">
                        Active
                      </button>
                      <button className="bb-btn active outline positive m-x-2">
                        Active
                      </button>
                      <button className="bb-btn active outline negative">
                        Active
                      </button>
                      <button className="bb-btn active outline invert m-l-2">
                        Active
                      </button>
                    </div>
                  </>
                }
                code={
                  <Code language="markup">
                    {'<button class="bb-btn active">Active</button>'}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Icons" />
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <button className="bb-btn icon">
                      <span>
                        <FontAwesomeIcon icon={faPawClaws} />
                      </span>
                    </button>
                    <button className="bb-btn m-x-2 icon">
                      Icon
                      <span className="p-l-2">
                        <FontAwesomeIcon icon={faPawClaws} />
                      </span>
                    </button>
                    <button className="bb-btn icon">
                      <span className="p-r-2">
                        <FontAwesomeIcon icon={faPawClaws} />
                      </span>
                      Icon
                    </button>
                  </div>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<button class="bb-btn icon">
  <span>
    <i class="fas fa-paw-claws"></i>
  </span>
</button>`}
                    </Code>
                    <Code language="markup">
                      {`<button class="bb-btn icon">Icon
  <span class="p-l-2">
    <i class="fas fa-paw-claws"></i>
  </span>
</button>`}
                    </Code>
                    <Code language="markup">
                      {`<button class="bb-btn icon">
  <span class="p-l-2">
    <i class="fas fa-paw-claws"></i>
  </span>
Icon</button>`}
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
                    <button className="bb-btn full-x primary">
                      Full width
                    </button>
                  </div>
                }
                code={
                  <Code language="markup">
                    {'<button class="bb-btn full-x">Full width</button>'}
                  </Code>
                }
              />
            </div>
            <div className="column column-16">
              <h5 className="m-y-2">No border radius</h5>
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <button className="bb-btn no-border-radius primary">
                      No border radius
                    </button>
                  </div>
                }
                code={
                  <Code language="markup">
                    {
                      '<button class="bb-btn no-border-radius">No border radius</button>'
                    }
                  </Code>
                }
              />
            </div>
            <div className="column column-16">
              <h5 className="m-y-2">Link</h5>
              <DocumentationHelper
                content={
                  <>
                    <a href="#example" className="link">
                      Link
                    </a>
                    <a href="#example" className="link primary m-x-2">
                      Link
                    </a>
                    <a href="#example" className="link secondary">
                      Link
                    </a>
                    <a href="#example" className="link positive m-x-2">
                      Link
                    </a>
                    <a href="#example" className="link negative">
                      Link
                    </a>
                    <a href="#example" className="link invert m-l-2">
                      Link
                    </a>
                  </>
                }
                code={
                  <Code language="markup">{'<a class="link">Link</a>'}</Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Close" />
              <DocumentationHelper
                content={
                  <>
                    <button className="close" />
                    <button className="close primary m-x-2" />
                    <button className="close secondary" />
                    <button className="close positive m-x-2" />
                    <button className="close negative" />
                    <button className="close invert m-l-2" />
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<button class="bb-btn close"></button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn close primary"></button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn close secondary"></button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn close positive"></button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn close negative"></button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn close invert"></button>'}
                    </Code>
                  </>
                }
              />
            </div>
            <div className="column column-16">
              <DocumentationHelper
                content={
                  <>
                    <button className="close xs" />
                    <button className="close sm m-x-2" />
                    <button className="close" />
                    <button className="close lg m-x-2" />
                    <button className="close xl" />
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<button class="bb-btn close xs"></button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn close sm"></button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn close"></button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn close lg"></button>'}
                    </Code>
                    <Code language="markup">
                      {'<button class="bb-btn close xl"></button>'}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h2>Button Groups</h2>
              <Code language="js">
                {'import "/bearbones/scss/components/button-group/all"'}
              </Code>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Basic" />
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <div className="bb-btns">
                      <button className="bb-btn primary">Button</button>
                      <button className="bb-btn secondary">Button</button>
                      <button className="bb-btn positive">Button</button>
                      <button className="bb-btn negative">Button</button>
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-btns">
  <button class="bb-btn primary">Button</button>
  <button class="bb-btn secondary">Button</button>
  <button class="bb-btn positive">Button</button>
  <button class="bb-btn negative">Button</button>
</div>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Vertical" />
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <div className="bb-btns vertical">
                      <button className="bb-btn primary">Button</button>
                      <button className="bb-btn secondary">Button</button>
                      <button className="bb-btn positive">Button</button>
                      <button className="bb-btn negative">Button</button>
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-btns vertical">
  <button class="bb-btn primary">Button</button>
  <button class="bb-btn secondary">Button</button>
  <button class="bb-btn positive">Button</button>
  <button class="bb-btn negative">Button</button>
</div>`}
                  </Code>
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
                    <div className="bb-btns full-x">
                      <button className="bb-btn primary">Full width</button>
                      <button className="bb-btn secondary">Full width</button>
                      <button className="bb-btn positive">Full width</button>
                      <button className="bb-btn negative">Full width</button>
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-btns full-x">
  <button class="bb-btn primary">Button</button>
  <button class="bb-btn secondary">Button</button>
  <button class="bb-btn positive">Button</button>
  <button class="bb-btn negative">Button</button>
</div>`}
                  </Code>
                }
              />
            </div>
            <div className="column column-16">
              <h5 className="m-y-2">No border radius</h5>
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <div className="bb-btns no-border-radius">
                      <button className="bb-btn primary">Button</button>
                      <button className="bb-btn secondary">Button</button>
                      <button className="bb-btn positive">Button</button>
                      <button className="bb-btn negative">Button</button>
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-btns no-border-radius">
  <button class="bb-btn primary">Button</button>
  <button class="bb-btn secondary">Button</button>
  <button class="bb-btn positive">Button</button>
  <button class="bb-btn negative">Button</button>
</div>`}
                  </Code>
                }
              />
            </div>
          </div>
          <DocumentationVariables
            variables={[
              {
                name: '$button-variant-background',
                value: '$base-variant-background'
              },
              { name: '$button-variant-color', value: '$base-variant-color' },
              { name: '$button-variant-border', value: '$base-variant-border' },
              { name: '$button-variant-hover', value: '$base-variant-hover' },
              { name: '$button-variant-active', value: '$base-variant-active' },
              {},
              { name: '$button-border-radius', value: '$border-radius' },
              { name: '$button-border-style', value: '$border-style' },
              { name: '$button-border-width', value: '$border-width' },
              {},
              { name: '$button-font-family', value: '$heading-font-family' },
              { name: '$button-font-size', value: '$font-size' },
              { name: '$button-font-weight', value: '400' },
              { name: '$button-line-height', value: '1.3' },
              { name: '$button-text-transform', value: 'none' },
              {},
              { name: '$button-spacing-x', value: '0.5rem' },
              { name: '$button-spacing-y', value: '0.5rem' },
              {},
              {
                name: '$button-transition',
                value: 'all $transition-effect $transition-duration'
              }
            ]}
          />
        </div>
      </div>
    );
  }
}
