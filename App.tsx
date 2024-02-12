import { Provider } from 'react-redux';

import { Home } from './src/Home';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
