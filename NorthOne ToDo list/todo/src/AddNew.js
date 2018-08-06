import React, {Component} from 'react';
import {Button} from '@material-ui/core'

export default class AddNew extends Component {

  constructor(props) {
    super(props)
    this.state = {
      description: "",
      status: "",
      dueDate: "",
      category: ""
    }
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewTask(this.state);
  }


  handleDescription = (e) => {
    this.setState({description: e.target.value})
  }

  handleCategory = (e) => {
    this.setState({category: e.target.value})
  }

  handleStatus = (e) => {
    this.setState({status: e.target.value})
  }

  handleDueDate = (e) => {
    this.setState({dueDate: e.target.value})
  }

 

  render() {
    return (
        <div className="container">
        <form action="./ToDo.js">
          Task:<br />
          <input
              className="input" 
              type="text" 
              name="description" 
              placeholder="Description" 
              value={this.state.description}
              onChange={this.handleDescription}
          >
          </input>
          <br/>
          <select 
          name="Category" 
          value={this.setCategory} 
          onChange={this.handleCategory}
          className="input"
          >
            <option value="Select one">Category</option>
            <option value="Purchase">Purchase</option>
            <option value="Errands">Errands</option>
            <option value="Social">Social</option>
            <option value="Work">Work</option>
            <option value="Other">Other</option>
          </select>
          <select 
          name="status" 
          value={this.state.status} 
          onChange={this.handleStatus}
          className="input"
          >
            <option value="Select one">Status</option>
            <option value="Doing">Doing</option>
            <option value="On hold">On hold</option>
            <option value="Done">Done</option>
          </select>
            <br />
            Due date: <input
              className="input" 
              type="date" 
              name="due-date" 
              value={this.state.dueDate} 
              onChange={this.handleDueDate} />
          <br /><br />
        <Button 
            variant="contained" 
            type="submit" 
            value="Add" 
            onClick={this.handleSubmit}
        >Add new Task
        </Button>
        <br /><br />
        </form>
      </div>
    )
  }

}