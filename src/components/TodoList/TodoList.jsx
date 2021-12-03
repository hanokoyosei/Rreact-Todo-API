import React from 'react';
import { Link } from 'react-router-dom'

const TodoList = () => {
    return (
        <div>
            <Link to="/add">Add</Link>
            <h1>to do list</h1>
        </div>
    );
};

export default TodoList;