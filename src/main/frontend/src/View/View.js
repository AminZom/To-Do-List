import React from 'react';

const view = ( props ) => {
  // TODO: pass in the whole objects instead of just name maybe?
  var tasks = JSON.parse(props.tasks);
  return (
    <div className = "View">
        <h4>Current Tasks:</h4>
        <button onClick={props.refresh}>Refresh</button>
        
        <table style = {{marginLeft: "auto", marginRight: "auto"}}>
          <tbody>
              {tasks.map(task => <tr>{task}</tr>)}
          </tbody>
        </table>
        
    </div>
  );
}

export default view;