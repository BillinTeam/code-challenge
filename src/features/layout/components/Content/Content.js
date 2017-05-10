import React from 'react';
import PropTypes from 'prop-types';

import './Content.css';

const Content = ({ children }) =>
  <div className="Content">
    {children}
  </div>;

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
