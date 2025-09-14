import {useState, useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";

export function AddTodo() {
    const [inputValue, setInputValue] = useState("");
    const {dispatch} = useContext(TodoContext);

    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue.trim()) {
            dispatch({
                type: "ADD_TODO",
                payload: {text: inputValue}
            });
            setInputValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

