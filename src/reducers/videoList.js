import Redux from 'redux';
//import exampleVideoData from '../src/data/exampleVideoData.js';

// var InitialState = exampleVideoData;

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  // if action.type === 'VIDEOS',
  // return action.result
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  } else {
    return state;
  }

};

export default videoListReducer;
