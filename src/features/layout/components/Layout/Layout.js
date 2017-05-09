import React, { PropTypes } from 'react';
import style from './Layout.css';


const Layout = ({ children }) =>
  <div className={style.mainLayout}>
    {children}
  </div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
