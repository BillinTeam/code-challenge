import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ArticleListItem extends Component {

   
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
            <td><Link className="btn btn-default btn-sm" to={this.articleUrl}>{title}</Link></td>
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


export default ArticleListItem;

