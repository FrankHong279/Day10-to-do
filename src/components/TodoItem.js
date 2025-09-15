import {useContext} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {api} from "../api/mockApi";

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext)
    const navigate = useNavigate()

    function makeAsDone() {
        api.put("/todos/" + props.todo.id, {done: !props.todo.done})
            .then(() => {
                console.log("Toggled todo with id:", props.todo.id);
            })
        dispatch({
            type: "TOGGLE_TODO",
            payload: {id: props.todo.id}
        })
    }

    function deleteTodo() {
        api.delete("/todos/" + props.todo.id)
            .then(() => {
                console.log("Deleted todo with id:", props.todo.id);
            })
        dispatch({ type: "DELETE_TODO",
            payload: {id: props.todo.id}
        })
    }

    function toDetailPage() {
        navigate("todos/" + props.todo.id)
    }

    return <div className={"todo-box"}>
        <div className={"todo-item"}>
            <span
                className={props.todo.done ? "todo-done" : ""}
                onClick={makeAsDone}
            >
                {props.todo.text}
            </span>
        </div>
        <button onClick={deleteTodo} className="todo-button">X</button>
        <button onClick={toDetailPage} className="todo-button">Detail</button>
    </div>
}