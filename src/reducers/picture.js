import types from '../constants/types';
import { saveUrisInState, save, remove, fireSnap } from './reducerFunctions';

const initialState = {
  back: false,
  front: false,
  flash: false,
  hide: false,
  snapFired: {
    front: false,
    back: false
  },
  square: false,
  direction: {
    front: true,
    back: false
  },
  share: false
}

export default function picture (state = initialState, action) {
  const { back, front, flash, square, snapFired, hide } = state;
  switch (action.type) {
    case types.TAKE_PICTURE:
      return saveUrisInState(state, action.uri);
    case types.TOGGLE_FLASH:
      return { ...state, flash:!flash}
    case types.TOGGLE_HIDE:
      return { ...state, hide:!hide, share: action.share}
    case types.TOGGLE_RATIO:
      return { ...state, square:!square}
    case types.SAVE:
      save(state, action);
      return { ...state, front: false, back: false, hide: false, share: false }
    case types.REMOVE:
      return remove(state, action.front);
    case types.FIRE_SNAP:
      return fireSnap(state, action.camera);
    case types.CHANGE:
      return {
        ...state,
        direction: {
          ...state.direction,
          [action.camera]: !state.direction[action.camera]
        }
      }
    default:
      return state;
  }
}
