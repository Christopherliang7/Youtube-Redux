import Redux from 'redux';
//import exampleVideoData from '../src/data/exampleVideoData.js';

// var InitialState = exampleVideoData[0];

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  } else {
    return state;
  }
};

export default currentVideoReducer;
