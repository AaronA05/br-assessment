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
            restaurants: [],
            selectedRestaurant: {}
        };
        this.myCallback = this.myCallback.bind(this);
    }

    componentDidMount(){
        axios.get("https://s3.amazonaws.com/br-codingexams/restaurants.json")
            .then((res) => {
                this.setState({
                    isLoaded: true,
                    restaurants: res.data.restaurants,
                    selectedRestaurant: res.data.restaurants[0]
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

    myCallback(dataFromChild){
        if(dataFromChild.contact == null){
            dataFromChild.contact = {
                formattedPhone: "No phone provided",
                twitter: " -No Twitter"
            };
            this.setState({
                selectedRestaurant: dataFromChild
            }, () => {
                console.log(this.state.selectedRestaurant);
            })
        } 
        else if(dataFromChild.contact != null){
            dataFromChild.contact = {
                formattedPhone: dataFromChild.contact.formattedPhone || "No phone provided",
                twitter: dataFromChild.contact.twitter || " -No Twitter"
            }
            this.setState({
                selectedRestaurant: dataFromChild
            }, () => {
                console.log(this.state.selectedRestaurant);
            })
        }
        
        else {
            this.setState({
                selectedRestaurant: dataFromChild
            }, () => {
                console.log(this.state.selectedRestaurant);
            }) 
        }

    }

    render() {
        const { err, isLoaded, restaurants, selectedRestaurant } = this.state;
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
                        {this.state.restaurants.map((restaurants, key) => 
                            <Rest_Item
                                key={key}
                                fullRest={restaurants}
                                callbackFromParent={this.myCallback}
                                img={restaurants.backgroundImageURL}
                                name={restaurants.name}
                                type={restaurants.category}
                            />
                        
                        )}

                    </div>
                    <div className='detail-container'>
                        <GMap
                            lat={this.state.selectedRestaurant.location.lat}
                            lng={this.state.selectedRestaurant.location.lng}
                            restName={this.state.selectedRestaurant.name}
                            restCat={this.state.selectedRestaurant.category}
                            restAddress={this.state.selectedRestaurant.location.formattedAddress[0]}
                            restCity={this.state.selectedRestaurant.location.formattedAddress[1]}
                            restPhone={this.state.selectedRestaurant.contact.formattedPhone}
                            restTwitter={this.state.selectedRestaurant.contact.twitter}
                        />
                    </div>
                </div>
            </div>
            );
        }

    }
}

render(<App />, document.getElementById('app'));