import React from 'react';
import {
    Text,
    View,
    asset,
    Pano, VideoPano,
    VideoControl,
    MediaPlayerState
} from 'react-vr';
import Button from "./layouts/elements/Button";

export default class PanoramicVideoScene extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            playerState: new MediaPlayerState({autoPlay: false, muted: false}),
        };
    }
    render(){
        return(
            <View>
        <VideoPano
            playerState={this.state.playerState}
            source={asset(this.props.selectedVideo+'.mp4',{format: 'mp4'})}
        />

                <View style={{
                    flex: 1,
                    width: 2.5,
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    layoutOrigin: [0.5, 0.5],
                    transform: [{translate: [-6, 3, -3]},{rotateY: 35}]
                }}>
                    <Button showButton={true}
                            text={this.props.text}
                            scene={this.props.scene}
                            changeScenes={this.props.changeScenes}/>
                </View>
                <VideoControl
                    style={{
                        height: 0.2,
                        width: 4,
                        layoutOrigin: [0.5, 0.5],
                        transform: [{translate: [-6, 2, -3]},{rotateY: 35}],
                    }}
                    playerState={this.state.playerState}
                />
            </View>
        )
    }

}