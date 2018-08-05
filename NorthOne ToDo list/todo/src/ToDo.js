import React, { Component } from 'react';
import AddNew         from './AddNew.js'
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

  displayToDos = () => {
    let singleToDo = myToDos.map( item => {
      let categoryClass = item.category
      return(
          <div className={categoryClass}>
            {item.description}, Status: {item.status}, Due: {item.dueDate}
          </div>
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
              <div className="color-legend">
                  <div className="color-swatch" id="purple-cat" />To buy
                  <div className="color-swatch" id="pink-cat" />Errands
                  <div className="color-swatch" id="green-cat" />Social
                  <div className="color-swatch" id="peach-cat" />Work 
                  <div className="color-swatch" id="blue-cat" />Other
              </div>
            </div>
          </div>
              <AddNew categories={this.categories} />
        </div>
      );
  }
}

export default ToDo;