import React, { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';

export default class PageLayout extends Component {
  render() {
    return (
      <main>
        <Header />
        {this.props.children}
        <Navbar />
      </main>
    );
  }
}
