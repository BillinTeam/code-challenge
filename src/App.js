import React from 'react';

import './App.css';

import Layout from './features/layout/components/Layout';
import ArticlesList from './features/articles/components/ArticlesList';

const App = () =>
  <Layout>
    <ArticlesList />
  </Layout>;

export default App;
