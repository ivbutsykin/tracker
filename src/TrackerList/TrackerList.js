import { Fragment } from 'react';

import { connect } from 'react-redux';

import { Divider, List } from '@material-ui/core';

import Tracker from './Tracker/Tracker';
import { pause, remove, resume } from '../store/actions';

function TrackerList(props) {
  const { trackers } = props;
  return (
    <List>
      {
        trackers.map((tracker, index) => (
          <Fragment key={tracker.id}>
            <Divider/>
            <Tracker
              tracker={tracker}
              onRemove={props.remove}
              onPause={props.pause}
              onResume={props.resume}
            />
            {index === trackers.length - 1 && <Divider/>}
          </Fragment>
        ))
      }
    </List>
  );
}

function mapStateToProps(state) {
  return {
    trackers: state.trackers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pause: id => dispatch(pause(id)),
    resume: id => dispatch(resume(id)),
    remove: id => dispatch(remove(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackerList);
