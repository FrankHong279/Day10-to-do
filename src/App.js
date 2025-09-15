import './App.css';
import {TodoList} from "./components/TodoList";
import {createBrowserRouter} from "react-router";

export const initState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true},
];

createBrowserRouter([
    {
        path: "/",
        element: <TodoList/>,
    }
]);

function App() {
    return (
        <div>
            <TodoList/>
        </div>
    );
}

export default App;