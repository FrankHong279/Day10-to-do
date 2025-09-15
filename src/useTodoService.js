import {api} from "./api/mockApi";

export function useTodoService() {
    const deleteTodoItem = (props) => {
        return api.delete("/todos/" + props.todo.id)
    }

    const updateTodoItem = (props) => {
        return api.put("/todos/" + props.todo.id, {
            text: props.todo.text,
            done: !props.todo.done
        }).then(res => res.data);
    }

    const createTodo = (inputText) => {
        return api.post("/todos", {text: inputText.trim(), done: false})
            .then(res => res.data)
    }

    const loadTodos = () => {
        return api.get("/todos")
            .then(response => response.data)
    }

    return {deleteTodoItem, updateTodoItem, createTodo, loadTodos};
}