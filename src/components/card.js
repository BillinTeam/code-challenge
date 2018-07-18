import React from 'react';
import PropTypes from 'prop-types';

const NUMBER_OF_COLS = 3;

const cardStyle = id => {
  const rowId = Math.floor(id / NUMBER_OF_COLS);
  const colId = id % NUMBER_OF_COLS;
  return {
    gridColumn: `col-${colId}`,
    gridRow: `row-${rowId}`,
  };
};

const Card = ({ author, excerpt, id, index, title }) => (
  <div key={index} style={cardStyle(index)}>
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
  index: PropTypes.number,
  title: PropTypes.string,
};

export default Card;
