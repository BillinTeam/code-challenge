import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import request from '../../request';
import { articleQuery, createArticle, updateArticle } from '../../queries';

import '../../theme/Form.css'

import { removeArticleForm, setArticleForm, setInput } from './actions'

import Button from '../Button'


class Form extends Component {

  componentWillMount() {
    this.props.params.id && request(articleQuery(this.props.params.id)).then(response => {
      this.props.setArticleForm(response.data.article);
    });
  }

  componentWillUnmount() {
    this.props.removeArticleForm()
  }

  changeInput = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.props.setInput(e.target.name, value)
  }

  createOrUpdateArticle = (form) => {
    if (this.props.params.id) {
      request(updateArticle(form)).then(response => {
        console.log(response)
        browserHistory.push(`article/${response.data.updateArticle.id}`)
      });
      } else {
      request(createArticle(form)).then(response => {
        console.log(response)
        browserHistory.push(`article/${response.data.createArticle.id}`)
      });
    }
  }

  // Renders
  render() {
    const {
      author,
      content,
      excerpt,
      id,
      published,
      tags,
      title
    } = this.props.form;
    return (
      <div className="form" >
        <form>
           <div className='id-hidden' >
            <input
              disabled={ true }
              name="id"
              type="text"
              value={ id } />
          </div>
          <div>
            <label>
              Author
              <input
                name="author"
                type="text"
                value={author}
                onChange={this.changeInput} />
            </label>
          </div>
          <div>
            <label>
              content
              <input
                name="content"
                type="text"
                value={content}
                onChange={this.changeInput} />
            </label>
          </div>
          <div>
            <label>
              excerpt
              <input
                name="excerpt"
                type="text"
                value={excerpt}
                onChange={this.changeInput} />
            </label>
          </div>
          <div>
            <label>
              published
              <input
                name="published"
                type="checkbox"
                value={published}
                onChange={this.changeInput} />
            </label>
          </div>
          <div>
            <label>
              tags
              <input
                name="tags"
                type="text"
                value={tags}
                onChange={this.changeInput} />
            </label>
          </div>
          <div>
            <label>
              title
              <input
                name="title"
                type="text"
                value={title}
                onChange={this.changeInput} />
            </label>
          </div>
        </form>
        <Button
          name={ 'Save' }
          onClick={ () => this.createOrUpdateArticle(this.props.form) }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    removeArticleForm,
    setArticleForm,
    setInput
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
