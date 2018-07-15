import React, { Component, createRef } from 'react';
import ArticleListItem from './ArticleListItem';
import { withRouter } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom'
import { connect } from "../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux";
import { fetchArticles, fetchFilters } from '..z';
import ArticleListFilters from './ArticleListFilters';
class ArticleList extends Component {
    state = {
        tags: [],
        author: []
    };
    myFilters = createRef();

    componentDidMount() {
        this.fetch();
        this.props.fetchFilters();

        window.addEventListener('scroll', this.fixFilter.bind(this));
    }

    fixFilter() {

        if (window.pageYOffset > 56) {
            this.myFilters.current.classList.add("article-filters-stick");
        } else {
            this.myFilters.current.classList.remove("article-filters-stick");
        }
    }

    fetch(filters = {}) {
        filters.published = true;
        this.setState(filters);
        this.props.fetchArticles(filters);
    }
    clearFilters() {
        this.setState({
            authors: [],
            tags: []
        })
        this.fetch({});
    }
    toggleFilter(name, value, toggle = false) {
        let filters = this.state;
        let values = filters[name];
        const present = values.indexOf(value);
        if (present < 0) {
            values.push(value);
        }
        else if (toggle) {
            values.splice(present, 1);
        }
        filters[name] = values;
        this.setState(filters);

        this.fetch(filters);
    }



    renderList() {
        return this.props.articles.map((article) => {
            return (
                <div key={article.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                    <ArticleListItem article={article}
                        toggleFilter={this.toggleFilter.bind(this)} />
                </div>
            );
        })
    }

    render() {

        const { authors, tags } = this.props.filters;
        return (
            <div className="container-fluid article-list">
                <div ref={this.myFilters}>
                    <ArticleListFilters
                        ref={this.myFilters}
                        clearFilters={this.clearFilters.bind(this)}
                        toggleFilter={this.toggleFilter.bind(this)}
                        filters={this.state}
                        author={authors}
                        tags={tags} />
                </div>
                <div className="row">
                    {this.props.articles && this.renderList()}
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        articles: state.articles,
        filters: state.filters,
        server: state.server
    };
};


const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchArticles: (filters) => dispatch(fetchArticles(filters)),
    fetchFilters: (filters) => dispatch(fetchFilters())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleList))

