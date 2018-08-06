import React, { Component } from 'react';
import AddNew         from './AddNew.js'
import myToDos        from './seed.js';


class ToDo extends Component {

  constructor(name, description, category, dueDate) {
    super()
    this.state = {
      toDos: myToDos
    }
  }

  categories = {
    "purpleCategory": {
          name: "To buy",
          colour: "#c38bff"
        },
    "pinkCategory": {
          name: "Errands",
          colour: "#ffb8b8"
        },
    "greenCategory": {
          name: "Social",
          colour: "#a6ffc7"
        },
    "peachCategory": {
          name: "Work",
          colour: "#ffc39a"
        },
    "blueCategory": {
          name: "Other",
          colour: "#6e9dff"
        }
  }

  addNewTask = (task) => {
    console.log("added a new task")
    this.state.toDos.push(task);
    this.setState({ todos: [...myToDos, task]})
    this.displayToDos();
  }

  displayToDos = () => {
    console.log("rendering todos!!!!!")
    let singleToDo = this.state.toDos.map( item => {
      let categoryClass = item.category
      return(
        <tr className={categoryClass}>
            <td>{item.description}</td>  
            <td>{item.status}</td>
            <td>{item.dueDate}</td>
        </tr>
        )
    })
    console.log("single todo", singleToDo)
    return singleToDo;
  }


  render() {

      return (
        <div>
          <span className="to-do-container">
          <table>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Due Date</th>
            </tr>
            <tbody>
              {this.displayToDos()}
            </tbody>
          </table>
            <div className="to-do-status">
              <ul>
              </ul>
            </div>
            <div className="pending-status">
              <ul>
              </ul>
            </div>
            <div className="color-legend">
              <span>
                <h4>Legend:</h4>
                  <div className="color-swatch" id="purple-cat" />To buy
                    <br />
                  <div className="color-swatch" id="pink-cat" />Errands
                    <br />
                  <div className="color-swatch" id="green-cat" />Social
                    <br />
                  <div className="color-swatch" id="peach-cat" />Work 
                    <br />
                  <div className="color-swatch" id="blue-cat" />Other
                    <br />
              </span>
            </div>
          </span>
            <AddNew categories={this.categories} addNewTask={this.addNewTask} />
        </div>
      );
  }
}

export default ToDo;