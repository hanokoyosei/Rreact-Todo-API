import React, { useReducer } from 'react';

const TodoContext = () => {
    return (
        <div>
            
        </div>
    );
};

export const todoContext= React.createContext();
const INIT_STATE = {
   todos: []
}

const reducer = (state=INIT_STATE, action)=> {
    switch(action){

    }
}

const TodoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    return (
        <todoContext.Provider>
            {children}
        </todoContext.Provider>
    )
}

export default TodoContextProvider