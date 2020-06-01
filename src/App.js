import React from 'react';
import { Provider } from 'react-redux';

import Content from './components/Content';
import Slide from './components/Slide';

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className='row'>
          <Content />
          <Slide />
        </div>
      </div>
    </Provider>
  );
}

export default App;
