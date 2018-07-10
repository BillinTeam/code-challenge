import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { connect } from "react-redux";
import { deleteArticles } from '../../actions/article.actions';

class ArticleListItem extends Component {

    get photoUrl() {
        return "https://loremflickr.com/800/450/software?random=" + Math.floor(Math.random() * 1000);
    }
    get articleUrl() {
        return "/admin/article/" + this.props.article.id;
    }

    delete(article) {
        if (confirm(`Are you sure of deleting '${article.title}' article?`))
            this.props.deleteArticles([article.id]);
    }
    onSelectChange(evt){
        this.props.onSelectChange(this.props.article, evt.target.checked);
    }
    render() {
        const { title, author } = this.props.article;
        return (<tr className="col-sm-6 col-md-4">
            <td width="50"><input type="checkbox" onChange={this.onSelectChange.bind(this)} /></td>
            <td>{title}</td>
            <td>{author}</td>
            <td className="text-right">
                <div className="btn-group">
                    <Link className="btn btn-default btn-sm" to={this.articleUrl}>
                        Edit
                    </Link>
                    <span className="btn btn-default text-danger btn-sm" onClick={() => this.delete(this.props.article)}>
                        Delete
                    </span>
                </div>
            </td>
        </tr>);
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteArticles: (articleIds) => dispatch(deleteArticles(articleIds))
})


export default withRouter(connect(null, mapDispatchToProps)(ArticleListItem))

