import './App.css';
import {TodoList} from "./components/TodoList";
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useRouteError} from "react-router";

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
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
}

function ErrorPage() {
    const error = useRouteError();
    return <div>
        {error.status === 404
            ? <div className={"not-found"}><h1>404 Not Found</h1><span>Try</span></div>
            : <div>{JSON.stringify(error)}</div>
        }
    </div>;
}

const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <TodoList/>
            }
        ]
    }
]);

function App() {
    return (
        <div>
            <RouterProvider router={routes}/>
        </div>
    );
}

export default App;