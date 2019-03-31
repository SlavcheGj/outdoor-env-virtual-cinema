import React from 'react';
import {
    View
} from 'react-vr';
//Element
export default class ProgressCircles extends React.Component {
    render() {
        return (
            <View>
                <View
                    style={{
                        margin: 0.1,
                        width: 0.2,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                </View>
                <View
                    style={{
                        margin: 0.1,
                        width: 0.15,
                        borderRadius: 0.15,
                        height: 0.15,
                        backgroundColor: this.props.color1
                    }}
                >
                </View>
                <View
                    style={{
                        margin: 0.1,
                        width: 0.15,
                        borderRadius: 0.15,
                        height: 0.15,
                        backgroundColor: this.props.color2
                    }}
                >
                </View>
            </View>
        )
    }
}