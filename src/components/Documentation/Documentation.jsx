import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DocumentationBox from '../Shared/DocumentationBox';
import MetaTags from '../Shared/MetaTags';

class Documentation extends Component {
  render() {
    const sections = this.props.documenationRoutes
                        .map(r => r.section)
                        .filter((value, index, self) => self.indexOf(value) === index)
                        .map(s => ({
                          name: s,
                          links: this.props.documenationRoutes.filter(r => r.section === s)
                        })
                      );

    return (
      <div className="section p-t-0">
        <MetaTags title={this.props.title} subTitle={this.props.subTitle} />
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-sm">
              <h1 className="title">Documentation</h1>
            </div>
          </div>
            {sections.map(section => <div key={section.name} className="bb-grid md">
              <div className="column column-16">
                <h3 className="text-primary">{section.name}</h3>
              </div>
              {section.links.map(({path, title, subTitle}, i) =>
                <div key={i} className="column one-third-lg column-8-md">
                  <DocumentationBox
                    link={path}
                    title={title}
                    subTitle={subTitle}
                    className={subTitle === 'Coming soon...' && 'disabled'}
                  />
                </div>
              )}
            </div>)}
          {/* <div className="bb-grid md">
            <div className="column column-16">
              <h3 className="text-primary">Getting Started</h3>
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="#"
                title="Installing Bearbones"
                subTitle="Coming soon..."
                className="disabled"
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="#"
                title="Importing"
                subTitle="Coming soon..."
                className="disabled"
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="#"
                title="Variables"
                subTitle="Coming soon..."
                className="disabled"
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h3 className="text-primary">Components</h3>
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/accordion"
                title="Accordion"
                subTitle="A collapsible component which allows the user to show and
                hide content to meet their needs."
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/alert"
                title="Alert"
                subTitle="This component is used to provide feedback messages for users."
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/animation"
                title="Animation"
                subTitle="Coming soon..."
                className="disabled"
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/box"
                title="Box"
                subTitle="This component is used as a basic container that full widths to
                any element it is within."
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/breadcrumb"
                title="Breadcrumb"
                subTitle="A simple component used to display basic navigational structure."
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/button"
                title="Button"
                subTitle="An essential component for any design, providing the user a simple way to trigger an event."
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/card"
                title="Card"
                subTitle="Coming soon..."
                className="disabled"
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/divider"
                title="Divider"
                subTitle="This component is used to visually separate content for the user."
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/dropdown"
                title="Dropdown"
                subTitle="Coming soon..."
                className="disabled"
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/field"
                title="Field"
                subTitle="Coming soon..."
                className="disabled"
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/footer"
                title="Footer"
                subTitle="This component is widely used as a source of navigation on the
                bottom of webpages."
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/media"
                title="Media"
                subTitle="This component is used to create repetitive elements
                where content is positioned with some imagery."
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/navbar"
                title="Navbar"
                subTitle="Coming soon..."
                className="disabled"
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/pagination"
                title="Pagination"
                subTitle="This component is used to display grouped content existing
                between multiple pages."
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/stat"
                title="Stat"
                subTitle="This component is used to empathise both the label and value for
                an attribute."
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/tab"
                title="Tab"
                subTitle="Coming soon..."
                className="disabled"
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="components/table"
                title="Table"
                subTitle="This component is used to spruce up the HTML table we all know
                and love."
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h3 className="text-primary">Layout</h3>
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="layout/basic"
                title="Basic"
                subTitle="Coming soon..."
                className="disabled"
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="layout/grid"
                title="Grid"
                subTitle="Coming soon..."
                className="disabled"
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="layout/hero"
                title="Hero"
                subTitle="A component which extends to the whole horizontal viewport,
                used to showcase key messaging."
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="layout/family-grid"
                title="Family grid"
                subTitle="Coming soon..."
                className="disabled"
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h3 className="text-primary">Helper</h3>
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="helper/display"
                title="Display"
                subTitle="Easily be able to toggle through display properties with these helper classes."
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="helper/flex"
                title="Flex"
                subTitle="Easily be able to toggle through flex properties with these helper classes."
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="#"
                title="List"
                subTitle="Coming soon..."
                className="disabled"
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="helper/position"
                title="Position"
                subTitle="Easily be able to toggle through position properties with these helper classes."
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="helper/spacing"
                title="Spacing"
                subTitle="Easily be able to seet the margin and / or padding of various elements."
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="#"
                title="Typography"
                subTitle="Coming soon..."
                className="disabled"
              />
            </div>
            <div className="column one-third-lg column-8-md">
              <DocumentationBox
                link="helper/visibility"
                title="Visibility"
                subTitle="Easily be able to toggle through the visibility of elements with these helper classes."
              />
            </div>
          </div> */}
        
        
        </div>
      </div>
    );
  }
}
Documentation.propTypes = {
  documenationRoutes: PropTypes.array,
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default Documentation;
