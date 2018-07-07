import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { selectArticle } from './../actions/index';

class Article extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.selectArticle(id);
    }
    render() {

        if (!this.props.article)
            return null;

        return (
            <div className="article">
                {this.props.article.title}
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

