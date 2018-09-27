import React, { Component } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

export default class BackContainer extends Component {
  render() {
    return (
      <View style={this.props.square?styles.square:styles.portrait}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: "100%",
    height: Dimensions.get('window').width,
    top: "15%",
    backgroundColor: "black"
  },
  portrait: {
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  }
});
