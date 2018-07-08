import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { selectArticle } from './../actions/index';

class Article extends Component {

    componentDidMount() {
        const { articleId } = this.props.match.params;

        this.props.selectArticle(articleId);
    }
    render() {

        if (!this.props.article)
            return null;

        const {title, content } = this.props.article;

        return (
            <div className="article">
                <h1>{title}</h1>
                {content}
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        server: state.server,
        article: state.selectedArticle,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    selectArticle: () => dispatch(selectArticle(ownProps.match.params.articleId))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Article))

