/* eslint-disable */
import styled from 'styled-components';

const MappWrapper = styled.div`
    position: fixed;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 56px;
`;

const MarkerOverWrapp = styled.div`
    position: absolute;
    left: -85px;
    bottom: 100%;
    padding-bottom:15px;
    opacity: 0;
    visibility: hidden;
`;

const MarkerOver = styled.div`
    position: relative;
    z-index: 5;
    display: flex;
    width: 200px;
    flex-direction: row;
    padding: 5px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px;
    &::after{
        content: '';
        position: absolute;
        top: 100%;
        left: 95px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 5px 0 5px;
        border-color: #fff transparent transparent transparent;
    }
`;

const MarkerImg = styled.div`
    width: 50px;
    background-color: rgba(0,0,0,.4);
`;

const MarkerInfo = styled.div`
    padding-left: 15px;
    flex: 1 0 auto;
    p{
        margin: 5px 0;
        font-size: 12px;
        color: gray;
    }
    a{
        float: right;
        color: gray;
    }
`;

const Marker = styled.div`
    width: 30px;
    height: 30px;
    background-color: rgba(0,255,0,.4);
    border-radius: 50%;
    position: relative;
    z-index: 1;
    &:hover{
        ${MarkerOverWrapp}{
            opacity: 1;
            visibility:visible; 
        }
    }
`;

export {
    MappWrapper,
    Marker,
    MarkerOverWrapp,
    MarkerOver,
    MarkerImg,
    MarkerInfo,
};
