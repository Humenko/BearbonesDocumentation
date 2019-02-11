import React, { Component } from 'react';
import Code from '../../Shared/Code';
import Heading from '../../Shared/DocumentationHeading';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import MetaTags from '../../Shared/MetaTags';

export default class FieldDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <Heading
            title={this.props.heading}
            subTitle={this.props.subTitle}
            code='import "/bearbones/scss/components/field/all"'
          />
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Basic" />
              <h5 className="m-y-2">Input</h5>
              <DocumentationHelper
                content={
                  <div className="bb-field">
                    <label htmlFor="ExampleInputArea">Example</label>
                    <input
                      type="text"
                      placeholder="Example"
                      id="ExampleInputArea"
                    />
                    <span className="text">Example is required</span>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-field">
  <label for="ExampleInputArea">Example</label>
  <input
    type="text"
    placeholder="Example"
    id="ExampleInputArea"
  />
  <span class="text">Example is required</span>
</div>`}
                  </Code>
                }
              />
            </div>
            <div className="column column-16">
              <h5 className="m-y-2">Textarea</h5>
              <DocumentationHelper
                content={
                  <div className="bb-field">
                    <label htmlFor="ExampleTextareaField">Example</label>
                    <textarea placeholder="Example" id="ExampleTextareaField" />
                    <span className="text">Example is required</span>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-field">
  <label for="ExampleTextareaField">Example</label>
  <textarea placeholder="Example" id="ExampleTextareaField" />
  <span class="text">Example is required</span>
</div>`}
                  </Code>
                }
              />
            </div>
            <div className="column column-16">
              <h5 className="m-y-2">Select</h5>
              <DocumentationHelper
                content={
                  <div className="bb-field">
                    <label htmlFor="ExampleSelectField">Example</label>
                    <div className="bb-select">
                      <select id="ExampleSelectField">
                        <option value="Example1">Example1</option>
                        <option value="Example2">Example2</option>
                      </select>
                    </div>
                    <span className="text">Example is required</span>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-field">
  <label for="ExampleSelectField">Example</label>
  <div class="bb-select">
    <select id="ExampleSelectField">
      <option value="Example1">Example1</option>
      <option value="Example2">Example2</option>
    </select>
  </div>
  <span class="text">Example is required</span>
</div>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Colours" />
              <h5 className="m-y-2">Input</h5>
              <DocumentationHelper
                content={
                  <div className="bb-field primary">
                    <label htmlFor="ExampleInputArea">Example</label>
                    <input
                      type="text"
                      placeholder="Example"
                      id="ExampleInputArea"
                    />
                    <span className="text">Example is required</span>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-field">
  <label for="ExampleInputArea">Example</label>
  <input
    type="text"
    placeholder="Example"
    id="ExampleInputArea"
  />
  <span class="text">Example is required</span>
</div>`}
                  </Code>
                }
              />
            </div>
            <div className="column column-16">
              <h5 className="m-y-2">Textarea</h5>
              <DocumentationHelper
                content={
                  <div className="bb-field">
                    <label htmlFor="ExampleTextareaField">Example</label>
                    <textarea placeholder="Example" id="ExampleTextareaField" />
                    <span className="text">Example is required</span>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-field">
  <label for="ExampleTextareaField">Example</label>
  <textarea placeholder="Example" id="ExampleTextareaField" />
  <span class="text">Example is required</span>
</div>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="column column-16">
            <h5 className="m-y-2">Select</h5>
            <DocumentationHelper
              content={
                <div className="bb-field">
                  <label htmlFor="ExampleSelectField">Example</label>
                  <div className="bb-select">
                    <select id="ExampleSelectField">
                      <option value="Example1">Example1</option>
                      <option value="Example2">Example2</option>
                    </select>
                  </div>
                  <span className="text">Example is required</span>
                </div>
              }
              code={
                <Code language="markup">
                  {`<div class="bb-field">
  <label for="ExampleSelectField">Example</label>
  <div class="bb-select">
    <select id="ExampleSelectField">
      <option value="Example1">Example1</option>
      <option value="Example2">Example2</option>
    </select>
  </div>
  <span class="text">Example is required</span>
</div>`}
                </Code>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="bb-grid md">
            <div className="column column-16">
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <div className="bb-field">
                      <label>Example</label>
                      <textarea name="" id="" />
                    </div>
                  </div>
                  //    <div className="doc-content">
                  //    <div className="ob-field">
                  //      <label
                  //        className="bb-checkbox"
                  //        htmlFor="CheckboxExample"
                  //        id="CheckboxExampleLabel"
                  //      >
                  //        Contact me via email when this product is available
                  //        and for marketing and research purposes.
                  //        <input
                  //          type="checkbox"
                  //          id="CheckboxExample"
                  //          name="CheckboxExample"
                  //        />
                  //        <div className="check" />
                  //      </label>
                  //    </div>
                  //  </div>
                }
                code={<></>}
              />
            </div>
          </div> */
}
