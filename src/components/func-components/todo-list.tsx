import React from 'react';
import ToDo from "./todo";

const ToDoList = ({todos, remove} : any) => {
    const todoNode = todos.map((todo: any , index : number) => {
        return (<ToDo key={todo.id} todo={todo} remove={remove} />)
    });
    return (<div>{todoNode}</div>)
}

export default ToDoList;