import { Provider } from 'react-redux';

import { Container, Header } from './ui/layout';
import { store } from './app/store';
import { Routes } from './features/router/Routes';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Routes />
      </Container>
    </Provider>
  );
}

export default App;
