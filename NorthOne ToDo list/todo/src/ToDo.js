import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class ToDo extends Component

  let purpleCategory = {
    name: "Purple",
    colour: "#c38bff"
  }

  let pinkCategory = {
    name: "Pink",
    colour: "#ffb8b8"
  }

  let greenCategory = {
    name: "Green",
    colour: "#a6ffc7"
  }

  let peachCategory = {
    name: "Peach",
    colour: "#ffc39a"
  }

  let blueCategory = {
    name: "Blue",
    colour: "#6e9dff"
  }


  this.newToDo = (name, description, category, dueDate) => {

    constructor() {
      super(props)
      this.name = name,
      this.description = description,
      this.category = category,
      this.dueDate = dueDate
    }

  }

  render() {
      return (
        <div>
          <MATERIAL UI BUTTON onClick={newToDo} />
        </div>
      );
  }

export default ToDo;