import React, { Component } from 'react';
import ArticleListItem from './ArticleListItem';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchArticles } from '../../actions/article.actions';
import ErrorList from '../ErrorList';
class ArticleList extends Component {
    state = {
        published: true,
        tags: null,
        author: null
    };
    componentDidMount() {
        this.props.fetchArticles(this.state);
    }

    renderList() {
        return this.props.articles.map((article) => {
            return <ArticleListItem key={article.id} article={article} />
        })
    }
    render() {

        return <div className="article-list">
        <ErrorList />
            <div className="row">
                {this.props.articles && this.renderList()}
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
    fetchArticles: (filters) => dispatch(fetchArticles(filters))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleList))

