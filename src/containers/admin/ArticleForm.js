import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { selectArticle, createArticle, updateArticle } from './../../actions/index';

import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




class ArticleForm extends Component {
    creating = false;
    state = {
        article: {
            title: '',
            content: '',
            excerpt: '',
            tags: []
        }
    };

    componentDidMount() {


        const { articleId } = this.props.match.params;
        this.creating = typeof articleId === "undefined";

        /* Only fetch when url id param and the same article is not in the state.
         * Useful to not do an extra fetch when we update url after creating and the article is already on the state
         */
        if (articleId) {
            if (this.props.article) {
                if (this.props.article.id === articleId)
                    this.setState({ article: this.props.article })
                else {
                    /* Redirect when props are diferent from  url */
                    this.props.history.push('/admin/article/' + articleId);
                }
            }
            else this.props.selectArticle(articleId);
        }

        if (!articleId) {
            this.setDocTitle('new article');
        }

    }

    componentWillReceiveProps(newProps) {
        if (newProps.article) {
            /* Update url when new article is created, just for UX */
            if (this.creating) {
                this.creating = false;
                this.props.history.push('/admin/article/' + newProps.article.id);
            }
            else {
                this.setState({ article: newProps.article });
                this.setDocTitle(newProps.article.title);
            }
        }
    }
    get actionTitle() {
        return this.state.article.id ? "Edit article" : "New Article";
    }
    setContent(value) {
        this.setState({ article: { ...this.state.article, content: value } })
    }
    setField(evt) {
        let value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
        this.setState({ article: { ...this.state.article, [evt.target.name]: value } })

    }
    setTitle(evt) {
        let title = evt.target.value;
        this.setState({ article: { ...this.state.article, title: title } })


        this.setDocTitle(title)

    }
    setDocTitle(title) {
        document.title = 'Writing @ ' + title;
    }
    setTags(value) { this.setState({ article: { ...this.state.article, tags: value } }) }

    save(publish) {
        this.setState({ published: publish });

        let article = this.state.article;
        article.published = publish;

        if (this.state.article.id)
            return this.props.updateArticle(article);

        return this.props.createArticle(article);
    }
    publish() {
        this.save(true);
    }
    saveAsdraft() {
        this.save(false);
    }


    render() {
        if (this.props.server.fetching)
            return null;

        return (
            <div className="card">
                <div className="card-header">{this.actionTitle}</div>
                <div className="card-body">

                    {/* Title input */}
                    <div className="form-group">
                        <h6 className="card-title">Title</h6>
                        <input className="form-control" name="title" value={this.state.article.title} onChange={this.setTitle.bind(this)} />
                    </div>
                    {/* Tags input */}
                    <div className="form-group">
                        <h6 className="card-title">Tags</h6>
                        <TagsInput value={this.state.article.tags} name="tags" onChange={this.setTags.bind(this)} />
                    </div>


                    {/* Excerpt */}
                    <div className="form-group">
                        <h6 className="card-title">Excerpt</h6>

                        <textarea className="form-control" name="excerpt" height="150" value={this.state.article.excerpt} onChange={this.setField.bind(this)} />
                    </div>
                    {/* Content */}
                    <div className="form-group">
                        <h6 className="card-title">Content</h6>
                        <ReactQuill height="500" value={this.state.article.content} onChange={this.setContent.bind(this)} />
                    </div>
                </div>
                <div className="card-footer text-right">
                    <button title="This wont show the article in the portal" onClick={this.saveAsdraft.bind(this)} className="btn btn-link">Save as draft</button>
                    or &nbsp;
                    {!this.state.article.publish && !this.state.article.id && <button disabled={this.state.fetching} onClick={this.publish.bind(this)} className="btn btn-primary">Save & Publish</button>}
                    {!this.state.article.publish && this.state.article.id && <button disabled={this.state.fetching} onClick={this.publish.bind(this)} className="btn btn-primary">Save</button>}
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
    createArticle: (article) => dispatch(createArticle(article)),
    updateArticle: (article) => dispatch(updateArticle(article))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleForm))

