import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle, faTrashAlt);

class App extends Component {
  render(){
    return (
      <div>
        <h1>app</h1>
      </div>
    );
  }
}

export default App;
