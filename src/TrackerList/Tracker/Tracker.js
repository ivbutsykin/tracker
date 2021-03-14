import { Component } from 'react';

import 'moment-duration-format';
import moment from 'moment';
import classnames from 'classnames';

import styles from './Tracker.module.css';

class Tracker extends Component {
  state = {
    elapsedTime: this.getElapsedTime(),
  };

  componentDidMount() {
    this.setupUpdateInterval();
  }

  componentWillUnmount() {
    this.clearUpdateInterval();
  }

  render() {
    const { tracker } = this.props;
    const { elapsedTime } = this.state;

    return (
      <div className={classnames(styles.Tracker, {
        [styles.active]: !tracker.isPaused,
      })}>
        <div className={styles.content}>
          <span className={styles.name}>{tracker.name}</span>
          <span>{elapsedTime}</span>
        </div>

        <div className={styles.buttons}>
          <button className={styles.play_button} onClick={this.handleToggleClick}>
            {
              tracker.isPaused ?
                <span className="material-icons md-24">play_circle_outline</span> :
                <span className="material-icons md-24">pause_circle_outline</span>
            }
          </button>
          <button className={styles.remove_button} onClick={this.handleRemove}>
            <span className="material-icons md-24">remove_circle_outline</span>
          </button>
        </div>
      </div>
    );
  }

  setupUpdateInterval() {
    this.intervalId = setInterval(this.updateElapsedTime, 1000);
  }

  clearUpdateInterval() {
    clearInterval(this.intervalId);
  }

  updateElapsedTime = () => {
    this.setState({
      elapsedTime: this.getElapsedTime(),
    });
  };

  getElapsedTime() {
    const { tracker: { intervals } } = this.props;

    const elapsedTime = intervals.reduce((acc, cur) => {
      return acc + (cur.pausedAt || Date.now()) - cur.startedAt;
    }, 0);

    return moment.duration(elapsedTime, 'milliseconds')
      .format('HH:mm:ss', { trim: false });
  }

  handleToggleClick = () => {
    const { tracker } = this.props;

    if (tracker.isPaused) {
      this.props.onResume(tracker.id);
      this.setupUpdateInterval();
    } else {
      this.props.onPause(tracker.id);
      this.clearUpdateInterval();
    }
  };

  handleRemove = () => {
    this.props.onRemove(this.props.tracker.id);
  };
}

export default Tracker;
