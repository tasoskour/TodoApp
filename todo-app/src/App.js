import React from 'react'
import './App.css'
import Todo from'./components/Todo'
import todoData from './todoData'

class App extends React.Component {

constructor(){
  super()
  this.state={
  todo: todoData
             }
  this.handleChange=this.handleChange.bind(this)
             }


handleChange(id){
  this.setState(prevState=>{
      const updatedTodo=prevState.todo.map(todo=>{
        if(todo.id===id){
        todo.completed=   !todo.completed}
                                          return todo
                                                })
    return {
      todo: updatedTodo
           }
  })

}
render(){
  const todoItems= this.state.todo.map(item =>
    <Todo key={item.id} item={item} handleChange={this.handleChange}/>)
  return(
    <div>
  {todoItems}
  </div>
  )
}
}

export default App;
