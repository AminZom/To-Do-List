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
            </tr>
          </thead>
          <tbody>
              {tasks.map(task =>
                <tr>
                  <td>
                    <button onClick={() => props.deleteTask(task)}>X</button>
                  </td>
                  <td>
                    {task[0]}
                  </td>
                  <td>
                    {task[1]}
                  </td>
                </tr>)}
          </tbody>
        </table>
        
    </div>
  );
}

export default view;