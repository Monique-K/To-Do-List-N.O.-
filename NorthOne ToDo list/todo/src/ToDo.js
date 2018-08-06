import React, { Component } from 'react';
import AddNew         from './AddNew.js'
import myToDos        from './seed.js';
import {Button}       from '@material-ui/core'



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
    this.state.toDos.push(task);
    this.setState({ todos: [...myToDos, task]})
    //Add id ----------------------------------------------------------
    this.displayToDos();
  }

  displayToDos = () => {
    let singleToDo = this.state.toDos.map( item => {
      let categoryClass = item.category
      return(
        <tr className={categoryClass}>
            <td>{item.title}</td>
            <td>{item.description}</td>  
            <td><b>{item.status}</b></td>
            <td>{item.dueDate}</td>
            <Button 
              className="table-button"
              variant="contained" 
              type="submit" 
              value="Edit" 
              task={item}
              onClick={this.handleEdit}
              >Edit
            </Button> 
          <Button 
            className="table-button"
            variant="contained" 
            type="submit" 
            value="Delete" 
            onClick={() => this.handleSubmit(item)}
          >Delete
          </Button>
        </tr> 
        )
    })
    return singleToDo;
  }

  handleSubmit = (item) => {
    let i = this.state.toDos.indexOf(item);
    this.state.toDos.splice(i, 1);
    this.setState({
      toDos: this.state.toDos
    })
    
   
  }


  render() {

      return (
        <div>
          <span className="to-do-container">
          <table>
            <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Status</th>
              <th>Due Date</th>
            </tr>
            </thead>
            <tbody>
              {this.displayToDos()}
            </tbody>
          </table>
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