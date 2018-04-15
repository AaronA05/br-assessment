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
                        initialCenter={{
                            lat: 32.950787,
                            lng: -96.821118
                        }}
                        defaultZoom={15}
                    >
                        <Marker
                            title={'The marker`s title will appear as a tooltip.'}
                            name={'SOMA'}
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