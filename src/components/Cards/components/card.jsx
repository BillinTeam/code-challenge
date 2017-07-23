import React, { Component } from 'react';
import { browserHistory } from 'react-router'

import '../../../theme/Card.css'

class Card extends Component {

  openCard = () => {
    browserHistory.push(`/${this.props.id}`)
  }

  // Renders
  render() {
    const {
      author,
      excerpt,
    } = this.props;
    return (
      <div className="card" onClick={this.openCard} >
        <h4>{author}</h4>
        <p>{excerpt}</p>
      </div>
    );
  }
}

export default Card;
