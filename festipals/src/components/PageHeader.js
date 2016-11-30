import React, { Component } from 'react';
import '../css/PageHeader.css';

export default class PageHeader extends Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="page-header">
            <div className="container text-center">
              <h1><i className={this.props.icon} aria-hidden="true"></i> {this.props.title}</h1>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
    );
  }
}
