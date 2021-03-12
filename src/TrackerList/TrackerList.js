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
          trackers.map((tracker, index) => (
            <Fragment key={tracker.id}>
              <Divider/>
              <Tracker tracker={tracker} />
              {index === trackers.length - 1 && <Divider/>}
            </Fragment>
          ))
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
