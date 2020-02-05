import React from 'react';

const TodoForm = ({addToDo} : any) => {
    let input : any;
    return (
        <form>
            <div className="form-row align-items-center">
                
                <div className="col-10">
                    <input type="text" className="form-control" id="todoInputHelp" 
                        placeholder="Enter to-do title" aria-describedby="titleHelp" 
                        ref={node => { input = node; } } 
                    />
                </div>

                <div className="col">
                    <button type="button" className="btn btn-block btn-primary" onClick={ () => { addToDo(input.value);} }>Add to list</button>
                </div>
                
            </div>
        </form>
    )
}

export default TodoForm;