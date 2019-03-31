import React from 'react';
import {
    Text,
    View,
    VrButton,
    Image, asset
} from 'react-vr';
//Element
export default class TileButtons extends React.Component {
    render() {
        const stage = this.props.stage;
        const viewStyle={margin: 0.1,
            height: 0.8,
            borderStyle: "solid"};
        return (
            <View style={{marginTop: -0.09, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={viewStyle}>
                        <VrButton onClick={ () => this.props.updateStage(0)}>
                            <Text>
                                {stage===1?(this.props.previews[0]):(this.props.environments[0])}
                            </Text>
                            <Image source={stage===1?(asset(this.props.previews[0]+'.jpg')):(asset(this.props.environments[0]+'.png'))}
                                   style={{width: 1,
                                       height: 0.6,
                                       borderWidth: this.props.borderWidths[0],
                                        borderColor: "#352828",}}/>
                        </VrButton>
                    </View>
                    <View style={viewStyle}>
                        <VrButton onClick={ () => this.props.updateStage(1)}>
                            <Text>
                                {stage===1?(this.props.previews[1]):(this.props.environments[1])}
                            </Text>
                            <Image source={stage===1?(asset(this.props.previews[1]+'.jpg')):(asset(this.props.environments[1]+'.png'))}
                                   style={{width: 1,
                                        height: 0.6,
                                        borderWidth: this.props.borderWidths[1],
                                        borderColor: "#352828",}}/>
                        </VrButton>
                    </View>
                </View>

                <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={viewStyle}>
                        <VrButton onClick={ () => this.props.updateStage(2)}>
                            <Text>
                                {stage===1?(this.props.previews[2]):(this.props.environments[2])}
                            </Text>
                            <Image source={stage===1?(asset(this.props.previews[2]+'.jpg')):(asset(this.props.environments[2]+'.png'))}
                                   style={{width: 1,
                                       height: 0.6,
                                       borderWidth: this.props.borderWidths[2],
                                       borderColor: "#352828",}}/>
                        </VrButton>
                    </View>
                    <View style={viewStyle}>
                        <VrButton onClick={ () => this.props.updateStage(3)}>
                            <Text>
                                {stage===1?(this.props.previews[3]):(this.props.environments[3])}
                            </Text>
                            <Image source={stage===1?(asset(this.props.previews[3]+'.jpg')):(asset(this.props.environments[3]+'.png'))}
                                   style={{width: 1,
                                       height: 0.6,
                                       borderWidth: this.props.borderWidths[3],
                                       borderColor: "#352828",}}/>
                        </VrButton>
                    </View>
                </View>

                <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={viewStyle}>
                        <VrButton onClick={ () => this.props.updateStage(4)}>
                            <Text>
                                {stage===1?(this.props.previews[4]):(this.props.environments[4])}
                            </Text>
                            <Image source={stage===1?(asset(this.props.previews[4]+'.jpg')):(asset(this.props.environments[4]+'.png'))}
                                   style={{width: 1,
                                       height: 0.6,
                                       borderWidth: this.props.borderWidths[4],
                                       borderColor: "#352828",}}/>
                        </VrButton>
                    </View>
                    <View style={viewStyle}>
                        <VrButton onClick={ () => this.props.updateStage(5)}>
                            <Text>
                                {stage===1?(this.props.previews[5]):(this.props.environments[5])}
                            </Text>
                            <Image source={stage===1?(asset(this.props.previews[5]+'.jpg')):(asset(this.props.environments[5]+'.png'))}
                                   style={{width: 1,
                                       height: 0.6,
                                       borderWidth: this.props.borderWidths[5],
                                       borderColor: "#352828",}}/>
                        </VrButton>
                    </View>
                </View>
            </View>
        )
    }
}