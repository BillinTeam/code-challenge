import React from 'react';
import PropTypes from 'prop-types';
import style from './Layout.css';

import Header from '../Header';
import Footer from '../Footer';
import Content from '../Content';

const Layout = ({ children }) =>
  <div className={style.mainLayout}>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
