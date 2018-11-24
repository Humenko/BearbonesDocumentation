import React, { Component } from 'react';
import Highlight from 'react-highlight';

export default class HeroDocumentation extends Component {
  render() {
    return (
      <>
        <div className="section p-t-0 p-b-0">
          <div className="container">
            <div className="bb-grid md">
              <div className="column column-16">
                <h1 className="title">Hero</h1>
                <p className="subtitle">
                  A component which extends to the whole horizontal viewport,
                  used to showcase key messaging.
                </p>
                <Highlight className="js">
                  {'import "../bearbones/sass/components/hero/all"'}
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <section className="hero m-b-4">
          <div className="body">
            <div className="container">
              <div className="bb-grid lg">
                <div className="column">
                  <h2>Default</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section p-t-0">
          <div className="container">
            <div className="bb-grid md">
              <div className="column column-16">
                <h4 className="title">Basic</h4>
                <div className="bb-box example full-x">
                  <div className="doc-snippet">
                    <Highlight className="html">
                      {`<section class="hero">
  <div class="body">
    <div class="container">
      <div class="bb-grid lg">
        <div class="column">
          <h2>Default</h2>
        </div>
      </div>
    </div>
  </div>
</section>`}
                    </Highlight>
                    <button className="bb-btn primary doc-copy sm">Copy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="hero invert m-b-4">
          <div className="body">
            <div className="container">
              <div className="bb-grid lg">
                <div className="column">
                  <h2>Invert</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero primary m-b-4">
          <div className="body">
            <div className="container">
              <div className="bb-grid lg">
                <div className="column">
                  <h2>Primary</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section p-t-0 p-b-0 m-b-3">
          <div className="container">
            <div className="bb-grid md">
              <div className="column column-16">
                <h4 className="title">Colour</h4>
                <div className="bb-box example full-x">
                  <div className="doc-snippet">
                    <Highlight className="html">
                      {`<section class="hero primary">
  <div class="body">
    <div class="container">
      <div class="bb-grid lg">
        <div class="column">
          <h2>Default</h2>
        </div>
      </div>
    </div>
  </div>
</section>`}
                    </Highlight>
                    <button className="bb-btn primary doc-copy sm">Copy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="hero secondary m-b-4">
          <div className="body">
            <div className="container">
              <div className="bb-grid lg">
                <div className="column">
                  <h2>Secondary</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero positive m-b-4">
          <div className="body">
            <div className="container">
              <div className="bb-grid lg">
                <div className="column">
                  <h2>Positive</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero negative m-b-4">
          <div className="body">
            <div className="container">
              <div className="bb-grid lg">
                <div className="column">
                  <h2>Negative</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section p-b-0 m-b-3">
          <div className="container">
            <div className="bb-grid md">
              <div className="column column-16">
                <h4 className="title">Full viewport</h4>
                <p className="subtitle">
                  With the hero component you also have the ability to set the
                  size to the full width and height of the device.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="hero primary full-y">
          <div className="head">
            <div className="container">
              <div className="bb-grid lg">
                <div className="column">
                  <h2>Head</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="body">
            <div className="container">
              <div className="bb-grid lg">
                <div className="column">
                  <h2 className="title">Body</h2>
                  <p className="subtitle lg">
                    The giant panda has a large head for its body. Scientists
                    believe this is because it needs a strong jaw and neck
                    muscles to eat bamboo, which makes up 99% of its diet. The
                    remaining 1% consists of insects on the bamboo and dead meat
                    that the panda may find.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="tail">
            <div className="container">
              <div className="bb-grid lg">
                <div className="column">
                  <h2>Tail</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section p-t-0 m-t-3">
          <div className="container">
            <div className="bb-grid md">
              <div className="column column-16">
                <div className="bb-box example full-x">
                  <div className="doc-snippet">
                    <Highlight className="html">
                      {`<section class="hero primary full-y">
  <div class="head">
    <div class="container">
      <div class="bb-grid lg">
        <div class="column">
          <h2>Head</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="body">
    <div class="container">
      <div class="bb-grid lg">
        <div class="column">
          <h2 class="title">Body</h2>
          <p class="subtitle lg">
            The giant panda has a large head for its body. Scientists believe this is because it needs a strong 
            jaw and neck muscles to eat bamboo, which makes up 99% of its diet. The remaining 1% consists of 
            insects on the bamboo and dead meat that the panda may find.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="tail">
    <div class="container">
      <div class="bb-grid lg">
        <div class="column">
          <h2>Tail</h2>
        </div>
      </div>
    </div>
  </div>
</section>`}
                    </Highlight>
                    <button className="bb-btn primary doc-copy sm">Copy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
