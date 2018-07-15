import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { articleActions } from './../../../state/ducks/articles';

import ArticleForm from './ArticleForm';

const mapStateToProps = state => {

    return {
        server: state.server,
        article: state.article,
        auth: state.auth
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    selectArticle: () => dispatch(articleActions.selectArticle(ownProps.match.params.articleId)),
    createArticle: (article) => dispatch(articleActions.createArticle(article)),
    updateArticle: (article) => dispatch(articleActions.updateArticle(article))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleForm))

