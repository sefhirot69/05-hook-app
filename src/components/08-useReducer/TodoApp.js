import React, {useReducer} from 'react';
import './style.css';
import todoReducer from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }
];

const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState);

    console.log(todos);

    return (
        <div>
            <h1>TodoApp ({todos.length}) </h1>
            <hr/>

            <div className={"row"}>
                <div className={"col-7"}>
                    <ul className={"list-group list-group-flush"}>
                        {
                            todos.map((todo, i) => (
                                <li
                                    className={"list-group-item"}
                                    key={todo.id}
                                >
                                    <p className={"text-center"}>{i + 1}. {todo.desc}</p>
                                    <button className={"btn btn-danger"}>Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className={"col-5"}>
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form>
                        <input
                            className={"form-control"}
                            type={"text"}
                            name={"description"}
                            placeholder={"Aprender"}
                            autoComplete={"off"}
                        />
                        <button
                            className={"btn btn-outline-primary mt-1 btn-block"}>
                            Agregar
                        </button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default TodoApp;