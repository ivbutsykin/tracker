import { Container } from '@material-ui/core';

import TrackerForm from './TrackerForm/TrackerForm';
import TrackerList from './TrackerList/TrackerList'

function App() {
  return (
    <Container maxWidth="sm">
      <TrackerForm/>
      <TrackerList/>
    </Container>
  );
}

export default App;
