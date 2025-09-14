import {useContext} from "react";
import {TodoItem} from "./TodoItem";
import {AddTodo} from "./AddTodo";

import {TodoContext} from "../contexts/TodoContext";

export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)
    return <div className={"todo-group"}>
        <h1>Todo List</h1>
        {
            state.map((item, index) => {
                return <TodoItem todo={item} key={index}/>
            })
        }
        <AddTodo />
    </div>
}