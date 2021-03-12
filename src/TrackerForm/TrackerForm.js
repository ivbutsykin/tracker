import { Component } from 'react';
import { connect } from 'react-redux';

import { InputBase, IconButton } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

import styles from './TrackerForm.module.css';

import { create } from '../store/actions';

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
    this.props.create(this.state.name);
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
    create: name => dispatch(create(name)),
  };
}

export default connect(null, mapDispatchToProps)(TrackerForm);
