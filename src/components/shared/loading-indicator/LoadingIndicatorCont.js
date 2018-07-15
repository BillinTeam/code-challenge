import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

import LoadingIndicator from './LoadingIndicator';

const mapStateToProps = state => {
    return {
        server: state.server
    };
};

export default withRouter(connect(mapStateToProps)(LoadingIndicator));



