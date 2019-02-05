import React, { Component } from 'react';
import Code from '../../Shared/Code';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import DocumentationVariables from '../../Shared/DocumentationVariables';
import MetaTags from '../../Shared/MetaTags';

export default class MediaDocumentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">Media</h1>
              <p className="subtitle">
                This component is used to create repetitive elements where
                content is positioned with some imagery, used widely for social
                media.
              </p>
              <Code language="js">
                {'import "../bearbones/sass/components/media/all"'}
              </Code>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Basic" />
              <DocumentationHelper
                className="full-x"
                content={
                  <div className="doc-content">
                    <article className="media">
                      <div className="media-left">
                        <figure>
                          <img
                            src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+"
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div className="media-container">
                        <div className="media-content">
                          <p>
                            <strong>Paddington</strong>
                          </p>
                          <p>
                            Black bears are typically smaller than grizzly
                            bears, have a smaller shoulder hump, less shaggy
                            fur, longer ears, and a less concave facial profile.
                            Black bear claws are also smaller and more curved to
                            better climb trees.
                            <br />
                            <small>
                              <a className="link" href="#example">
                                Reply
                              </a>{' '}
                              - 2 hours ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<article class="media">
  <div class="media-left">
    <figure>
      <img src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+" alt="Placeholder"/>
    </figure>
  </div>
  <div class="media-container">
    <div class="media-content">
      <p><strong>Paddington</strong></p>
      <p>
        Black bears are typically smaller than grizzly bears, have a smaller shoulder hump, 
        less shaggy fur, longer ears, and a less concave facial profile. Black bear claws 
        are also smaller and more curved to better climb trees.
        <br />
        <small><a class="link" href="#">Reply</a> - 2 hours ago</small>
      </p>
    </div>
  </div>
</article>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Nested" />
              <DocumentationHelper
                className="full-x"
                content={
                  <div className="doc-content">
                    <article className="media">
                      <div className="media-left">
                        <figure>
                          <img
                            src="http://via.placeholder.com/48x48/24C2AB/ffffff?text=+"
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div className="media-container">
                        <div className="media-content">
                          <p>
                            <strong>Paddington</strong>
                          </p>
                          <p>
                            Black bears are typically smaller than grizzly
                            bears, have a smaller shoulder hump, less shaggy
                            fur, longer ears, and a less concave facial profile.
                            Black bear claws are also smaller and more curved to
                            better climb trees.
                            <br />
                            <small>
                              <a className="link" href="#example">
                                Reply
                              </a>{' '}
                              - 2 hours ago
                            </small>
                          </p>
                          <article className="media">
                            <div className="media-left">
                              <figure>
                                <img
                                  src="http://via.placeholder.com/48x48/24C2AB/ffffff?text=+"
                                  alt="Placeholder"
                                />
                              </figure>
                            </div>
                            <div className="media-container">
                              <div className="media-content">
                                <p>
                                  <strong>Paddington</strong>
                                </p>
                                <p>
                                  Black bears are typically smaller than grizzly
                                  bears, have a smaller shoulder hump, less
                                  shaggy fur, longer ears, and a less concave
                                  facial profile. Black bear claws are also
                                  smaller and more curved to better climb trees.
                                  <br />
                                  <small>
                                    <a className="link" href="#example">
                                      Reply
                                    </a>{' '}
                                    - 2 hours ago
                                  </small>
                                </p>
                                <article className="media">
                                  <div className="media-left">
                                    <figure>
                                      <img
                                        src="http://via.placeholder.com/48x48/24C2AB/ffffff?text=+"
                                        alt="Placeholder"
                                      />
                                    </figure>
                                  </div>
                                  <div className="media-container">
                                    <div className="media-content">
                                      <p>
                                        <strong>Paddington</strong>
                                      </p>
                                      <p>
                                        Black bears are typically smaller than
                                        grizzly bears, have a smaller shoulder
                                        hump, less shaggy fur, longer ears, and
                                        a less concave facial profile. Black
                                        bear claws are also smaller and more
                                        curved to better climb trees.
                                        <br />
                                        <small>
                                          <a className="link" href="#example">
                                            Reply
                                          </a>{' '}
                                          - 2 hours ago
                                        </small>
                                      </p>
                                    </div>
                                  </div>
                                </article>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </article>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<article class="media">
  <div class="media-left">
    <figure>
      <img src="http://via.placeholder.com/48x48/24C2AB/ffffff?text=+" alt="Placeholder"/>
    </figure>
  </div>
  <div class="media-container">
    <div class="media-content">
      <p><strong>Paddington</strong></p>
      <p>
        Black bears are typically smaller than grizzly bears, have a smaller shoulder hump, 
        less shaggy fur, longer ears, and a less concave facial profile. Black bear claws 
        are also smaller and more curved to better climb trees.
        <br />
        <small><a class="link" href="#example">Reply</a> - 2 hours ago</small>
      </p>
      <article class="media">
        <div class="media-left">
          <figure>
            <img src="http://via.placeholder.com/48x48/24C2AB/ffffff?text=+" alt="Placeholder"/>
          </figure>
        </div>
        <div class="media-container">
          <div class="media-content">
            <p><strong>Paddington</strong></p>
            <p>
              Black bears are typically smaller than grizzly bears, have a smaller shoulder hump, 
              less shaggy fur, longer ears, and a less concave facial profile. Black bear claws 
              are also smaller and more curved to better climb trees.
              <br />
              <small><a class="link" href="#example">Reply</a> - 2 hours ago</small>
            </p>
            <article class="media">
              <div class="media-left">
                <figure>
                  <img src="http://via.placeholder.com/48x48/24C2AB/ffffff?text=+" alt="Placeholder"/>
                </figure>
              </div>
              <div class="media-container">
                <div class="media-content">
                  <p><strong>Paddington</strong></p>
                  <p>
                    Black bears are typically smaller than grizzly bears, have a smaller shoulder hump, 
                    less shaggy fur, longer ears, and a less concave facial profile. Black bear claws 
                    are also smaller and more curved to better climb trees.
                    <br />
                    <small><a class="link" href="#example">Reply</a> - 2 hours ago</small>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </article>
    </div>
  </div>
</article>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Alignment" />
              <DocumentationHelper
                className="full-x"
                content={
                  <div className="doc-content">
                    <article className="media center">
                      <div className="media-left">
                        <figure>
                          <img
                            src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+"
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div className="media-container">
                        <div className="media-content">
                          <p>
                            <strong>Paddington</strong>
                          </p>
                          <p className="text-xl">
                            Black bears are typically smaller than grizzly
                            bears, have a smaller shoulder hump, less shaggy
                            fur, longer ears, and a less concave facial profile.
                            Black bear claws are also smaller and more curved to
                            better climb trees.
                            <br />
                            <small>
                              <a className="link" href="#example">
                                Reply
                              </a>{' '}
                              - 2 hours ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<article class="media center">
  <div class="media-container">
    <div class="media-left">
      <figure>
        <img src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+" alt="Placeholder"/>
      </figure>
    </div>  
    <div class="media-content">
      <p><strong>Paddington</strong></p>
      <p>
        Black bears are typically smaller than grizzly bears, have a smaller shoulder hump, 
        less shaggy fur, longer ears, and a less concave facial profile. Black bear claws 
        are also smaller and more curved to better climb trees.
        <br />
        <small><a class="link" href="#">Reply</a> - 2 hours ago</small>
      </p>
    </div>
  </div>
</article>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <DocumentationHelper
                className="full-x"
                content={
                  <div className="doc-content">
                    <article className="media bottom">
                      <div className="media-left">
                        <figure>
                          <img
                            src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+"
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div className="media-container">
                        <div className="media-content">
                          <p>
                            <strong>Paddington</strong>
                          </p>
                          <p className="text-xl">
                            Black bears are typically smaller than grizzly
                            bears, have a smaller shoulder hump, less shaggy
                            fur, longer ears, and a less concave facial profile.
                            Black bear claws are also smaller and more curved to
                            better climb trees.
                            <br />
                            <small>
                              <a className="link" href="#example">
                                Reply
                              </a>{' '}
                              - 2 hours ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<article class="media bottom">
  <div class="media-container">
    <div class="media-left">
      <figure>
        <img src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+" alt="Placeholder"/>
      </figure>
    </div>  
    <div class="media-content">
      <p><strong>Paddington</strong></p>
      <p>
        Black bears are typically smaller than grizzly bears, have a smaller shoulder hump, 
        less shaggy fur, longer ears, and a less concave facial profile. Black bear claws 
        are also smaller and more curved to better climb trees.
        <br />
        <small><a class="link" href="#">Reply</a> - 2 hours ago</small>
      </p>
    </div>
  </div>
</article>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <DocumentationHelper
                className="full-x"
                content={
                  <div className="doc-content">
                    <article className="media">
                      <div className="media-container">
                        <div className="media-content">
                          <p>
                            <strong>Paddington</strong>
                          </p>
                          <p>
                            Black bears are typically smaller than grizzly
                            bears, have a smaller shoulder hump, less shaggy
                            fur, longer ears, and a less concave facial profile.
                            Black bear claws are also smaller and more curved to
                            better climb trees.
                            <br />
                            <small>
                              <a className="link" href="#example">
                                Reply
                              </a>{' '}
                              - 2 hours ago
                            </small>
                          </p>
                        </div>
                      </div>
                      <div className="media-right">
                        <figure>
                          <img
                            src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+"
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                }
                code={
                  <Code language="markup">
                    {`<article class="media">
  <div class="media-container">
    <div class="media-content">
      <p><strong>Paddington</strong></p>
      <p>
        Black bears are typically smaller than grizzly bears, have a smaller shoulder hump, 
        less shaggy fur, longer ears, and a less concave facial profile. Black bear claws 
        are also smaller and more curved to better climb trees.
        <br />
        <small><a class="link" href="#">Reply</a> - 2 hours ago</small>
      </p>
    </div>
  </div>
  <div class="media-right">
    <figure>
      <img src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+" alt="Placeholder"/>
    </figure>
  </div>
</article>`}
                  </Code>
                }
              />
            </div>
          </div>
          <DocumentationVariables
            variables={[
              { name: '$media-variant-border', value: '$light-grey' },
              {},
              { name: '$media-border-radius', value: '$border-width' },
              { name: '$media-border-style', value: '$border-style' },
              { name: '$media-border-width', value: '$border-width' },
              {},
              { name: '$media-spacing-x', value: '1rem' },
              { name: '$media-spacing-y', value: '1rem' }
            ]}
          />
        </div>
      </div>
    );
  }
}
