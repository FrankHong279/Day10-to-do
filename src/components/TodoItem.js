import {useContext, useState} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useTodoService} from "../useTodoService";
import { Button, Modal } from 'antd';


export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext)
    const navigate = useNavigate()
    const {updateTodoItem,deleteTodoItem} = useTodoService();

    function makeAsDone() {
        props.todo.done = !props.todo.done;
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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        props.todo.text = inputValue;
        updateTodoItem(props)
            .then(todo => dispatch({
                type: "TOGGLE_TODO",
                payload: todo
            }))
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


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
        <Button className={"edit-button"} type="primary" onClick={showModal}>
            Edit
        </Button>
        <Modal
            title="Edit Todo"
            closable={{'aria-label': 'Custom Close Button'}}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            text：
            <input
                className={"edit-input"}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </Modal>
    </div>

}