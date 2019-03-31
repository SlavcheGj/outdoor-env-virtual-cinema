import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sound,
} from 'react-vr';
import TitleScene from "./components/scenes/TitleScene";
import Dashboard from "./components/scenes/Dashboard";
import VideoPlayer from "./components/scenes/VideoPlayer";
import PanoramicVideoScene from "./components/scenes/PanoramicVideoScene";

export default class VrCinemaApp extends React.Component {
    constructor() {
        super();
        this.state = { previews: ['Avengers-EndGame','Bumblebee','Captain-Marvel','Men In Black','Spider-Man Far from home','Star Wars'],
                        environments: ["fort-night", "Arizona", "Arizona", "Hawaii", "New Hampshire", "Texas"],
                        panoramicVideo:['Great Hammerhead Shark Encounter','Journey To The Edge Of Space','Lions','NEW YORK 2121','Northern lights in Norway','Roller Coaster'],
                       selectedVideo: "",
                       selectedEnv: "",
                        scene: 1,
                        menuElem:true}
    }
    changeScenes=(nextScene,envIndex,prewIndex)=>{
        switch (nextScene) {
            case 1:
                this.setState({scene: 1});
                break;
            case 2:
                this.setState({scene: 2});
                break;
            case 3:
                this.setState({scene: 3,
                    selectedEnv:this.state.environments[envIndex],
                    selectedVideo:this.state.previews[prewIndex]
                });
                break;
            case 4:
                this.setState({scene: 4,
                    selectedVideo:this.state.panoramicVideo[prewIndex]
                });
                break;
        }
    };
    changeMenu=()=>{
        this.setState({menuElem:!this.state.menuElem});
    };
  render() {
      const scene = this.state.scene;
      return (
          <View>
              {scene === 1 ? (
                  <TitleScene showButton={true}
                              text={"Enther the Cinema"}
                              changeScenes={this.changeScenes.bind(this)}
                              scene={this.state.scene}/>
              ) : (
                  scene === 2 ? (
                      <Dashboard
                          changeScenes={this.changeScenes.bind(this)}
                          environments={this.state.environments}
                          previews={this.state.previews}
                          panoramicVideo={this.state.panoramicVideo}
                          showButton={false}
                          menuElem={this.state.menuElem}
                          changeMenu={this.changeMenu.bind(this)}
                          text={"Select Environment"}
                      />
                  ) : ( scene ===3?(
                      <VideoPlayer selectedVideo={this.state.selectedVideo}
                                   env={this.state.selectedEnv}
                                   showButton={true}
                                   menuElem={this.state.menuElem}
                                   text={"Back to Dashboard"}
                                   changeScenes={this.changeScenes.bind(this)}/>
                      ) : (
                          <PanoramicVideoScene selectedVideo={this.state.selectedVideo}
                                                            scene={this.state.scene}
                                                            text={"Back to Dashboard"}
                                                            changeScenes={this.changeScenes.bind(this)}
                                       />
                      )
                  )
              )}
          </View>
    );
  }
};

AppRegistry.registerComponent('VrCinemaApp', () => VrCinemaApp);
