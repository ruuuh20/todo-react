import React from 'react';
import FlipMove from 'react-flip-move';


class TodoItems extends React.Component {

  createTasks = (item) => {
    return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
  }

  delete = (key) => {
    this.props.ondelete(key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="list">
      <FlipMove duration={150} easing="ease-out">
        {listItems}
      </FlipMove>
      </ul>
    )
  }
}

export default TodoItems;
