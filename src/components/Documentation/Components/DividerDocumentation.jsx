import React, { Component } from 'react';
import Highlight from 'react-highlight';

export default class DividerDocumentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">Divider</h1>
              <p className="subtitle">
                This component is used to visually separate content for the
                user.
              </p>
              <Highlight className="js">
                {'import "../bearbones/sass/components/divider/all"'}
              </Highlight>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Basic</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <p className="text-doc">
                    Panda bears have an extra “thumb” (which is actually an
                    extra-large wrist bone) just for holding onto bamboo stalks.
                    A panda bear can eat over 45 lbs of bamboo per day.
                  </p>
                  <hr className="bb-divider" />
                  <p className="text-doc">
                    One variation of the black bear is a white bear called the
                    Kermode, ghost, or spirit bear. These bears are very rare.
                    Native Americans believed these white bears had supernatural
                    power.
                  </p>
                  <div className="bb-divider" />
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {'<hr class="bb-divider" />'}
                  </Highlight>
                  <Highlight className="html">
                    {'<div class="bb-divider"></div>'}
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
                  <p className="text-doc">
                    Panda bears have an extra “thumb” (which is actually an
                    extra-large wrist bone) just for holding onto bamboo stalks.
                    A panda bear can eat over 45 lbs of bamboo per day.
                  </p>
                  <hr className="bb-divider primary" />
                  <p className="text-doc">
                    One variation of the black bear is a white bear called the
                    Kermode, ghost, or spirit bear. These bears are very rare.
                    Native Americans believed these white bears had supernatural
                    power.
                  </p>
                  <hr className="bb-divider secondary" />
                  <p className="text-doc">
                    Panda bears have an extra “thumb” (which is actually an
                    extra-large wrist bone) just for holding onto bamboo stalks.
                    A panda bear can eat over 45 lbs of bamboo per day.
                  </p>
                  <hr className="bb-divider positive" />
                  <p className="text-doc">
                    One variation of the black bear is a white bear called the
                    Kermode, ghost, or spirit bear. These bears are very rare.
                    Native Americans believed these white bears had supernatural
                    power.
                  </p>
                  <hr className="bb-divider negative" />
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {'<hr class="bb-divider primary" />'}
                  </Highlight>
                  <Highlight className="html">
                    {'<hr class="bb-divider secondary" />'}
                  </Highlight>
                  <Highlight className="html">
                    {'<hr class="bb-divider positive" />'}
                  </Highlight>
                  <Highlight className="html">
                    {'<hr class="bb-divider negative" />'}
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
                  <p className="text-doc">
                    Panda bears have an extra “thumb” (which is actually an
                    extra-large wrist bone) just for holding onto bamboo stalks.
                    A panda bear can eat over 45 lbs of bamboo per day.
                  </p>
                  <div className="bb-divider divider-content">
                    <i className="fas fa-paw" />
                  </div>
                  <p className="text-doc">
                    One variation of the black bear is a white bear called the
                    Kermode, ghost, or spirit bear. These bears are very rare.
                    Native Americans believed these white bears had supernatural
                    power.
                  </p>
                  <div className="bb-divider divider-content">Divider</div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div className="bb-divider divider-separator">
  <i className="fas fa-paw" />
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div className="bb-divider divider-separator">Divider</div>`}
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
                  <p className="text-doc">
                    Panda bears have an extra “thumb” (which is actually an
                    extra-large wrist bone) just for holding onto bamboo stalks.
                    A panda bear can eat over 45 lbs of bamboo per day.
                  </p>
                  <hr className="bb-divider hidden" />
                  <p className="text-doc">
                    One variation of the black bear is a white bear called the
                    Kermode, ghost, or spirit bear. These bears are very rare.
                    Native Americans believed these white bears had supernatural
                    power.
                  </p>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<hr class="bb-divider hidden"/>`}
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
