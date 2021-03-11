import { Component } from 'react';
import { connect } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { InputBase, IconButton } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

import styles from './TrackerForm.module.css';

class TrackerForm extends Component {
  state = {
    name: ''
  };

  render() {
    const { name } = this.state;
    return (
      <div className={styles.TrackerForm}>
        <InputBase value={name} placeholder="Enter tracker name" style={{ flex: 1 }}
                   onChange={this.handleChange} onKeyDown={this.handleKeyPress}/>
        <IconButton style={{ padding: 0 }} onClick={this.handleClick}>
          <PlayCircleFilledWhiteIcon style={{
            color: green[500],
            fontSize: 40,
          }}/>
        </IconButton>
      </div>
    );
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleClick = () => {
    this.props.createTracker({
      name: this.state.name,
      startedAt: 0,
      isPaused: false,
      id: uuidv4()
    });
    this.setState({ name: '' });
  };

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.handleClick();
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createTracker: tracker => dispatch({
      type: 'CREATE',
      payload: tracker
    })
  };
}

export default connect(null, mapDispatchToProps)(TrackerForm);
