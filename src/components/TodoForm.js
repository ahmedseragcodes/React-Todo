import React from "react";


class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            task: "",
            id: 999,
            completed: false,
        }
    }
    handleFormChange=(event)=>{
        this.setState({
            ...this.state,
            task: event.target.value
        })
    }
    handleFormSubmit=(event)=>{
        event.preventDefault();
        this.props.addItem(this.state);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="task">Add An Item:
                        <input name="task" placeholder="Enter A New Item" value={this.state.task} onChange={this.handleFormChange}/>
                        <button>Add Item</button>
                    </label>
                </form>
            </div>
        )
    }
}

export default TodoForm;