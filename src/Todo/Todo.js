import "./Todo.css";
import { useState } from "react";
import TodoList from "../todo-list/todolist";
import TodoCreate from "../todo-create/todocreate";

const Todo = () => {
    const [getTodos, setTodos] = useState([]);

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo));
        console.log(getTodos);
    };

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo} />
            <TodoList data={getTodos} />
        </div>
    );
};

export default Todo;
