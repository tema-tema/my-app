import React from 'react';
import './App.css';
import Person from './Person/Person';

function App = () => 
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  ReactDOM.render (
      <div className="App">
      <h1>Hi, React</h1>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      <button>SwitchName</button>
      </div>
    );
  // return React.createElement('div', null, 'h1', 'Hi');
};



export default App;
