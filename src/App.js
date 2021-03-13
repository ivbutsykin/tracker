import TrackerForm from './TrackerForm/TrackerForm';
import TrackerList from './TrackerList/TrackerList';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Tracker</h1>
      </div>
      <TrackerForm/>
      <TrackerList/>
    </div>
  );
}

export default App;
