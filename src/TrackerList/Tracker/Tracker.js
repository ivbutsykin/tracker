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

  state = {
    elapsedTime: this.getElapsedTime(),
  }

  render() {
    const { tracker } = this.props;
    const { elapsedTime } = this.state;

    const style = {
      display: 'flex',
      justifyContent: 'space-between',
    };

    if (tracker.isPaused === false) {
      style.color = green[500];
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
                {tracker.name}
              </Typography>
              <Typography display="inline">
                {elapsedTime}
              </Typography>
            </div>
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            style={{ color: grey[900] }}
            onClick={this.handleToggleClick}
          >
            {tracker.isPaused ? <PlayCircleOutlineIcon/> : <PauseCircleOutlineIcon/>}
          </IconButton>
          <IconButton edge="end" style={{ color: red[300] }}
                      onClick={this.handleRemove}>
            <RemoveCircleOutlineIcon/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }

  componentDidMount() {
    this.intervalId = setInterval(this.updateElapsedTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateElapsedTime = () => {
    this.setState({
      elapsedTime: this.getElapsedTime(),
    })
  }

  getElapsedTime() {
    const { tracker: { intervals } } = this.props;

    const elapsedTime = intervals.reduce((acc, cur) => {
      return acc + (cur.pausedAt || Date.now()) - cur.startedAt;
    }, 0);

    return moment.duration(elapsedTime, 'milliseconds').format('HH:mm:ss', { trim: false });
  }

  handleToggleClick = () => {
    const { tracker } = this.props;

    if (tracker.isPaused) {
      this.props.resume(tracker.id);
    } else  {
      this.props.pause(tracker.id);
    }
  }

  handleRemove = () => {
    this.props.remove(this.props.tracker.id);
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pause: id => dispatch({
      type: 'PAUSE',
      payload: id
    }),
    resume: id => dispatch({
      type: 'RESUME',
      payload: id
    }),
    remove: id => dispatch({
      type: 'REMOVE',
      payload: id
    }),
  };
}

export default connect(null, mapDispatchToProps)(Tracker);
