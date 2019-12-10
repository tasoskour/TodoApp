import React from 'react';


function GetInput(props){

    return(
      <div className="todoListMain">
      <div className="header">
    <form className="form" onSubmit={props.clicked} >
    <input type="text" id="userInput" placeholder="Add task" autoComplete="off"/>
  <button type="submit" >Click</button>
    </form>
  </div>
  </div>
  );
}

export default GetInput
