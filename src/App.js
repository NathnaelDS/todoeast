import React from "react";
import { render } from "react-dom";

import todosData from "./todosData";
import TodoItem from "./TodoItem";

const Header = {
  fontFamily: "Lobster",
  color: "#2F3061",
  paddingLeft: "2rem"
};

const Container = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap"
};
const TaskContainer = {
  width: "90vw",
  maxWidth: "450px",
  padding: "1rem",
  margin: "0 1rem 1rem",
  borderLeft: "1rem solid #56A3A6",
  backgroundColor: "#D4EAC8"
};
const Completed = {
  textDecoration: "line-through",
  fontStyle: "italic",
  color: "#777"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todosData,
      newTask: null,
      numberOfTasks: 5
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNewTask = this.handleNewTask.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  handleNewTask() {
    this.setState(
      state => ({ numberOfTasks: state.numberOfTasks + 1 }),
      () => {
        let newTask = {
          id: this.state.numberOfTasks,
          text: this.state.newTask,
          completed: false
        };
        let updatedTodos = [...this.state.todos, newTask];
        console.log(updatedTodos);

        this.setState({ todos: updatedTodos });
      }
    );
  }
  handleRemoveTask(id) {
    this.setState(state => {
      const updatedTodos = state.todos.filter(todo => {
        if (todo.id !== id) {
          return todo;
        }
      });
      console.log(`updated todos: `, updatedTodos);

      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="newTask"
          value={this.state.newTask}
          onChange={e => this.setState({ newTask: e.target.value })}
          id=""
        />
        <input type="button" value="ADD" onClick={this.handleNewTask} />
        <div style={Container}>
          <div style={TaskContainer}>
            <h1 style={Header}>Tasks</h1>
            {this.state.todos.map(todo =>
              !todo.completed ? (
                <TodoItem
                  key={todo.id}
                  item={todo}
                  handleChange={this.handleChange}
                  removeTask={this.handleRemoveTask}
                />
              ) : null
            )}
          </div>
          <div style={TaskContainer}>
            <h1 style={Header}>Completed</h1>
            <span style={Completed}>
              {this.state.todos.map(todo =>
                todo.completed ? (
                  <TodoItem
                    key={todo.id}
                    item={todo}
                    handleChange={this.handleChange}
                    removeTask={this.handleRemoveTask}
                  />
                ) : null
              )}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
