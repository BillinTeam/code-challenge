import React, { Component } from 'react';

export default class ArticleListFilters extends Component {


    renderFilterList(name) {
        return this.props[name].map((val) => {
            const checked = this.props.filters[name].indexOf(val) > -1;
            return (
                <li key={val} className={checked ? 'checked' : ''}>
                    <label className={'badge ' + (checked ? 'badge-warning' : 'badge-light')}>
                        <input type="checkbox" onChange={() => this.props.toggleFilter(name, val, true)} checked={checked} />
                        {checked && <i className="fa fa-check" />}{val}
                    </label>
                </li>
            );
        })
    }

    render() {

        return (
            <div className="article-filters">

                <h3>Filters</h3>
                <p><small>Scroll to see more filters </small></p>

                <div className="filter">
                    <b className="title">Authors</b>
                    <ul className="list-unstyled">{this.renderFilterList('author')}</ul>

                </div>
                <div className="filter">
                    <b className="title">Tags</b>
                    <ul className="list-unstyled">{this.renderFilterList('tags')}</ul>

                </div>

            </div>
        );
    }
}






