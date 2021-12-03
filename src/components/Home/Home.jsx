import React from 'react';
import { Link } from 'react-router-dom'
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList';
const Home = () => {
    return (
        <div>
            <Link to="/add">Add</Link>
            <br />
            <Link to="/list">List</Link>
            <h1>Home page</h1>

            <AddTodo />
            <TodoList />
        </div>
    );
};

export default Home;