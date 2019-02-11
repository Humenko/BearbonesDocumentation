import { faPawClaws } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Code from '../../Shared/Code';
import Heading from '../../Shared/DocumentationHeading';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import DocumentationVariables from '../../Shared/DocumentationVariables';
import MetaTags from '../../Shared/MetaTags';

export default class ListDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <Heading title={this.props.heading} subTitle={this.props.subTitle} />
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Unordered" />
              <DocumentationHelper
                content={
                  <ul>
                    <li>Panda</li>
                    <li>Brown Bear</li>
                    <li>Polar Bear</li>
                    <li>Sloth Bear</li>
                  </ul>
                }
                code={
                  <Code language="markup">
                    {`<ul>
  <li>Panda</li>
  <li>Brown Bear</li>
  <li>Polar Bear</li>
  <li>Sloth Bear</li>
</ul>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Ordered" />
              <DocumentationHelper
                content={
                  <ol>
                    <li>Panda</li>
                    <li>Brown Bear</li>
                    <li>Polar Bear</li>
                    <li>Sloth Bear</li>
                  </ol>
                }
                code={
                  <Code language="markup">
                    {`<ol>
  <li>Panda</li>
  <li>Brown Bear</li>
  <li>Polar Bear</li>
  <li>Sloth Bear</li>
</ol>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Unstyled" />
              <DocumentationHelper
                content={
                  <ul className="unstyled">
                    <li>Panda</li>
                    <li>Brown Bear</li>
                    <li>Polar Bear</li>
                    <li>Sloth Bear</li>
                  </ul>
                }
                code={
                  <Code language="markup">
                    {`<ul class="unstyled">
  <li>Panda</li>
  <li>Brown Bear</li>
  <li>Polar Bear</li>
  <li>Sloth Bear</li>
</ul>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Inline" />
              <DocumentationHelper
                content={
                  <ul className="inline">
                    <li className="inline-item">Panda</li>
                    <li className="inline-item">Brown Bear</li>
                    <li className="inline-item">Polar Bear</li>
                    <li className="inline-item">Sloth Bear</li>
                  </ul>
                }
                code={
                  <Code language="markup">
                    {`<ul class="inline">
  <li class="inline-item">Panda</li>
  <li class="inline-item">Brown Bear</li>
  <li class="inline-item">Polar Bear</li>
  <li class="inline-item">Sloth Bear</li>
</ul>`}
                  </Code>
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
                    <ul className="xs">
                      <li>Panda</li>
                      <li>Brown Bear</li>
                    </ul>
                    <hr className="bb-divider" />
                    <ul className="sm">
                      <li>Panda</li>
                      <li>Brown Bear</li>
                    </ul>
                    <hr className="bb-divider" />
                    <ul className="lg">
                      <li>Panda</li>
                      <li>Brown Bear</li>
                    </ul>
                    <hr className="bb-divider" />
                    <ul className="xl">
                      <li>Panda</li>
                      <li>Brown Bear</li>
                    </ul>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<ul class="xs">
  <li>Panda</li>
  <li>Brown Bear</li>
</ul>`}
                    </Code>
                    <Code language="markup">
                      {`<ul class="sm">
  <li>Panda</li>
  <li>Brown Bear</li>
</ul>`}
                    </Code>
                    <Code language="markup">
                      {`<ul class="lg">
  <li>Panda</li>
  <li>Brown Bear</li>
</ul>`}
                    </Code>
                    <Code language="markup">
                      {`<ul class="xl">
  <li>Panda</li>
  <li>Brown Bear</li>
</ul>`}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Icons" />
              <DocumentationHelper
                content={
                  <ul className="icon">
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faPawClaws} />
                      </i>
                      Panda
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faPawClaws} />
                      </i>
                      Brown Bear
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faPawClaws} />
                      </i>
                      Polar Bear
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faPawClaws} />
                      </i>
                      Sloth Bear
                    </li>
                  </ul>
                }
                code={
                  <Code language="markup">
                    {`<ul class="icon">
  <li><i class="fas fa-paw-claws"></i> Panda</li>
  <li><i class="fas fa-paw-claws"></i> Brown Bear</li>
  <li><i class="fas fa-paw-claws"></i> Polar Bear</li>
  <li><i class="fas fa-paw-claws"></i> Sloth Bear</li>
</ul>`}
                  </Code>
                }
              />
            </div>
          </div>
          <DocumentationVariables
            variables={[
              { name: '$list-spacing-x', value: '1rem' },
              { name: '$list-spacing-y', value: '0.5rem' }
            ]}
          />
        </div>
      </div>
    );
  }
}
