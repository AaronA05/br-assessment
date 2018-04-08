import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import GMap from './components/GMap/GMap';
import Rest_Item from './components/Rest_Item/Rest_Item';
import Rest_Detail from './components/Rest_Detail/Rest_Detail';
import Header from './components/Header/Header';
import '../css/reset.css';
import '../css/style.css';

// Google map Key = "AIzaSyAg_t-LWBGov2c22gDLV8v8mfmVRgq3etk"

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            restaurants: []
        };

    }

    componentDidMount(){
        axios.get("https://s3.amazonaws.com/br-codingexams/restaurants.json")
            .then((res) => {
                this.setState({
                    isLoaded: true,
                    restaurants: res.data.restaurants[4]
                });
                console.log(this.state);
            },
            (err) => {
                this.setState({
                    isLoaded: true,
                    err
                })
            }
        )

    }
    render() {
        const { err, isLoaded, restaurants } = this.state;
        if(err){
            return <div>Error: {err.message} </div>;
        }
        else if(!isLoaded){
            return <div>Loading...</div>;
        }
        else{
            return (
            <div>
                <Header />
                <div className='app-container'>
                    <div className='list-container'>
                        <Rest_Item 
                            img = {this.state.restaurants.backgroundImageURL}
                            name = {this.state.restaurants.name}
                            type = {this.state.restaurants.category}    
                        />
                    </div>
                    <div className='detail-container'>
                        <GMap />
                    </div>
                </div>
            </div>
            );
        }

    }
}

render(<App />, document.getElementById('app'));