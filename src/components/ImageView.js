import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class ImageView extends Component {
  render() {
    return (
      <Image
        style={[styles.image, {transform:[{scaleX: this.props.scale?-1:1}]}]}
        source={{ uri: this.props.uri }}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  }
});
