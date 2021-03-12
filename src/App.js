import { Container } from '@material-ui/core';

import TrackerForm from './TrackerForm/TrackerForm';
import TrackerList from './TrackerList/TrackerList';

function App() {
  return (
    <Container maxWidth="sm">
      <div style={{textAlign: 'center'}}>
        <h1>Tracker</h1>
      </div>
      <TrackerForm/>
      <TrackerList/>
    </Container>
  );
}

export default App;
