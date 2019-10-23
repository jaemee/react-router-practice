import React from 'react';

class TodoItems extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        };
    }

  render(){
      let todoItems = this.renderList();
    return (
      <div>
        {todoItems}
      </div>
    );
  }

  renderList = () => {
    return this.state.items.map(item => {
        return (
            <div>
                <input type="checkbox" value=""  />
                <span>{item.content}</span>
            </div>
        )
    })
  }
}

export default TodoItems;
