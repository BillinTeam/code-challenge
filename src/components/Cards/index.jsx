import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';

import { setCards } from './actions'

import Card from './components/card'

class Cards extends Component {

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.props.setCards(response.data.articles);
    });
  }

  renderCards = () => {
    return this.props.articles.map( cardData => {
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

function mapStateToProps(state) {
  return {
    articles: state.cards.articles
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setCards}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
