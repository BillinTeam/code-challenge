import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ArticleListItem extends Component {

    get photoUrl() {
        return "https://loremflickr.com/800/450/software?random="+Math.floor(Math.random()*1000);
    }
    get articleUrl(){
        return "/read/"+this.props.article.id;
    }
    render() {
        const {title, excerpt } = this.props.article;
        return (<div className="col-sm-6 col-md-4">
            <div className="article">
                <img className="img-fluid" alt={title} src={this.photoUrl} />
                <div className="meta">
                    <div className="title"><b>{title}</b></div>
                    <div className="excerpt">{excerpt && excerpt.substr(0, 100) + "..."}</div>
                    <div className="text-right">
                        <Link className="btn btn-primary" to={this.articleUrl}>
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default ArticleListItem;