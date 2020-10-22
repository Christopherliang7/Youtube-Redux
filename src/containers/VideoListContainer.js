import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

// map objects that map props to state

var mapStateToProps = (state) => {
  return {
    videos: state.videoList
  };

};

// map that returns object that maps actions to clicks

var mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (video) => {dispatch(changeVideo(video))}
  };
};

// connect

var VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

// handleVideoListTitleClick

export default VideoListContainer;
