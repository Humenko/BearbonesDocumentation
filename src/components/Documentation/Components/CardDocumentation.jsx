import { faPawClaws } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Code from '../../Shared/Code';
import Heading from '../../Shared/DocumentationHeading';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import MetaTags from '../../Shared/MetaTags';

export default class CardDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <Heading
            title={this.props.heading}
            subTitle={this.props.subTitle}
            code='@import "/bearbones/scss/components/card/all"'
          />
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Basic" />
              <p className="subtitle p-b-2">
                Cards are simply made up from any of the following classes;{' '}
                <code>.header</code>, <code>.content</code>, <code>.image</code>{' '}
                and/or <code>.footer</code>.
              </p>
              <p className="subtitle p-b-2">
                Below, there are some examples of how you could implement a card
                component.
              </p>
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <div className="column column-10">
                      <div className="bb-card">
                        <header className="header">
                          <p className="header-title text-xl">
                            <span className="p-r-3">
                              <FontAwesomeIcon icon={faPawClaws} />
                            </span>
                            Bearbones
                          </p>
                        </header>
                        <div className="content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus nec iaculis mauris.
                          </p>
                        </div>
                        <div className="footer">
                          <a className="item" href="#example">
                            Lorem
                          </a>
                          <a className="item" href="#example">
                            Ipsum
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-card">
  <header class="header">
    <p class="header-title text-xl">Bearbones</p>
  </header>
  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Phasellus nec iaculis mauris.
    </p>
  </div>
  <div class="footer">
    <a class="item" href="#">
      Lorem
    </a>
    <a class="item" href="#">
      Ipsum
    </a>
  </div>
</div>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <div className="column column-10">
                      <div className="bb-card">
                        <div className="content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus nec iaculis mauris.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-card">
  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Phasellus nec iaculis mauris.
    </p>
  </div>
</div>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <div className="column column-10">
                      <div className="bb-card">
                        <header className="header">
                          <p className="header-title text-xl">Bearbones</p>
                        </header>
                        <div className="content">
                          <p className="m-b-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus nec iaculis mauris.
                          </p>
                          <div className="bb-btns full-x">
                            <a className="bb-btn positive" href="#example">
                              Lorem
                            </a>
                            <a className="bb-btn negative" href="#example">
                              Ipsum
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-card">
  <header class="header">
    <p class="header-title text-xl">Bearbones</p>
  </header>
  <div class="content">
    <p class="m-b-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Phasellus nec iaculis mauris.
    </p>
    <div class="bb-btns full-x">
      <a class="bb-btn positive" href="#example">
        Lorem
      </a>
      <a class="bb-btn negative" href="#example">
        Ipsum
      </a>
    </div>
  </div>
</div>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h5 className="m-y-2">Images</h5>
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <div className="column column-10">
                      <div className="bb-card">
                        <div className="image">
                          <figure>
                            <img
                              src="http://via.placeholder.com/640x480/E0E0E0/ffffff?text=+"
                              alt="Placeholder"
                            />
                          </figure>
                        </div>
                        <div className="content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus nec iaculis mauris.
                        </div>
                      </div>
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-card">
  <div class="image">
    <figure>
      <img src="" alt="" />
    </figure>
  </div>
  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Phasellus nec iaculis mauris.
  </div>
</div>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <div className="column column-10">
                      <div className="bb-card">
                        <div className="content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus nec iaculis mauris.
                        </div>
                        <div className="image">
                          <figure>
                            <img
                              src="http://via.placeholder.com/640x480/E0E0E0/ffffff?text=+"
                              alt="Placeholder"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-card">
  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Phasellus nec iaculis mauris.
  </div>
  <div class="image">
    <figure>
      <img src="" alt="" />
    </figure>
  </div>
</div>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <div className="column column-10">
                      <div className="bb-card">
                        <header className="header">
                          <p className="header-title text-xl">Bearbones</p>
                        </header>
                        <div className="image">
                          <figure>
                            <img
                              src="http://via.placeholder.com/640x240/E0E0E0/ffffff?text=+"
                              alt="Placeholder"
                            />
                          </figure>
                        </div>
                        <div className="content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus nec iaculis mauris.
                        </div>
                      </div>
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-card">
  <header class="header">
    <p class="header-title text-xl">Bearbones</p>
  </header>                    
  <div class="image">
    <figure>
      <img src="" alt="" />
    </figure>
  </div>
  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Phasellus nec iaculis mauris.
  </div>
</div>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h5 className="m-y-2">Media</h5>
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <div className="column column-10">
                      <div className="bb-card">
                        <div className="content">
                          <div className="media center">
                            <div className="media-left">
                              <figure>
                                <img
                                  src="http://via.placeholder.com/32x32/E0E0E0/ffffff?text=+"
                                  alt="Placeholder"
                                />
                              </figure>
                            </div>
                            <div className="media-container">
                              <div className="media-content">
                                <p>
                                  <strong className="text-lg">
                                    Paddington
                                  </strong>
                                </p>
                                <small>@iLoveMarmalade</small>
                              </div>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus nec iaculis mauris.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-card">
  <div class="content">
    <div class="media center">
      <div class="media-left">
        <figure>
          <img src="" alt="" />
        </figure>
      </div>
      <div class="media-container">
        <div class="media-content">
          <p>
            <strong class="text-lg">
              Paddington
            </strong>
          </p>
          <small>@iLoveMarmalade</small>
        </div>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Phasellus nec iaculis mauris.
    </p>
  </div>
</div>`}
                  </Code>
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
                      <div className="column column-10">
                        <div className="bb-card right">
                          <header className="header">
                            <p className="header-title text-xl">Bearbones</p>
                          </header>
                          <div className="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus nec iaculis mauris.
                            </p>
                          </div>
                          <div className="footer">
                            <a className="item" href="#example">
                              Lorem
                            </a>
                            <a className="item" href="#example">
                              Ipsum
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="doc-content">
                      <div className="column column-10">
                        <div className="bb-card center">
                          <header className="header">
                            <p className="header-title text-xl">Bearbones</p>
                          </header>
                          <div className="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus nec iaculis mauris.
                            </p>
                          </div>
                          <div className="footer">
                            <a className="item" href="#example">
                              Lorem
                            </a>
                            <a className="item" href="#example">
                              Ipsum
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<div class="bb-card right"> 
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-card center"> 
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
              <SubHeading title="Helper" />
              <h5 className="m-y-2">Full width</h5>
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <div className="column column-10">
                      <div className="bb-card no-shadow">
                        <header className="header">
                          <p className="header-title text-xl">Bearbones</p>
                        </header>
                        <div className="content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus nec iaculis mauris.
                          </p>
                        </div>
                        <div className="footer">
                          <a className="item" href="#example">
                            Lorem
                          </a>
                          <a className="item" href="#example">
                            Ipsum
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-card no-shadow">
  ...
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
                    <div className="column column-10">
                      <div className="bb-card no-border-radius">
                        <header className="header">
                          <p className="header-title text-xl">Bearbones</p>
                        </header>
                        <div className="content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus nec iaculis mauris.
                          </p>
                        </div>
                        <div className="footer">
                          <a className="item" href="#example">
                            Lorem
                          </a>
                          <a className="item" href="#example">
                            Ipsum
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                s
                code={
                  <Code language="markup">
                    {`<div class="bb-card no-border-radius">
  ...
</div>`}
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
