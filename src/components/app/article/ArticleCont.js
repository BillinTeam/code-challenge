import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Article from './Article';
import { articleActions } from '../../../state/ducks/articles';

const mapStateToProps = state => {
    return {
        server: state.server,
        article: state.article,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    selectArticle: () => dispatch(articleActions.selectArticle(ownProps.match.params.articleId))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Article))

