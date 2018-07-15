import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import * as articleActions from '../../../state/ducks/articles';

import ArticleList from './ArticleList';

const mapStateToProps = state => {
    return {
        articles: state.articles,
        server: state.server
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchArticles: () => dispatch(articleActions.fetchArticles()),
    deleteArticles: (articleIds) => dispatch(articleActions.deleteArticles(articleIds))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleList))

