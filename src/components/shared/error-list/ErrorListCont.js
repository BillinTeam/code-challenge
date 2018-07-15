import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import ErrorList from './ErrorList';

const mapStateToProps = state => {
    return {
        server: state.server
    };
};

export default withRouter(connect(mapStateToProps)(ErrorList))



