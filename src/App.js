import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router";
import {ErrorPage} from "./pages/ErrorPage";
import {HomePage} from "./pages/HomePage";
import {TodoContext} from "./contexts/TodoContext";
import {useEffect, useReducer} from "react";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoDetailPage} from "./pages/TodoDetailPage";
import {DefaultLayout} from "./layouts/DefaultLayout";
import {DoneListPage} from "./pages/DoneListPage";
import axios from "axios";



function AboutUs() {
    return <div>Frank Hong</div>;
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
            },
            {
                path: "/aboutUs",
                element: <AboutUs />
            }
        ]
    }
]);

const api = axios.create({
    baseURL: "https://68c7ac8c5d8d9f514732871a.mockapi.io/",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10_000
})

const loadTodos = () => {
    return api.get("/todos")
        .then(response => response.data)
}

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    useEffect(() => {
        loadTodos()
            .then(todos => dispatch({ type: "LOAD_TODOS", payload: todos }))
    }, [dispatch]);
    return (
        <div>
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes}/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;