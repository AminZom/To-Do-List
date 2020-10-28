import './App.css';
import React, { Component } from 'react';
import Form from './Form/Form';
import View from './View/View';
import TaskDataService from './service/TaskDataService';

class App extends Component {
  state = {
    tasks: []
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
                  if (response.data[0] !== undefined)
                  {
                    let allTasks = []
                    for(let taskNum in response.data)
                    {
                      allTasks.push(response.data[taskNum].taskName);
                    }
                    this.setState({ tasks: allTasks })
                  }
                    
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
        <Form changed={this.inputChangedHandler}/>
        <View refresh={this.refreshTasks} tasks={this.state.tasks.join(", ")}/>
      </div>
    );
  }
}

export default App;
