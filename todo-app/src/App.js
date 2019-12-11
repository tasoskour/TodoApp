import React from 'react'
import './App.css'
import Todo from './components/Todo'
import todoData from './todoData'
import Input from './components/Input'
import Tasks from './components/Tasks'
import Task from './components/Task'

class App extends React.Component {

constructor(){
  super()
  this.state={

  todo: todoData,
  items:[]
             }
  this.handleChange=this.handleChange.bind(this)
  this.clicked=this.clicked.bind(this)
  this.deleteItem = this.deleteItem.bind(this);
}

clicked(e) {

  if (document.getElementById("userInput").value !== "") {

      var newItem = {
        text: document.getElementById("userInput").value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }
  console.log(this.state.key);
document.getElementById("userInput").value = "";
    e.preventDefault();
           }

deleteItem(key){
  var filteredItems = this.state.items.filter(function (item) {
     return (item.key !== key);
   });

   this.setState({
     items: filteredItems
   });
}
handleChange(id){
  this.setState(prevState=>{
      const updatedTodo=prevState.todo.map(todo=>{
        if(todo.id===id){
        todo.completed=   !todo.completed}
        return todo})
    return {
      todo: updatedTodo
           }
  })}

render(){

  const todoItems= this.state.todo.map(item =>
    <Todo key={item.id} item={item} handleChange={this.handleChange}/>)

  return(
    <div>
      <Input clicked={this.clicked}/>

    <Tasks entries={this.state.items}
    delete={this.deleteItem}/>
    <Task entries={this.state.items}
    />
  </div>
  )
}
  }

export default App;
