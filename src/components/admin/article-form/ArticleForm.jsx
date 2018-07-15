import React, { Component } from 'react';

import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ErrorListCont from '../../shared/error-list';

class ArticleForm extends Component {
    creating = false;
    state = {
        title: '',
        content: '',
        excerpt: '',
        tags: [],
        author: '',
        published: false

    };

    componentDidMount() {
        if (this.props.auth) {
            this.setState({
                author: this.props.auth.alias
            })
        }
        const { articleId } = this.props.match.params;
        this.creating = typeof articleId === "undefined";

        if (articleId) {
            this.props.selectArticle(articleId);
        }
        else {
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
                this.setState(newProps.article);
                this.setDocTitle(newProps.article.title);
            }
        }
    }
    get actionTitle() {
        return this.state.id ? "Edit article" : "New Article";
    }

    setField(evt) {

        let field = evt.target.name;
        let value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
        this.setState({ [field]: value })
        if (field === 'title') {
            this.setDocTitle(value);
        }
    }

    setDocTitle(title) {
        document.title = 'Writing @ ' + title;
    }
    /* Especial inputs setters */
    setTags(value) { this.setState({ tags: value }) }
    setContent(value) { this.setState({ content: value }) }

    /* Saving actions */
    save(publish) {
        this.setState({ published: publish });

        let article = this.state;
        article.published = publish;

        if (this.state.id)
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
                <div className="card-header">
                    {this.actionTitle}
                </div>
                <div className="card-body">
                    <ErrorListCont />

                    {/* Title input */}
                    <div className="form-group">
                        <h6 className="card-title">Title</h6>
                        <input className="form-control" name="title" value={this.state.title} onChange={this.setField.bind(this)} />
                    </div>
                    {/* Tags input */}
                    <div className="form-group">
                        <h6 className="card-title">Tags</h6>
                        <TagsInput value={this.state.tags} name="tags" onChange={this.setTags.bind(this)} />
                    </div>


                    {/* Excerpt */}
                    <div className="form-group">
                        <h6 className="card-title">Excerpt</h6>

                        <textarea className="form-control" name="excerpt" height="150" value={this.state.excerpt} onChange={this.setField.bind(this)} />
                    </div>
                    {/* Content */}
                    <div className="form-group">
                        <h6 className="card-title">Content</h6>
                        <ReactQuill height="500" value={this.state.content} onChange={this.setContent.bind(this)} />
                    </div>
                </div>
                <div className="card-footer text-right">
                    <button title="This wont show the article in the portal" onClick={this.saveAsdraft.bind(this)} className="btn btn-link">Save as draft</button>
                    or &nbsp;
                    {!this.state.published && <button disabled={this.state.fetching} onClick={this.publish.bind(this)} className="btn btn-primary">Save & Publish</button>}
                    {this.state.published && <button disabled={this.state.fetching} onClick={this.publish.bind(this)} className="btn btn-primary">Save</button>}
                </div>
            </div>

        );
    }
}

export default ArticleForm;