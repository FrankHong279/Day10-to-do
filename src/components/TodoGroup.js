import {useContext} from "react";
import {TodoItem} from "./TodoItem";
import {AddTodo} from "./AddTodo";

import {TodoContext} from "../contexts/TodoContext";

export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)
    return <div>
        <AddTodo />
        {
            state.map((item, index) => {
                return <TodoItem todo={item} key={index}/>
            })
        }
    </div>
}