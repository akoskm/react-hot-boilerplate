import Main from './components/main';
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
  module.hot.accept('./components/main', () => {
    const MainRoot = require('./components/main').default;
    ReactDOM.render(
      <AppContainer>
        <MainRoot />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}