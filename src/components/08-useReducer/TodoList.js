import React from 'react';
import TodoListItem from "./TodoListItem";

const TodoList = ({todos, handleToggle, handleDelete}) => {


    return (
        <ul className={"list-group list-group-flush"}>
            {
                todos.map((todo, i) => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        index={i}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                ))
            }
        </ul>
    );
};

export default TodoList;