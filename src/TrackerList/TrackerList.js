import { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import 'moment-duration-format';

import { List, Divider } from '@material-ui/core';

import Tracker from './Tracker/Tracker';

class TrackerList extends Component {
  render() {
    const { trackers } = this.props;
    return (
      <List>
        {
          trackers.map((tracker, index) => {
            const {
              name,
              startedAt,
              isPaused,
              id
            } = tracker;
            return (
              <Fragment key={id}>
                <Divider/>
                <Tracker name={name} id={id} time={startedAt} isPaused={isPaused}/>
                {index === trackers.length - 1 && <Divider/>}
              </Fragment>
            );
          })
        }
      </List>
    );
  }
}

function mapStateToProps(state) {
  return {
    trackers: state.trackers
  };
}

export default connect(mapStateToProps)(TrackerList);
