import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import GMap from './components/GMap/GMap';
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

        // componentDidMount = componentDidMount.bind(this);
    }

    componentDidMount(){
        axios.get("https://s3.amazonaws.com/br-codingexams/restaurants.json")
            .then((res) => {
                this.setState({
                    isLoaded: true,
                    restaurants: res.data.restaurants
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
                
                <ul>
                    {restaurants.map(restaurants => (
                        <li key={restaurants.name}>
                            {restaurants.name} {restaurants.category}
                        </li>
                    ))}
                </ul>
                <GMap />
            </div>
            );
        }

    }
}

render(<App />, document.getElementById('app'));