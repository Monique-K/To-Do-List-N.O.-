import React, { Component } from 'react';
import ToDo           from './ToDo.js'
import WithStyles     from './NavBar.js'
import './styles/App.css';



class App extends Component {


  render() {
    return (
      <div className="App">
        <WithStyles id="navbar" />
          <main>
            <ToDo />
          </main>
      </div>
    );
  }
}

export default App;
