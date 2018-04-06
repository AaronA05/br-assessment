import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';


const style = {
    width: '100%',
    height: '100%'
}

export class MapContainer extends React.Component { 
    render(){
        return (
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

                {/* <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow> */}
            </Map>
        );  
    }

}



export default GoogleApiWrapper({
    apiKey: ("AIzaSyAg_t-LWBGov2c22gDLV8v8mfmVRgq3etk")
})(MapContainer)