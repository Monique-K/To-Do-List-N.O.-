import React, { Component } from 'react';
import './styles/App.css';
import ToDo           from './ToDo.js'
import WithStyles     from './NavBar.js'



class App extends Component {


  render() {
    return (
      <div className="App">
        <WithStyles />
          <main>
            <ToDo />
          </main>
      </div>
    );
  }
}

export default App;
