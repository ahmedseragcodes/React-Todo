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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
