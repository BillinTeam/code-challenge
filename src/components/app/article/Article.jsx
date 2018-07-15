import React, { Component } from 'react';

class Article extends Component {

    componentDidMount() {
        const { articleId } = this.props.match.params;

        this.props.selectArticle(articleId);
    }
    render() {

        if (!this.props.article)
            return null;

        const { title, content } = this.props.article;

        return (
            <div className="container">
                <div className="article">
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: content }} ></div>
                </div>
            </div>
        );
    }
}

export default Article;