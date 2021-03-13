import { Component } from 'react';
import { connect } from 'react-redux';

import styles from './TrackerForm.module.css';

import { create } from '../store/actions';

class TrackerForm extends Component {
  state = {
    name: ''
  };

  render() {
    const { name } = this.state;
    return (
      <div className={styles.form}>
        <input
          type="text"
          value={name}
          className={styles.tracker_name}
          placeholder="Enter tracker name"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
        />
        <button className={styles.submit_button} onClick={this.handleClick}>
          <span className="material-icons md-36">play_circle</span>
        </button>
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
