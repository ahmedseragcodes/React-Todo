import React from 'react';
import ReactDOM from "react-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const toDos=[
  {
    task: "groceries",
    id: 1,
    completed: false,
  },
  {
    task: "cleaning",
    id: 2,
    completed: false,
  },
  {
    task: "laundry",
    id: 3,
    completed: false,
  },
  {
    task: "studying and working",
    id: 4,
    completed: false,
  },
]



class App extends React.Component {
  constructor(){
    super();
    this.state={
      toDos: toDos,
    }
  }
  toggleItem=(clickedItemId)=>{
    const newToDos=this.state.toDos.map(function(item){
      if (item.id===clickedItemId){
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    this.setState({
      toDos: newToDos,
    })
  }

  addItem=(item)=>{
    this.setState({
      toDos: [...this.state.toDos, item],
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>My To Do List</h2>
        <TodoForm addItem={this.addItem}/>
        <TodoList toDos={this.state.toDos} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
