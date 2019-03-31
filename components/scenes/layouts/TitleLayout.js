import React from 'react';
import {
    Text,
    View,
    VrButton
} from 'react-vr'
import Title from "./elements/Title";
import Button from "./elements/Button";

export default class TitleLayout extends React.Component{
    render(){
        return(
            <View
                style={{
                    width: 2.5,
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    layoutOrigin: [0.5, 0.5],
                    transform: [{translate: [0, 0, -3]}]
                }}
            >
                <Title/>
                <Button showButton={this.props.showButton}
                        text={this.props.text}
                        changeScenes={this.props.changeScenes}
                        scene={this.props.scene}
                />
            </View>
        )
    }

}