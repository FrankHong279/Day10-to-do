import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";


export function TodoGenerator() {
    const {createTodo}  = useTodoService();
    const [inputValue, setInputValue] = useState("");
    const {dispatch} = useContext(TodoContext);

    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue.trim()) {
            createTodo(inputValue)
                .then(todo =>
                    dispatch({ type: "ADD_TODO", payload: todo })
                );
            setInputValue("");
        }
    }

    return (
        <form className={"add-todo-box"} onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

