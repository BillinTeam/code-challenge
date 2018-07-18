import React, { Component } from 'react';
import request from '../api/request';
import { ARTICLES_QUERY } from '../api/queries';
import Card from '../components/card';

const gridStyle = {
  display: 'grid',
  gridGap: 25,
  gridTemplateColumns: '[col-0] 33% [col-1] 33% [col-2] 33% [col-2-end]',
  gridTemplateRows: '[row-0] 20%[row-1] 20% [row-2] 20%[row-3] auto [row-3-end]',
  margin: '25px auto',
  width: '800',
  height: '600',
};

export class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentWillMount() {
    request(ARTICLES_QUERY)
      .then(response => {
        this.setState({ articles: response.data.articles });
      });
  }

  render() {
    const cards = this.state.articles.map((art, i) => (<Card {...art} index={i} />));
    return (<div style={gridStyle}>
      {cards}
    </div>);
  }
}
