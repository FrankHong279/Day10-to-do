import './App.css';
import {createBrowserRouter, RouterProvider, useParams} from "react-router";
import {ErrorPage} from "./pages/ErrorPage";
import {HomePage} from "./pages/HomePage";
import {TodoContext} from "./contexts/TodoContext";
import {useContext, useReducer} from "react";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoDetailPage} from "./pages/TodoDetailPage";
import {DefaultLayout} from "./layouts/DefaultLayout";
import {TodoItem} from "./components/TodoItem";

export const initState = [
    {id: "adf", text: "the first todo", done: false},
    {id: "sfd", text: "the second todo", done: true},
];

function DoneListPage() {
    const {state, dispatch} = useContext(TodoContext);
    const todo = state.filter((todo) => todo.done === true);
    return <div>
        {todo.map((item, index) => <TodoItem todo={item} key={item.id}/>)}
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
            },
            {
                path: "/doneList",
                element: <DoneListPage />
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