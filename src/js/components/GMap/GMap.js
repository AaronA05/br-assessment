import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import './GMap.css';

export class MapContainer extends React.Component { 
    render(){
        return (
            <div className='GM-container'>
                <div className='GM-map'>
                    <Map
                        google={this.props.google}
                        center={{
                            lat: this.props.lat, 
                            lng: this.props.lng
                        }}
                        zoom={15}
                        onClick={this.onMapClicked}
                    >
                    </Map>
                </div>
                <div className='GM-banner'>
                    <div className='GMB-header'>
                        {this.props.restName}
                    </div>
                    <div className='GMB-sub'>
                        {this.props.restCat}
                    </div>
                </div>
                <div className='GM-detail'>
                    <div className='GMD-address'>
                        {this.props.restAddress}
                        <br></br>
                        {this.props.restCity}
                    </div>
                    <div className='GMD-phone'>
                        {this.props.restPhone}
                    </div>
                    <div className='GMD-twitter'>
                        @{this.props.restTwitter}
                    </div>
                </div>
            </div>
        );  
    }
}

MapContainer.defaultProps = {
    lat: 32.950787,
    lng: -96.821118,
    restName: "Hopdoddy Burger Bar",
    restCat: "Burgers",
    restAddress: "5100 Belt Line Road, STE 502",
    restCity: "Addison, TX 75254",
    restPhone: "(972) 387-2337",
    restTwitter: "hopdoddy"

}



export default GoogleApiWrapper({
    apiKey: ("AIzaSyAg_t-LWBGov2c22gDLV8v8mfmVRgq3etk")
})(MapContainer)