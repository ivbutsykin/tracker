import { Component } from 'react';

import { InputBase, IconButton } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

import styles from './TrackerForm.module.css';

class TrackerForm extends Component {
  render() {
    return (
      <div className={styles.TrackerForm}>
        <InputBase placeholder="Enter tracker name" style={{flex: 1}}/>
        <IconButton style={{padding: 0}}>
          <PlayCircleFilledWhiteIcon style={{
            color: green[500],
            fontSize: 40,
          }}/>
        </IconButton>
      </div>
    );
  }
}

export default TrackerForm;
