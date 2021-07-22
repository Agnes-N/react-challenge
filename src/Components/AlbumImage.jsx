import React, { Component } from 'react';
import '../App.css';

export class AlbumImage extends Component {
    render() {
        return (
        <div className="container">
            <div className="title">
                <h4>Title:&nbsp;
                    <span>{this.props.title}</span>
                </h4>
            </div>
            <div className="image">
                <img src={this.props.src} />
           
            </div>
           
        </div>
        )
    }
}

export default AlbumImage
