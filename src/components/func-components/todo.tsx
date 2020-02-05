import React from 'react';

const ToDo = ({todo , remove} : any) => {
    return (
        <div className="row pt-4" >
            <div className="col-10 border-bottom border-dark ">{todo.text}</div>
            <div className="col-2 text-right">
                <i className="fa fa-trash" onClick={() => { remove(todo.id) } }></i>
            </div>
        </div>
    )
}
export default ToDo;