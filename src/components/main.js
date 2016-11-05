import React from 'react';
import Header from './header';

class Main extends React.Component {

  render() {
    return <div>
      <Header />
      <p>
        Change some of the files in src/components and watch the
        components self-reload without causing a full page reload.
      </p>
    </div>
  }
}

export default Main;
