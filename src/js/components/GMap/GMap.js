import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import './GMap.css';

export class MapContainer extends React.Component {
    constructor(props){
        super(props)
    }

    fetchPlaces(mapProps, map){
        console.log(mapProps);
        console.log(map);
    }

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
                        initialCenter={{
                            lat: this.props.lat,
                            lng: this.props.lng
                        }}
                        defaultZoom={15}
                        onReady={this.fetchPlaces}
                    >
                        <Marker
                            position={{ lat: this.props.lat, lng: this.props.lng }} />
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


export default GoogleApiWrapper({
    apiKey: ("AIzaSyAcDTBtz6UavprwwouEP3b8RsYqnV6c8X8")
})(MapContainer)