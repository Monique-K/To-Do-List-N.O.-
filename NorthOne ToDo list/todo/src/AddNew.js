import React, {Component} from 'react';
import {Button} from '@material-ui/core'

export default class AddNew extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: "",
      title: "",
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

  generateRandomID =() => {
    let randomArray = [];
    let randomID;
    let choices ="qwertyuioplkjhgfdsazxcvbnm1234567890";
    for (let i = 0; i < 6; i ++) {
      let randomchoice = Math.floor(Math.random() * 37);
      randomArray.push(choices[randomchoice]);
      randomID = randomArray.join("");
    }
    console.log(randomID)
    return randomID;
  };

  // editTask = () => {
  //   if (this.props.editing !== "") {
  //     let task = this.props.editing;
  //     }
  //   }


  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({id: this.generateRandomID()})
    await this.props.addNewTask(this.state);
    await this.setState({
      id: "",
      title: "",
      description: "",
      status: "",
      dueDate: "",
      category: ""
    })
  }

  handleTitle = (e) => {
    this.setState({title: e.target.value})
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

    // this.editTask();

    return (
        <div className="container">
        <form action="./ToDo.js" id="new-task-form">
          Task:<br />
          <input
              className="input"
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleTitle}
          >
          </input>
          <input
              className="input"
              id="description-field"
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
              id="categor-field"
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
              id="status-field"
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
                id="due-date-field"
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