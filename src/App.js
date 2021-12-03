import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTodo from './components/AddTodo/AddTodo';
import Home from './components/Home/Home';
import TodoList from './components/TodoList/TodoList';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/add" element={<AddTodo />}/>
         <Route path="/list" element={<TodoList />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
