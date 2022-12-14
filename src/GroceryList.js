import { Component } from "react";
import icon from "./icon.png";

export class GroceryList extends Component {
    constructor(){
        super();
        this.state = {
            userInput: "",
            groceryList: [],
        }
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        let listArray = this.state.groceryList;
        if (this.state.userInput === "") { 
            alert('Please, enter an item') 
        }
        else {
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ""});
         console.log(listArray)
        }
    }

    deleteList() {
        this.setState({groceryList: []});
    }

    crossItem(li) {
        li.classList.toggle('crossedItem');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="inputField">
                    <input type="text"
                    placeholder="Enter an item"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                    <button className="addButton" onClick={() => this.addItem(this.state.userInput)}>Add</button>
                </div>
                <ul>
                    {this.state.groceryList.map((item,index) => (
                    <li key={index} onClick={(e) => this.crossItem(e.target)}><img src={icon} alt="icon" width="30px"/>{item}</li>)
                    )}
                </ul>
                <button className="deleteButton" onClick={() => this.deleteList()}>Delete</button>
            </form>
        )
    }
}