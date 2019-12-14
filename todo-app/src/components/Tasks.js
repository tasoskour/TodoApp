import React, { Component } from "react";
import FlipMove from "react-flip-move";

class Tasks extends Component {
  constructor(props) {
     super(props);
     this.createTasks = this.createTasks.bind(this);
   }

delete(key) {
    this.props.delete(key);
  }

createTasks(item) {
    return(
    <li onClick={()=>this.delete(item.key)} key={item.key}>
    {item.text}</li>)
}
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
if(this.props.completed){
    var delItems=this.props.delItems.map(this.createTasks)}
else {delItems=
  <li>
  </li>}
return (
  <div>
      <ul className="theList">
        <h5>Current Tasks</h5>
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>

      </ul>

      <ul className="delList">
        <h5>Completed Tasks</h5>
        <FlipMove duration={250} easing="ease-out">
        {delItems}
  </FlipMove>
      </ul>
      </div>
      );
    }
}
 
export default Tasks;
