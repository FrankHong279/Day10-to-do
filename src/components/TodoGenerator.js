import {useState, useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {api} from "../api/mockApi";

export function TodoGenerator() {
    const [inputValue, setInputValue] = useState("");
    const {dispatch} = useContext(TodoContext);

    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue.trim()) {
            api.post("/todos", {text: inputValue.trim(), done: false})
                .then(res => res.data)
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

