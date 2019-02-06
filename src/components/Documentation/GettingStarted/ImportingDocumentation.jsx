import React, { Component } from 'react';
import Code from '../../Shared/Code';
import Heading from '../../Shared/DocumentationHeading';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import MetaTags from '../../Shared/MetaTags';

export default class ImportingDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <Heading title={this.props.heading} subTitle={this.props.subTitle} />
          <div className="bb-grid md">
            <div className="column column-16">
              <p>
                CSS frameworks can be a burden. However that's not the case here
                with Bearbones, you are able to individually import any of the{' '}
                <strong className="text-primary">
                  {process.env.REACT_APP_NUMBER_OF_SCSS_FILES}
                </strong>{' '}
                <code>.scss</code> files.
              </p>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Here's an example;" />
              <p className="subtitle p-b-2">
                Say you only want the button component.
              </p>
              <Code language="js">
                {`import "/bearbones/scss/components/button/all"`}
              </Code>
              <p>
                <strong>Simple, right?</strong> Now you can use the button
                component as well as all the classes and states that come with{' '}
                <code>.bb-btn</code>
              </p>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
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
              <SubHeading title="Importing everything?" />
              <p className="subtitle p-b-2">
                Again, <strong>simple.</strong>
              </p>
              <Code language="js">{`import "/bearbones/scss/bearbones"`}</Code>
              <p>
                <strong>Simple, right?</strong> Now you can use the button
                component as well as all the classes and states that come with{' '}
                <code>.bb-btn</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
