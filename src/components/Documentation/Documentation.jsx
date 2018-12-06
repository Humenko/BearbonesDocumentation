import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DocumentationBox from '../Shared/DocumentationBox';
import MetaTags from '../Shared/MetaTags';

class Documentation extends Component {
  render() {
    const sections = this.props.documentationRoutes
      .map(r => r.section)
      .filter((value, index, self) => self.indexOf(value) === index)
      .map(s => ({
        name: s,
        links: this.props.documentationRoutes.filter(r => r.section === s)
      }));

    return (
      <div className="section p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-sm">
              <h1 className="title">Documentation</h1>
            </div>
          </div>
          {sections.map(section => (
            <div key={section.name} className="bb-grid md">
              <div className="column column-16">
                <h3 className="text-primary">{section.name}</h3>
              </div>
              {section.links.map(({ path, title, subTitle }, i) => (
                <div key={i} className="column one-third-lg column-8-md">
                  <DocumentationBox
                    link={path}
                    title={title}
                    subTitle={subTitle}
                    className={subTitle === 'Coming soon...' && 'disabled'}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
Documentation.propTypes = {
  documentationRoutes: PropTypes.array,
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default Documentation;
