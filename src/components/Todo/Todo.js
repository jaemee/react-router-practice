import React from 'react';
import TodoItems from '../TodoItems/TodoItems';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            inputValue: "",
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
                        <button onClick={this.addList}>Add</button>
                    </div>
                    <div>
                        <TodoItems items={this.state.item}/>
                    </div>
                </header>
            </div>
        );
    }

    addList = () => {
        fetch("http://localhost:8080/api/todos", {mode: 'cors'}).then(res => res.json()).then(res => console.log(res))
        this.state.item.push({content: this.state.inputValue})
        this.setState({ item: this.state.item})
    }

    handleInputChange = (event) => { 
        this.setState({ inputValue: event.target.value }) 
    }
}

export default Todo;
