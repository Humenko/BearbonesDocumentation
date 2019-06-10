import React, { Component } from 'react';
import Code from '../../Shared/Code';
import Heading from '../../Shared/DocumentationHeading';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import DocumentationVariables from '../../Shared/DocumentationVariables';
import MetaTags from '../../Shared/MetaTags';

export default class PaginationDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <Heading
            title={this.props.heading}
            subTitle={this.props.subTitle}
            code='@import "/bearbones/scss/components/pagination/all"'
          />
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Basic" />
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <nav className="bb-pagination">
                      <a className="item active" href="#example">
                        1
                      </a>
                      <a className="item disabled" href="#example">
                        ...
                      </a>
                      <a className="item" href="#example">
                        3
                      </a>
                      <a className="item" href="#example">
                        4
                      </a>
                    </nav>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<nav class="bb-pagination">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
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
                      <nav className="bb-pagination primary">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination secondary">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination positive">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination negative">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination invert">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<nav class="bb-pagination primary">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination secondary">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination positive">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination negative">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination invert">
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
              <SubHeading title="Sizes" />
              <DocumentationHelper
                content={
                  <>
                    <div className="doc-content">
                      <nav className="bb-pagination xs">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination sm">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination lg">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination xl">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<nav class="bb-pagination xs">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination sm">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination lg">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination xl">
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
              <SubHeading title="Styles" />
              <DocumentationHelper
                content={
                  <>
                    <div className="doc-content">
                      <nav className="bb-pagination outline">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination outline primary">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination outline secondary">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination outline positive">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination outline negative">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination outline invert">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<nav class="bb-pagination outline">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination outline primary">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination outline secondary">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination outline positive">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination outline negative">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination outline invert">
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
              <DocumentationHelper
                content={
                  <>
                    <div className="doc-content">
                      <nav className="bb-pagination connected">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination connected primary">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination connected secondary">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination connected positive">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination connected negative">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination connected invert">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<nav class="bb-pagination connected">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination connected primary">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination connected secondary">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination connected positive">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination connected negative">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination connected invert">
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
              <DocumentationHelper
                content={
                  <>
                    <div className="doc-content">
                      <nav className="bb-pagination primary no-border">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination primary outline no-border">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination primary connected no-border">
                        <a className="item active" href="#example">
                          1
                        </a>
                        <a className="item disabled" href="#example">
                          ...
                        </a>
                        <a className="item" href="#example">
                          3
                        </a>
                        <a className="item" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<nav class="bb-pagination primary no-border">
  <a class="item active" href="#">1</a>
  <a class="item disabled">...</a>
  <a class="item" href="#">3</a>
  <a class="item" href="#">4</a>
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination primary outline no-border">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination primary connected no-border">
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
              <SubHeading title="Dots" />
              <DocumentationHelper
                content={
                  <>
                    <div className="doc-content">
                      <nav className="bb-pagination">
                        <a className="dot" href="#example">
                          1
                        </a>
                        <a className="dot" href="#example">
                          2
                        </a>
                        <a className="dot active" href="#example">
                          3
                        </a>
                        <a className="dot" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination primary">
                        <a className="dot" href="#example">
                          1
                        </a>
                        <a className="dot" href="#example">
                          2
                        </a>
                        <a className="dot active" href="#example">
                          3
                        </a>
                        <a className="dot" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination secondary">
                        <a className="dot" href="#example">
                          1
                        </a>
                        <a className="dot" href="#example">
                          2
                        </a>
                        <a className="dot active" href="#example">
                          3
                        </a>
                        <a className="dot" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination positive">
                        <a className="dot" href="#example">
                          1
                        </a>
                        <a className="dot" href="#example">
                          2
                        </a>
                        <a className="dot active" href="#example">
                          3
                        </a>
                        <a className="dot" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination negative">
                        <a className="dot" href="#example">
                          1
                        </a>
                        <a className="dot" href="#example">
                          2
                        </a>
                        <a className="dot active" href="#example">
                          3
                        </a>
                        <a className="dot" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination invert">
                        <a className="dot" href="#example">
                          1
                        </a>
                        <a className="dot" href="#example">
                          2
                        </a>
                        <a className="dot active" href="#example">
                          3
                        </a>
                        <a className="dot" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<nav class="bb-pagination">
  <a class="dot" href="#">1</a>
  <a class="dot">2</a>
  <a class="dot active" href="#">3</a>
  <a class="dot" href="#">4</a>
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination primary">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination secondary">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination positive">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination negative">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination invert">
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
              <SubHeading title="Dots" />
              <DocumentationHelper
                content={
                  <>
                    <div className="doc-content">
                      <nav className="bb-pagination outline">
                        <a className="dot" href="#example">
                          1
                        </a>
                        <a className="dot" href="#example">
                          2
                        </a>
                        <a className="dot active" href="#example">
                          3
                        </a>
                        <a className="dot" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination outline primary">
                        <a className="dot" href="#example">
                          1
                        </a>
                        <a className="dot" href="#example">
                          2
                        </a>
                        <a className="dot active" href="#example">
                          3
                        </a>
                        <a className="dot" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination outline secondary">
                        <a className="dot" href="#example">
                          1
                        </a>
                        <a className="dot" href="#example">
                          2
                        </a>
                        <a className="dot active" href="#example">
                          3
                        </a>
                        <a className="dot" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination outline positive">
                        <a className="dot" href="#example">
                          1
                        </a>
                        <a className="dot" href="#example">
                          2
                        </a>
                        <a className="dot active" href="#example">
                          3
                        </a>
                        <a className="dot" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination outline negative">
                        <a className="dot" href="#example">
                          1
                        </a>
                        <a className="dot" href="#example">
                          2
                        </a>
                        <a className="dot active" href="#example">
                          3
                        </a>
                        <a className="dot" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                    <div className="doc-content">
                      <nav className="bb-pagination outline invert">
                        <a className="dot" href="#example">
                          1
                        </a>
                        <a className="dot" href="#example">
                          2
                        </a>
                        <a className="dot active" href="#example">
                          3
                        </a>
                        <a className="dot" href="#example">
                          4
                        </a>
                      </nav>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<nav class="bb-pagination outline">
  <a class="dot" href="#">1</a>
  <a class="dot">2</a>
  <a class="dot active" href="#">3</a>
  <a class="dot" href="#">4</a>
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination outline primary">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination outline secondary">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination outline positive">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination outline negative">
  ...
</nav>`}
                    </Code>
                    <Code language="markup">
                      {`<nav class="bb-pagination outline invert">
  ...
</nav>`}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <DocumentationVariables
            variables={[
              {
                name: '$pagination-variant-background',
                value: '$base-variant-background'
              },
              {
                name: '$pagination-variant-color',
                value: '$base-variant-color'
              },
              {
                name: '$pagination-variant-border',
                value: '$base-variant-border'
              },
              {
                name: '$pagination-variant-hover',
                value: '$base-variant-hover'
              },
              {
                name: '$pagination-variant-active',
                value: '$base-variant-active'
              },
              {},
              { name: '$pagination-border-radius', value: '$border-radius' },
              { name: '$pagination-border-style', value: '$border-style' },
              { name: '$pagination-border-width', value: '$border-width' },
              {},
              { name: '$pagination-font-size', value: '$font-size' },
              { name: '$pagination-font-weight', value: '500' },
              {},
              { name: '$pagination-min-width', value: '3rem' },
              { name: '$pagination-spacing-y', value: '0.5rem' },
              { name: '$pagination-spacing-x', value: '0.75rem' },
              {},
              {
                name: '$pagination-transition',
                value: 'all $transition-effect $transition-duration'
              },
              {},
              {
                name: '$pagination-dot-border-radius',
                value: '$border-radius-circle'
              },
              { name: '$pagination-dot-size', value: '0.3rem' },
              { name: '$pagination-dot-spacing', value: '0.1rem' }
            ]}
          />
        </div>
      </div>
    );
  }
}
