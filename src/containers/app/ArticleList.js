import React, { Component } from 'react';
import ArticleListItem from './ArticleListItem';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchArticles } from '../../actions/article.actions';

class ArticleList extends Component {

    componentDidMount() {
        this.props.fetchArticles();
    }

    renderList() {
        return this.props.articles.map((article) => {
            return <ArticleListItem key={article.id} article={article} />
        })
    }
    render() {

        if (!this.props.articles)
            return null;

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


const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchArticles: () => dispatch(fetchArticles())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleList))

