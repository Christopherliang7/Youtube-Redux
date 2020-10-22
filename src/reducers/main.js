import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

// Pass in object of reducers into Reduxt.combineReducers
var rootReducer = combineReducers({videoList:videoList, currentVideo: currentVideo});

//combineReducers({videos: videoList, cVideo: currentVideo});

//const rootReducer = Redux.combineReducers({ votes: votesReducer });


export default rootReducer;