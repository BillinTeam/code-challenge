import React, { Component } from 'react';

import '../../../theme/Card.css'

class Card extends Component {

  // Renders
  render() {
    const {
      author,
      excerpt,
    } = this.props;
    return (
      <div className="card">
        <h4>{author}</h4>
        <p>{excerpt}</p>
      </div>
    );
  }
}

export default Card;
