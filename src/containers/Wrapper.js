import React from 'react';
import { Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import MainContainer from '../components/MainContainer';
import BackContainer from '../components/BackContainer';
import FrontContainer from '../components/FrontContainer';
import ButtonBar from '../components/ButtonBar';
import ImageView from '../components/ImageView';
import Camera from '../components/Camera';

const Wrapper = ({actions, picture}) => {
  const { front, back, flash, square, direction, snapFired, hide } = picture;
  return (
    <MainContainer picture={picture} actions={actions}>
      <BackContainer square={square}>
        {back?
          <ImageView uri={back} scale={direction.back} />:
          <Camera direction={direction.back} flash={flash} snapFired={snapFired.back} actions={actions} type="back" />
        }
      </BackContainer>
      <FrontContainer hide={hide} front={front} back={back} actions={actions}>
        {front?
          <ImageView uri={front}  scale={direction.front} />:
          <Camera direction={direction.front} flash={flash} snapFired={snapFired.front} actions={actions} type="front" />
        }
      </FrontContainer>
      {!hide&&<ButtonBar actions={actions} picture={picture} />}
    </MainContainer>
  );
}

const mapStateToProps = ({ picture}) => ({
  picture,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper)
