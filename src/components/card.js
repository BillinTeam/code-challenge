import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ author, excerpt, id, title }) => (
  <div>
    <span>{`author: ${author}`}</span>
    <span>{`excerpt: ${excerpt}`}</span>
    <span>{`ID: ${id}`}</span>
    <span>{`title: ${title}`}</span>
  </div>
);

Card.propTypes = {
  author: PropTypes.string,
  excerpt: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
