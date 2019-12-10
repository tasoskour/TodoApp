import React, { Component } from "react";


class Tasks extends Component {
  constructor(props) {
     super(props);

     this.createTasks = this.createTasks.bind(this);

   }

delete(key) {
  console.log("Del")
    this.props.delete(key);
  }
createTasks(item) {
    return <li onClick={()=>this.delete(item.key)}
  key={item.key}>{item.text}</li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">


      <div className="container">
        {listItems}
    </div>


      </ul>
    );
  };
};
 
export default Tasks;
