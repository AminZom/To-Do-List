import React from 'react';

const view = ( props ) => {
  return (
    <div className = "View">
        <h4>Current Tasks:</h4>
        <p>{props.tasks}</p>
        <button onClick={props.refresh}>Refresh</button>
    </div>
  );
}

export default view;