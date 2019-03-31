import React from 'react';
import {
    Text,
    View,
    VrButton,
    Image, asset
} from 'react-vr';
//Element
export default class PanoButtons extends React.Component {
    render() {
        const viewStyle={margin: 0.1,
            height: 0.6,
            borderStyle: "solid"};
        return (
            <View style={{marginTop: -0.09, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={viewStyle}>
                        <VrButton onClick={ () => this.props.changeScenes(4,0,0)}>
                            <Text>
                                {this.props.panoramicVideo[0]}
                            </Text>
                            <Image source={asset(this.props.panoramicVideo[0]+'.png')}
                                   style={{width: 1,
                                       height: 0.6,
                                       }}/>
                        </VrButton>
                    </View>
                    <View style={viewStyle}>
                        <VrButton onClick={ () => this.props.changeScenes(4,0,1)}>
                            <Text>
                                {this.props.panoramicVideo[1]}
                            </Text>
                            <Image source={asset(this.props.panoramicVideo[1]+'.png')}
                                   style={{width: 1,
                                       height: 0.6,
                                       }}/>
                        </VrButton>
                    </View>
                </View>

                <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={viewStyle}>
                        <VrButton onClick={ () => this.props.changeScenes(4,0,2)}>
                            <Text>
                                {this.props.panoramicVideo[2]}
                            </Text>
                            <Image source={asset(this.props.panoramicVideo[2]+'.png')}
                                   style={{width: 1,
                                       height: 0.6,
                                       }}/>
                        </VrButton>
                    </View>
                    <View style={viewStyle}>
                        <VrButton onClick={ () => this.props.changeScenes(4,0,3)}>
                            <Text>
                                {this.props.panoramicVideo[3]}
                            </Text>
                            <Image source={asset(this.props.panoramicVideo[3]+'.png')}
                                   style={{width: 1,
                                       height: 0.6,
                                       }}/>
                        </VrButton>
                    </View>
                </View>

                <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={viewStyle}>
                        <VrButton onClick={ () => this.props.changeScenes(4,0,4)}>
                            <Text>
                                {this.props.panoramicVideo[5]}
                            </Text>
                            <Image source={asset(this.props.panoramicVideo[4]+'.png')}
                                   style={{width: 1,
                                       height: 0.6,
                                       }}/>
                        </VrButton>
                    </View>
                    <View style={viewStyle}>
                        <VrButton onClick={ () => this.props.changeScenes(4,0,5)}>
                            <Text>
                                {this.props.panoramicVideo[5]}
                            </Text>
                            <Image source={asset(this.props.panoramicVideo[5]+'.png')}
                                   style={{
                                       width: 1,
                                       height: 0.6
                                   }}/>
                        </VrButton>
                    </View>
                </View>
            </View>
        )
    }
}