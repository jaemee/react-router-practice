import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroupPage from './components/CounterGroup/CounterGroup'
import Todos from './components/Todo/Todo'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counterGroup">Counter Group</Link>
        </li>
        <li>
          <Link to="/todoList">Todo List</Link>
        </li>
      </ul>

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/counterGroup">
          <CounterGroup />
        </Route>
        <Route path="/todoList">
          <TodoList />
        </Route>
      </Switch>
    </div>
  </Router>
);
}
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function CounterGroup() {
  return (
    <div>
      <h2>Counter Group</h2>
      <CounterGroupPage />
    </div>
  );
}

function TodoList() {
  return (
    <div>
      <h2>Todo List</h2>
      <Todos />
    </div>
  );
}

export default App;
