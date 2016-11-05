import Main from './components/Main';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
  <AppContainer>
    <Main />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/Main', () => {
    const MainRoot = require('./components/Main').default;
    ReactDOM.render(
      <AppContainer>
        <MainRoot />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}