import React from 'react';
import { Link } from 'react-router-dom'

const AddTodo = () => {
    return (
        <div>
            <Link to="/list">List</Link>
            <h1>add to do</h1>
            <input type="text" />
            <button>Add</button>
        </div>
    );
};

export default AddTodo;