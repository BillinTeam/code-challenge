import { connect } from 'react-redux'
import ArticleList from './ArticleList';
import { withRouter } from 'react-router-dom'
import { articleActions } from '../../../state/ducks/articles';

const mapStateToProps = state => {
    return {
        articles: state.articles,
        filters: state.filters,
        server: state.server
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchArticles: (filters) => dispatch(articleActions.fetchArticles(filters)),
    fetchFilters: (filters) => dispatch(articleActions.fetchFilters())
})


export default withRouter(connect(mapStateToProps,mapDispatchToProps))(ArticleList);