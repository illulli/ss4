import React from 'react';
import styled from 'styled-components';
import iDel from './../../../assets/baseline-delete-24px.svg';
import iDone from './../../../assets/baseline-done-24px.svg';
import iCached from './../../../assets/baseline-cached-24px.svg';
import iArrow from './../../../assets/baseline-keyboard_arrow_right-24px.svg';
import iSave from './../../../assets/baseline-save-24px.svg';
import iSettings from './../../../assets/baseline-settings-20px.svg';
import iUpArrow from './../../../assets/baseline-keyboard_arrow_up-24px.svg';
import iPlay from './../../../assets/baseline-play_arrow-24px.svg';
import iMore from './../../../assets/baseline-more_vert-24px.svg';
import iBack from './../../../assets/round-arrow_back-24px.svg';
import iSync from './../../../assets/round-autorenew-24px.svg';
import iCloud from './../../../assets/round-cloud_upload-24px.svg';


class Icon extends React.Component {
    constructor(props) {
      super(props);
      //console.log("IconButton constructor props", props)
    }
    getColor(img){
        switch(img){
            case 'delete':
                return 'black';
            case 'done':
                return 'green';
            default:
                return 'orange';
        }
    }
    getImg(img){
        switch(img){
            case 'delete':
                return iDel;
            case 'done':
                return iDone;
            case 'cached':
                return iCached;
            case 'arrow':
                return iArrow;
            case 'save':
                return iSave;
            case 'settings':
                return iSettings;
            case 'up':
                return iUpArrow;
            case 'play':
                return iPlay;
            case 'more':
                return iMore;
            case 'back':
                return iBack;
            case 'cloud':
                return iCloud;
            case 'sync':
                return iSync;
        }
    }
    render() {
        //themeprovider provides base theme, can be overridden
        if(this.props.disabled){
            return (
                <Btn disabled className={this.props.classes} padding={this.props.padding} bg={'grey'} 
                    hover={'black'}  onClick={this.props.onInput} round={this.props.round}>
                    <img src={this.getImg(this.props.icon)}/>
                </Btn>
            )
        }else{
            return (
                <Btn className={this.props.classes} padding={this.props.padding} bg={this.props.bg} 
                    hover={this.props.hover} 
                    onClick={this.props.onInput} round={this.props.round}>
                    <img src={this.getImg(this.props.icon)}/>
                </Btn>
            )
        }
    }
}

export default Icon;

   //${props => props.primary ? 'blue' : props.theme.main}
   const Btn = styled.button`
    width:36px;
    height:36px;
    padding:${props=>props.padding?props.padding:'0'};
    margin: 0px;
    background-color: ${props=>props.bg?props.bg:props.theme[props.theme.theme].neutral}; /* Blue background */
    border: none; /* Remove borders */
    cursor: pointer; /* Mouse pointer on hover */
    outline: none;
    border-radius:${props=>props.round? '50%':props.theme[props.theme.theme].roundCorners};
    vertical-align: middle;
    transition: background-color ${props=>props.theme[props.theme.theme].animS} ease-in;
    &:hover, &:focus{
        background-color: ${props => {
            //console.log("icon btn props", props);
            return props.hover? props.hover: 'orange';
        }};
    };
    img{  
        margin: 0;
        padding: 0;
        border: none;
        vertical-align: middle;
    }
`
