import React from 'react';

const TodoListItem = ({todo, index, handleToggle, handleDelete}) => {

    return (
        <li
            className={"list-group-item"}
            key={todo.id}
        >
            <p
                onClick={() => handleToggle(todo.id)}
                className={`${todo.done && "complete"}`}>{index + 1}. {todo.desc}</p>
            <button
                className={"btn btn-danger"}
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    );
};

export default TodoListItem;