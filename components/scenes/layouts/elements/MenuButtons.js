import React from 'react';
import {
    Text,
    View,
    VrButton
} from 'react-vr';
//Element
export default class MenuButtons extends React.Component {
    render() {
        return (
            <View
                style={{
                    margin: 0.1,
                    width: 2,
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        margin: 0.1,
                        height: 0.3,
                        width:1.3,
                        borderRadius:0.05,
                        backgroundColor: "#000000"
                    }}
                >
                    <VrButton onClick={()=>this.props.changeMenu()}>
                        <Text
                            style={{
                                fontSize: 0.2,
                                textAlign: 'center',
                                color: "#FFFFFF"
                            }}>
                            Trailers/360*
                        </Text>
                    </VrButton>
                </View>
            </View>
        )
    }
}