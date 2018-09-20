import { CameraRoll, Share } from 'react-native';
import { captureScreen } from "react-native-view-shot";
import { toggleHide } from '../actions/actions';

export function saveUrisInState(state, uri) {
  switch (true) {
    case !state.back || state.front || (!state.front && !state.back):
      return {
        ...state,
        back: uri
      };
      break;
    case state.back!==null:
      return {
        ...state,
        front: uri
      };
      break;
    default:
      return {...state};
  }
}

export function fireSnap(state, camera) {
  if(!camera) camera = !state.back || state.front || (!state.front && !state.back)? "back":"front";

  return {
    ...state,
    snapFired: {
      ...state.snapFired,
      [camera]: !state.snapFired[camera]
    }
  };
}

export function save(state, action) {
  captureScreen({
    format: "jpg",
    quality: 1
  })
  .then(
    uri => {
      CameraRoll.saveToCameraRoll(uri, 'photo');
      if(action.share) Share.share({url: "file://"+ uri , title: "pic"});
    },
    error => {
      alert("Oops, snapshot failed: "+error);
    }
  );
}

export function remove(state, front) {
  return {
    ...state,
    front: front?false:state.front,
    back: front?state.back:false
  };
}
