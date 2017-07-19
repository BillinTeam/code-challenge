import React, { Component } from 'react';

import '../../theme/Header.css'

class Header extends Component {
  // definition
  constructor(props) {
    super(props);
  }

  // Renders
  render() {
    return (
      <div className="header">
        <h2>Billin code challenge</h2>
        <h3>Header</h3>
      </div>
    );
  }
}

export default Header;
