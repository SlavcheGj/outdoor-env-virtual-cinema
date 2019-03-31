import React from 'react';
import {
    View,
    VideoPano, VideoControl
} from 'react-vr';
import Button from "./elements/Button";
import VideoElement from "./elements/VideoElement";
//Layout
export default class VideoPlayerLayout extends React.Component {
    constructor(){
        super();
        this.state={scene:3}
    }
    render() {
        return (
            <View>
                <View style={{
                    flex: 1,
                    width: 8,
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    backgroundColor: '#333333',
                    layoutOrigin: [0.5, 0.5],
                    transform: [{translate: [0, 0, -7]}]
                }}>
                    <VideoElement selectedVideo={this.props.selectedVideo}/>
                </View>
                <View style={{
                    flex: 1,
                    width: 2.5,
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    layoutOrigin: [0.5, 0.5],
                    transform: [{translate: [-6, 3, -3]},{rotateY: 35}]
                }}>
                    <Button showButton={this.props.showButton}
                            text={this.props.text}
                            scene={this.state.scene}
                            changeScenes={this.props.changeScenes}/>
                </View>
            </View>
        )
    }
}