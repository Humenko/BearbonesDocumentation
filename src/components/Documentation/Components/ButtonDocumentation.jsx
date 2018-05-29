import React, { Component } from 'react';
import Highlight from 'react-highlight';

export default class ButtonDocumentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h2 className="title">Button</h2>
              <p className="subtitle">
                An essential component for any design, providing the user a
                simple way to trigger an event.
              </p>
              <Highlight className="js">
                {'import "../bearbones/sass/components/button/all"'}
              </Highlight>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Basic</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <button className="bb-btn">Button</button>
                    <a className="bb-btn m-x-2">Anchor</a>
                    <input className="bb-btn" type="submit" value="Input" />
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {'<button class="bb-btn">Button</button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<a class="bb-btn">Anchor</a>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<input class="bb-btn" type="submit" value="Input" />'}
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
                  <div className="content">
                    <button className="bb-btn primary">Primary</button>
                    <button className="bb-btn secondary m-x-2">
                      Secondary
                    </button>
                    <button className="bb-btn positive">Positive</button>
                    <button className="bb-btn negative m-x-2">Negative</button>
                    <button className="bb-btn invert">Invert</button>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {'<button class="bb-btn primary">Primary</button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn secondary">Secondary</button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn positive">Positive</button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn negative">Negative</button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn invert">Invert</button>'}
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
                  <div className="content">
                    <button className="bb-btn xs">Extra small</button>
                  </div>
                  <div className="content">
                    <button className="bb-btn sm">Small</button>
                  </div>
                  <div className="content">
                    <button className="bb-btn">Medium</button>
                  </div>
                  <div className="content">
                    <button className="bb-btn lg">Large</button>
                  </div>
                  <div className="content">
                    <button className="bb-btn xl">Extra large</button>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {'<button class="bb-btn xs">Extra small</button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn small">Small</button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn">Medium</button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn lg">Large</button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn xl">Extra large</button>'}
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
                  <div className="content">
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
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {'<button class="bb-btn outline">Default</button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn outline primary">Primary</button>'}
                  </Highlight>
                  <Highlight className="html">
                    {
                      '<button class="bb-btn outline secondary">Secondary</button>'
                    }
                  </Highlight>
                  <Highlight className="html">
                    {
                      '<button class="bb-btn outline positive">Positive</button>'
                    }
                  </Highlight>
                  <Highlight className="html">
                    {
                      '<button class="bb-btn outline negative">Negative</button>'
                    }
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn outline invert">Invert</button>'}
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
                  <div className="content">
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
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {'<button class="bb-btn inverted">Default</button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn inverted primary">Primary</button>'}
                  </Highlight>
                  <Highlight className="html">
                    {
                      '<button class="bb-btn inverted secondary">Secondary</button>'
                    }
                  </Highlight>
                  <Highlight className="html">
                    {
                      '<button class="bb-btn inverted positive">Positive</button>'
                    }
                  </Highlight>
                  <Highlight className="html">
                    {
                      '<button class="bb-btn inverted negative">Negative</button>'
                    }
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn inverted invert">Invert</button>'}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">State</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
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
                    <button className="bb-btn loading negative">Loading</button>
                    <button className="bb-btn loading invert m-l-2">
                      Loading
                    </button>
                  </div>
                  <div className="content">
                    <button className="bb-btn loading outline">Loading</button>
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
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {'<button class="bb-btn loading">Loading</button>'}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
            <div className="column column-16">
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <button disabled className="bb-btn disabled">
                      Disabled
                    </button>
                    <button disabled className="bb-btn disabled primary m-x-2">
                      Disabled
                    </button>
                    <button disabled className="bb-btn disabled secondary">
                      Disabled
                    </button>
                    <button disabled className="bb-btn disabled positive m-x-2">
                      Disabled
                    </button>
                    <button disabled className="bb-btn disabled negative">
                      Disabled
                    </button>
                    <button disabled className="bb-btn disabled invert m-l-2">
                      Disabled
                    </button>
                  </div>
                  <div className="content">
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
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {'<button class="bb-btn disabled">Disabled</button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button disabled class="bb-btn">Disabled</button>'}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
            <div className="column column-16">
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <button className="bb-btn active">Active</button>
                    <button className="bb-btn active primary m-x-2">
                      Active
                    </button>
                    <button className="bb-btn active secondary">Active</button>
                    <button className="bb-btn active positive m-x-2">
                      Active
                    </button>
                    <button className="bb-btn active negative">Active</button>
                    <button className="bb-btn active invert m-l-2">
                      Active
                    </button>
                  </div>
                  <div className="content">
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
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {'<button class="bb-btn active">Active</button>'}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Icons</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <button className="bb-btn icon">
                      Icon
                      <span className="chevron" />
                    </button>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<button class="bb-btn icon">Icon
  <span class="chevron"></span>
</button>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Helper</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <button className="bb-btn full-x primary">
                      Full width
                    </button>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {'<button class="bb-btn full-x">Full width</button>'}
                  </Highlight>

                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
            <div className="column column-16">
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <button className="bb-btn no-border-radius primary">
                      No border radius
                    </button>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {
                      '<button class="bb-btn no-border-radius">No border radius</button>'
                    }
                  </Highlight>

                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
            <div className="column column-16">
              <div className="bb-box example">
                <div className="doc-preview">
                  <a className="link">Link</a>
                  <a className="link primary m-x-2">Link</a>
                  <a className="link secondary">Link</a>
                  <a className="link positive m-x-2">Link</a>
                  <a className="link negative">Link</a>
                  <a className="link invert m-l-2">Link</a>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {'<a class="link">Link</a>'}
                  </Highlight>

                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Close</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <button className="close" />
                  <button className="close primary m-x-2" />
                  <button className="close secondary" />
                  <button className="close positive m-x-2" />
                  <button className="close negative" />
                  <button className="close invert m-l-2" />
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {'<button class="bb-btn close"></button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn close primary"></button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn close secondary"></button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn close positive"></button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn close negative"></button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn close invert"></button>'}
                  </Highlight>

                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
            <div className="column column-16">
              <div className="bb-box example">
                <div className="doc-preview">
                  <button className="close xs" />
                  <button className="close sm m-x-2" />
                  <button className="close" />
                  <button className="close lg m-x-2" />
                  <button className="close xl" />
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {'<button class="bb-btn close"></button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn close"></button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn close"></button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn close"></button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn close"></button>'}
                  </Highlight>
                  <Highlight className="html">
                    {'<button class="bb-btn close"></button>'}
                  </Highlight>

                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h3 className="title">Button Groups</h3>
              <Highlight className="js">
                {'import "../bearbones/sass/components/button-group/all"'}
              </Highlight>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Horizontal</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <div className="bb-btns">
                      <button className="bb-btn primary">Button</button>
                      <button className="bb-btn secondary">Button</button>
                      <button className="bb-btn positive">Button</button>
                      <button className="bb-btn negative">Button</button>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-btns">
  <button class="bb-btn primary">Button</button>
  <button class="bb-btn secondary">Button</button>
  <button class="bb-btn positive">Button</button>
  <button class="bb-btn negative">Button</button>
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
                  <div className="content">
                    <div className="bb-btns vertical">
                      <button className="bb-btn primary">Button</button>
                      <button className="bb-btn secondary">Button</button>
                      <button className="bb-btn positive">Button</button>
                      <button className="bb-btn negative">Button</button>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-btns vertical">
  <button class="bb-btn primary">Button</button>
  <button class="bb-btn secondary">Button</button>
  <button class="bb-btn positive">Button</button>
  <button class="bb-btn negative">Button</button>
</div>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Helper</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <div className="bb-btns full-x">
                      <button className="bb-btn primary">Full width</button>
                      <button className="bb-btn secondary">Full width</button>
                      <button className="bb-btn positive">Full width</button>
                      <button className="bb-btn negative">Full width</button>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-btns full-x">
  <button class="bb-btn primary">Button</button>
  <button class="bb-btn secondary">Button</button>
  <button class="bb-btn positive">Button</button>
  <button class="bb-btn negative">Button</button>
</div>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
            <div className="column column-16">
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content">
                    <div className="bb-btns no-border-radius">
                      <button className="bb-btn primary">Button</button>
                      <button className="bb-btn secondary">Button</button>
                      <button className="bb-btn positive">Button</button>
                      <button className="bb-btn negative">Button</button>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-btns no-border-radius">
  <button class="bb-btn primary">Button</button>
  <button class="bb-btn secondary">Button</button>
  <button class="bb-btn positive">Button</button>
  <button class="bb-btn negative">Button</button>
</div>`}
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
