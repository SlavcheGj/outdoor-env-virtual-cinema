import React from 'react';
import {
    Animated,
    View
} from 'react-vr';
import MenuButtons from "./elements/MenuButtons";
import TileButtons from "./elements/TileButtons";
import ProgressCircles from "./elements/ProgresCircles";
import Button from "./elements/Button";
import PanoButtons from "./elements/PanoButtons";

export default class DashboardLayout extends React.Component {
   constructor(props){
       super();
        this.state = {
            showButton:props.showButton,
            color1: "#5A5A5A",
            color2: "#D3D3D3",
            text: props.text,
            borderWidths: [0, 0, 0, 0, 0, 0],
            stage: 1,
            scene:2,
            envIndex:0,
            prewIndex:0,
        };
   }
    updateStage(input) {
        if(this.state.showButton === false) {
            this.setState({showButton: true,prewIndex:input});
        }
        switch (input) {
            case 0:
                this.setState({borderWidths: [0.03, 0, 0, 0, 0, 0],envIndex: 0});
                break;
            case 1:
                this.setState({borderWidths: [0, 0.03, 0, 0, 0, 0],envIndex: 1});
                break;
            case 2:
                this.setState({borderWidths: [0, 0, 0.03, 0, 0, 0],envIndex: 2});
                break;
            case 3:
                this.setState({borderWidths: [0, 0, 0, 0.03, 0, 0],envIndex: 3});
                break;
            case 4:
                this.setState({borderWidths: [0, 0, 0, 0, 0.03, 0],envIndex: 4});
                break;
            case 5:
                this.setState({borderWidths: [0, 0, 0, 0, 0, 0.03],envIndex: 5});
                break;
        }
    }

    updateScene=()=>{
        this.setState({
            color1: "#D3D3D3",
            color2: "#5A5A5A",
            text: "Watch Video",
            stage: 2,
        });
    };
    render() {
        return (
            <View>
            <View style={{
                width: 5,
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                layoutOrigin: [0.5, 0.5],
                transform: [{translate: [0, 0, -3]}],
                marginTop: -0.3
            }}>
                <MenuButtons changeMenu={this.props.changeMenu}  />
                {this.props.menuElem?(
                    <TileButtons previews={this.props.previews}
                                 updateStage={this.updateStage.bind(this)}
                                 borderWidths={this.state.borderWidths}
                                 stage={this.state.stage}
                                 environments={this.props.environments}/>
                ):(
                    <PanoButtons panoramicVideo={this.props.panoramicVideo}
                                    changeScenes={this.props.changeScenes}/>
                )}
                    < ProgressCircles color1={this.state.color1} color2={this.state.color2}/>
            </View>
            <View style={{
            width: 5,
            height: 0.5,
            flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                layoutOrigin: [0.5, 0.5],
                transform: [{translate: [0, 0, -5]}],
        }}>
                <Button showButton={this.state.showButton}
                        updateScene={this.updateScene.bind(this)}
                        text={this.state.text}
                        envIndex={this.state.envIndex}
                        prewIndex={this.state.prewIndex}
                        scene={this.state.scene}
                        stage={this.state.stage}
                        changeScenes={this.props.changeScenes}
                />
    </View>
        </View>
    )
    }
}

{/*<PanoButtons panoramicVideo={this.props.panoramicVideo}
                                 changeScenes={this.props.changeScenes}/>*/}