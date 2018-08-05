import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import myToDos        from './seed.js';
import PropTypes from 'prop-types';
import {  Button,
          TextField,
          Dialog,
          DialogActions,
          DialogContent,
          DialogContentText,
          DialogTitle } from '@material-ui/core'

export default class AddNew extends Component {

  constructor(props) {
    super(props)
  }


  addNewToDo = () => {
    console.log("add a new one!")
  }

  styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

  // displayCategories = () => {
  //   for (let category in this.props.categories) {
  //     return (
  //           <MenuItem key={category.name} value={category.name} />
  //         )
  //     }
  //   }

render() {
  return (
      <div className="container">
      <form action="./ToDo.js">
        Task:<br />
        <input type="text" name="description" placeholder="Description"></input>
        <br/>
        <select name="Category">
          <option value="Select one">Select one</option>
          <option value="Shopping">To buy</option>
          <option value="Errands">Errands</option>
          <option value="Social">Social</option>
          <option value="Work">Work</option>
          <option value="Other">Other</option>
        </select>
          <br />
          Due date: <input type="date" name="due-date" />
        <br /><br />
      <Button variant="contained" type="submit" value="Add">Add new Task</Button>
      <br /><br />
      </form>
    </div>
    )
}


}