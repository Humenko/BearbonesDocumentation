import React, { Component } from 'react';
import Code from '../../Shared/Code';
import Heading from '../../Shared/DocumentationHeading';
import DocumentationHelper from '../../Shared/DocumentationHelper';
import SubHeading from '../../Shared/DocumentationSubHeading';
import MetaTags from '../../Shared/MetaTags';

export default class InstallingDocumentation extends Component {
  render() {
    return (
      <div className="section lg p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <Heading title={this.props.heading} subTitle={this.props.subTitle} />
          <div className="bb-grid md">
            <div className="column column-16">
              <ol>
                <li>
                  use{' '}
                  <a
                    href="https://yarnpkg.com/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-weight-bold"
                  >
                    Yarn
                  </a>{' '}
                  to install the Bearbones package.
                  <Code language="js">{'yarn add bearbones'}</Code>
                </li>
                <li>
                  use{' '}
                  <a
                    href="https://www.npmjs.com/package/bearbones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-weight-bold"
                  >
                    NPM
                  </a>{' '}
                  to install the Bearbones package.
                  <Code language="js">{'npm i bearbones'}</Code>
                </li>
                <li>
                  use{' '}
                  <a
                    href="https://www.jsdelivr.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-weight-bold"
                  >
                    jsDelivr CDN
                  </a>{' '}
                  to link to the Bearbones stylesheet.
                  <div className="code-block">
                    <Code language="markup">
                      {`<link rel="stylesheet" href="${
                        process.env.REACT_APP_CDN_URL
                      }">`}
                    </Code>
                  </div>
                </li>
              </ol>
              <p>
                You can also use the Bearbones{' '}
                <a
                  href={process.env.REACT_APP_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-weight-bold"
                >
                  GitHub
                </a>{' '}
                repository to view important bug fixes and upcoming development
                changes.
              </p>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="Starter Template" />
              <p className="subtitle p-b-3">
                Feeling lazy? use this HTML template below to get started.
              </p>
              <DocumentationHelper
                className="full-x"
                content={''}
                code={
                  <Code language="markup">
                    {`<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bearbones CSS CDN -->
    <link rel="stylesheet" href="${process.env.REACT_APP_CDN_URL}">

    <title>Bearbones, powered by Pandas!</title>
  </head>
  <body>
    <section class="section primary">
      <div class="container">
        <div class="bb-grid lg">
          <div class="column">
            <h1>Bearbones, powered by Pandas!</h1>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>`}
                  </Code>
                }
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <SubHeading title="HelloBearbones" />
              <p className="subtitle">
                Feeling super lazy? Here is a pre-built npm package to help you
                build your very own website with Bearbones.
              </p>
              <button className="bb-btn lg positive m-y-3" disabled>
                Coming soon
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
