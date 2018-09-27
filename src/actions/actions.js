import types from '../constants/types';

export function takePicture(uri) {
  return {
    type: types.TAKE_PICTURE,
    uri
  };
}

export function disableSaveButton() {
  return {
    type: types.DISABLE_SAVE,
  };
}

export function fireSnap(camera) {
  return {
    type: types.FIRE_SNAP,
    camera
  }
}

export function change(camera) {
  return {
    type: types.CHANGE,
    camera
  };
}

export function save(share=false) {
  return {
    type: types.SAVE,
    share
  };
}

export function remove(front=false) {
  return {
    type: types.REMOVE,
    front
  };
}

export function toggleFlash() {
  return {
    type: types.TOGGLE_FLASH
  };
}

export function toggleRatio() {
  return {
    type: types.TOGGLE_RATIO
  };
}

export function toggleHide(share=false) {
  return {
    type: types.TOGGLE_HIDE,
    share
  };
}
