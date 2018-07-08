import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { selectArticle } from './../../actions/index';

import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




class ArticleForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            autoExcerpt: true,
            excerpt: '',
            tags: []
        };

        if(this.props.article)
            this.state = {...this.state, ...this.props.article};
    }

    componentDidMount() {
        /*const { articleId } = this.props.match.params;
        if(articleId)
        this.props.selectArticle(articleId);*/
    }

    get actionTitle() {
        return "New Article";
    }

    setContent(value) {
        this.setState({ content: value })
        if (this.state.autoExcerpt) {
            this.setExcerpt(value.substr(0, 100));
        }
    }
    setExcerpt(value) {
        let cleanText = value.replace(/<\/?[^>]+(>|$)/g, "");

        this.setState({ excerpt: cleanText })
    }

    setAutoExcerpt(evt) {
        this.setState({ autoExcerpt: evt.target.checked })
    }

    setTags(value) {

        this.setState({ tags: value })
    }
    setTitle(evt) {

        this.setState({ title: evt.target.value })
    }

    render() {


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
                        <label className=" form-check">
                            <input checked={this.state.autoExcerpt} type="checkbox" className="form-check-input" onChange={this.setAutoExcerpt.bind(this)} />
                            <span className="form-check-label">Extract from content</span>
                        </label>
                        <textarea className="form-control" height="150" value={this.state.excerpt} onChange={this.setExcerpt.bind(this)} />
                    </div>
                    {/* Content */}
                    <div className="form-group">
                        <h6 className="card-title">Content</h6>
                        <ReactQuill height="500" value={this.state.content} onChange={this.setContent.bind(this)} />
                    </div>




                </div>
                <div className="card-footer text-right">
                    <button className="btn btn-primary">Save</button>
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
    selectArticle: () => dispatch(selectArticle(ownProps.match.params.articleId))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleForm))

