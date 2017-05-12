import React, { Component } from 'react';
import request from '../../../../infrastructure/request';
import { ARTICLES_QUERY } from '../../../../infrastructure/request/queries';

import ArticleCard from '../ArticleCard';

class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  renderCards = articles => articles.map(article => (
    <ArticleCard key={article.title} {...article} />
  ));

  render() {
    const { articles } = this.state;
    return (
      <div>{this.renderCards(articles)}</div>
    );
  }
}

export default ArticlesList;
