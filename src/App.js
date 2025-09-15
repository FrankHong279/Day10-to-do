import './App.css';
import {TodoList} from "./components/TodoList";

export const initState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true},
];

function App() {
    return (
        <div>
            <TodoList/>
        </div>
    );
}

export default App;