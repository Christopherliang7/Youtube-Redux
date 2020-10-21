import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

// map objects that map props to state

var mapStateToProps = (state) => {
  return {
    videos: state.videos
  };

};

// map that returns object that maps actions to clicks

var mapDispatchToProps = (dispatch) => {
  return {
    updateVideos: (video) => dispatch(videos)
  };
};

// connect

var VideoListContainer = connect(
  // mapStatetoProps function

  // map Dispatch to props function
)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

// handleVideoListTitleClick

export default VideoListContainer;
