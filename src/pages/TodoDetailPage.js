import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";

export function TodoDetailPage() {
    const {id} = useParams();
    const {state, dispatch} = useContext(TodoContext);
    const todo = state.filter((todo => todo.id === parseInt(id)));
    if (todo.length === 0) {
        return <div>Not Found Todo</div>
    }

    return <div>
        <TodoItem todo={todo[0]} index={id}/>
    </div>
}