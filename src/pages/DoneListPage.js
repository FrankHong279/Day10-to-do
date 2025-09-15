import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";

export function DoneListPage() {
    const {state, dispatch} = useContext(TodoContext);
    const todo = state.filter((todo) => todo.done === true);
    return <div>
        {todo.map((item, index) => <TodoItem todo={item} key={item.id}/>)}
    </div>
}