import './App.css';
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useParams} from "react-router";
import {ErrorPage} from "./components/ErrorPage";
import {HomePage} from "./components/HomePage";
import {TodoContext} from "./contexts/TodoContext";
import {useContext, useReducer} from "react";
import {TodoItem} from "./components/TodoItem";
import {todoReducer} from "./reducers/TodoReducer";

export const initState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true},
];

function DefaultLayout() {
    return <div>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/todos/1"}>ID 1</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
}

function TodoDetailPage() {
        const {id} = useParams();
        const {state, dispatch} = useContext(TodoContext);
        const todo = state.filter((todo => todo.id === parseInt(id)));
        if(todo.length === 0){
            return <div>Not Found Todo</div>
        }

        return <div>
            {JSON.stringify(todo)}
            <TodoItem todo={todo[0]} index={id}/>
        </div>
}

const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/todos/:id",
                element: <TodoDetailPage />
            }
        ]
    }
]);

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState)
    return (
        <div>
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes}/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;