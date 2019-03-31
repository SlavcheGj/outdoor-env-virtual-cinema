import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Sound,
} from 'react-vr';
import TitleLayout from './layouts/TitleLayout.js';
export default class TitleScene extends React.Component{

    render(){
        return(
            <View>
                <Pano source={asset('fort-night.jpg')}>
                    <Sound volume={1} loop={true} source={{mp3:asset('fort-night-atmosphere.mp3')}}/>
                </Pano>
                <TitleLayout showButton={this.props.showButton}
                             text={this.props.text}
                             changeScenes={this.props.changeScenes}
                             scene={this.props.scene}/>
            </View>
        );
    };

};
