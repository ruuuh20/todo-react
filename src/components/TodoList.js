import React from 'react';
import TodoItems from './TodoItems'

class TodoList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    }


  }

  handleSubmit = (e) => {
    if (this.__inputElement.value !== "") {
      var newItem = {
        text: this.__inputElement.value,
        key: Date.now()
      }

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        }
      })
    }

    this.__inputElement.value = "";
    console.log(this.state.items)
    e.preventDefault();
  }

  deleteItem = (key) => {
    var filteredItems = this.state.items.filter(function(item) {
      return (item.key !== key)
    });

    this.setState({
      items: filteredItems
    })
  }


  render() {
    return (
      <div className="todolist-main">
        <div className="header">

          <form onSubmit={this.handleSubmit}>
            <input placeholder="task" ref={(a) => this.__inputElement = a}/>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} ondelete={this.deleteItem} />
      </div>
    )
  }
}

export default TodoList;
