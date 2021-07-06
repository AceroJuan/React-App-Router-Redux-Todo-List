import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add_todo">
          <NewTodo />
        </Route>
        <Route path="/">
          <TodoList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
