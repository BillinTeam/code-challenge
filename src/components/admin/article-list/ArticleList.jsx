import React, { Component } from 'react';
import ArticleListItem from './ArticleListItem';
import { Alert } from "reactstrap";
import { Link } from 'react-router-dom';

class ArticleList extends Component {

    state = { selectedArticles: [] };

    componentDidMount() {
        this.props.fetchArticles();
    }
    onSelectChange(article, check) {

        let selected = this.state.selectedArticles;
        if (check) {
            selected.push(article.id);

        }
        else {
            selected = selected.filter((a) => {
                return a.id !== article.id
            });
        }
        this.setState({ selectedArticles: selected })
    }
    renderList() {
        if (this.props.articles && this.props.articles.length === 0) {
            return (
                <tr>
                    <td colSpan="3">
                        <Alert color="info">
                            <h4 className="alert-heading">Hey!</h4>
                            <p>There are no articles written yet... <Link className="alert-link" to="new-article/">Why dont you write one now?</Link></p>
                        </Alert>
                    </td>
                </tr>
            );
        }
        return this.props.articles.map((article) => {
            return <ArticleListItem deleteArticles={this.props.deleteArticles.bind(this)} onSelectChange={this.onSelectChange.bind(this)} key={article.id} article={article} />
        })
    }
    deleteSelected() {
        let nArticles = this.state.selectedArticles.length;
        if (confirm(`Are you sure of deleting these ${nArticles}?`)) {
            this.props.deleteArticles(this.state.selectedArticles);
            this.setState({
                selectedArticles: []
            });
        }

    }
    render() {

        if (!this.props.articles)
            return null;

        return (
            <div className="card article-list">
                <div className="card-header">Article List</div>
                <table className="table table-hover table-striped mb-0">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th width="200" colSpan="2">Author
                                <div className="float-right">{
                                    this.state.selectedArticles.length > 0
                                    && <button onClick={this.deleteSelected.bind(this)} className="btn btn-danger btn-sm">Delete selected</button>
                                }
                                    &nbsp;<Link className="btn btn-primary btn-sm" to="/admin/new-article">Write new article</Link>
                                </div>
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

export default ArticleList;