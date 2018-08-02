import React, { Component } from 'react';
import PropTypes      from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import myToDos        from './seed.js';
import {  Button,
          TextField,
          Dialog,
          DialogActions,
          DialogContent,
          DialogContentText,
          DialogTitle } from '@material-ui/core'

class ToDo extends Component {

  constructor(name, description, category, dueDate) {
    super()
    this.name = name,
    this.description = description,
    this.category = category,
    this.dueDate = dueDate
  }

  purpleCategory = {
    name: "Purple",
    colour: "#c38bff"
  }

  pinkCategory = {
    name: "Pink",
    colour: "#ffb8b8"
  }

  greenCategory = {
    name: "Green",
    colour: "#a6ffc7"
  }

  peachCategory = {
    name: "Peach",
    colour: "#ffc39a"
  }

  blueCategory = {
    name: "Blue",
    colour: "#6e9dff"
  }

  addNewToDo = () => {
    console.log("add a new one!")
  }

  displayToDos = () => {
    let singleToDo = myToDos.map( item => {
      return(
          <li>
            {item.description}, Status: {item.status}, Due: {item.dueDate}
          </li>
        )
    })
    return singleToDo;
  }


  render() {

      return (
        <div>
          <div className="to-do-container">
          {this.displayToDos()}
            <div className="to-do-status">
              <ul>
              </ul>
            </div>
            <div className="pending-status">
              <ul>
              </ul>
            </div>
            <div className="done-status">
              <ul>
              </ul>
            </div>
          </div>
          <Button variant="contained" onClick={this.addNewToDo}>New To-Do</Button>

        </div>
      );
  }
}

export default ToDo;