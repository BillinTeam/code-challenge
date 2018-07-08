import React, { Component } from 'react';
import ArticleListItem from './ArticleListItem';
import { withRouter, Link } from 'react-router-dom'
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

        return (
            <div className="article-list">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th className="text-right">
                                <Link className="btn btn-primary btn-sm" to="/admin/new-article">
                                    New
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
            </div>
        );
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

