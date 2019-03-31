import React from 'react';
import {
    View,
    asset,
    Pano,
} from 'react-vr';
import VideoPlayerLayout from "./layouts/VideoPlayerLayout.";
//Scene
export default class VideoPlayer extends React.Component {
    render() {
        return (
            <View>
                <Pano source={asset(this.props.env+'.jpg')}/>
                <VideoPlayerLayout showButton={this.props.showButton}
                                   text={this.props.text}
                                   //menuElem={this.props.menuElem}
                                   selectedVideo={this.props.selectedVideo}
                                   changeScenes={this.props.changeScenes}/>
            </View>
        )
    }
}