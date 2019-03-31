import React from 'react';
import {
    Text,
    View,
    asset,
    Pano, Sound
} from 'react-vr';
import DashboardLayout from "./layouts/Dashboardlayouts";
//Scene
export default class Dashboard extends React.Component {
    render() {
        return (
            <View>
                <Pano source={asset('fort-night.jpg')}>
                    <Sound volume={1} loop={true} source={{mp3:asset('fort-night-atmosphere.mp3')}}/>
                </Pano>
                <DashboardLayout previews={this.props.previews}
                                 environments={this.props.environments}
                                     panoramicVideo={this.props.panoramicVideo}
                                 showButton={this.props.showButton}
                                 text={this.props.text}
                                 changeScenes={this.props.changeScenes}
                                 menuElem={this.props.menuElem}
                                 changeMenu={this.props.changeMenu}/>

            </View>
        )
    }
}