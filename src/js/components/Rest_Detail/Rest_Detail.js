import React, { Component } from 'react';
import { render } from 'react-dom';
import { GMap } from '../GMap/GMap';
import './Rest_Detail.css';

export default class Rest_Detail extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="RD-full"
                style={{
                    backgroundImage: 'url(' + this.props.img + ')'
                }}>
                <div className="RD-header">
                    {this.props.name}
                </div>
                <div className="RD-sub">
                    {this.props.type}
                </div>
                <div className="RD-cover">
                </div>
            </div>
        );
    }

}