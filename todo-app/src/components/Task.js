import React from "react";


function createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
function Task(props) {


    var todoEntries = props.entries;
    var listItems = todoEntries.map(createTasks);
 
    return (

<ul className="theList">
    <div>
    {listItems}
</div>

      </ul>

    );
  
};
 
export default Task;
