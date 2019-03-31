import React from 'react';
import {
    Text,
    View,
    VrButton,
    Animated
} from 'react-vr';
//Element
import { Easing } from 'react-native';
export default class Button extends React.Component {
    constructor() {
        super();
        this.state = { slideRight: new Animated.Value(1),fadeIn: new Animated.Value(0)};
    }
    componentDidMount() {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    this.state.slideRight,
                    {
                        toValue: 0,
                        duration: 2000,
                        easing: Easing.ease
                    }
                ),
                Animated.timing(
                    this.state.fadeIn,
                    {
                        toValue: 1,
                        duration: 2000,
                        easing: Easing.ease
                    }
                )
            ])
        ]).start();
    }
    render() {
        const that=this;
        const prewIndex=that.props.prewIndex;
        const envIndex=that.props.envIndex;
        const showButton = that.props.showButton;
        const currentScene = that.props.scene;
        let stage=that.props.stage;
        let nextScene;
        switch (currentScene) {
            case 1:
                nextScene = 2;
                break;
            case 2:
                nextScene = 3;
                break;
            case 3:
                nextScene = 1;
                break;
            case 4:
                nextScene = 1;
                break;
        }
        return (
            <View>
                {showButton ? (
                    <Animated.View
                        style={{
                            margin: 0.1,
                            paddingLeft: 0.2,
                            paddingRight: 0.2,
                            height: 0.3,
                            backgroundColor: '#959090',
                            borderRadius: 0.1,
                            opacity: this.state.fadeIn,
                            transform: [
                                {translateX: this.state.slideRight}
                            ]
                        }}
                    >
                        <VrButton onClick={stage===1?(() => this.props.updateScene()):(() => this.props.changeScenes(nextScene,envIndex,prewIndex))}>
                            <Text
                                style={{
                                    fontSize: 0.2,
                                    textAlign: 'center',
                                    color: "#FFFFFF"
                                }}>
                                {this.props.text}
                            </Text>
                        </VrButton>
                    </Animated.View>
                ) :(
                    <View></View>
                )}
            </View>
        )
    }
}

