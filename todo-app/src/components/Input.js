import React from 'react';


function GetInput(props){

    return(
      <div className="todoListMain">
        <h1>Task Manager</h1>
      <div className="header">

    <form className="form" onSubmit={props.clicked} >
    <input type="text" id="userInput" placeholder="Add task" autoComplete="off"/>
    <button type="submit" >Click</button>
    </form>
    <form className="form">
    <button className="cmplBtn" type="button" onClick={props.completed} >Completed</button>
    </form>

  </div>
  </div>
  );
}

export default GetInput
