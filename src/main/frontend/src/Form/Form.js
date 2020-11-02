import React from 'react';

const form = ( props ) => {
  return (
    <form onSubmit={props.submitTask}>
        <label>
            Enter the task name:
            <input type="text" placeholder="Ex. Laundry" onChange={props.nameChanged}/>
        </label>
        <br></br>
        <label>
            Enter the description:
            <input type="text" placeholder="Ex. Do the laundry." onChange={props.descChanged}/>
        </label>
        <br></br>
        <button type="submit">Add Task</button>
    </form>
  );
}

export default form;