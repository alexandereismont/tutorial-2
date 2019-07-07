import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

//hooks, use functions, add function to user components 
const App1 = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
       {name : 'Alex', age:29},
       {name : 'Tom',  age:28}
    ]
  });

  const [otherState, setOtherState] = useState({otherState: 'other state'});

  const switchNameHandler = () => {
    // NOPE this.state.persons[0].name = 'Alexander';
     setPersonsState(
       {
         persons: [
             {name : 'Alexander', age:29},
             {name : 'Tom',  age:28.5}
         ],
       //  otherState: personsState.otherState
       }
     );
   }

  return (
    <div className="App">
      <h1>I'm React</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={personsState[0].name} 
        age={personsState[0].age }
        click={this.switchNameHandler} >My hobbies is racing</Person>
      <Person name={personsState[1].name} age={personsState[1].age}/>
    </div>
  );
} 

//export default app1;

class App extends React.Component{
  state = {
    persons: [
      {name : 'Alex', age:29},
      {name : 'Tom',  age:28},
      {name : 'Tom1',  age:28}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
   // NOPE this.state.persons[0].name = 'Alexander';
    this.setState(
      {
        persons: [
            {name : newName, age:29},
            {name : 'Tom',  age:28.5},
            {name : 'Tom1',  age:28}
        ]
      }
    );
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); // [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  namechangeHandler = (event) => {
    this.setState(
      {
        persons: [
            {name : "Alexander", age:29},
            {name : event.target.value,  age:28.5}
        ]
      }
    );
  }

  tooglePersonsHandler = () => {
      this.setState(
        {
          showPersons: !this.state.showPersons
        }
      )
  }

  render(){
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    let persons = null;

    persons = this.personsMethod(persons);

    return (
      <div className="App">
        <h1>I'm React</h1>
        <button 
          style= {style}
         // onClick={() => this.switchNameHandler('Alexander')}>Switch Name
         onClick={this.tooglePersonsHandler}>Toggle
        </button>
        {persons}
      </div>
        
    );
  }

  personsMethod(persons) {
    if (this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
            click={this.deletePersonHandler.bind(this,index)}
            name={person.name} 
            age={person.age}
            />
        })}
      </div>);
    }
    return persons;
  }
}
   //     { this.state.showPersons === true ?
   // <div></div>
  // : null
  /*<Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Alexander!')}>
  My hobbies is racing
  </Person>
  <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.namechangeHandler} />
  <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
*/
 // }

export default App;
