import { Container } from '@material-ui/core';

import Header from './Header/Header';
import TrackerForm from './TrackerForm/TrackerForm';
import TrackerList from './TrackerList/TrackerList';

function App() {
  return (
    <Container maxWidth="sm">
      <Header/>
      <TrackerForm/>
      <TrackerList/>
    </Container>
  );
}

export default App;
