import React, { Component } from 'react';

// import '../../../theme/Card.css'

class Button extends Component {

  // Renders
  render() {
    const {
      name,
      onClick
    } = this.props;
    return (
      <div className="button" >
        <button onClick={onClick} >
          { name }
        </button>
      </div>
    );
  }
}

export default Button;
