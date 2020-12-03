import React from 'react';

const view = ( props ) => {
  // TODO: pass in the whole objects instead of just name maybe?
  var tasks = JSON.parse(props.tasks);
  return (
    <div className = "View">
        <h4>Current Tasks:</h4>
        <button onClick={props.refresh}>Refresh</button>
        
        <table style = {{marginLeft: "auto", marginRight: "auto"}}>
          <thead>
            <tr>
              <th></th>
              <th>Task Name</th>
              <th>Description</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
              {tasks.map(task =>
                <tr>
                  <td>
                    <button onClick={() => props.deleteTask(task)}>X</button>
                  </td>
                  {task[2]
                    ? <td style={{textDecoration: "line-through"}}> {task[0]} </td>
                    : <td> {task[0]} </td>
                  }
                  {task[2]
                    ? <td style={{textDecoration: "line-through"}}> {task[1]} </td>
                    : <td> {task[1]} </td>
                  }
                  <td>
                  <input
                    name="completed"
                    type="checkbox"
                    checked={task[2]} 
                    onChange={() => props.taskCompleted(task)}/>
                  </td>
                </tr>)}
          </tbody>
        </table>
        
    </div>
  );
}

export default view;