import React from "react";


class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            newItemName: "",
        }
    }
    handleFormChange=(event)=>{
        this.setState({
            newItemName: event.target.value,
        })
    }
    handleFormSubmit=(event)=>{
        event.preventDefault();
        //TASK: FINISH SUBMIT LOGIC
        // this.setState([...toDos, {
        //     name: this.state.newItemName,
        // }])
    }
    render(){
        return (
            <div>
                <form>
                    <label htmlFor="newItemName">Add An Item:
                        <input name="newItemName" placeholder="Enter A New Item" value={this.state.newItemName} onChange={this.handleFormChange}/>
                        <button>Add Item</button>
                    </label>
                </form>
            </div>
        )
    }
}