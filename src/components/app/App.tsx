import React, { useState } from 'react';
import { Router } from 'react-router-dom';

import './App.css';
import TodoForm from '../func-components/todo-form';
import ToDoList from '../func-components/todo-list';

import Routes from '../../routes/index';
import history from '../../services/history';

const App = () => {

  const [todos , setToDos] = useState([] as any);

  const _addToDo = (text? : any) => {
    const _todo = { text : text , id : new Date().getTime() };
    setToDos([ _todo , ...todos ]);
  };

  const _removeToDo = (id : number) => {
    const todoIndex = todos.map((todo : any) => { return todo.id; }).indexOf(id);
    const _todos= [...todos]
    _todos.splice(todoIndex , 1);
    setToDos(_todos);
  }

  return (
    // <div className="container p-5">
    //   <div className="row mh-100">

    //     <div className="col">
    //       <TodoForm addToDo={_addToDo}/>
    //     </div>

    //     <div className="w-100"></div>

    //     <div className="col">
    //       { (todos && todos.length > 0) ?
    //       <ToDoList todos={todos} remove={_removeToDo} />
    //       :
    //       ''
    //       }
    //     </div>
      
    //   </div>
      
    // </div>
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
