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
                        // style={style}
                        initialCenter={{
                            lat: 32.950787, 
                            lng: -96.821118
                        }}
                        zoom={15}
                        onClick={this.onMapClicked}
                    >

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                    </Map>
                </div>
                <div className='GM-banner'>
                    <div className='GMB-header'>
                        Restaurant Name
                    </div>
                    <div className='GMB-sub'>
                        Category Type
                    </div>
                </div>
                <div className='GM-detail'>
                    <div className='GMD-address'>
                        5100 Belt Line Road, STE 502
                        <br></br>
                        Dallas, TX 75206
                    </div>
                    <div className='GMD-phone'>
                        (972)387-2337
                    </div>
                    <div className='GMD-twitter'>
                        @twitterhandle
                    </div>
                </div>
            </div>
        );  
    }

}



export default GoogleApiWrapper({
    apiKey: ("AIzaSyAg_t-LWBGov2c22gDLV8v8mfmVRgq3etk")
})(MapContainer)