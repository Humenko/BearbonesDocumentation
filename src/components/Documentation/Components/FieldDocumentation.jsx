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
            code='@import "/bearbones/scss/components/field/all"'
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
            <div className="column column-16">
              <h5 className="m-y-2">Checkbox</h5>
              <DocumentationHelper
                content={
                  <label
                    className="bb-checkbox"
                    htmlFor="CheckboxExample"
                    id="CheckboxExampleLabel"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                    <input
                      type="checkbox"
                      id="CheckboxExample"
                      name="CheckboxExample"
                    />
                    <div className="check" />
                  </label>
                }
                code={
                  <Code language="markup">
                    {`<label
  class="bb-checkbox"
  for="CheckboxExample"
  id="CheckboxExampleLabel"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Phasellus nec iaculis mauris.
  <input
    type="checkbox"
    id="CheckboxExample"
    name="CheckboxExample"
  />
  <div class="check" />
</label>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Colours" />
              <p className="subtitle p-b-2">
                Colours within <code>.bb-field</code> can be used on each{' '}
                <code>input</code>, <code>textarea</code> and{' '}
                <code>select</code> by adding the associated colour to the
                parent class.
              </p>
              <DocumentationHelper
                content={
                  <>
                    <div className="bb-field primary">
                      <label htmlFor="ExamplePrimaryInputField">Example</label>
                      <input
                        placeholder="Example"
                        id="ExamplePrimaryInputField"
                      />
                      <span className="text">Example is required</span>
                    </div>
                    <div className="bb-field secondary">
                      <label htmlFor="ExampleSecondaryInputField">
                        Example
                      </label>
                      <input
                        placeholder="Example"
                        id="ExampleSecondaryInputField"
                      />
                      <span className="text">Example is required</span>
                    </div>
                    <div className="bb-field positive">
                      <label htmlFor="ExamplePositiveInputField">Example</label>
                      <input
                        placeholder="Example"
                        id="ExamplePositiveInputField"
                      />
                      <span className="text">Example is required</span>
                    </div>
                    <div className="bb-field negative">
                      <label htmlFor="ExampleNegativeInputField">Example</label>
                      <input
                        placeholder="Example"
                        id="ExampleNegativeInputField"
                      />
                      <span className="text">Example is required</span>
                    </div>
                    <div className="bb-field invert">
                      <label htmlFor="ExampleInvertInputField">Example</label>
                      <input
                        placeholder="Example"
                        id="ExampleInvertInputField"
                      />
                      <span className="text">Example is required</span>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<div class="bb-field primary">
  <label for="ExamplePrimaryInputField">Example</label>
  <textarea
    placeholder="Example"
    id="ExamplePrimaryInputField"
  />
  <span class="text">Example is required</span>
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-field secondary">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-field positive">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-field negative">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-field invert">
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
              <SubHeading title="Sizes" />
              <p className="subtitle p-b-2">
                Sizes within <code>.bb-field</code> can be used on each{' '}
                <code>input</code>, <code>textarea</code> and{' '}
                <code>select</code> by adding the associated colour to the
                parent class.
              </p>
              <DocumentationHelper
                content={
                  <>
                    <div className="bb-field xs">
                      <label htmlFor="ExampleXSInputField">Example</label>
                      <input placeholder="Example" id="ExampleXSInputField" />
                    </div>
                    <div className="bb-field sm">
                      <label htmlFor="ExampleSMInputField">Example</label>
                      <input placeholder="Example" id="ExampleSMInputField" />
                    </div>
                    <div className="bb-field lg">
                      <label htmlFor="ExampleLGInputField">Example</label>
                      <input placeholder="Example" id="ExampleLGInputField" />
                    </div>
                    <div className="bb-field xl">
                      <label htmlFor="ExampleXLInputField">Example</label>
                      <input placeholder="Example" id="ExampleXLInputField" />
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<div class="bb-field xs">
  <label for="ExampleXSInputField">Example</label>
  <textarea
    placeholder="Example"
    id="ExampleXSInputField"
  />
  <span class="text">Example is required</span>
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-field sm">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-field lg">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-field xl">
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
              <SubHeading title="State" />
              <p className="subtitle p-b-2">
                You also have the ability to add <code>.success</code> and{' '}
                <code>.error</code> states in the fields, by adding the classes
                to the <code>.bb-field</code> class.
              </p>
              <DocumentationHelper
                content={
                  <>
                    <div className="bb-field success">
                      <label htmlFor="ExampleSuccessInputField">Example</label>
                      <input
                        placeholder="Success"
                        id="ExampleSuccessInputField"
                      />
                      <span className="text">Success</span>
                    </div>
                    <div className="bb-field error">
                      <label htmlFor="ExampleErrorInputField">Example</label>
                      <input placeholder="Error" id="ExampleErrorInputField" />
                      <span className="text">Error</span>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<div class="bb-field success">
  <label for="ExampleSuccessInputField">Example</label>
  <input placeholder="Success" id="ExampleSuccessInputField" />
  <span className="text">Success</span>
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-field error">
  <label for="ExampleSuccessInputField">Example</label>
  <input placeholder="Error" id="ExampleSuccessInputField" />
  <span className="text">Error</span>
</div>`}
                    </Code>
                  </>
                }
              />
            </div>
            <div className="column column-16">
              <h5 className="m-y-2">Disabled</h5>
              <DocumentationHelper
                content={
                  <div className="bb-field disabled">
                    <label htmlFor="ExampleDisabledInputField">Example</label>
                    <input
                      placeholder="Disabled"
                      id="ExampleDisabledInputField"
                    />
                    <span className="text">Disabled</span>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-field disabled">
  <label for="ExampleDisabledInputField">Example</label>
  <input placeholder="Disabled" id="ExampleDisabledInputField" />
  <span className="text">Disabled</span>
</div>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h2>Field Addon</h2>
              <Code language="js">
                {'import "/bearbones/scss/components/field-addon/all"'}
              </Code>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Basic" />
              <p className="subtitle p-b-2">
                Field addons can be simply added to fields within Bearbones.
                Just add <code>.left</code>, <code>.right</code> or{' '}
                <code>.left-right</code> to achieve this. Make sure to always
                add the addon after the <code>input</code>,{' '}
                <code>textarea</code> or <code>select</code>.
              </p>
              <h5 className="m-y-2">Addons</h5>
              <DocumentationHelper
                content={
                  <>
                    <div className="bb-field left">
                      <label htmlFor="ExampleInputLeftAddon">Example</label>
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Example"
                          id="ExampleInputLeftAddon"
                        />
                        <div className="field-addon">Left</div>
                      </div>
                    </div>
                    <div className="bb-field right">
                      <label htmlFor="ExampleInputRightAddon">Example</label>
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Example"
                          id="ExampleInputRightAddon"
                        />
                        <div className="field-addon secondary">Right</div>
                      </div>
                    </div>
                    <div className="bb-field left-right">
                      <label htmlFor="ExampleInputLeftRightAddon">
                        Example
                      </label>
                      <div className="input-group">
                        <div className="field-addon positive">Left</div>
                        <input
                          type="text"
                          placeholder="Example"
                          id="ExampleInputLeftRightAddon"
                        />
                        <div className="field-addon negative">Right</div>
                      </div>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<div class="bb-field left">
  <label for="ExampleInputLeftAddon">Example</label>
  <div class="input-group">
    <input
      type="text"
      placeholder="Example"
      id="ExampleInputLeftAddon"
    />
    <div class="field-addon">Addon</div>
  </div>
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-field right">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-field left-right">
  ...
</div>`}
                    </Code>
                  </>
                }
              />
            </div>
            <div className="column column-16">
              <h5 className="m-y-2">These can be used on any field type!</h5>
              <DocumentationHelper
                content={
                  <div className="bb-field left">
                    <label htmlFor="ExampleSelectLeftAddon">Example</label>
                    <div className="input-group">
                      <div className="bb-select">
                        <select id="ExampleSelectField">
                          <option value="Example1">Example1</option>
                          <option value="Example2">Example2</option>
                        </select>
                      </div>
                      <div className="field-addon">Left</div>
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-field left">
  <label for="ExampleSelectLeftAddon">Example</label>
  <div class="input-group">
    <div class="bsb-select">
      <select id="ExampleSelectField">
        <option value="Example1">Example1</option>
        <option value="Example2">Example2</option>
      </select>
    </div>
    <div class="field-addon">Left</div>
  </div>
</div>`}
                  </Code>
                }
              />
            </div>
            <div className="column column-16">
              <h5 className="m-y-2">Buttons</h5>
              <DocumentationHelper
                content={
                  <>
                    <div className="bb-field right secondary">
                      <label htmlFor="ExampleInputButton">Example</label>
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Example"
                          id="ExampleInputButton"
                        />
                        <div className="bb-btn secondary">Button</div>
                      </div>
                    </div>
                  </>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-field right secondary">
  <label for="ExampleInputButton">Example</label>
  <div class="input-group">
    <input
      type="text"
      placeholder="Example"
      id="ExampleInputButton"
    />
    <div class="bb-btn secondary">Button</div>
  </div>
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
