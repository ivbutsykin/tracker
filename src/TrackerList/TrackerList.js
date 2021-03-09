import { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import moment from 'moment';
import 'moment-duration-format';

import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Divider, Typography
} from '@material-ui/core';
import { green, grey, red } from '@material-ui/core/colors';

import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

class TrackerList extends Component {
  render() {
    const { trackers } = this.props;
    return (
      <List>
        {
          trackers.map((tracker, index) => {
            const style = {
              display: 'flex',
              justifyContent: 'space-between',
            };
            if (tracker.isPaused === false) {
              style.color = green[500];
            }

            return (<Fragment key={tracker.id}>
              <Divider/>
              <ListItem style={{ paddingRight: 96 }}>
                <ListItemText
                  primary={
                    <div style={style}>
                      <Typography display="inline" style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {tracker.name}
                      </Typography>
                      <Typography display="inline">
                        {moment.duration(tracker.startedAt, 'seconds')
                          .format('HH:mm:ss')}
                      </Typography>
                    </div>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" style={{ color: grey[900] }}
                              onClick={() => this.handleStop(tracker.id)}>
                    {tracker.isPaused ? <PlayCircleOutlineIcon/> : <PauseCircleOutlineIcon/>}
                  </IconButton>
                  <IconButton edge="end" style={{ color: red[300] }}
                              onClick={() => this.handleRemove(tracker.id)}>
                    <RemoveCircleOutlineIcon/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              {index === trackers.length - 1 && <Divider/>}
            </Fragment>);
          })
        }
      </List>
    );
  }

  handleStop = id => {
    this.props.stopTracker(id);
  };

  handleRemove = id => {
    this.props.removeTracker(id);
  };
}

function mapStateToProps(state) {
  return {
    trackers: state.trackers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    stopTracker: id => dispatch({
      type: 'STOP',
      payload: id
    }),

    removeTracker: id => dispatch({
      type: 'REMOVE',
      payload: id
    })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackerList);
