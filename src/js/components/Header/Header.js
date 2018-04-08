import React, { Component } from 'react';
import { render } from 'react-dom';
import './Header.css';

export default class Header extends React.Component {
    render(){
        return (
            <div className='header-container'>
                <div className='header-text'>
                    Lunch Tyme
                </div>
            </div>
        )
    }
}