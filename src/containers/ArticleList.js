import React, { Component } from 'react';
import ArticleListItem from '../containers/ArticleListItem';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

class ArticleList extends Component {
    renderList() {
        return this.props.articles.map((article) => {
            return <ArticleListItem key={article.id} article={article} />
        })
    }
    render() {
        
        if (this.props.server.error)
            return <div className="alert alert-danger">Error...</div>
        else if (this.props.server.fetching)
            return <div className="alert alert-info">Loading...</div>
            
        return <div className="article-list">
            <div className="row">
                {this.renderList()}
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
      articles: state.articles,
      server: state.server
    };
  };

export default withRouter(connect(mapStateToProps)(ArticleList))

