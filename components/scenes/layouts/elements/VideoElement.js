import React from 'react';
import {
    Video,
    View,
    asset,
    VideoControl,
    MediaPlayerState
} from 'react-vr';
//Element
export default class VideoElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerState: new MediaPlayerState({autoPlay: false, muted: false}), // init with muted, autoPlay
        };
    }
    render() {
        return (
            <View style={{ margin: 0.1, height: 4}}>
                    <Video
                        playerState={this.state.playerState}
                        style={{height: 4}}
                        source={asset(this.props.selectedVideo+'.mp4')} />
                <VideoControl
                    style={{
                        height: 0.5,
                        width: 16,
                        layoutOrigin: [0.5, 0.5],
                        transform: [{translate: [3.9, -2.5, -5]}],
                    }}
                    playerState={this.state.playerState}
                />
            </View>
        )
    }
}