import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

class Article extends Component {

    render() {
        console.log('e');
        return (            
            <div className="article">
                {this.props.title}
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


export default withRouter(connect(mapStateToProps)(Article))

