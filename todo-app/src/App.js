import React from 'react'
import './App.css'
import Todo from './components/Todo'
import todoData from './todoData'
import Input from './components/Input'
import Tasks from './components/Tasks'


class App extends React.Component {

constructor(){
  super()
  this.state={
valid:true,
  items:[],
  delItems:[],
  completed:false
             }

  this.clicked=this.clicked.bind(this)
  this.deleteItem = this.deleteItem.bind(this);
  this.done=this.done.bind(this);
}

clicked(e) {
  if (document.getElementById("userInput").value !== "") {
      var newItem = {
        text: document.getElementById("userInput").value,
        key: Date.now()
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
          valid:true};
      });
    }
    else{
      this.setState({valid:false})
    }
console.log(this.state.valid);
  e.preventDefault();
document.getElementById("userInput").value = "";
           }

deleteItem(key){
  var deletedItem=this.state.items.filter(item=>item.key===key);
  this.setState((prevState)=>{return{delItems:prevState.delItems.concat(deletedItem)}})
  var filteredItems = this.state.items.filter(function (item) {
     return (item.key !== key);
   });
   this.setState({
     items: filteredItems
   });
}

done(e){
  this.setState({
    completed: !this.state.completed
  });
  console.log(this.state.completed)
  e.preventDefault();
}
/*handleChange(id){
  this.setState(prevState=>{
      const updatedTodo=prevState.todo.map(todo=>{
        if(todo.id===id){
        todo.completed=   !todo.completed}
        return todo})
    return {
      todo: updatedTodo
           }
  })}
*/
render(){

/*  const todoItems= this.state.todo.map(item =>
    <Todo key={item.id} item={item} handleChange={this.handleChange}/>)
*/
  return(
    <div>
    <Input clicked={this.clicked} completed={this.done}/>
  <Tasks entries={this.state.items} delItems={this.state.delItems}
    delete={this.deleteItem} completed={this.state.completed}/>
  </div>
  )
}
  }

export default App;
