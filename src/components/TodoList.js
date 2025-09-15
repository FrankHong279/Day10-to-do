import {useReducer} from "react";
import {todoReducer} from "../reducers/TodoReducer";
import {TodoContext as TodoContext1} from "../contexts/TodoContext";
import {TodoGroup} from "./TodoGroup";
import {TodoGenerator} from "./TodoGenerator";
import {initState} from "../App";

export function TodoList() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <TodoContext1 value={{state, dispatch}}>
                <TodoGroup/>
                <TodoGenerator/>
            </TodoContext1>
        </div>
    );
}