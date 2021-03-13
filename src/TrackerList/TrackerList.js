import { connect } from 'react-redux';

import Tracker from './Tracker/Tracker';

import styles from './TrackerList.module.css';

import { pause, remove, resume } from '../store/actions';

function TrackerList(props) {
  const { trackers } = props;
  return (
    <ul className={styles.list}>
      {
        trackers.map((tracker) => (
          <li className={styles.list_child} key={tracker.id}>
            <Tracker
              tracker={tracker}
              onRemove={props.remove}
              onPause={props.pause}
              onResume={props.resume}
            />
          </li>
        ))
      }
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    trackers: state.trackers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pause: id => dispatch(pause(id)),
    resume: id => dispatch(resume(id)),
    remove: id => dispatch(remove(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackerList);
