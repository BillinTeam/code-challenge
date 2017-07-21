import React, { Component } from 'react';
import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';

import Card from './components/card'
// import '../../theme/Cards.css'

class Cards extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  renderCards = () => {
    return this.state.articles.map( cardData => {
      return <Card key={ cardData.id } { ...cardData }/>
    })
  }

  // Renders
  render() {
    return (
      <div className="cards">
        { this.renderCards() }
      </div>
    );
  }
}

export default Cards;
