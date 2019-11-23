/* eslint-disable */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerComponent from './marker'
import { MappWrapper } from './index.styled';

const MapComponent = () => {

    const markers = [
        <MarkerComponent key='id1' lat="21.1614598" lng="-86.8584364" />,
        <MarkerComponent key='id2' lat="21.1661713" lng="-86.8490537" />,
        <MarkerComponent key='id3' lat="21.1591713" lng="-86.8439293" />,
    ];
    const center = {
        lat: 21.1614598,
        lng: -86.8584364,
    };
    return (
        <MappWrapper>
            <GoogleMapReact
                yesIWantToUseGoogleMapApiInternals
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
                defaultCenter={center}
                defaultZoom={14}
            >
                {markers}
            </GoogleMapReact>
        </MappWrapper>
    );
};

export default MapComponent;
