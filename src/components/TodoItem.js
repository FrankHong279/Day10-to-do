import {useContext} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useTodoService} from "../useTodoService";


export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext)
    const navigate = useNavigate()
    const {updateTodoItem,deleteTodoItem} = useTodoService();

    function makeAsDone() {
        updateTodoItem(props)
            .then(todo => dispatch({
                type: "TOGGLE_TODO",
                payload: todo
            }))
    }

    function deleteTodo() {
        deleteTodoItem(props)
            .then(() => {
                console.log("Deleted todo with id:", props.todo.id);
            })
        dispatch({
            type: "DELETE_TODO",
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