import React, { Component } from 'react';
import { Accordion, AccordionItem } from '../../Shared/Accordion';
import Code from '../../Shared/Code';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import DocumentationVariables from '../../Shared/DocumentationVariables';
import MetaTags from '../../Shared/MetaTags';

export default class AccordionDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">Accordion</h1>
              <p className="subtitle">
                A collapsible component which allows the user to show and hide
                content to meet their needs.
              </p>
              <Code language="js">
                {'import "../bearbones/sass/components/accordion/all"'}
              </Code>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Basic" />
              <p className="subtitle sm p-b-3">
                As there is no js in Bearbones, you need to toggle the{' '}
                <code>.active</code> class on the element header and content you
                want to expand/collapse.
              </p>
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <Accordion>
                      <AccordionItem header={'Panda'}>
                        The giant panda lives in a few mountain ranges in
                        central China, mainly in Sichuan, but also in
                        neighbouring Shaanxi and Gansu. As a result of farming,
                        deforestation, and other development, the giant panda
                        has been driven out of the lowland areas where it once
                        lived.
                      </AccordionItem>
                    </Accordion>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-accordion">
  <div class="header">
    Panda<span class="chevron"></span>
  </div>
  <div class="content">
    The giant panda lives in a few mountain ranges in central
    China, mainly in Sichuan, but also in neighbouring Shaanxi
    and Gansu. As a result of farming, deforestation, and
    other development, the giant panda has been driven out of
    the lowland areas where it once lived.
  </div>
</div>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Nested" />
              <DocumentationHelper
                content={
                  <div className="doc-content">
                    <div className="bb-accordion">
                      <div className="header active">
                        Ursidae
                        <span className="chevron" />
                      </div>
                      <div className="content active">
                        <div className="header active">
                          <span className="toggle" />
                          Panda
                        </div>
                        <div className="content active">
                          The giant panda lives in a few mountain ranges in
                          central China, mainly in Sichuan, but also in
                          neighbouring Shaanxi and Gansu. As a result of
                          farming, deforestation, and other development, the
                          giant panda has been driven out of the lowland areas
                          where it once lived.
                        </div>

                        <div className="header">
                          <span className="toggle" />
                          Brown Bear
                        </div>
                        <div className="content">...</div>

                        <div className="header">
                          <span className="toggle" />
                          Sloth Bear
                        </div>
                        <div className="content">...</div>
                      </div>
                    </div>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<div class="bb-accordion">
  <div class="header">
    Ursidae<span class="chevron"></>
  </div>
  <div class="content">
    <div class="header">
      <span class="toggle"></span>Panda
    </div>
    <div class="content">
      The giant panda lives in a few mountain ranges in
      central China, mainly in Sichuan, but also in
      neighbouring Shaanxi and Gansu. As a result of farming,
      deforestation, and other development, the giant panda
      has been driven out of the lowland areas where it once
      lived.
    </div>
    <div class="header">
      <span class="toggle"></span>Brown Bear
    </div>
    <div class="content">
      ...
    </div>
    <div class="header">
      <span class="toggle"></span>Sloth Bear
    </div>
    <div class="content">
      ...
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
              <SubHeading title="Colours" />
              <DocumentationHelper
                content={
                  <>
                    <div className="doc-content m-b-3">
                      <Accordion className="primary">
                        <AccordionItem header={'Primary'}>
                          The giant panda lives in a few mountain ranges in
                          central China, mainly in Sichuan, but also in
                          neighbouring Shaanxi and Gansu. As a result of
                          farming, deforestation, and other development, the
                          giant panda has been driven out of the lowland areas
                          where it once lived.
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div className="doc-content m-b-3">
                      <Accordion className="secondary">
                        <AccordionItem header={'Secondary'}>
                          The giant panda lives in a few mountain ranges in
                          central China, mainly in Sichuan, but also in
                          neighbouring Shaanxi and Gansu. As a result of
                          farming, deforestation, and other development, the
                          giant panda has been driven out of the lowland areas
                          where it once lived.
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div className="doc-content m-b-3">
                      <Accordion className="positive">
                        <AccordionItem header={'Positive'}>
                          The giant panda lives in a few mountain ranges in
                          central China, mainly in Sichuan, but also in
                          neighbouring Shaanxi and Gansu. As a result of
                          farming, deforestation, and other development, the
                          giant panda has been driven out of the lowland areas
                          where it once lived.
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div className="doc-content m-b-3">
                      <Accordion className="negative">
                        <AccordionItem header={'Negative'}>
                          The giant panda lives in a few mountain ranges in
                          central China, mainly in Sichuan, but also in
                          neighbouring Shaanxi and Gansu. As a result of
                          farming, deforestation, and other development, the
                          giant panda has been driven out of the lowland areas
                          where it once lived.
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div className="doc-content m-b-3">
                      <Accordion className="invert">
                        <AccordionItem header={'Invert'}>
                          The giant panda lives in a few mountain ranges in
                          central China, mainly in Sichuan, but also in
                          neighbouring Shaanxi and Gansu. As a result of
                          farming, deforestation, and other development, the
                          giant panda has been driven out of the lowland areas
                          where it once lived.
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<div class="bb-accordion primary">
  <div class="header">
    Panda<span class="chevron"></span>
  </div>
  <div class="content">
    The giant panda lives in a few mountain ranges in central
    China, mainly in Sichuan, but also in neighbouring Shaanxi
    and Gansu. As a result of farming, deforestation, and
    other development, the giant panda has been driven out of
    the lowland areas where it once lived.
  </div>
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-accordion secondary">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-accordion positive">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-accordion negative">
  ...
</div>`}
                    </Code>
                    <Code language="markup">
                      {`<div class="bb-accordion invert">
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
                name: '$accordion-variant-background',
                value: 'transparent'
              },
              { name: '$accordion-variant-border', value: '$lighter-grey' },
              { name: '$accordion-variant-toggle', value: '$light-grey' },
              { name: '$accordion-variant-active', value: '$light-grey' },
              {},
              { name: '$accordion-border-style', value: '$border-style' },
              { name: '$accordion-border-width', value: '$border-width' },
              { name: '$accordion-border-radius', value: '$border-radius' },
              {},
              {
                name: '$accordion-heading-font-family',
                value: '$font-family'
              },
              {
                name: '$accordion-heading-font-size',
                value: '$font-size-xl'
              },
              {
                name: '$accordion-heading-font-weight',
                value: '$font-weight-bold'
              },
              {
                name: '$accordion-subheading-font-family',
                value: '$font-family'
              },
              {
                name: '$accordion-subheading-font-size',
                value: '$font-size-lg'
              },
              {
                name: '$accordion-subheading-font-weight',
                value: '$font-weight-bold'
              },
              {},
              { name: '$accordion-heading-spacing-x', value: '0' },
              { name: '$accordion-heading-spacing-y', value: '1rem' },
              { name: '$accordion-content-spacing-x', value: '1rem' },
              { name: '$accordion-content-spacing-y', value: '1rem' },
              { name: '$accordion-toggle-spacing', value: '0 .5rem 0 0' },
              {},
              {
                name: '$accordion-toggle-transition',
                value: 'all $transition-effect $transition-duration'
              }
            ]}
          />
        </div>
      </div>
    );
  }
}
