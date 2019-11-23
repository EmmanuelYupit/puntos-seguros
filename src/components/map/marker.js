/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom'
import { Marker, MarkerOverWrapp, MarkerOver, MarkerImg, MarkerInfo } from './index.styled';

const MarkerComponent = () => (
    <Marker>
        <MarkerOverWrapp>
            <MarkerOver>
                <MarkerImg />
                <MarkerInfo>
                    <p>Nombre</p>
                    <p>Dirección</p>
                    <p><Link to='/point/1'>Más...</Link></p>
                </MarkerInfo>
            </MarkerOver>
        </MarkerOverWrapp>
    </Marker>);

export default MarkerComponent;
