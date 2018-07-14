import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleListItem extends Component {

    get photoUrl() {
        return "https://loremflickr.com/800/450/software?random=" + Math.floor(Math.random() * 1000);
    }
    get articleUrl() {
        return "/read/" + this.props.article.id;
    }

    render() {
        const { title, excerpt, author, tags } = this.props.article;
        const tagList = tags.map((tag) => {
            return <li key={tag} onClick={()=>this.props.toggleFilter('tags', tag)} className="list-inline-item">
                        <span className="badge badge-warning">{tag}</span></li>;
        });

        return (
            <div className="article">

                <Link to={this.articleUrl}>
                    <img className="img-fluid" alt={title} src={this.photoUrl} />
                    <div className="text">
                        <h2 className="title">{title}</h2>
                        <div className="excerpt">{excerpt}</div>
                    </div>
                </Link>
                <div className="meta">
                    <p className="author">by <span onClick={()=>this.props.toggleFilter('author',author)}>{author}</span></p>
                    <div className="tags"><ul className="list-inline">{tagList}</ul></div>
                </div>
            </div >
        );
    }
}

export default ArticleListItem;