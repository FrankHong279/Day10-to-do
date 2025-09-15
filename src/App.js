import './App.css';
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";
import {ErrorPage} from "./components/ErrorPage";
import {HomePage} from "./components/HomePage";

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

const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
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