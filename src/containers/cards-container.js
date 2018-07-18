import React, { Component, Fragment } from 'react';
import request from '../api/request';
import { ARTICLES_QUERY } from '../api/queries';
import Card from '../components/card';

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
    const cards = this.state.articles.map(art => (<Card {...art} />));
    return (<Fragment>
      { cards }
    </Fragment>);
  }
}
