import './App.css';
import React, { Component } from 'react';
import Form from './Form/Form';
import View from './View/View';
import TaskDataService from './service/TaskDataService';

class App extends Component {
  state = {
    tasks: [],
    newTaskName: "",
    newTaskDescription: ""
  }

  constructor(props) {
      super(props)
      this.refreshTasks = this.refreshTasks.bind(this)
  }

  componentDidMount() {
    this.refreshTasks();
  }

  refreshTasks() {
      TaskDataService.retrieveAllTasks()
          .then(
              response => {
                  let allTasks = [];
                  if (response.data[0] !== undefined)
                  {
                    for(let taskNum in response.data)
                    {
                      allTasks.push(response.data[taskNum].taskName);
                    }
                  }
                  this.setState({ tasks: allTasks });
              }
          )
  }

  taskNameChangeHandler = (event) => {
    this.setState({ newTaskName: event.target.value });
  }

  taskDescChangeHandler = (event) => {
    this.setState({ newTaskDescription: event.target.value });
  }

  addTask = (event) => {
    event.preventDefault()
    TaskDataService.addNewTask(this.state.newTaskName, this.state.newTaskDescription)
          .then(
              response => {
                  //console.log(response)
              }
          )
  }

  inputChangedHandler = (event) => {
    this.setState({
      tasks: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <Form submitTask = {this.addTask} nameChanged={this.taskNameChangeHandler} descChanged={this.taskDescChangeHandler}/>
        <View refresh={this.refreshTasks} tasks={JSON.stringify(this.state.tasks)}/>
      </div>
    );
  }
}

export default App;
