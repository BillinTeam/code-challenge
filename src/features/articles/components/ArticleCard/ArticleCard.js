import React from 'react';
import PropTypes from 'prop-types';

const ArticleCard = ({ author, excerpt, title }) =>
  <div>
    <h1>{title}</h1>
    Autor: {author}
    Excerpt: {excerpt}
  </div>;

ArticleCard.propTypes = {
  author: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ArticleCard;
