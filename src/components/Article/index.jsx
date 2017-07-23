import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import request from '../../request';
import { articleQuery } from '../../queries';

import { setArticle } from './actions'

class Article extends Component {

  componentWillMount() {
    request(articleQuery(this.props.params.id)).then(response => {
      this.props.setArticle(response.data.article);
    });
  }

  // Renders
  render() {
    const {
      author,
      content,
      published,
      tags,
      title
    } = this.props.article;
    return (
      <div className="article">
        <h3>{ title }</h3>
        <h4>{ `Author: ${author}` }</h4>
        <h4>{ `Published: ${published? 'yes' : 'no'}` }</h4>
        <h4>{ tags && `Tags: ${tags.join(', ')}` }</h4>
        <p>{ content }</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    article: state.article
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setArticle}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);