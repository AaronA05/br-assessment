import React, { Component } from 'react';
import { render } from 'react-dom';
import './Rest_Item.css';

export default class Rest_Item extends Component {
    constructor(props){
        super(props);

    }


    render(){
        return (
            <div className="RI-full" 
                style={{ 
                    backgroundImage: 'url(' + this.props.img + ')'   
                }}>
                <div className="RI-header">
                    {this.props.name} 
                </div>
                <div className="RI-sub">
                    {this.props.type}
                </div>
                <div className="RI-cover">
                </div>
            </div>
        );
    }

}

