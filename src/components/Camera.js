import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class Camera extends Component {
  constructor(props) {
    super(props);
    this.constants = {
      flashOn: RNCamera.Constants.FlashMode.on,
      flashOff: RNCamera.Constants.FlashMode.off,
      typeFront: RNCamera.Constants.Type.front,
      typeBack: RNCamera.Constants.Type.back
    }
  }

  takePicture = async function () {
    this.props.actions.fireSnap(this.props.type);

    const data = await this.camera.takePictureAsync({ base64: true });
    this.props.actions.takePicture(data.uri);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { direction, snapFired } = this.props;
    return nextProps.snapFired!==snapFired || nextProps.direction!==direction;
  }

  componentDidUpdate() {
    if(this.props.snapFired) this.takePicture();
  }

  render() {
    const { direction, flash, snapFired } = this.props;
    const { flashOn, flashOff, typeFront, typeBack } = this.constants;
    return (
      <RNCamera
        ref={(ref) => this.camera=ref}
        style={styles.camera}
        type={direction?typeFront:typeBack}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={flash?flashOn:flashOff}
      />
    );
  }
}

const styles = StyleSheet.create({
  camera: {
    width: "100%",
    height: "100%"
  }
});
