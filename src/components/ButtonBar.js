import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Square from 'react-native-vector-icons/MaterialIcons';

export default class ButtonBar extends Component {
  constructor(props) {
    super(props);

    this.remove = this.remove.bind(this);
    this.change = this.change.bind(this);
    this.save = this.save.bind(this);
    this.share = this.share.bind(this);
    this.fireSnap = this.fireSnap.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
    this.toggleFlash = this.toggleFlash.bind(this);
    this.toggleRatio = this.toggleRatio.bind(this);
  }

  remove() {
    this.props.actions.remove();

  }

  change() {
    this.props.actions.change("back");
  }

  save() {
    this.props.actions.toggleHide();
  }

  share() {
    this.props.actions.toggleHide(true);
  }

  fireSnap() {
    const { fireSnap, disableSaveButton } = this.props.actions;
    disableSaveButton();
    fireSnap();
  }

  toggleHide() {
    this.props.actions.toggleHide();
  }

  toggleFlash() {
    this.props.actions.toggleFlash();
  }

  toggleRatio() {
    this.props.actions.toggleRatio();
  }

  render() {
    const { remove, save, share, button, flashlight, ratio, buttonBarContainer, change } = styles;
    const { front, back, flash, square, direction, disabled } = this.props.picture;

    return (
        <View style={buttonBarContainer}>
          {back && <TouchableOpacity style={[button, remove]} onPress={this.remove}>
            <Icon size={30} color="white" name="remove" />
          </TouchableOpacity>}
          {!back && <TouchableOpacity style={[button, remove]} onPress={this.change}>
            <Icon size={25} color="white" name="refresh" />
          </TouchableOpacity>}
          {!back && <TouchableOpacity style={[button, ratio]} onPress={this.toggleRatio}>
            <Square size={35} color="white" name={square?"crop-portrait":"crop-square"} />
          </TouchableOpacity>}
          {front && back && <TouchableOpacity style={[button, flashlight]} onPress={this.share}>
            <Icon size={25} color="white" name="share-alt" />
          </TouchableOpacity>}
          {(!front || !back) && <TouchableOpacity style={[button, flashlight]} onPress={this.toggleFlash}>
            <Square size={30} color="white" name={flash?"flash-on":"flash-off"} />
          </TouchableOpacity>}
          <TouchableOpacity style={[button, save]} disabled={disabled} onPress={front&&back?this.save:this.fireSnap}>
            <Square size={50} color="white" style={{ opacity: disabled?0.5:1 }} name={back&&front?"file-download":"photo-camera"} />
          </TouchableOpacity>
        </View>
    );
  }
}

/*Set in every button: WIDTH, BOTTOM */
const styles = StyleSheet.create({
  buttonBarContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 50,
    alignItems: "center"
  },
  button: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderWidth: 0,
    borderColor: "white",
    zIndex: 500000,
    opacity: 1,
    position: "absolute",
    padding: 12.5,
    alignItems: "center"
  },
  remove: {
    bottom: "5%",
    width: "17.5%",
    right: "2.5%"
  },
  save: {
    borderRadius: 50,
    padding: 30,
    bottom: 0
  },
  ratio: {
    width: "17.5%",
    bottom: "15%",
    right: "2.5%"
  },
  flashlight: {
    top: "5%",
    right: "2.5%",
    width: "17.5%",
  }
});
