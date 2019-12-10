import React from 'react';

function Todo(props){

const completedStyle={
  color:"gray",
  fontStyle:"italic",
  textDecoration: "line-through"
}


return(
<div>
<form >
    <input
      type="checkbox"
      checked={props.item.completed}
      onChange={()=>props.handleChange(props.item.id)}
    />
  <p className="text" style={props.item.completed ? completedStyle:null  }>
      {props.item.text}
  </p>
</form>
<hr/>
</div>
  )
}

export default Todo
