import React, { Component } from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';

export default class MainContainer extends Component<Props> {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings(['Class RCTCxxModule']);
  }

  componentDidUpdate() {
    const { picture, actions } = this.props;
    if(picture.hide) actions.save(picture.share);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  }
});
