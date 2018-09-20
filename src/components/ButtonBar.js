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
    this.props.actions.save();
  }

  share() {
    this.props.actions.save(true);
  }

  fireSnap() {
    this.props.actions.fireSnap();
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
    const { front, back, flash, square, direction } = this.props.picture;

    return (
        <View style={buttonBarContainer}>
          {back && <TouchableOpacity style={[button, remove]} onPress={this.remove}>
            <Icon size={20} name="remove" />
          </TouchableOpacity>}
          {!back && <TouchableOpacity style={[button, remove]} onPress={this.change}>
            <Icon size={20} name="refresh" />
          </TouchableOpacity>}
          {!back && <TouchableOpacity style={[button, ratio]} onPress={this.toggleRatio}>
            <Square size={20} name={square?"crop-square":"crop-portrait"} />
          </TouchableOpacity>}
          {front && back && <TouchableOpacity style={[button, flashlight]} onPress={this.share}>
            <Icon size={20} name="share-alt" />
          </TouchableOpacity>}
          {(!front || !back) && <TouchableOpacity style={[button, flashlight, {backgroundColor: flash?"yellow":"lightgrey"}]} onPress={this.toggleFlash}>
            <Icon size={20} name="flash" />
          </TouchableOpacity>}
          <TouchableOpacity style={[button, save]} onPress={front&&back?this.save:this.fireSnap}>
            <Icon size={15} name={back&&front?"download":"circle"} />
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
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "grey",
    opacity: 0.5,
    position: "absolute",
    padding: 12.5,
    alignItems: "center"
  },
  remove: {
    bottom: "5%",
    width: "17.5%",
    right: "5%"
  },
  save: {
    borderRadius: 50,
    padding: 30,
    bottom: "1%"
  },
  ratio: {
    width: "17.5%",
    bottom: "15%",
    right: "5%"
  },
  flashlight: {
    top: "5%",
    right: "5%",
    width: "17.5%",
  }
});
