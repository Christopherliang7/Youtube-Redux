import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

// Pass in object of reducers into Reduxt.combineReducers
var rootReducer = combineReducers({cVideo: currentVideo, videos: videoList});

//const rootReducer = Redux.combineReducers({ votes: votesReducer });


