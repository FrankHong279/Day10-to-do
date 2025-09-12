import {useContext} from "react";
import {TodoItem} from "./TodoItem";

import {TodoContext} from "../contexts/TodoContext";

export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)
    return <div>
        {
            state.map((item, index) => {
                return <TodoItem todo={item} key={index}/>
            })
        }
    </div>
}