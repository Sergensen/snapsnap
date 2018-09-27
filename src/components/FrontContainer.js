import React, { Component } from 'react';
import { View, PanResponder, Animated, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FrontContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 1,
      pan : new Animated.ValueXY(),
    }

    this.remove = this.remove.bind(this);

    this.xOffset = this.state.pan.x._value;
    this.yOffset = this.state.pan.y._value;

    this.state.pan.x.addListener((e) => this.xOffset = e.value);
    this.state.pan.y.addListener((e) => this.yOffset = e.value);

    this.panResponder = this.createPanResponder();
  }

  remove() {
    this.props.actions.remove(true);
  }

  createPanResponder() {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null,{
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderGrant: (e, gestureState) => {
        this.setState({scale:1.1})
        this.state.pan.setOffset({x: this.xOffset, y: this.yOffset});
      },
      onPanResponderRelease: (e, {vx, vy}) => {
        this.setState({scale:1})
        this.state.pan.extractOffset();
      }
    });
  }

  render() {
    const { front, hide, children } = this.props;
    const { deleteButton, main, button, changeButton } = styles;
    return (
      <Animated.View {...this.panResponder.panHandlers} style={this.getContainerStyle()}>
        <View style={main}>
          {children}
        </View>
        {front && !hide && <TouchableOpacity style={button} onPress={this.remove}>
          <Icon size={25} color="white" name="remove" />
        </TouchableOpacity>}
      </Animated.View>
    );
  }



    getContainerStyle() {
      const { pan, scale } = this.state;
      const { front, back } = this.props;

      return [
        pan.getLayout(),
        styles.frontContainer,
        {
          opacity: back?1:(front?0.5:1),
          display: back?"flex":(front?"flex":"none"),
          transform: [
              { scale }
          ]
        },
      ];
    }
}

const styles = StyleSheet.create({
  frontContainer: {
    width: Dimensions.get('window').width/2,
    height: Dimensions.get('window').width/2,
    borderRadius: 100,
    zIndex: 100,
    backgroundColor: "black",
    position: "absolute"
  },
  main: {
    borderRadius: 100,
    zIndex: 100,
    height: Dimensions.get('window').width/2,
    overflow: "hidden",
  },
  button: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    borderWidth: 0,
    borderColor: "white",
    opacity: 1,
    padding: 10,
    zIndex: 100,
    width: "25%",
    alignItems: "center",
    top: "-15%",
    left: "75%",
  },
});
