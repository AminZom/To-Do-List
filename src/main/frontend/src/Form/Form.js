import React from 'react';

const form = ( props ) => {
  return (
    <div className = "Form">
        <h4>Enter the task name:</h4>
        <input type="text" id="taskName" placeholder="Ex. Laundry"/>
        <h4>Enter the description:</h4>
        <input type="text" id="description" placeholder="Ex. Do the laundry."/>
    </div>
  );
}

export default form;