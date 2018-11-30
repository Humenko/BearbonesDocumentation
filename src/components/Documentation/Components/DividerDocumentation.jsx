import { faPaw } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Code from '../../Shared/Code';
import DocumentationVariabes from '../../Shared/DocumentationVariables';
import MetaTags from '../../Shared/MetaTags';

export default class DividerDocumentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">Divider</h1>
              <p className="subtitle">
                This component is used to visually separate content for the
                user.
              </p>
              <Code language="js">
                {'import "../bearbones/sass/components/divider/all"'}
              </Code>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Basic</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <p>
                    Panda bears have an extra “thumb” (which is actually an
                    extra-large wrist bone) just for holding onto bamboo stalks.
                    A panda bear can eat over 45 lbs of bamboo per day.
                  </p>
                  <hr className="bb-divider" />
                  <p>
                    One variation of the black bear is a white bear called the
                    Kermode, ghost, or spirit bear. These bears are very rare.
                    Native Americans believed these white bears had supernatural
                    power.
                  </p>
                  <div className="bb-divider" />
                </div>
                <div className="doc-snippet">
                  <Code language="markup">{'<hr class="bb-divider" />'}</Code>
                  <Code language="markup">
                    {'<div class="bb-divider"></div>'}
                  </Code>
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
                  <p>
                    Panda bears have an extra “thumb” (which is actually an
                    extra-large wrist bone) just for holding onto bamboo stalks.
                    A panda bear can eat over 45 lbs of bamboo per day.
                  </p>
                  <hr className="bb-divider primary" />
                  <p>
                    One variation of the black bear is a white bear called the
                    Kermode, ghost, or spirit bear. These bears are very rare.
                    Native Americans believed these white bears had supernatural
                    power.
                  </p>
                  <hr className="bb-divider secondary" />
                  <p>
                    Panda bears have an extra “thumb” (which is actually an
                    extra-large wrist bone) just for holding onto bamboo stalks.
                    A panda bear can eat over 45 lbs of bamboo per day.
                  </p>
                  <hr className="bb-divider positive" />
                  <p>
                    One variation of the black bear is a white bear called the
                    Kermode, ghost, or spirit bear. These bears are very rare.
                    Native Americans believed these white bears had supernatural
                    power.
                  </p>
                  <hr className="bb-divider negative" />
                </div>
                <div className="doc-snippet">
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
                  <p>
                    Panda bears have an extra “thumb” (which is actually an
                    extra-large wrist bone) just for holding onto bamboo stalks.
                    A panda bear can eat over 45 lbs of bamboo per day.
                  </p>
                  <div className="bb-divider divider-content">
                    <FontAwesomeIcon icon={faPaw} />
                  </div>
                  <p>
                    One variation of the black bear is a white bear called the
                    Kermode, ghost, or spirit bear. These bears are very rare.
                    Native Americans believed these white bears had supernatural
                    power.
                  </p>
                  <div className="bb-divider divider-content">Divider</div>
                </div>
                <div className="doc-snippet">
                  <Code language="markup">
                    {`<div class="bb-divider divider-content">
  <i class="fas fa-paw" />
</div>`}
                  </Code>
                  <Code language="markup">
                    {'<div class="bb-divider divider-content">Divider</div>'}
                  </Code>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <div className="bb-box example">
                <div className="doc-preview">
                  <p>
                    Panda bears have an extra “thumb” (which is actually an
                    extra-large wrist bone) just for holding onto bamboo stalks.
                    A panda bear can eat over 45 lbs of bamboo per day.
                  </p>
                  <hr className="bb-divider hidden" />
                  <p>
                    One variation of the black bear is a white bear called the
                    Kermode, ghost, or spirit bear. These bears are very rare.
                    Native Americans believed these white bears had supernatural
                    power.
                  </p>
                </div>
                <div className="doc-snippet">
                  <Code language="markup">
                    {'<hr class="bb-divider hidden"/>'}
                  </Code>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <DocumentationVariabes
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
