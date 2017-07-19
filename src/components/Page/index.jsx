import React, { Component } from 'react';

import Cards from '../Cards'

class Page extends Component {
  // definition
  constructor(props) {
    super(props);
  }

  // Renders
  render() {
    return (
      <div className="page">
        <Cards></Cards>
      </div>
    );
  }
}

export default Page;
