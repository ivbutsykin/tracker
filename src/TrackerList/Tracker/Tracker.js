import { Component } from 'react';

import { connect } from 'react-redux';

import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography
} from '@material-ui/core';

import moment from 'moment';

import { green, grey, red } from '@material-ui/core/colors';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

class Tracker extends Component {
  render() {
    const {
      name,
      id,
      time,
      isPaused
    } = this.props;

    const style = {
      display: 'flex',
      justifyContent: 'space-between',
    };

    if (isPaused === false) {
      style.color = green[500];
    }

    let timeFormat;
    if (time < 10) {
      timeFormat = moment.duration(time, 'seconds')
        .format('[00]:[00]:[0]s');
    } else if (time < 60) {
      timeFormat = moment.duration(time, 'seconds')
        .format('[00]:[00]:ss');
    } else if (time < 600) {
      timeFormat = moment.duration(time, 'seconds')
        .format('[00]:[0]m:ss');
    } else if (time < 3600) {
      timeFormat = moment.duration(time, 'seconds')
        .format('[00]:mm:ss');
    } else if (time < 36000) {
      timeFormat = moment.duration(time, 'seconds')
        .format('[0]h:mm:ss');
    } else {
      timeFormat = moment.duration(time, 'seconds')
        .format('h:mm:ss');
    }

    return (
      <ListItem style={{ paddingRight: 96 }}>
        <ListItemText
          primary={
            <div style={style}>
              <Typography display="inline" style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {name}
              </Typography>
              <Typography display="inline">
                {timeFormat}
              </Typography>
            </div>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" style={{ color: grey[900] }}
                      onClick={() => this.handleStop(id)}>
            {isPaused ? <PlayCircleOutlineIcon/> : <PauseCircleOutlineIcon/>}
          </IconButton>
          <IconButton edge="end" style={{ color: red[300] }}
                      onClick={() => this.handleRemove(id)}>
            <RemoveCircleOutlineIcon/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => this.props.tickTracker(this.props.id), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleStop = id => {
    this.props.stopTracker(id);
  };

  handleRemove = id => {
    this.props.removeTracker(id);
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
    }),

    tickTracker: id => dispatch({
      type: 'TICK',
      payload: id
    }),
  };
}

export default connect(null, mapDispatchToProps)(Tracker);
