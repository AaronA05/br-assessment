import React, { Component } from 'react';
import { render } from 'react-dom';
import './Header.css';

export default class Header extends React.Component {
    render(){
        return (
            <div className='header-container'>
                <a href="#"
                    onClick={() => this.props.close()} >
                    <img id="close" src={this.props.image}></img>
                </a>
                <div className='header-text'>
                    Lunch Tyme
                </div>
            </div>
        )
    }
}