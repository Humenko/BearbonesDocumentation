import { faPaw } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Code from '../../Shared/Code';
import Heading from '../../Shared/DocumentationHeading';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import DocumentationVariables from '../../Shared/DocumentationVariables';
import MetaTags from '../../Shared/MetaTags';

export default class DividerDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <Heading
            title={this.props.heading}
            subTitle={this.props.subTitle}
            code='import "/bearbones/scss/components/divider/all"'
          />
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Basic" />
              <DocumentationHelper
                content={
                  <>
                    <p>
                      Panda bears have an extra “thumb” (which is actually an
                      extra-large wrist bone) just for holding onto bamboo
                      stalks. A panda bear can eat over 45 lbs of bamboo per
                      day.
                    </p>
                    <hr className="bb-divider" />
                    <p>
                      One variation of the black bear is a white bear called the
                      Kermode, ghost, or spirit bear. These bears are very rare.
                      Native Americans believed these white bears had
                      supernatural power.
                    </p>
                    <div className="bb-divider" />
                  </>
                }
                code={
                  <>
                    <Code language="markup">{'<hr class="bb-divider" />'}</Code>
                    <Code language="markup">
                      {'<div class="bb-divider"></div>'}
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
                  <>
                    <p>
                      Panda bears have an extra “thumb” (which is actually an
                      extra-large wrist bone) just for holding onto bamboo
                      stalks. A panda bear can eat over 45 lbs of bamboo per
                      day.
                    </p>
                    <hr className="bb-divider primary" />
                    <p>
                      One variation of the black bear is a white bear called the
                      Kermode, ghost, or spirit bear. These bears are very rare.
                      Native Americans believed these white bears had
                      supernatural power.
                    </p>
                    <hr className="bb-divider secondary" />
                    <p>
                      Panda bears have an extra “thumb” (which is actually an
                      extra-large wrist bone) just for holding onto bamboo
                      stalks. A panda bear can eat over 45 lbs of bamboo per
                      day.
                    </p>
                    <hr className="bb-divider positive" />
                    <p>
                      One variation of the black bear is a white bear called the
                      Kermode, ghost, or spirit bear. These bears are very rare.
                      Native Americans believed these white bears had
                      supernatural power.
                    </p>
                    <hr className="bb-divider negative" />
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {'<hr class="bb-divider primary" />'}
                    </Code>
                    <Code language="markup">
                      {'<hr class="bb-divider secondary" />'}
                    </Code>
                    <Code language="markup">
                      {'<hr class="bb-divider positive" />'}
                    </Code>
                    <Code language="markup">
                      {'<hr class="bb-divider negative" />'}
                    </Code>
                  </>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Helper" />
              <DocumentationHelper
                content={
                  <>
                    <p>
                      Panda bears have an extra “thumb” (which is actually an
                      extra-large wrist bone) just for holding onto bamboo
                      stalks. A panda bear can eat over 45 lbs of bamboo per
                      day.
                    </p>
                    <div className="bb-divider divider-content">
                      <FontAwesomeIcon icon={faPaw} />
                    </div>
                    <p>
                      One variation of the black bear is a white bear called the
                      Kermode, ghost, or spirit bear. These bears are very rare.
                      Native Americans believed these white bears had
                      supernatural power.
                    </p>
                    <div className="bb-divider divider-content">Divider</div>
                  </>
                }
                code={
                  <>
                    <Code language="markup">
                      {`<div class="bb-divider divider-content">
  <i class="fas fa-paw" />
</div>`}
                    </Code>
                    <Code language="markup">
                      {'<div class="bb-divider divider-content">Divider</div>'}
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
                    <p>
                      Panda bears have an extra “thumb” (which is actually an
                      extra-large wrist bone) just for holding onto bamboo
                      stalks. A panda bear can eat over 45 lbs of bamboo per
                      day.
                    </p>
                    <hr className="bb-divider hidden" />
                    <p>
                      One variation of the black bear is a white bear called the
                      Kermode, ghost, or spirit bear. These bears are very rare.
                      Native Americans believed these white bears had
                      supernatural power.
                    </p>
                  </>
                }
                code={
                  <Code language="markup">
                    {'<hr class="bb-divider hidden"/>'}
                  </Code>
                }
              />
            </div>
          </div>
          <DocumentationVariables
            variables={[
              { name: '$divider-variant-border', value: '$light-grey' },
              {
                name: '$divider-variant-color',
                value: '$base-variant-background'
              },
              {},
              { name: '$divider-border-radius', value: '$border-width' },
              { name: '$divider-border-style', value: '$border-style' },
              { name: '$divider-border-width', value: '$border-width / 2' },
              {},
              {
                name: '$divider-content-border-width',
                value: '$divider-border-width * 1.5'
              },
              { name: '$divider-font-weight', value: '500' },
              {},
              { name: '$divider-spacing-x', value: '1rem' },
              { name: '$divider-spacing-y', value: '1.5rem' }
            ]}
          />
        </div>
      </div>
    );
  }
}
