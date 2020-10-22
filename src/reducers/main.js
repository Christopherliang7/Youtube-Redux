import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

// Pass in object of reducers into Reduxt.combineReducers

var rootReducer = combineReducers({videoList:videoListReducer, currentVideo: currentVideoReducer});

//combineReducers({videos: videoList, cVideo: currentVideo});

//const rootReducer = Redux.combineReducers({ votes: votesReducer });


export default rootReducer;