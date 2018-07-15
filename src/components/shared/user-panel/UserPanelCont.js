import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { authActions } from '../../../state/ducks/auth';
import UserPanel from './UserPanel';

const mapStateToProps = state => {
    return {
        server: state.server,
        auth: state.auth
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (credentials) => dispatch(authActions.doLogin(credentials)),
    logout: () => dispatch(authActions.doLogout()),

})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPanel))



