import React from 'react';
import PropTypes from 'prop-types';
import { cardStyle, h1Style } from './cardStyles';

const Card = ({ author, excerpt, index, title }) => (
  <div key={index} style={cardStyle(index)}>
    <h1 style={h1Style}>{title}</h1>
    <h3 style={{ textAlign: 'center' }}>{author}</h3>
    <h5 style={{ textAlign: 'justify '}}>{excerpt}</h5>
  </div>
);

Card.propTypes = {
  author: PropTypes.string,
  excerpt: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string,
};

export default Card;
