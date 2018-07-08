import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { selectArticle, postArticle } from './../../actions/index';

import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




class ArticleForm extends Component {
    state = {
        title: '',
        content: '',
        excerpt: '',
        tags: []
    };
    
    componentDidMount() {
        
        const { articleId } = this.props.match.params;
        if (articleId)
            this.props.selectArticle(articleId);
    }

    componentWillReceiveProps(newProps){
        if(newProps.article)
            this.setState(newProps.article);
    }



    get actionTitle() {
        return "New Article";
    }

    setContent(value) {
        this.setState({ content: value })

    }
    setExcerpt(value) {

        this.setState({ excerpt: value })
    }
    setTags(value) { this.setState({ tags: value }) }
    setTitle(evt) { this.setState({ title: evt.target.value }) }

    save(){
        this.props.postArticle(this.state);
    }

    render() {
        if(!this.props.article ||this.props.server.fetching)
            return null;

        return (
            <div className="card">
                <div className="card-header">{this.actionTitle}</div>
                <div className="card-body">
                    {/* Title input */}
                    <div className="form-group">
                        <h6 className="card-title">Title</h6>
                        <input className="form-control" value={this.state.title} onChange={this.setTitle.bind(this)} />
                    </div>
                    {/* Tags input */}
                    <div className="form-group">
                        <h6 className="card-title">Tags</h6>
                        <TagsInput value={this.state.tags} onChange={this.setTags.bind(this)} />
                    </div>
                    {/* Excerpt */}
                    <div className="form-group">
                        <h6 className="card-title">Excerpt</h6>

                        <textarea className="form-control" height="150" value={this.state.excerpt} onChange={this.setExcerpt.bind(this)} />
                    </div>
                    {/* Content */}
                    <div className="form-group">
                        <h6 className="card-title">Content</h6>
                        <ReactQuill height="500" value={this.state.content} onChange={this.setContent.bind(this)} />
                    </div>
                </div>
                <div className="card-footer text-right">
                    <button onClick={this.save.bind(this)} className="btn btn-primary">Save</button>
                </div>
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
    selectArticle: () => dispatch(selectArticle(ownProps.match.params.articleId)),
    postArticle: (article) => dispatch(postArticle(article))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleForm))

